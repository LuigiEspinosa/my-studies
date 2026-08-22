---
source: books
slug: books/asp-net-core-3-and-react/chapter-7-interacting-with-the-database-with-dapper
status: done
started: 2025-02-27
finished: 2025-02-27
tags: [backend, aspnet-core, sql, dapper]
code: []
kind: note
---

# Chapter 7: Interacting with the Database with Dapper

## Understanding what Dapper is and its benefits

Dapper is a performance-focused simple object mapper for .NET that helps to map SQL query output to instances of a C# class. It is built and maintained by the StackOverflow team and is released as open source and is a popular alternative to Microsoft's Entity Framework.

> _NuGet is a tool that downloads third-party and Microsoft libraries and manages the references to them so that the libraries can easily be updated._

---

> _A `using` block automatically disposes of the object defined in the block when the program exits the scope of the block. This includes whether a `return` statement is invoked within the block as well as errors occurring within the block._

---

> _Parameter values are passed into a Dapper query using an object with its property names matching the parameter names. Dapper will then create and execute a parameterized query._

## Managing migrations using DbUp

DbUp is an open source library that helps us to deploy changes to SQL Server databases. It keeps track of SQL Scripts embedded with an ASP.NET Core project along with which ones have been executed on the database. It has methods that we can use to execute the SQL Scripts that haven't been executed yet on the database.

> _DbUp will run SQL Scripts in name order, so it's important to have a script naming convention that caters to this. In our example, we are prefixing the script name with a two-digit number._

## Quiz

> [!TIP]- What Dapper method can be used to execute a stored procedure that returns no results?
>
> `Esecute`

---

> [!TIP]- What Dapper method can be used to read a single record of data where the record is guaranteed to exist?
>
> `QueryFirst`

---

> [!TIP]- What Dapper method can be used to read a collection of records?
>
> `Query`

---

> [!TIP]- What is wrong with the following statement that calls the Dapper `Query` method?
>
> ```cs
> return connection.Query\<BuildingGetManyResponse>(
>   @"EXEC dbo.Building_GetMany_BySearch
>     @Search = @Search"
>   new { Criteria = "Fred" }
> );
> ```
>
> The query expects a parameter called `Search` but we have passed it a parameter called `Criteria`. So, Dapper won't be able to map the SQL parameter.

---

> [!NOTE] We have the following stored procedure
>
> ```sql
> CREATE PROC dbo.Building_GetMany
> AS
> BEGIN
>   SET NOCOUNT ON
>   SELECT BuildingId, Name
>   FROM dbo.Building
> END
> ```
>
> We have the following statement that calls the Dapper `Query` method:
>
> ```cs
> return connection.Query\<BuildingGetManyResponse>(
>   "EXEC dbo.Building_GetMany"
> );
> ```
>
> We also have the following data model that is referenced in the preceding statement:
>
> ```cs
> public class BuildingGetManyResponse {
>   public int Id { get; set; }
>   public string Name { get; set; }
> }
> ```
>
> > [!TIP]- When our app is run, we find the `Id` property within the `BuildingGetManyResponse` class instances is not populated. Can you spot the problem?
> >
> > The problem is that the stored procedure returns a field called `BuildingId`, which won't automatically get mapped to the `Id` property in the class because the names are different.

---

> [!TIP]- Can DbUp be used to deploy new reference data within a table?
>
> Yes! DbUp can execute any SQL script.
