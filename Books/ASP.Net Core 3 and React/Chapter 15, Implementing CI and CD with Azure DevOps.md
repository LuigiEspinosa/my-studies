**Continuous Integration (CI)** and **Continuous Delivery (CD)**.

## Understanding CI and CD

CI is when developer working copies are merged to a shared master branch of code in a source code system several times a day, automatically triggering what is called a build. A build is the process of automatically producing all the artifacts that are required to successfully deploy, test, and run our production software. The benefit of CI is that it automatically gives the team feedback on the quality of the changes that are being made.

CD is the process of getting changes that developers make to the software into production, regularly and safely, in a sustainable way. So, it is the process of taking the build from CI and getting that deployed to the production environment. The CI build may be deployed to a staging environment where the end-to-end tests are executed and passed before deployment is made to the production environment. At its most extreme, the CD is fully automated and triggered when a CI build finishes. Often, a member of the team has to approve the final step of deploying the software to production, which should have already passed a series of automated tests in staging. CD is also not always triggered automatically when a CI build finishes; sometimes, it is automatically triggered at a particular time of day. The benefit of CD is that the development team deliver value to the users of the software faster and more reliably.

## Implementing CI

The build configuration is defined in a YAML file.

> ***YAML Ain't Markup Language (YAML)** is commonly used for configuration files because it is a little more compact than JSON and can contain comments.*

## Quiz

> [!faq]- What environment variable needs to be set for Jest tests to work well in a continuous integration environment?
> 
> An environment variable called `CI` needs to be set to `true`.

> [!faq]- When we change the `azure-pipelines.yml` file, why does this trigger a build?
> 
> The `azure-pipelines.yml` file is committed and pushed to our source code repository and the build is triggered when any code is pushed to the repository.

> [!faq]- What YML step task can be used to execute `npm` commands?
> 
> `-script`

> [!faq]- What YML step task can be used to publish artifacts to the pipeline?
> 
> `PublishBuildArtifact@1`

> [!faq]- Why do we have several builds of a React frontend for the different environments?
> 
> The build sets the environment variable called `REACT_APP_ENV`, which the code uses to determine which environment it is in.

> [!faq]- What task type in a release pipeline stage can be used to deploy build artifacts to Azure App Service?
> 
> Azure App Service Deploy.

> [!faq]- What task type in a release pipeline stage can be used to run SQL Server scripts?
> 
> Azure App Database Deployment.
