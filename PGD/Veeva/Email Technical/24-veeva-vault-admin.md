# Veeva Vault PromoMats Administration

Bulk Document Actions allow you to complete the same action across multiple documents within Vault PromoMats. The various actions that can be completed using this include editing field values, changing the document states or deleting documents.

Bulk Document actions can make changes to up to 1000 documents at once.

In order to delete slides in a Binder, first they must be removed from the Binder and they must be in Draft state. The User must also have permissions to delete.

## Setting up Bulk Actions

Bulk Actions may not be available to all users in Vault PromoMats. Users require various permissions to access Bulk Actions.

Content Creators working in customers Vault environments may not have access to Bulk Actions

There are two ways to select the documents that you want to perform a Bulk Action on.

1. Within a Binder (e.g. Multichannel Presentation), click on the Action Button located above the slide section.
2. In the Vault PromoMats Library page click on the Action Button at the top of the document lists. Views or filters can be used to specify a set of documents to narrow down the selection.

The Refine Selection page allows the User to review the list of selected documents and deselect any that should not be included in the bulk action.

The actions available to each User will depend on their permissions. The User must select the action they want to comlete for all selected documents. Then click Next and follow the confirmation step(s) to perform the desired Bulk Action.

## Using Bulk Actions to Edit and Update Document Fields

In order to update document field values, on Choose Action page select 'Edit Fields' and click Next.

The Edit Fields page displays editable fields for these documents. Click the Edit field icon to open the edit option and enter the new value and Click Next.

- If the field is already populated on a document, this new value will replace the existing value.
- If you edit the field but leave it empty, Vault will ceal the field across all selected documents.

From the Confirmation page, review the summary of changes. Click 'Finish'. When the changes are complete, a notice will appear in your Notifications page and Vault will send you an email.

Note, not all fields are available to edit using bulk document actions:

- Field must be common across all selected documents.
- Field cannot have dependencies.

To move your documents to another state, on the Choose Action page, select 'Change State' and click 'Next'. You can only change the state of documents that are in the same lifecycle and lifecycle state, so Vault displays only the available states by lifecycle and state.

On the Choose State Change page, select the new state for your documents. Click 'Next' to open the Confirmation page. Review the summary of changes before moving on. Click 'Finish'.

When the changes are completed, a notice will appear in your Notifications page and vault PromoMats will send you an email. Checked out documents cannot change states.

Bulk Document Actions can be used to assign a group of Multichannel Slides to a Multichannel Presentation (Binder) in one step.

Select 'Add to Binder'. Click Next, then select either 'Create New' to create a new Binder or 'Add to Existing' to add to an already created binder.

An email will be delivered to the User once the operation has been completed showing the success and/or failure of the action.

## Vault Content Management

## Overview of 'Where Used View'

Vault PromoMats creates relationships between documents and also groups documents together in binders. The 'Where Used' view shows all existing realtionships or binder links for a specific document. The documents listed in this view are the Multichannel Slides that are associated with this shared resource.

To display the Where Used View, open the document in Vault PromoMats and click on the Actions button. From the Actions button, select 'Where Used' which will create a list of all the Vault PromoMats documents that are related to the original document selected.

Vault PromoMats has automatic version control. This means multiple versions of a document can be loaded into Vault PromoMats to allow tracking and managing changes to documents without adding multiple documents as separate files. This allows users to create a new document draft or simply upload a new version of an existing document to keep creating new version.

1. Create a document draft.
2. Upload a new version of a document.

## Creating a New Draft

'Create a New Draft' action allows you to start a new drafting cycle on a document. Vault PromoMats ddoes not execute document state entry actions or entry cirteria for drafts created with the Create Draft action. You must have the Version permissions to access this option.

Tipically, Users create a new draft version for a document that is currently in a major version states as Approved. Major version is created once a document reaches the Steady state such as Approved.

The Create New Draft option provides the User with the ability to copy the current version and move this into the Draft state or Upload a new file as a draft.

Vault PromoMats prompts you to upload the new version's source file or to copy and reuse the current source file. You can enter a Version Description which can be viewed in the document's Version History.

After uploading the document, a new minor version is created with the document status of draft.

Admin must enable the option to reuse a document's source file when creating a new draft version. If this option is not available, you must select a source file for upload. In some customers Vault PromoMats the starting state may not be draft.

