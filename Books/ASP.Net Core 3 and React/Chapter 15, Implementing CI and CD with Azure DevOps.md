**Continuous Integration (CI)** and **Continuous Delivery (CD)**.

## Understanding CI and CD

CI is when developer working copies are merged to a shared master branch of code in a source code system several times a day, automatically triggering what is called a build. A build is the process of automatically producing all the artifacts that are required to successfully deploy, test, and run our production software. The benefit of CI is that it automatically gives the team feedback on the quality of the changes that are being made.

CD is the process of getting changes that developers make to the software into production, regularly and safely, in a sustainable way. So, it is the process of taking the build from CI and getting that deployed to the production environment. The CI build may be deployed to a staging environment where the end-to-end tests are executed and passed before deployment is made to the production environment. At its most extreme, the CD is fully automated and triggered when a CI build finishes. Often, a member of the team has to approve the final step of deploying the software to production, which should have already passed a series of automated tests in staging. CD is also not always triggered automatically when a CI build finishes; sometimes, it is automatically triggered at a particular time of day. The benefit of CD is that the development team deliver value to the users of the software faster and more reliably.

## Implementing CI

The build configuration is defined in a YAML file.

> ***YAML Ain't Markup Language (YAML)** is commonly used for configuration files because it is a little more compact than JSON and can contain comments.*

