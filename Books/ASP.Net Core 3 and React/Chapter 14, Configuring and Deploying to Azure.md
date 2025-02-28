We are going to use just a couple of these  services:

- **App services**: We will use this service to host our ASP.NET Core backend API as well as our React frontend.
- **SQL database**: We will use this service to host our SQL Server database.

> *If our frontend React didn't contain multiple client-side pages, we could host it using the static website option in Azure Storage, which is nice and cheap. For multiple client-side page apps, we need a URL rewrite rule so that deep links to the pages work. The URL rewrite rule requires IIS, which is available in an Azure App Service but, unfortunately, not in Azure Storage.*

## Configuring the ASP.NET Core backend for staging and production

> *We can have different settings files for different environments. The `appsettings.json` file is the default settings file and can contain settings common to all environments. `appsettings.Development.json` is used during development when we run the backend in Visual Studio and overrides any duplicate settings that are in the `appsettings.json` file. The middle part of the filename needs to match an environment variable called `ASPNETCORE_ENVIRONMENT`, which is set to Development in Visual Studio by default and Production by default in Azure. So, `appsettings.Production.json` can be used for settings specific to the production environment in Azure.*

## Quiz

> [!faq]- In ASP.NET Core, what is the name of the file where we store any settings specific to the production environment?
> 
> `appsettings.Production.json`

> [!faq]- What were the reasons for our ASP.NET Core backend needing the `Frontend` setting?
> 
> Firstly, to set up the allowed origin in a CORS policy and secondly, to build correct links in the sign-up and forgotten password emails.

> [!info] Let's pretend we have introduced a QA environment and have created the following `npm` script to do a build for this environment:
> 
> `"build:qa": "cross-env REACT_APP_ENV=qa npm run build"`
> 
>> [!faq]- What `npm` command would we use to produce a QA build?
>> 
>> `npm run build:qa`

> [!faq]- What would be broken if we didn't include the `web.config` file with our React frontend?
> 
> We wouldn't be able to deep-link into our app. For example, putting the path to a question, such as `https://qandafrontend.z19.web.core.windows.net/questions/1`, directly in the browser's address bar and pressing *Enter* will result in a `Page not Found` error being returned.

> [!faq]- Why didn't we use Azure Storage to host our frontend rather than Azure App Service?
> 
> Azure Storage has no facility to let the React `index.html` handle deep links into the app.
