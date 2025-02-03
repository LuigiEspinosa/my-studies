## Understanding what Dapper is and its benefits

Dapper is a performance-focused simple object mapper for .NET that helps to map SQL query output to instances of a C# class. It is built and maintained by the StackOverflow team and is released as open source and is a popular alternative to Microsoft's Entity Framework.

> *NuGet is a tool that downloads third-party and Microsoft libraries and manages the references to them so that the libraries can easily be updated.*

> *A `using` block automatically disposes of the object defined in the block when the program exits the scope of the block. This includes whether a `return` statement is invoked within the block as well as errors occurring within the block.*

> *Parameter values are passed into a Dapper query using an object with its property names matching the parameter names. Dapper will then create and execute a parameterized query.*

## Managing migrations using DbUp

DbUp is an open source library that helps us to deploy changes to SQL Server databases. It keeps track of SQL Scripts embedded with an ASP.NET Core project along with which ones have been executed on the database. It has methods that we can use to execute the SQL Scripts that haven't been executed yet on the database.

> *DbUp will run SQL Scripts in name order, so it's important to have a script naming convention that caters to this. In our example, we are prefixing the script name with a two-digit number.*

