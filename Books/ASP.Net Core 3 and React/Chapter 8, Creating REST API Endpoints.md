> ***Dependency injection** is the process of injecting an instance of a class into another object. The goal of dependency injection is to decouple a class from its dependencies so that the dependencies can be changed without changing the class. ASP.NET Core has its own dependency injection facility that allows class dependencies to be defined when the app starts up. These dependencies are then available to be injected into other class constructors.*

> *The `AddScoped` method means that only one instance of the `DataRepository` class is created in a given HTTP request. This means the lifetime of the class that is created lasts for the whole HTTP request.*

>*As well as `AddScoped`, there are other methods for registering dependencies that result in different lifetimes for the generated class. `AddTransient` will generate a new instance of the class each time it is requested. `AddSingleton` will generate only one class instance for the lifetime of the whole app.*

>*Model binding is a process in ASP.NET Core that maps data from HTTP requests to action method parameters. Data from query parameters is automatically mapped to action method parameters that have the same name. We'll see later in this section that model binding can also map data from the HTTP request body. So, a `[FromQuery]`attribute could be placed in front of the action method parameter to instruct ASP.NET Core to map only from the query parameter.*

## Validation Attributes

- `[Range]`: Checks that the property value falls within the given range.
- `[RegularExpression]`: Checks that the data matches the specified regular expression.
- `[Compare]`: Checks that two properties in a model match.
- `[CreditCard]`: Checks that the property has a credit card format.
- `[EmailAddress]`: Checks that the property has an email format.
- `[Phone]`: Checks that the property has a telephone format.
- `[Url]`: Checks that the property has a URL format.

## Removing unnecessary request fields

For large models, it may be beneficial to use a mapping library such as AutoMapper to help us copy data from one object to another. More information on AutoMapper can be found at [AutoMapper](https://automapper.org/).

## Quiz

> [!faq]- We have a class that we want to register for dependency injection and want a new instance of it to be created when injected into a class. What method in `IServiceCollection` should we use to register the dependency?
> 
> `AddTransient`

> [!faq]- In a controller action method, if a resource can't be found, what method can we use in `ControllerBase` to return status code 404?
> 
> `NotFound()`

> [!info] In a controller action method to post a new building, we implement some validation that requires a database call to check whether the building already exists. If the building does already exist, we want to return HTTP status code 400:
> 
> ```cs
> [HttpPost]
> public ActionResult\<BuildingResponse> PostBuilding(BuildingPostRequest buildingPostRequest) {
> 	var buildingExists = _dataRepository.BuildingExists(buildingPostRequest.Code);
> 	if (buildingExists) {}
> }
> ```
> 
>> [!faq]- What method from `ControllerBase` can we use to return status code 400?
>> 
>> `BadRequest()`

> [!info] The model for the preceding action method is as follows:
> 
> ```cs
> public class BuildingPostRequest {
> 	public string Code { get; set; }
> 	public string Name { get; set; }
> 	public string Description { get; set; }
> }
> ```
> 
> We send an HTTP POST request to the resource with the following body
> 
> ```json
> {
> 	"code": "BTOW",
> 	"name": "Blackpool Tower",
> 	"buildingDescription": "Blackpool Tower is a tourist attraction in Blackpool"
> }
> ```
> 
>> [!faq]- The `Description` property in the model isn't getting populated during the request. What is the problem?
>> 
>> The `buildingDescription` in the request doesn't match the name of the `Description` property in the model. If the request is changed to have a `description` field, then this will resolve the problem.

> [!faq]- In the preceding request model, we want to validate that the `code` and `name` fields are populated. How can we do this with validation attributes?
> 
> ```cs
> public class BuildingPostRequest {
> 	[Required]
> 	public string Code { get; set; }
> 
> 	[Required]
> 	public string Name { get; set; }
> 	public string Description { get; set; }
> }
> ```

> [!faq]- What validation attribute could we use to validate that a number property is between 1 and 10?
> 
> `[Range(0, 10)]`

> [!faq]- What `Http` attribute could we use tell ASP.NET Core that an action method handles HTTP PATCH request?
> 
> `HttpPatch`
