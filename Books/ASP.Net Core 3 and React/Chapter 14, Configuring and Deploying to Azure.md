We are going to use just a couple of these  services:

- **App services**: We will use this service to host our ASP.NET Core backend API as well as our React frontend.
- **SQL database**: We will use this service to host our SQL Server database.

> *If our frontend React didn't contain multiple client-side pages, we could host it using the static website option in Azure Storage, which is nice and cheap. For multiple client-side page apps, we need a URL rewrite rule so that deep links to the pages work. The URL rewrite rule requires IIS, which is available in an Azure App Service but, unfortunately, not in Azure Storage.*

## Configuring the ASP.NET Core backend for staging and production

> *We can have different settings files for different environments. The `appsettings.json` file is the default settings file and can contain settings common to all environments. `appsettings.Development.json` is used during development when we run the backend in Visual Studio and overrides any duplicate settings that are in the `appsettings.json` file. The middle part of the filename needs to match an environment variable called `ASPNETCORE_ENVIRONMENT`, which is set to Development in Visual Studio by default and Production by default in Azure. So, `appsettings.Production.json` can be used for settings specific to the production environment in Azure.*
