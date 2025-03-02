## SPA Architecture

An SPA is a web app that loads a single HTML page that is dynamically updated by JavaScript as the user interacts with the app. 

So, after the first HTTP request that returns the single HTML page, subsequent HTTP request are only for data and not HTML markup. All the pages are rendered in the client's browser by JavaScript.

## The `ConfigureServices` method

It is important to understand that the ASP.NET Core app runs on the server, with the React app running on the client in the browser. The APS.NET Core app simply servers the files in the **_ClientApp/Build_** folder without any interpretation or manipulation.

```cs
public void ConfigureServices(IServiceCollection services) {
	services.AddControllersWithViews();

	services.AddSpaStaticFiles(configuration => {
		configuration.RootPath = "ClientApp/build";
	});
}
```

## The Configure Method

When a request comes into ASP.NET Core, it goes through what is called the **request/response pipeline**, where some middleware code is executed. This pipeline is configured using a method called `Configure`. It is this method we will use to define exactly which middleware is executed and in what order.

```cs
public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
	// ...
	app.UseStaticFiles();
	app.UseSpaStaticFiles();
	app.UseRouting();
	app.UseEndpoints(...);

	app.UseSpa(spa => {
		spa.Options.SourcePath = "ClientApp";

		if (env.IsDevelopment()) {
			spa.UseReactDevelopmentServer(npmScript: "start");
		}
	});
}
```

## Custom Middleware

This middleware logs information about every single request that is handled by the ASP.NET Core app:

```cs
public class CustomLogger {
	private readonly RequestDelegate _next;

	public CustomLogger(RequestDelegate next) {
		_next = next ?? throw new ArgumentNullException(nameof(next));
	}

	public async Task Invoke(HttpContext httpContext) {
		if (httpContext == null) throw new
		ArgumentNullException(nameof(httpContext));

		await _next(httpContext);
	}
}
```

We make our middleware available as an extension method on the `IApplicationBuilder` interface in a new source file:

```cs
public static class MiddlewareExtensions {
	public static IApplicationBuilder UseCustomLogger(this IAppliccationBuilder app) {
		return app.UseMiddleware<CustomLogger>();
	}
}
```

So, the middleware can be added to the pipeline in the `Configure` method in the `Startup` class, as follows:

```cs
public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
	app.UseCustomLogger();
	
	if (env.IsDevelopment()) {
		app.UseDeveloperExceptionPage();
	} else {
		app.UseExceptionHandler("/Error");
		app.UseHsts();
	}
	
	app.UseHttpsRedirection();
	app.UseStaticFiles();
	app.UseSpaStaticFiles();
	app.UseMvc(...);
	app.UseSpa(...);
}
```

So, the `Startup` class allows us to configure how all request are generally handled.

## Quiz

> [!faq]- What is the entry point method in an ASP.NET Core app?
> 
> A method called `Main` in the `Program` class.

> [!faq]- What is the single HTML page filename an ASP.NET Core React app created by the template, and what folder is this located in?
> 
> A file called `index.html`, which is located in the `public` folder with the `ClientApp` folder.

> [!faq]- What file are the React app dependencies defined in?
> 
> A file called `package.json` in the `ClientApp` folder

> [!faq]- What `npm` command will run the React app in the WebPack development server?
> 
> `npm start`

> [!faq]- What `npm` command builds the React app ready for production?
> 
> `npm run build`

> [!faq]- What is the method name in a React component class that renders the component?
> 
> `render`

> [!info] Have a look at the following snippet of code, which configures the request/response pipeline in an ASP.NET Core app: 
> 
> ```cs
> public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
> 	app.UseAuthentication();
> 	app.UseHttpsRedirection();
> 	app.UseMvc();
> }
> ```
> 
>> [!faq]- Which is invoked first in the request/response pipeline, authentication or the MVC controllers?
>> Authentication

> [!faq]- Does the class that configures the services and request/response pipeline need to be called `Startup`? Or can we give it a different name?
> 
> We can give this class a different name by defining this class in `IWebHostBuilder` that is created, as in the following example:
> 
> ```cs
>  public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
> 	WebHost.CreateDefaultBuilder(args).UseStartup\<MyStartup>();
>  ```

> [!faq]- What browsers are supported by a React app created by CRA?
> 
> All modern browsers, including IE.
