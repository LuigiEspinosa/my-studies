# Managing Your Multichannel Sandboxes

## Veeva Ecosystem

- Veeva CRM online
- Veeva Vault PromoMats
- Veeva CRM Mobile Application (iPad or Windows Device)
- Content Distribution Network (CDN)

1. Upload Document into Vault PromoMats
2. Sync Meta Data to Veeva CRM Online
3. Content automatically sent to the CDN.
4. Download HCP and Content data to Veeva CRM Mobile Application.
5. Content automatically downloaded from the CDN.
6. CRM Activities synced to Veeva CRM Online.

### Veeva CRM User Accounts

Veeva CRM User Accounts are used to access Veeva CRM Online and Veeva CRM Mobile Application. Every Used is identified by a username, password, a single profile and a single role which determines;

- What tasks the Users can perform
- What data the Users can see
- What Users can do with the data

The Sandbox allows up to 29 Users, four of which can be a System Administrator. Managing existing Users and creating new Users requires the user to be a SA.

### What is a Profile?

A Profile determines what a User can and cannot do.

- System Administrator: Configures and administers the Veeva application.
- Content Creator: Administers CLM content in Veeva.
- Content Reviewer: Reviews and approves CLM Content in Veeva (e.g., Marketing or Legal)
- Sales Representative: Sales team member who views (but cannot edit) CLM content.
- Regional Manager: Sales team manager who views (but cannot edit) CLM content.

## How to Create New Veeva CRM Users

1. Login into CRM Online.
2. Administration Setup > Manage Users > Users.
3. Select 'New User' Button or 'Edit' hyperlink.
4. You should consider the following fields:
    - First Name (Optional)
    - Last Name
    - Alias
    - Emails (Working email)
    - Username (Naming Convention for the Content Loader Credentials)
    - Nickname
    - Role
    - User License (Salesforce or Salesforce Platform)
    - Profile (Content Viewer or SA)
    - Active

When creating a new User, this User must also be added to a Territory to provide visibility to these HCP Accounts.

- Navigate to Setup > Administrative Setup > Manage Territories > Territory Models > View Hierarchy.

Users cannot be deleted, only deactivated.

You can reset the password for a CRM user, editing the user and at the bottom of the page, tick the 'Generate new password and notify user immediately'.

## Product Setup and Assignment

Product is the most important metadata because it applies to all Multichannel Content and drives content permissions. In Veeva CRM the Product information is stored in the Product Catalog. In Veeva Vault the Product information is stored in the Product object.

In Vault, new products can be added in the Admin section. The External ID must be populated in Veeva Vault for the Products which are used in the CRM-Vault integration.

In CRM, add new products and manage the Veeva External Id under the "Product Catalog" tab.

Visibility of content in Veeva CRM is dependent on a User being set up to use this content. Assign a Product to a User to allow the corresponding content to be available to that User.

## Synchronization

Content Creators and Customers create and manage Multichannel content and metadata in Vault. Content can be:

- CLM Presentations and Slides.
- Approved Email Templates and Fragments.
- Engage for Portals Presentations and Slides

Once the content is synchronized and available in CRM, Reps can download the content to their CRM Offline application on their iPad or Windows tablet.

Each product: CLM, Approved Email, Engage for Portals has its own integration tab in CRM which maintains the integration between Veeva CRM and Vault for each product.

### Accessing Veeva CRM to Vault Integration

In Veeva CRM Online via the Home Page, navigate to relevant Administration tab in CRM for the content that needs to sync.

### Veeva CRM to Vault Integration Setup

To manage the CRM credentials, scroll down to Veeva CRM Connection Management (for CLM & Engage) and Veeva Approved Email Credential Management (for Approved Email).

### Integration Setup

On the same page, Scroll up to Vault Connnection Management (for CLM and Engage) or Vault Login Credential Management (for Approved Email) section and populate the required fields:

- Vault Name (only for CLM and Engage)
- Vault URL
- User (Vault integration username)
- Password
- WHERE Clause (Optional)
- Connection Type (Only for CLM and Engage)
- Check "Include Non Steady State" (Only for CLM)

Validate the Veeva CRM and the Vault PromoMats credentials to ensure that the password was entered properly.

### Mapping Between Vault and CRM

Once Vault and CRM credentials are working, click "View Map" button next to the Vault Credential Section. This generates a table of Vault and CRM fields involved in the integration and be used to edit custom field mappings manually.

### Syncronization Options

Click "Sync" or "Incremental Refresh" to perform the synchronization form Vault to CRM, the result should be "Success".

"Sync" or "Incremental Refresh" performs an incremental update, pulling Multichannel Presentations and Slides/Approved Emails and Documents that have been modified since the last sync.

"Force Full Refresh" pulls ALL CRM records form Vault, use after a CRM Sandbox refresh and after adding/deleting Vaults.

If a sync is unsuccessful or encounters erros, this will displayu as failed or finished with error rows. Additional information can be found by clicking on the hyperlink number under Failed Rows.
