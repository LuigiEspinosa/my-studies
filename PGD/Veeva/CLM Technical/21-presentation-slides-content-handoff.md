# Presentation and Slides Content Handoff

## Binder and Bulk Document Export

The Binder Export and the Bulk Document Export functinoality in Vault PromoMats enable you to download in a few steps all assets such as ZIP files related to one or more Multichannel Presentations or Approved Emails.

1. Binder Export: Export the content of a Multichannel Presentation, including the ZIP packages and the metadata fields.

2. Bulk Document Export: Export the content of many Multichannel Presentations or Apprved Email documents in one step, including the zip packages for CLM-Engage and HTML, the image assets for Approved Email.

These are useful tools to extract content from Vault PromoMats when neither the Multichannel Loader or the Vault to Vault Migration is available at a Customer or Approved Email needs to be delivered. To see steps to complete Binder Export to Bulk Document Export look at Vault Administration guide.

## Using Multichannel Loader

Vault PromoMats provides easy-to-use functinality for creating documents and updating documents and updating document fields in bulk, which works well for most Users. However, multichannel content requires Users to iterate quickly and often to upload many versions of a document in a single day.

The Multichannel Loader is a bulk creation and update feature within Vault PromoMats allowing the easy upload and update of content within Content Partner sandbox environments and Customer Vault PromoMats environments.

- Create presentations and slides.
- Add slides to presentations.
- Add Related Sub Presentation and Related Shared Resource relationships.
- Update document fields on slides or presentations.
- Update ZIP source files for slides.
- Reorder slides within a presentation.

Using the Multichannel Loader to create and upload documents and document fields requires:

1. CSV file with all the required fields filled out.
2. Document files for CLM/Engage for Portals content; either ZIP files or image/video/PDF files to use Auto-Packaging feature.

Each time an existing document is updated, Vault PromoMats versions the document using the 'Create Draft' action, ensuring good versioning practices and that changes can be tracked.

### Creating Multichannel Loader CSV

The Multichannel Loader CSV file contains a list of the slides and presentations to create or update all the data required for the fields in Vault PromoMats. The sctructure of the CSV file will vary depending on the Vault PromoMats configuration. Example:

- name__V = Natevba Presentation Slide 1
- Type = Slide
- lifecycle__v = CRM Content Lifecycle
- slide.cm_content__v = YES
- slide.engage_content__v = NO
- slide.crm_media_type__v - PDF
- slide.product__v.name__v = Natevba

This means the CSV file will likely need to be different between Content Partner and Customer environments.

### Document Fields

Regular document fields use the format: `[type].[field name]`.

The type options are `slide.` and `pres.` For example, the CRM Media Type field on a Multichannel Slide would become `slide.crm_media_type__v`.

Fields that are based on Objects use the format: `[type].[object name].[field name]`. For example, the Product Name field for the product referenced by a Mutlichannel Slide would become `slide.product__v.name__v`.

The column headers Type and slide.filename are mandatory.

## Find Field and Object Names

To add additional object or field names to the Multichannel Loader CSV, it is necessary to understand the object and field name. This information can be found in the Admin area of Vault PromoMats, click on 'Admin button' then click on 'Configuration'.

Select 'Document Fields' for viewing Document Field Names and 'Objects' for viewing Object field names.

### Document Field Rules in CSV

Field values in the CSV must follow the correct format, according to the field type. To add more than 1 value to a multi Picklist field, add a comma and a space in between values.

For Yes/No fields and Date fiels, this is the format and rules:

![Document Field Rules](Assets/Document-Field-Rules.png)

### Document Identifiers

Best practice when using Multichannel Loader is to include a unique ID for each Multichannel Presentation and Slide to make it easier to update the documents. There are two options that can be used to identify documents.

1. Document ID - `document_id__v` = This is the numeric document ID that can be found in the document URL. The document ID will change between different Vault PromoMats environments.

2. External ID - `external_id__v` = This is a unique ID that is recommended to be added to the CSV file to allow easier updates of files. The External ID isn't created automatically by Vault PromoMats. It is added by the Content Creator when creating the Multichannel Loader CSV so this can be a unique identifier in both the Content Partner and Customer Vault PromoMats.

If the External ID wasn't included in the original file upload, the Document ID field as the identifier and an External ID included in the CSV file for future identification of files.

### Adding Shared Resources

There are specific fields that need to be included in the CSV to add shared resources to your slides.

- For the Shared Resource:
  - `external_id__v` needs to be populated.
  - Type = Shared.
  - `slide.crm_shared_resource__v` column header needs to be added with the line for the shared resource = Yes which indicates this is the shared resource.

- For the Multichannel Slides use the shared resource:
  - `slide.related_shared_resource__v` column header needs to be added and for all Multichannel Slides that are associated with the shared resource need to have this populated with the `external_id__v` value of the Shared Resource.

