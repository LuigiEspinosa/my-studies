## Terms to Know

### CLM Presentation

A collection of Key Messages that make up the presentation that the Rep uses with the HCP.

These are commonly referred to as IVAs (Interactive Visual Aids), eDAs (Electronic Visual Aids), DSAa (Digital Sales Aids), etc.
### Key Message

Specific messages that are delivered for each product or detail topic selecting in the detailing section (e.g. Safety, Dosing, etc.).

A Key Message is a slide of a CLM Presentation and can be an HTML, Image, PDF or Video file.
## Content Design Philosophy

![[Content Design Philosophy.png]]
## Wide Content Philosophy

Wide Content means each slide or page in presentation is a individual file loaded as a separate Key Message.

This means that each slide viewed by an HCP can be tracked and reported on.

Additional tracking can also be coded into the content to allow for more data using Call Clickstream.

- Many slides in a presentation.
- Navigation via native CLM Media Player capabilities
	- Navigation bar
	- Swipe left/right
	- Pinch and Select
	- gotoSlide
- Tracking at slide level still allows good granularity.
- Easy to update specific key message.
## Wide Content CLM Presentation and Tracking

- Individual Key Messages and associated Slides are visible in the Navigation Bar.
- On the Call Report, each Key Message viewed is recorded in the CRM.
## Deep Content Philosophy

Deep Content means all slides or pages in a presentation are hosted in a single individual file loaded as a single Key Message.

This means that only the first slide viewed by an HCP can be tracked and reported on. To allow the Customer to have data on slide usage this will need to be coded into HTML5 content using Call Clickstream.

- Navigation in built into the content.
- Call Clickstream programming to report data.
- Preferred by some agencies.
- Poor for tracking, synchronization, and updates.
- Loss of Default CLM functionality.
## Deep Content CLM Presentation and Tracking

- Only the first Key Message is visible in the navigation bar as the entire presentation is one highly interactive asset.
- On the Call Report, only one Key Message is viewed and recorded in the CRM.
## Wide versus Deep Content

![[Wide versus Deep Content.png]]
## Content Design Philosophy Summary

Ideal content design will be a mix of both philosophies, meaning many slides but those slides will include elements of deep content within them.

Combination Content -> Complex Key Message Architecture

- Best of both worlds.
- Architect content using gotoSlide, sub presentations and hidden slides.
- Great user experience, easy navigation.
- Granular tracking (deep). easy reporting (wide)
- Easy to update slides, best slide level performance.
## Content Packaging

After creating an item of media, Content Creators must prepare the media before it can be loaded into Vault PromoMats.

Vault PromoMats has a specific packaging format that must be followed for content to be available on iPad or Windows devices.

Content must be compressed into a ZIP file following the required format which varies according to content type.

HTML ZIPs must contain an **index.html** and **thumb.png** file. They can also have folders for CSS, fonts, images, JavaScript, etc.

These files must be compressed directly into a ZIP file (without an additional folder layer). The ZIP is called **\<filename\>.zip**.

Image, PDF, Video and PowerPoint ZIPs must follow the same process with specific file types that are compressed into a ZIP file and called **\<filename\>.zip**.

- **Image:** contain image.png and thumb.png.
- **Video:** contain video.mp4, poster.png and thumb.png.
- **PDF:** contain pdf.pdf and thumb.png.
- **PowerPoint:** contain \<document name\>.pptx , poster.png and thumb.png.
## Resolution Considerations

Select the resolution which matches the majority of the devices that the Reps are using.

On Windows, images that are in the format 4:3 aspect ratio display centered with black borders on the slides.

| Type           | Name      | iPad Resolution | Windows Resolution | Typical Size |
| -------------- | --------- | --------------- | ------------------ | ------------ |
| Original Media | media.png | 2048x1536       | 1920x1080          | 250kB        |
| Thumbnail      | thumb.png | 200x150         | 195x110            | 7kB          |
## Uploading CLM Content to Vault

Content is loaded directly into Vault PromoMats first. Customers will usually complete the review and approval process within Vault PromoMats.

Content needs to be synced to Veeva CRM Online before it can be downloaded to the Veeva CRM Mobile application to be shown by Reps and HCPs.

