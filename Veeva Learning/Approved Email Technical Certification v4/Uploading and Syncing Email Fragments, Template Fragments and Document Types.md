## Uploading Email Fragments

In order to upload the Approved Fragment into Vault, Content Creators must have the HTML file and images in Assets ZIP file.

1. Login to Vault PromoMats.
2. Navigate to 'Library'.
3. Click 'Create'.
4. Select 'Upload' and 'Continue'.
5. Upload the HTML source file.
6. Choose Email Fragment from the document type drop-down.
7. Click 'Next'.

### Enter Required Vault Fields

Before the Email Template can be saved, the required metadata fields (highlighted yellow) need to be filled out.

After filling out the required fields, click 'Save'.

### Upload Image Assets

Once the Email Fragment has been created, the images need to be associated with the Fragment.

To add images, select the '+' in the Assets section in the Vault metadata.

Upload the Assets ZIP file.

The path in the HTML should be like this:

```html
img src="foldername/imagename.png" or
img src="foldername/imagename.jpg
```

Once the Assets have been uploaded the viewable rendition in Vault PromoMats will show the email HTML and Images.

If the images aren't rendering, you may need to re-render the document via the Actions menu.

### Add Email Fragment to Email Template

Once the Email Fragment has been created, it can be associated with the Email Template.

1. Open the relevant Email Template and click on 'Relationships'.
2. Click the '+' to open the Add Related Email Fragments view and select the relevant Email Fragment.

When a Fragment is associated with a Template, only the associated Fragment can be selected in that Template. If no Fragment is associated with the Template, all Fragments can be selected.

## Uploading Template Fragments

In order to upload the Template Fragment into Vault, Content Creators must have the HTML file and images in an Assets ZIP file.

1. Login to Vault PromoMats.
2. Navigate to 'Library'.
3. Click 'Create'.
4. Select 'Upload' and 'Continue'.
5. Upload the HTML source file.
6. Choose Template Fragment from the document type drop-down.
7. Click 'Next'.

### Enter Required Vault Fields

Before the Template Fragment can be saved, the required metadata fields (highlighted yellow) need to be filled out.

After filling out the required fields, click 'Save'.

### Upload Image Assets

Once the Template Fragment has been created, the images need to be associated with the Template.

To add images, select the '+' in the Assets section in the Vault metadata.

Upload the Assets ZIP file.

The path in the HTML should be like this:

```html
img src="localdrive/imagename.gif"
```

Once the Assets have been uploaded the viewable rendition in Vault PromoMats will show the email HTML and Images.

Not all Template Fragments contain images, this step can be skipped if this file doesn't have images. If the images aren't rendering, you may need to re-render the document via the Actions menu.

### Add Template Fragment to Email Template

Once the Template Fragment has been created, it needs to be associated with the Email Template.

1. Open the relevant Email Template and click on 'Relationships'.
2. Click the '+' to open the Add Related Template Fragments view, select the relevant Template Fragment and click 'Save'.

## Uploading Document Types

In order to upload a Document into Vault, Content Creators must choose the Document type first.

1. Login to Vault PromoMats.
2. Navigate to 'Library'.
3. Click 'Create'.
4. Select 'Upload' and 'Continue'.
5. Upload the Document.
6. Choose the Document type from the drop-down,
	- These are usually Reference Documents (Important Safety Information or Prescribing Information) or Promotional Pieces.
7. Click 'Next'.

### Enter Required Vault Fields

Before the Email Fragment can be saved, the required metadata fields (highlighted yellow) need to be filled out.

After filling out the required fields, click 'Save'.

### Add Documents to Email Fragment/Email Template

Once the Document has been created, it needs to be associated with the Email Template or the Email Fragment.

1. Open the relevant Email Template or Email Fragment and click on 'Relationships'.
2. Click the '+' next to the relevant section to associate the document.

Remember to add the Vault Content Token in the HTML. Examples shown in previous documentation (Approved Email Basics).

### Add ISI/PI Documents to Email Fragment/Email Template

The previous example shows the steps for a Promotional Piece document type using the Token `{{PieceLink}}` in the HTML.

The same steps apply for the following documents:

- Reference Document: Important Safety Information = `{{ISILink}}`.
- Reference Document: Prescribing Information = `{{PILink}}`.

### Adding Other Documents to Email Fragments/Email Templates

When using the `{{$VaultDocumentID}}` Token, link the Other Related Documents with '+' to the Email Template or the Email Fragment.

When using the `{{$VaultDocumentID}}` Token, remember to pull this Document ID from the document's Vault URL.

## Approving and Syncing Approved Email Content

### Approving Documents

Before syncing Vault PromoMats and Veeva CRM, the Email Fragment, Template Fragment and all documents must be set to Approved[^1] by clicking the Workflow Actions button and selecting 'Approved' on each document type.

The Workflow Action button will show a drop-down if there are multiple states to choose from. If your User only has permissions to one state, then the drop-down won't display and when the Workflow Action button is clicked will change the state.

- i.e., Change state from Draft to Staged after click.

[^1]: In Customer environments, testing is usually done using the Staged State rather than Approved State.

### Syncing CRM and Vault

Approved Email content is uploaded in Vault and then needs to be synced across to Veeva CRM to be accessible via the iPad or CRM Online.

1. Log into Veeva CRM as an Admin User (e.g. cloader) and click on the 'Approved Email Administration' tab.
2. Select 'Incremental Refresh'. If successful, this will sync the Documents from Vault into Veeva CRM making it available to be used.

If the Approved Email Administration Tab isn't visible, all Tabs in Veeva CRM can be accessed via clicking the '+' button.

## Quiz

> [!faq]- When a Fragment is associated with a Template, only the associated Fragment can be selected in that Template.
> 
> True.

> [!faq]- In Vault, the required fields are highlighted in __
> 
> Yellow.

> [!faq]- Content creators don't need to add the Vault Content Token in the HTML to link a Document in an Email Fragment.
> 
> False.

> [!faq]- In order to upload an Email Fragment into Vault PromoMats, Content Creators must have an HTML file with images inserted.
> 
> False.

> [!faq]- The token `{{PieceLink}}` in the HTML will link to a Prescribing Information Document Type.
> 
> False.

> [!faq]- In CRM Online, the user will need to click on the __ to synchronize content from Vault PromoMats.
> 
> Approved Email Administration Tab.

> [!faq]- Before syncing Vault PromoMats and Veeva CRM, the Documents must be set to Staged in the Agency's environment.
> 
> False.

> [!faq]- All Template Fragments need to contain images.
> 
> False.

