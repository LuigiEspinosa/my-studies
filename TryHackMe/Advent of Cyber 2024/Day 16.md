## The Wareville’s Key Vault grew three sizes that day.

[TryHackMe | Advent of Cyber 2024: Day 16 (Azure) - YouTube](https://www.youtube.com/watch?v=t1_FG5IUBcs)

Azure is a CSP (Cloud Service Provider), and CSPs (others include Google Cloud and AWS) provide computing resources such as computing power on demand in a highly scalable fashion.

Azure Key Vault is an Azure service that allows users to securely store and access secrets. These secrets can be anything from API Keys, certificates, passwords, cryptographic keys, and more. Essentially, anything you want to keep safe, away from the eyes of others, and easily configure and restrict access to is what you want to store in an Azure Key Vault.

The secrets are stored in vaults, which are created by vault owners. Vault owners have full access and control over the vault, including the ability to enable auditing so a record is kept of who accessed what secrets and grant permissions for other users to access the vault (known as **vault consumers**).

Microsoft Entra ID (formerly known as Azure Active Directory) is Azure's solution. Entra ID is an identity and access management (IAM) service. In short, it has the information needed to assess whether a user/application can access X resource.

Azure Cloud Shell is a browser-based command-line interface that provides developers and IT professionals a convenient and powerful way to manage Azure resources. It integrates both Bash and PowerShell environments, allowing users to execute scripts, manage Azure services, and run commands directly from their web browser without needing local installation. Cloud Shell has built-in tools and pre-configured environments, including Azure CLI, Azure PowerShell, and popular development tools, making it an efficient solution for cloud management and automation tasks.

Azure Command-Line Interface, or Azure CLI, is a command-line tool for managing and configuring Azure resources. The Glitch relied heavily on this tool while reviewing the Wareville tenant, so let's use the same one while walking through the Azure attack path.

## Glossary

- Identity and Access Management (IAM) is a framework/process for controlling and securing digital identities and user access in organizations.