To Create New Draft option can also be used for Binders, to do this, select the 'Create Draft' from the Actions menu of the binder. This action will create a new minor version with the document status of draft.

## Upload a New Version

'Upload New Version' allows you to simply add a new version of the document without altering the document status, unlike Create Draft which creates a draft version of the current document. For example, to upload a revised HTML file for an Approved Email that has been Approved.

Select 'Upload New Version' from the Action Menu. Vault PromoMats prompts you to upload the new version of the original file. You can enter a Version Description which can be viewed in the document's Version History.

After uploading the document, a new minor version is created and Vault PromoMats keeps the document status the same as the original document.

## Exporting Content from Vault

The Binder Export and the Bulk Document Export functionality in Vault PromoMats enable you to download all assets, such as ZIP files, related to one or more Multichannel Presentations or Approved Emails.

- **Binder Export:** Export the content of a Multichannel Presentation, including the ZIP packages and the metadata fields.

- **Bulk Document Export:** Export the content of many multichannel Presentations or Approved Email documents in one step, including the ZIP packages for CLM-Engage and HTML and image assets for Approved Emails.

### Export a Presentation with Binder Export

1. Open a Multichannel Presentation and click the Export Binder option from the Action Menu.
2. Check every slide you would like to export and click Next.

3. Check 'Renditions' and un-select any renditions you do not want to download.
    - Distribution Package = the User uploaded ZIP package.
    - Veeva Distribution Package = Veeva generated ZIP package for documents with PDF rendition (auto packaging of image, PDF, etc. files)
    - CLM Video Distribution Package = Veeva generated ZIP package of video slides.

4. Optional Steps:
    - Select "Document Fields" if the metadata should be exported.
    - Select "Source Documents" if the source document should be exported.

5. Click Next and Finish on the summary page.

The user will receive two notifications when the files are available to download. Firstly, an email notification. Secondly, a notification object will be visible in Vault PromoMats. Click 'View all' to access the full notification and download link.

### Bulk Document Export

Bulk Document Export allows the User to download any group of documents within Vault PromoMats. This is useful to export all Approved Email files from Vault PromoMats to provide to a customer. The Bulk Document Export uses the Bulk Documents Action.

1. Refine Your Selection and click 'Next'.
2. Select the 'Document Export' Action and click 'Next'.

3. Check the 'Source Documents' check box and select the Assets rendition in order to get the original HTML file and the ZIP file containing the image assets.
    - Optional: check the 'Document Fields' in order to download the document metadata.

4. Click 'Next' and the Finish on the summary page.

The user will receive two notifications when the files are available to download. Firstly, an email notification. Secondly, a notification object will be visible in Vault PromoMats. Click 'View all' to access the full notification and download link.

## Custom Fields

Basic metadata fields exist for each document or binder in Vault PromoMats as well as Veeva CRM. Fields display information, such as 'Document Name', and help to classify and manage the document.

Some fields apply to all documents while others apply to a specific document type, subtype, or classification.

Additional custom fields can be created to hold additional details. Custom fields can be added to Vault and CRM in order to support additional processes or functinalities. When creating custom fields it's important to name the fields exactly the same in both and Veeva CRM. For example, when you work with multiple customers, adding a new 'Customer' field to the content to mark which customer it belongs to.

This can help keep the content organized in Vault as well as allow configure Sharing Settings on the CRM slide to control content visibility based on the value in the Customer field.

To create Custom Fields in Veeva CRM, navigate to the Administration area of Veeva CRM by clicking on the User Name, i.e. Content Loader and click Setup.

On the left-hand bar, scroll to the App Setup section, click 'Create' and 'Objects'.

Select the required Object Name i.e. CLM Presentation, scroll to the Custom Fields and Relationships sectino. Click 'New', Select the type of custom field and click 'Next'.

When entering the Field Name in Veeva CRM, this will need to be identical to Vault PromoMats. Veeva CRM will automatically add the `__c` to the end of the Field Name once this has been saved. If using field type 'Picklist', then the picklist options will need to be the same in Vault as CRM.

Select the Field-level security (FLS), by default Veeva CRM will select Visible for all Profiles. Click 'Next'. Add to the relevant page layout, by default Veeva CRM will add to all relevant page layouts. Click 'Save'.