A common error when first uploading CLM Content is failing to sync Vault PromoMats and Veeva CRM which results in the CLM Content not being available on the Veeva CRM Mobile Application on iPad/Windows.

Within Vault PromoMats and Veeva CRM, there are different terms used to describe the Presentation and Slides.

It is important to understand that the two different terms can refer to the same item.

| Vault                        | CRM                    |
| ---------------------------- | ---------------------- |
| Multichannel Binder          | CLM Presentation       |
| Multichannel Slide           | Key Message            |
| Multichannel Slide in Binder | CLM Presentation Slide |
| Distribution Package         | Media File ZIP         |
## Create a Presentation

The first step to uploaded content in Vault PromoMats is to create a Binder and specify this as a Multichannel Presentation.

The Binder becomes the CLM Presentation record in Veeva CRM and groups the Slides into a presentation.

1. Login to Vault PromoMats and Navigate to 'Library'.
2. Click 'Create'.
3. Select 'Binder'.
4. Choose Binder Type 'Multichannel Presentation' and Click 'Ok' and 'Next'.
## Enter Required Vault Fields

Before te Multichannel Presentation can be saved, the required metadata fields (highlighted yellow) need to be filled out.

In addition, the CLM Content field must be selected '**Yes**' to allow the CLM content to be synced to Veeva CRM and viewed on the iPad/Windows device.

After filling out the required fields, click '**Save**'.
## Managing Multichannel Presentations

This creates an empty Multichannel Presentation in Vault PromoMats, in order to view content in the Veeva CRM Mobile Application on iPad/Winodws, slides need to be added in the Binder.

Click '**Edit Binder**' to add slides.

If metadata must be edited, this can be done by clicking '**Edit Fields**'.
## Add Content to Multichannel Presentation

In Edit Binder mode, there are two options to add content by clicking the '**Add**' button.

'**Upload File**' allows content to be uploaded from the Desktop to Vault PromoMats directly within the Presentation.

If the slides have previously been uploaded to Vault PromoMats, the '**Existing Documents**' button allows these to be linked in the Presentation.
## Upload New Slides to Presentation

To upload new content, click '**Upload File**'.

1. Upload the ZIP file.
2. Choose '**Multichannel Slide**' from the document type drop-down.
3. Click 'Next' button.

## Enter Required Vault Fields

Before the Multichannel Slide can be saved the required metadata fields (highlighted yellow) need to be filled out.

The Name field will be auto-published based on the name of the ZIP file; this can be overwritten if needed.

As the Slide is added directly into the Binder the Publish for Veeva CRM (CLM) = Yes and Product = Cholecap is populated from the Presentation record.

Click '**Save**' to return to the Binder page.

## Link Existing Documents to Presentation

To link existing slides in Vault PromoMats to the CLM Presentation, click '**Existing Documents**'.

Vault PromoMats will open a window to show Multichannel Slides that match the Product and Publish for Veeva CRM (CLM) metadata fields entered in the Multichannel Presentation.

To add Slides to the Presentation, click the 'green +' button.

## Ordering Slides

Vault PromoMats automatically orders the slides in the Presentation in the order in which they were uploaded.

If needed, these can be dragged into the correct order to match how the Slides should display in Veeva CRM when using the native Veeva swipe.

Once all content is loaded into Vault PromoMats, click '**Done Editing**'.

## CLM Presentaion and Slide States

Content loaded into Vault PromoMats is automatically created in the Draft state. In Content Partner environments this content can be left in the Draft state when syncing to Veeva CRM.

## CLM Admin Tab for Syncing

CLM content is uploaded in Vault PromoMats and needs to be synced across to Veeva CRM to be accessible via the Veeva CRM Mobile Application on either iPad or Windows tablet.

Login to Veeva CRM Online a an Admin User (e.g. cloader) and click on the '**CLM Admin**' tab. [^1]

Select '**Sync**'. If successful, this will sync the CLM Presentation and associated slides from Vault PromoMats into Veeva CRM.

[^1]: If the CLM Admin tab isn't visible all Tabs in CRM can be accessed via clicking the '+' button.
