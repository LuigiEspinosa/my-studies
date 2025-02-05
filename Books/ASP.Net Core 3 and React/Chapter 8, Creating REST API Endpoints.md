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