To create Custom Fields in Vault PromoMats click on the Admin button to access the Administration area of Vault PromoMats. Click on Configuration and click on Document Fields.

Select the Document Type or Shared Fields and CLick 'Add Button' and 'New Field'. Select the field type and choose a label for the field. It is recommended to match exactly the field type in the Veeva CRM.

Create a Shared Field to assign this to multiple Document types, e.g., the same Customer field on Multichannel Presentations and Email Templates.

### Supported Field Types

This will sync from Vault PromoMats to Veeva CRM:

- Text.
- Text (up to 255 characters).
- Single Select Picklist.
- Multi Select Picklist.
- Date.
- Boolean.
- Number.
- URL.

### Unsupported Field Types

- DateTime.
- Long Text Area.
- Custom Lookup.
- Formula.
- Currency.

## Mapping Fields

Once Custom Fields are created in both Vault PromoMats and Veeva CRM Sandboxes.

- Go into the Integration Tab (CLM Admin, Approved Email Admin or Engage MetaData Admin).
- Click on View Map next to the Vault Credentials.
- Click on Compare CRM to Vault.

If the CRM API Name and the Vault API Name are identical, the fields will be matched automatically. Otherwise, you may need to map fields manually.

## CRM Publishing

'Managing your Multichannel Sandboxes' course covered how content can be synced from Vault PromoMats to Veeva CRM using the Production Administration tabs.

- CLM Admin.
- Approved Email Admin.
- Engage Metadata Admin.

These integration tabs allow the User to pull content into Veeva CRM by loggin in as an admin user in CRM. The CRM Publishing feature allows the User to trigger the Vault-CRM Integration from within Vault PromoMats without needing to log into Veeva CRM.

This saves time when using the Vault as a Multichannel Repository as the Content Creator can push content to the Offline device for testing without loggin into Veeva CRM Online. By default, the User must be an Agency Admin to access and setup CRM Publishing.

There are several steps to configure CRM Publishing in Vault PromoMats. To use CRM Publishing from Vault PromoMats, the relevant Administrator tab (i.e. CLM Admin) must have been set up in Veeva CRM. If this integration breaks due to an expired password, CRM Publishing will also stop working.

1. Set up Admin tab in CRM (CLM Admin, Approved Email Admin, Engage Metadata Administration).
2. Display 'CRM Orgs' Object in Vault PromoMats.
3. Add CRM credentials to CRM Orgs.
4. Sync via CRM Publishing.

## Add CRM Orgs in Vault

In order to add an integration in CRM Publishing, the CRM Orgs object must be available in the Business Admin Menu.

Using an Administrator User in Vault PromoMats, click on the Admin button. Click on Configuration, then Objects Setup, then Objects, CRM Org and Edit. If Admin button is not available, the User does not have Administration access. Your Program Manager can help set this up.

Within the CRM Orgs, scroll down to "Options" and select 'Display in Business Admin Menu' and click Save. This will allow the CRM Org object to be visible in the Business Admin tab in Vault PromoMats.

### Add New CRM Orgs

Navigate to the Business Admin Tab. Click on the Component Box and type in 'CRM Orgs'. Click 'Create' and fill out the fields:

- **Name:** Agency Sandbox Name.
- **Status:** Active.
- **CRM Org ID:** Sandbox ID (Reference your Getting Starting Guide or ask your Program Manager). This field is required and must correspond to the 18-digit ID in CRM. You'll need to convert the 15-digit Salesforce ID that you see in the CRM Org.
- **Include NSS:** Yes. Include Non Steady State.
- **Integration:** CLM, Engage, Approved Email.
- **Type:** Sandbox.

## Using CRM Publishing

Go to Vault Home and refresh tha page. Select the CRM Publishing tab. Select the Integration you want to run and click 'Publish to CRM'. This will trigger the 'Sync' action in Veeva CRM Online.

- CLM: equivalent to the CLM Admin Tab in your CRM Sandbox.
- Engage: equivalent to the Engage Metadata Tab in you CRM Sandbox.
- Approved Email: quivalent to the Approved Email Admin tab in your CRM Sandbox.

The integration is still controlled by Veeva CRM, any erro messages mean that the credentials in Veeva CRM need to be updated.

### CRM Publishing Notification Email

The User will receive an email notification once the sync is complete which will show the successful sync details and any failures in attached CSV files.
