## Uploading for Portals Content to Vault

Content is loaded directly into Vault PromoMats first.

Content needs to be synced to Veeva CRM Online before it can be downloaded to the Veeva CRM Mobile application to be shown by Reps and viewed by HCPs.

A common error when first uploading Engage for Portals Content is failing to sync Vault PromoMats and Veeva CRM which results in the Engage for Portals Content not being available.

## Create a Presentation

The first step to upload content in Vault PromoMats is to create a Binder and classify it as a Multichannel Presentation.

The Binder becomes the Engage for Portals Presentation record in Veeva CRM and groups the Slides into a presentation.

1. Login to Vault PromoMats and Navigate to 'Library'.
2. Click 'Create'.
3. Select 'Binder'.
4. Choose Binder Type 'Multichannel Presentation' and Click 'Ok' and 'Next'.
## Enter Required Vault Fields

Before the Multichannel Presentation can be saved, the required metadata fields (highlighted yellow) need to be filled out.

The Publish for Veeva CRM (CLM) field must be '**Yes**' to allow the CLM content to be synced to Veeva CRM and viewed on the iPad/Windows device.

After filling out the required fields, click '**Save**'. [^1]

[^1]: Partners have access to a previously-created website for testing purposes (located in Vault in Admin > Business Admin > Websites)

## Add Content to Multichannel Presentation

Once a Multichannel Presentation has been created in Vault PromoMats, slides must be added to the Binder for content to be viewable.

Click '**Edit Binder**' to add slides.

If metadata must be edited, this can be done by clicking the pencil icon.

In Edit Binder mode, there are two ways to add content by clicking the '**Add**' button.

'**Upload File**' allows content to be uploaded from the Desktop to Vault PromoMats directly within the Presentation.

If the slides have previously been uploaded to Vault PromoMats, the '**Exsiting Documents**' button allows these to be linked in the Presentation.

## Add New Slides to Presentation

To upload new content, click '**Upload File**'.

1. Upload the ZIP file
2. Choose '**Multichannel Slide**' from the document type drop-down.
3. Click 'Next' button.

## Uploading the file

Select an HTML, image, video, PPT or PDF file and upload it to Vault.

The field CRM Meda Type needs to be populated (HTML, Image, Video, PPTX, PDF).

- **Image:** Vault converts the image to png and creates a thumb.png (200x150px)[^2] of the image. 
- **PDF or PPT:** Vault creates a thumbnail .png (200x150px), and zips the files creating the Veeva Distribution package.
- **Video:** Vault converts the video to three video files and creates a poster and thumb.png (200x150px) of the first frame of the video.
- **HTML:** Upload the zip file as Distribution Package rendition. if utilizing legacy packaging structure, enter the HTML file name. Do not enter this information if using the new Vault packaging structure with index.html.

[^2]: A new image can be uploaded if you do not want to use the auto-generated thumbnail.

## Enter Required Vault Fields

Before the Multichannel Slide can be saved the required metadata fields (highlight yellow) need to be filled out.

The Name field will be auto-populated based on the name of the ZIP file; this can be overwritten if needed.

As the Slide has been added directly into the Binder, the following fields will be auto-populated:

- Publish for Veeva CRM (CLM) = Yes.
- Publish for Veeva CRM (Portals) = Yes.
- Product = Cholecap.

Click '**Save**' to return to the Binder page.

## Link Existing Documents to Presentation

To link existing slides in Vault PromoMats to the CLM Presentation, click '**Existing Documents**'.

Vault PromoMats will open a window to show Multichannel Slides that match the Product and Publish for Veeva CRM (CLM) metadata fields entered in the Multichannel Presnetation.

To add Slides to the Presentation, click the 'green +' button.

## Engage for Portals Presentation and Slide States

Content loaded into Vault PromoMats is automatically created in the Draft state.

This content needs to be changed to Staged to be reviewed.

Binders in Approved state cannot be edited and therefore should only contain approved Slides. [^3]

[^3]: Only draft binders can be edited; only staged content should be put into draft binders for this reason. In Customer environments they will have their own workflows and states for syncing to CRM.

## End-to-End Process

- **Create** Engage For Portals content according to guidelines.
- **Load** content into Vault.
- **Pull** content into Veeva CRM through the Multichannel Engine.
- **Send** Shared links to Engage For Portals vie email or post links on third part portals for HCPs.

## Engage metadata - CRM

The Engage Metadata Admin page must be populated with CRM Admin user credentials and Vault Admin credentials.

These credentials are required to ensure successful synchronization of the content from Vault.

Once the content has been uploaded, configured and staged  (or Approved) in Vault, it can be 'pulled' into CRM.

Two new tabs in CRM enable you to manage the synchronization and testing of content:
- Engage Metadata Admin
- Engage Content Admin
 
Navigate to **Engage MetaData Admin** tab.

Select 'Sync' on the Engage Metadata Sync Admin Console section.
- Sync success and rows transferred will be shown on screen.
- If the process fails, an error message will be provided.

All new content in Vault should be synchronized using this function.

Navigate to **Engage Content Admin** tab.

Check the content is available via the Engage Content Admin console tab my selecting Multichannel Content Name link on the Deployment Manager section.

Preview the Staged or Approved content through the Engage For Portals link in a browser window.

## Related Content - CRM

The Related Content feature enables Engage for Portals viewers the ability to see related presentations in the Engage Media Player.

This also gives users greater visibility to more content.

## How to include Engage Related Presentations

To include a Related Presentation, the same website URL needs to be populated for the related presentations.

The Display Order needs to be filled in as well (defaults to 1).

## Generate Engage URL

![[Generate Engage URL.png]]

## Account tracking if not using Approved Email

If the "`&actId=<Account SFDC record ID>`" parameter is appended to an Engage For Portals link, the Multichannel Activity and Multichannel Activity Line will be associated with that specific Account.

Additionally, the `&extId=<anything>` parameter can be utilized to associate 3rd party external ID Multichannel Activity and Multichannel Activity Lines via an Account External ID Map record.
