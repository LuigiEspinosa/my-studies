## Veeva Ecosystem for Content Partners

The Veeva content ecosystem consists of the following: [^1]
- Veeva CRM Online.
- Veeva Vault PromoMats.
- Veeva CRM Mobile Application (iPad or Windows Device).
- Content Distribution Network (CDN)

![[Veeva Ecosystem.png]]

[^1]: These environments are the test environments which allows Content Partners to test Multichannel content they develop.

## Veeva Ecosystem Actions

The Veeva ecosystem actions:

1. **Upload** Document into Vault PromoMats.
2. **Sync** Meta Data to Veeva CRM Online.
3. **Content automatically sent** to the CDN.
4. **Download HCP and Content** data to Veeva CRM Mobile Application.
5. **Content automatically downloaded** from the **CDN**.
6. CRM Activities **synced** to Veeva CRM Online.

## Veeva CRM Users Accounts

Veeva CRM User Accounts are used to access **Veeva CRM Online** and **Veeva CRM Mobile Application**.

Evert User is identified by a username, password, a single profile and a single role which determines;
- What tasks the users can perform.
- What data the Users can see.
- What Users can do with the data.

The Veeva CRM partner sandbox allows up to **29 Users, four** of which can be **System Administrator**. Managing existing Users and creating new Users requires the user to be a System Administrator.

## What is a Profile?

A Profile determines what a User can and cannot do. This is typically based on their job function. 
- One Profile can be assigned to many Users but a User can be assigned to only one Profile at a time.
- Important to set up User Profiles properly in the beginning.
- It is recommended to minimize the number of Profiles used.

- **System Administrator** - Configures and Administers the Veeva Application.
- **Content Creator** - Administers CLM content in Veeva.
- **Content Reviewer** - Reviews and approved CLM content in Veeva (e.g., Marketing or Legal).
- **Sales Representative** - Sales team member who views (but cannot edit) CLM content.
- **Regional Manager** - Sales team manager who views (but cannot edit) CLM content.

## Veeva CRM User Accounts and Profiles

Content Partner's CRM Sandbox comes set up with two main profiles (Content Viewer and System Administrator) and two users preconfigured for your use.

| User (Username format below)        | Profile              | Primary Access Point         | Account Purpose                                                                                                                                                                                                                 |
| ----------------------------------- | -------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cviewer@veeva.partner <br>XX.xxxxxx | Content Viewer       | Veeva CRM Mobile Application | This account and profile simulates the type of account a Rep would use. The primary use is to access the Veeva CRM Mobile Application on the iPad or Windows tablet, this account can be used online but has restricted access. |
| cloader@veeva.partner<br>XX.xxxxxx  | System Administrator | Veeva CRM Online             | This account is used to administer your Partner CRM Sandbox. This allows you set up Users and configure the sandbox. The primary use is Veeva CRM Online access.                                                                |
## Creating a New User in Veeva CRM

First log into CRM Online (test.salesforce.com) using your System Administrator User (cloader).

You may need to switch to Salesforce Classic View by selecting the image on the top right-hand corner then clicking 'Switch to Salesforce Classic'.

To access the Administration section of CRM, navigate to the Setup Screen from the drop down along the top.

Then navigate to Administration Setup > Manage Users > Users.

To create a new User, select the 'New User' button.
To edit an existing User, select the 'Edit' Hyperlink.

You should consider the following fields when creating a new user:
- **First Name:**  Optional.
- **Last Name:** Your choice.
- **Alias:** Your choice.
- **Email:** Working email address of User.
- **Username:** Best practice is to use firstname.lastname@ naming convention for the Content Loader credentials.
- **Nickname:** Your choice.
- **Role:** Select \<none specified\>
- **User License:** Select "Salesforce Platform" for a Testing User or Select "Salesforce" for a System Administrator user.
- **Profile:** Your choice based on permission needs of the user. In most cases you'd select 'Content Viewer' or 'System Administrator'.
- **Active:** Check box.

## Editing an Existing User in Veeva CRM

Users cannot be deleted, only deactivated, so if you have existing Users that are not currently in use, you can edit these.

There are some dummy Users that come with your CRM sandbox from which to choose.

## Deactivating an Existing User in Veeva CRM

Users cannot be deleted, only deactivated, to do this, click 'Edit' to open the User.

On the User page, uncheck the active button and click 'Save'. A User that has been deactivated will not be able to login to Veeva CRM.

## Reset Password of a User in Veeva CRM

To reset the password for a CRM User, open this user by clicking 'Edit' and make any necessary changes.

At the bottom of the page, tick the 'Generate new password and notify user immediately' and click Save.
- The email will go to the email address associated with this User.
- Click the hyperlink in the email to set the new password for your User.

## Adding a New User to a Territory

When creating a new User in Veeva CRM, this User must also be added to a Territory to provide visibility to these HCP Accounts.

Navigate to Setup > Administrative Setup > Manage Territories > Territory Models > View Hierarchy.
- Click Expand All to expand te Territory Hierarchy to find territory 101.
- Select the hyperlink of the Territory 101.
- Select Manage Users in the Assigned User list to add the new User.
- Find the User and then select the right arrow Add and select Save.

