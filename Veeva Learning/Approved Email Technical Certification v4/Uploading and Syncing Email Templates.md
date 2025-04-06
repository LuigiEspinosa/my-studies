## Upload an Email Template

In order to upload the Approved Email Template into Vault PromoMats, Content Creators must have an HTML file as well as a separate Assets ZIP file containing the email images.

1. Login to Vault PromoMats and Navigate to 'Library'.
2. Click 'Create'.
3. Select 'Upload' and 'Continue'.
4. Upload the HTML source file.
5. Choose Email Template from the document type drop-down.
6. Click 'Next'.

## Enter Required Vault Fields

Before the Email Template can be saved, the required metadata fields (highlighted yellow) need to be filled out.

After filling out the required fields, click 'Save'.

The From and Reply to fields can be hard-coded or dynamic using `{{userEmailAddress}}` and `{{userName}}` Tokens. The Subject field can be hard-coded or dynamic using Custom Text or Merge Tokens.

## Upload Image Assets

Once the Email Template has been created, the images need to be associated with the Template.

To add images, select the '+' in the Assets section in the Vault PromoMats metadata.

Upload the Assets ZIP file.

The path in the HTML should be like this:

```html
img src="foldername/imagename.png" or
img src="foldername/imagename.jpg"
```

Once the Assets have been uploaded, the viewable rendition in Vault PromoMats will show the email HTML and Images.

If the images aren't rendering, you may need to re-render the document via the Actions menu.

## Approving the Email Template

Before syncing Vault PromoMats and Veeva CRM, the Email Template must be set to Approved [^1] by clicking the Workflow and Change State menu and selecting 'Approved'.

[^1]: In Customer environments, testing is usually done using the Staged State rather than Approved State. If the Email Template is in the Staged State, then this will only be available to Users with the 'Approved Email Admin' field checked on their User Record.

## Syncing CRM and Vault

Approved Email content is uploaded in Vault PromoMats and needs to be synced across to Veeva CRM to be accessible via Veeva CRM Online and Mobile.

Log into Veeva CRM as an Admin User (e.g. cloader) and click on the 'Approved Email Administration' tab.

Select 'Incremental Refresh'.

If successful, this will sync the Approved Email Template from Vault PromoMats into Veeva CRM making it available to be used.

If the Approved Email Administration Tab isn't visible, all Tabs in Veeva CRM can be access via clicking the '+' button.

## Quiz

> [!faq]- Approved Email content is uploaded in Vault PromoMats and is accessible directly in Veeva CRM Online and Mobile without any additional steps.
> 
> False.

> [!faq]- There is no way to re-render images if needed.
> 
> False.

> [!faq]- When populating the Vault Fields in a Email Template, the Subject field needs to be hard-coded.
> 
> False.

> [!faq]- In order to upload the Approved Email Invitation into Vault PromoMats, Content Creators must have an HTML file with images inserted.
> 
> False.

> [!faq]- In Vault, the fields highlighted in __ are required.
> 
> Yellow.

> [!faq]- Images in an Email Template need to be uploaded in the Assets Section.
> 
> True.

> [!faq]- To synchronize content from Vault PromoMats into CRM Online, the user needs to click on the:
> 
> Approved Email Administration Tab.

> [!faq]- If the Email Template is in the Staged State, then this will only be available to Users with the 'Approved Email Admin' field checked on their User Record.
> 
> True.
