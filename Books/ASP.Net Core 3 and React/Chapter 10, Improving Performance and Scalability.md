## Reducing database round trips

Database round trips are expensive. The greater the distance between the web API and the database, the more expensive the round trip is. So, we want to keep the trips from the web API to the database to a minimum in order to gain maximum performance.

## N+1 Problem

The N+1 problem is a classic query problem where there is a parent-child data model relationship that results in separate database queries for each child record, as well as the query for the parent record.

## Using Dapper multi-mapping to resolve the N+1 problem

Dapper's multi-mapping feature can be used to resolve the N+1 problem and generally achieve better performance. We do need to be careful with this approach, though, as we are requesting a lot of data from the database because of the duplicate parent records. Processing large amounts of data in the web server can be inefficient and lead to garbage collection issues.

## Using Dapper multi results

Multi-mapping and multi results are two features in Dapper that we can use to reduce database round trips. However, as we mentioned in the multi-mapping example, processing large amounts of data can be problematic.

## Paging data

Paging helps with performance and scalability in the following ways:

- The number of the page read I/Os is reduced when SQL Server grabs the data.
- The amount of data that's transferred from the database server to the web server is reduced.
- The amount of memory that's used to store the data on the web server in our model is reduced.
- The amount of data that's transferred from the web server to the client is reduced.

## Making API Controllers Asynchronous

For synchronous API code, when a request is made to the API, a thread from the thread pool will handle the request. If the code makes an I/O call (such as a database call) synchronously, the thread will block until the I/O call has finished. The blocked thread can't be used for any other work—it simply does nothing and waits for the I/O task to finish. If other requests are made to our API while the other thread is blocked, different threads in the thread pool will be used for the other requests. 

There is some overhead in using a thread—a thread consumes memory and it takes time to spin a new thread up. So, really, we want our API to use as few threads as possible.

If the API was to work in an asynchronous manner, when a request is made to our API, a thread from the thread pool handles the request (as in the synchronous case). If the code makes an asynchronous I/O call, the thread will be returned to the thread pool at the start of the I/O call and can be used for other requests.

So, if we make our API asynchronous, it will be able to handle requests more efficiently and increase scalability. It is important to note that making an API asynchronous won't make it more performant because a single request will take roughly the same amount of time. The improvement we are about to make is so that our API can use the server's resources more efficiently.

> *When making code asynchronous, all the I/O calls in the calling stack must be asynchronous. If any I/O call is synchronous, then the thread will be blocked rather than returning to the thread pool and so threads won't be managed efficiently.*

## Caching data

Another consideration for whether to use a cache is if the data changes very frequently. In this case, the caching process can actually negatively impact performance because lots of the requests will result in database calls anyway and we have all of the overhead of managing the cache.

However, if the data behind an endpoint changes infrequently and we have control over these changes, then caching is a great way to positively impact performance.

What if the REST API is distributed across several servers? Well, because the memory cache is local to each web server, this could result in database calls where the data is cached on a different server. A solution to this is to implement a distributed cache with `IDistributedCache` in ASP.NET Core, which would have a very similar implementation to our memory cache. The complexity is that this needs to connect to a third-party cache such as **Redis**, which adds financial costs and complexity to the solution. For high-traffic REST APIs, a distributed cache is well worth considering, though.

## Reducing garbage collection

Each time we create a new object in .NET, it allocates memory for the object from what is called the managed heap. Eventually, a process called garbage collection kicks in, which is responsible for freeing memory. When the garbage collector performs a collection, it checks for objects in the managed heap that are no longer being used by the app and performs the necessary operations to reclaim their memory.

Memory allocation is very cheap but unfortunately, collecting the memory isn't. Allocating objects over 85 KB in size in a single allocation will result in the object ending up on the large object heap, which is expensive to collect.

So, creating large objects in our .NET code can hurt performance and an area where we can fall into this trap in REST APIs is when dealing with large requests.

## Quiz

> [!info] We have the following code in a data repository that uses Dapper's multi recordset feature to return a single order with many related detail lines in a single database call
> 
> ```cs
> using (var connection = new SqlConnection(_connectionString)) {
> 	connection.Open()
> 
> 	using (GridReader results = connection.QueryMultiple(
> 		@"EXEC dbo.Order_GetHeader @OrderId = @OrderId;
> 		EXEC dbo.OrderDetails_Get_ByOrderId @OrderId = @OrderId",
> 		new { OrderId = orderId })) 
> 	{
> 		// TODO: Read the order and details from the query result
> 		return order;
> 	}
> }
> ```
> 
>> [!faq]- What are the missing statements that will read the order and its details from the results putting the details in the order model? The order model is of the `OrderGetSingleResponse` type, which contains a `Details` property of the `IEnumerable<OrderDetailGetResponse>` type.
>> 
>> ```cs
>> // TODO ...
>> var order = results.Read\<OrderGetSingleResponse>().FirstOrDefault();
>> if (order != null) {
>> 	order.Details = results.Read\<OrderDetaulsGetResponse>().ToList();
>> }
>> ```

> [!faq]- What is the downside of using Dapper's multi-mapping feature when reading data from many-to-one related tables in a single database call?
> 
> The trade-off is that more data is transferred between the database and web server and then processed on the web server, which can hurt performance.

> [!faq]- How does data paging help performance?
> 
> - The number of the page read I/Os is reduced when SQL Server grans the data.
> - The amount of data transferred from the database server to the web server is reduced.
> - The amount of memory used to store the data on the web server in our model is reduced.
> - The amount of data transferred from the web server to the client is reduced.

> [!faq]- Does making code asynchronous make it faster?
> 
> No, it makes it more scalable by using the thread pool more efficiently.

> [!faq]- What is the problem with the following asynchronous method:
> 
> ```cs
> public async AnswerGetResponse GetAnswer(int answerId) {
> 	using (var connection = new SqlConnection(_connectionString)) {
> 		connection.Open();
> 		return await connection
> 			.QueryFirstOrDefaultAsync\<AnswerGetResponse>(
> 			"EXEC dbo.Answer_Get_ByAnswerId @AnswerId = @AnswerId",
> 			new { AnswerId = answerId });
> 	}
> }
> ```
> 
> Opening the connection is synchronous, which will mean the thread is blocked and not returned to the thread pool until the connection is opened. So, the whole code will have the same thread pool inefficiency as synchronous code but will have the overhead of asynchronous code as well.
> 
> `await connection.OpenAsync()`

> [!faq]- Why it is a good idea to set a size limit on memory cache?
> 
> This is to prevent the cache from taking up too much memory on the web server.

> [!faq]- In our `QuestionCache` implementation, when adding a question to the cache, how can we invalidate that item in the cache after 30 minutes?
> 
> ```cs
> public void Set(QuestionGetSingleResponse question) {
> 	var cacheEntryOptions =
> 		new MemoryCacheEntryOptions()
> 		.SetSize(1)
> 		.SetSlidingExpiration(TimeSpan.FromMinutes(30));
> 	_cache.Set(GetCacheKey(question.QuestionId), question, cacheEntryOptions);
> }
> ```

> [!faq]- When we registered our `QuestionCache` class for dependency injection, why did we use the `AddSingleton` method and not the `AddScoped` method like in the following?
> 
> `services.AddScoped<QuestionCache>()`
> 
> `AddScoped` would create a new instance of the cache for every request, which means the cache would be lost after each request. Using `AddSingleton` means that the cache lasts for the lifetime of the app.
