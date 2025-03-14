## Auto-Publishing for CLM and Engage Content

- Requires only one step to create multichannel content.
- Reduces publishing time for PowerPoint, PDF, Word, and video files (not available for HTML content).
- Allows you to manage the distribution, creation, versioning and withdrawal of multichannel content directly from an original document.
- With Auto-Publishing, Vault automatically generates multichannel content (when you set the multichannel content fields, CLM or Engage, to Yes).
- You can configure CRM rendition settings and behaviors to specify which document types are available in CRM, as well which file types (PowerPoint, PDF, Word, or video) are available.

### Using Auto-Publishing

- User can publish any Promotional Piece document simply, by setting the Publish for Veeva CRM (CLM) or (Portals) field value to "Yes".
- Vault will generate the rendition in the background and show notification when the rendition generation process is finished.
- Rules for product and other fields that should be populated with CLM/Engage content still apply.
- Only the original MLR Document needs to be managed.

### Configuration: CRM Rendition Settings

1. Navigate to Admin > Settings > CRM Rendition Settings.
2. Create a new Rendition Setting.
3. Select CLM Content (or Engage content).
4. Set a 'Name' and a 'Document Type' for the Rendition Setting. _Document Type controls to which Type the Rendition Setting applies. You may create multiple Rendition Settings for different Document Types_.
5. Save the Record.
6. Still within the Record, scroll to the CRM Rendition Behavior section and select 'Create'.
7. You may choose the behavior depending on the file type of the Promotional Piece. _The below example: if you upload a PPT file as Promotional Piece, Vault will generate a CLM Presentation, and each page of the PPT will be a separate CLM slide._
8. You may set different behavior for different file types. _In the below example: if you upload a PDF file as Promotional Piece, Vault will generate a CLM/Engage Presentation with one slide only, containing the vertically scrollable PDF document_.

Consider tracking limitations when having one slide only for CLM. Related information can be found in the Packaging and Administration of Presentations and Slides Doc.

### Original File Format vs. Vault Rendition Options

![[Original File v Vault Rendition.png]]

### Configuration: Document Fields

1. Navigate to Configuration > Document Fields > Promotional Piece and select Add > Existing Shared Field.
2. Select 'Publish for Veeva CRM (CLM) '(`clm_content__V`)' and click 'OK'. This will add the existing CLM Content shared field to all documents in the Promotional Piece document type. This is the same field that you set on Multichannel Presentation or Slide. _You may add the Engage Content field (for managing Engage for Portals content) or other fields like CLM Presentation id if you would like to use additional CLM or Engage functionalities._
3. In Veeva CRM, navigate to the CLM Admin tab and edit the Vault Connection Management settings. _You may do the same on the Engage Metadata Admin tab, if you would also like to generate Engage for Portals content with Single Doc Multichannel._
4. Change the Connection Type from Binder and Slides to All. _This setting ensures that "regular" CLM content, and the content utilizing Single Document Publishing, will both sync._

### Update the CRM to Vault Mapping

1. Click View Map in the Vault Connection Management Section.
2. Click Compare CRM to Vault. _This will pull though the additional Doc Types set up in Vault PromoMats_.

### Creating Multichannel and Engage Content

![[Multichannel and Engage Content.png]]

## Auto-Publishing for Approved Email Fragments

Vault PromoMats allows automation of Email Fragment creation and publishing for CRM, through new document fields and lifecycle entry actions:

- 'Publish to CRM (Email)' document field.
- 'Update Email Fragment State' entry action.

It automates email fragment master template detection for email fragment creation, and sync between related piece/medical content and the email fragment.

### Configuration

1. Admins need to enable the Publish Approved Email Fragments for Veeva CRM capability. _Go to Vault Admin panel > Settings > Application Settings > Check 'Publish Approved Email Fragments for Veeva CRM'._
2. The shared document field 'Publish to CRM (Email)' needs to be enabled and added to the respective document types and fields layouts in Veeva Vault. _Go to Vault Admin panel > Configuration > Document Setup > Document Fields > Shared Fields > Click 'Publish to CRM (Email) > Make sure this is in active status and select a proper display section._
3. _Document Fields, select the Document Type (i.e. Promotional Piece) > Click "Add" button and select 'Existing Shared Field' > Select 'Publish for Veeva CRM (Email) (`email_content__v`) and click 'Ok'_. Repeat the step for other document types if necessary.
4. Consider setting up entry actions for your lifecycle states of your related piece/medical content, in which the Email Fragment should also receive an update. This will allow you to automatically publish the Fragment to CRM once the initial piece reaches a Steady State. For more details on this, please refer to [Vault Help](https://platform.veevavault.help/en/gr/12399/)

### Using Auto-Publishing

1. Upload the document and master email fragment in to Veeva Vault.
2. Make sure that in the document metadata, 'Publish for Veeva CRM (Email)' is set to "Yes".
3. Veeva Vault will decide which Master Email Template to apply for a document based on the Master Email Fragment Metadata (such as Country, Language, Product, as well as the 'Targeted Document Type' field[^1]).
4. Once saved, an Email Fragment is automatically created. In the Email Fragment metadata, the document is linked to the Email Fragment in the 'Based on' and 'Related Piece' sections under Relationships.
5. If the document entry action has been configured, the Email Fragment state will be updated when the related document state is changed during the MLR process. _For example, when the related piece state is changed to Approved, the Email Fragment state will also be automatically updated to Approved_.

[^1]: If you cannot see the 'Targeted Document Type' field in the metadata, you can activate it in Vault under Configuration > Document Field > Base Document > Master Email Fragment > Targeted Document Type.

### Publishing Method for Email Fragments

After content is synced to Veeva CRM, users can distinguish between the auto-published and user-generated Email Fragments by opening the Approved Documents in CRM, and viewing the Publish Method value.

To enable this feature, grant Edit access to the Approved Email Sync Integration User on the `Publish_Method_vod` field and add the 'Publish Method' field into the Email Fragment page layout on the Approved Document object.