## Product Setup

Product is the most important metadata because it applies to all Multichannel Content and drives content permissions.
- Content Partner sandboxes come with the product 'Cholecap' pre-configured.
- However, it is good practice to set up products to control access.

In **Veeva CRM** the Product information is stored in the Product Catalog.

In **Veeva Vault** the Product information is stored in the Product object.

## Setting up Products and Mapping - Vault

In **Vault**, new products can be added in the Admin section.

Click 'Admin', then 'Business Admin' and select the component 'Products'.

The **External ID** must be populated in Veeva Vault for the Products which are used in the CRM-Vault integration.
- Only products assigned to Presentations, Slides, Email Templates, etc. need to be mapped.
## Setting up Products and Mapping - CRM

In **CRM**, add new products and manage the Veeva External Id under the "Product Catalog" tab. This tab is usually found on the blue tab bar or by selecting the '+' button to view all tabs.

The Veeva External ID must be populated in Veeva CRM for the Products which are used in the CRM-Vault integration.
- This must be identical to the External ID in Vault.

In addition, the product must be of "Product Type" = "Detail".

## Product Assignment vie My Setup

Visibility of content in Veeva CRM is dependent on a User being set up to use this content.
- Reps access to content is limited by the Products they work with, so each CRM User needs to be set up with the correct Products.

Assign a Product to a User to allow the corresponding content to be available to that User.

To assign, navigate to "My Setup" in Veeva CRM Online. Within "My Setup", you can select the User by using the magnifying glass.

Once the User is selected, click 'Edit' to select which products are available for this User.

## Vault PromoMats as Content Repository

Content Creators and Customers create and manage Multichannel content and metadata in Vault. Multichannel Content can be:
- CLM Presentations and Slides.
- Approved Email Templates and Fragments.
- Engage for Portals Presentations and Slides.

In order for this content to be used in the field and available to Reps, there is an integration between Veeva CRM and Veeva Vault to allow content to be synchronized.

Once the content is synchronized and available in CRM, Reps can download the content to their CRM Offline application on their iPad or Windows tablet.
- The visibility of content is dependent on which Product each User (Rep) has access to.

## Vault and CRM Integration of Content

Each product: CLM, Approved Email, Engage for Portals has its own integration tab in CRM which maintains the integration between Veeva CRM and Vault  for each product.
- CLM Admin.
- Approved Email Admin.
- Engage Metadata Admin.

Engage Meeting content is synced through the CLM Admin tab.

## Accessing Veeva CRM to Vault Integration

In Veeva CRM Online via the Home Page, navigate to relevant Administration tab in CRM for the content that needs to sync.
- For CLM and Engage Meeting Content = CLM Admin.
- For Approved Email Content = Approved Email Administration.
- For Engage for Portals = Engage Metadata Admin.

This will be visible on the blue tab bar or by selecting the '+' button to view all tabs.

## Veeva CRM to Vault Integration Setup

To manage the CRM credentials, scroll down to Veeva CRM Connection Management (for CLM & Engage) and Veeva Approved Email Credential Management (for Approved Email) and click 'Edit'.

Populate the CRM Administrator username, password, check the "Is this a Sandbox" checkbox and click 'Save'.

## Integration Setup

On the same page, scroll up to Vault Connection Management (for CLM and Engage) or Vault Login Credential Management (for Approved Email) section and populate the required fields:
- Vault Name (only for CLM and Engage).
- Vault URL
- User (Vault integration username)
- Password (Password of the Vault integration user)
- WHERE Clause (Optional) - defines specific sync conditions.
- Connection Type (Only for CLM and Engage, leave unchanged now)
- Check "Include Non Steady State" (Only for CLM)

Validate the Veeva CRM and the Vault PromoMats credentials to ensure that the password was entered properly. [^2]

Click 'Sync' or 'Incremental Refresh' to perform the synchronization from Vault to CRM, the result should be 'Success': [^3]
- Repeat the steps for all products (CLM, Approved Email, Engage for Portals) in the relevant integration tab.

[^2]: If you change the passwords, then you will need to update the integration. This is the cause of a common error message during the sync process.
[^2]: Sync and Incremental Refresh complete the same activity. Sync is used in the CLM and Engage Metadata Admin tabs whilst Incremental Refresh is used in the Approved Email Administration tab.

## Mapping Between Vault and CRM

Once Vault and CRM credentials are working, click 'View Map' button next to the Vault Credential section. '**View Map**' generates a table of Vault and CRM fields involved in the integration and can be used to edit custom field mappings manuallly.

Click '**Compare CRM to Vault**' (this will map the metadata fields of Vault and CRM).

## Synchronization Options

**'Sync'** and **'Incremental Refresh'** performs an incremental update, pulling Multichannel Presentations and Slides/Approved Emails and Documents that have been modified since the last sync.

**'Force Full Refresh'** pulls ALL CRM records from Vault, use after a CRM Sandbox refresh and after adding/deleting Vaults.

## Synchronization Results

If a sync is unsuccessful or encounters erros, this will display as failed or finished with error rows.

The message column will display a message of the error.

Additional information can be found by clicking on the hyperlink number under Failed Rows.