### Adding Required Slides

There are specific fields that need to be included in the CSV to add Required Slide (Sub Presentation) to your slides. For the Multichannel Slides that are associated with the Sub-Presentation:

`slide.related_sub_pres__v` column header needs to be added and the `external_id__v` value of the Sub Presentation added to link these together.

## Using Multichannel Loader for Auto-Packaging

The Multichannel Loader can be used to load images, videos and PDFs while taking advantage of the Auto Packaging Feature. To do this, within the CSV file the following fields need to be populated the same as when manually using the Auto Packaging Feature.

- CRM Media Type = `slide.crm_media_type__v`.
- Publish for Veeva CRM (CLM) = `slide.clm_content__v`.
- Publish for Veeva (Portals) = `slide.engage_content__v`.

## Working with the Multichannel Loader

Naviagate to the Multichannel Loader tab. Click 'Choose' and select your CSV file.

If there are validation erros, open the CSV file on your computer, update, save, and re-upload the file. The Load CSV page will specify what the erros are. If the errors are the result of an incorrect vault configuration, update your Vault's settings and click 'Revalidate'. Click 'Next' to load the next page.

Vault PromoMats checks the packaging structure of the uploaded ZIP files, and will return an incorrect packaging error if the packaging of the ZIP files needs to be fixed. When upload is complete, click 'Next'.

After uploading the media files, you have an opportunity to review the actions that the Multichannel Loader will perform and confirm that they are correct. Click 'Complete Load' to start the process.

Vault PromoMats shows a progress bar of the loading progress but you may leave this window and continue working on Vault PromoMats. An email notification will be delivered when the process finished. The changes are also immediately visible in the Vault Library.

## Using Vault to Vault Migration

Vault to Vault Migration, (in some cases referenced as 'Copy to Another Vault' feature) is an easy-to-use functionality for copying a Multichannel Presentation binder, its slide documents, its sub-presentations, and its shared resources from one vault to another.

Some customers request marketing agencies to deliver CLM/Engage content from the Content Partner Vault Sandbox to the customer environment via Vault to Vault Migration. In order to successfully migrate content from one Vault to another, the configuration of the two environmnets needs to be aligned.

To use, Copy to Another vault web action, this must be configured, and the user action must be set up for all approproate Document Lifecycle State.

Click on 'Copy to Another Vault' link on the action menu and fille the following values and click 'Validate'.

- Target Vault URL.
- Target Vault Username.
- Target Vault User Password

If migrating content to a Csutomers Vault then Username and Password will need to be provided by the Customer. Make sure you do not include the final / after .com as this will cause an error.

### Summary of Changes

Prior to beginning the copy of files, a validation occurs, if this is successful then a summary of the activity to take place will be shown.

- If all files to be copied are already located in the target Vault with a matching External ID, then this action will be Update.
- If all files to be copied are new to the target Vault, then the action will be Create.

### Errors

If the Document Validation fails, an error message will show on the page. In order to continue, the errors must be fixed in the source Vault PromoMats before Vault to Vault migration can occur.

## Target Vault Confirmation

The Vault will notify you via email once the migration is done and content is available in the target Vault (Vault the content is being migrated to).

Source Vault Link field metadata will show the original document in Source Vault (Vault the content came from).

To ensure successful Vault to Vault Migration, It's important to ensure the following:

1. Vault PromoMats and Veeva CRM Online are synced.

2. External Id Field of the Product on the Presentation (and Multichannel Slides) exist in both Vaults (Source and Target).
    - The customer should provide the External Id of the Product in the Target Vault PromoMats and these should be re-created in the Source Vault with a matching External Id.

3. Matching Required Fields in both Vaults and ensuring presentation ID already exists in Target Vault.

## Product External ID

Just like when working with Vault - CRM sync, the External ID Field of the Product on the Presentation and slides needs to exist in both Vaults (Source and Target).

The customer should provide the External ID of the Product in the Target Vault. This should be re-created as a matching product in the Source Vault with a matching External ID.

## Document Fields and Presentation ID

Please ensure fields tha exist in the Target Vault are also created (and populated if mandatory fields) in the Source Vault. Ask your customers for any specific fields toc reate (Labels and API name).

The Vault Summary Screen will notify you of the differences between both Vaults.

Please make sure that Presentation IDs used are unique and do not exist in the Target Vault when undertaking a migration. Presentation ID value populated in this field already exists in the Target Vault:

- The migration will work BUT the Integration between Vault and CRM will fail.

## Other Considerations

Fields marked as required in the target Vault cannot be blank for the original binders and documents. Please note, Document Attachments, CrossLink Documents, and Custom Relationhsips are not copied.

Objects and object records referenced in the presentation must exist in both the source and target Vaults and have identical External ID values.

Filenames cannot include special characters (=, #, ?, etc.).
