## Veeva Content Packaging

Vault PromoMats has a specific packaging format that must be followed for content to be available for use in CLM, Engage Meeting or Egange for Portals.

Content must be **compressed** into a **ZIP file**, the format of the documents in the ZIP file varies, this is dependent on the content type, HTML, Image, Video, PDF or PowerPoint content.

- **HTML Content** must be created and manually packed according to the Vault PromoMats requirements.
- **Image, Video and PDF content** can be uploaded to Vault PromoMats without packaging in a ZIP file and Vault PromoMats can automatically create and package this content.

## HTML Content Packaging

HTML ZIPs must contain and **index.html** and **thumb.png** file. They can also have folders for CSS, fonts, images, JS, etc.

These files must be compressed directly into a ZIP file (without an additional folder layer).

The ZIP is called **\<filename\>.zip**

## Other CLM Content Packaging

As a reminder, **Image, PDF, Video** and **PowerPoint** ZIPs must follow the same process with specific file types that are compressed into a ZIP file and called **\<filename\>.zip**.

- **Image:** contain image.png and thumb.png.
- **Video:** contain video.mp4, poster.png and thumb.png.
- **PDF:** contain pdf.pdf and thumb.png.
- **PowerPoint:** contain \<document name\>.pptx, poster.png and thumb.png

## Auto-Packaging for Images, PDFs and Videos

Vault PromoMats can automatically create Veeva Distribution Packages for Images, PDFs and Videos which allows the content to sync to Veeva CRM and be viewed in CLM and Engage for Portals. the auto-packaging feature can reduce administration effort for simple content as it will create a ZIP file in the required format.

Vault PromoMats adds the content file and a system generated thumbnail to the ZIP package and displays a viewable rendition for annotations.

To ensure that Vault PromoMats creates the Veeva Distribution Package for these content types there are additional fields that must be populated when loading the file:
- CRM Media Type must be populated with Image, PDF or Video.
- Publish for Veeva CRM (CLM) or Publish for Veeva CRM (Portals) must be populated with Yes.

The Veeva Distribution Package or ZIP file that is created is named based on the Vault ID and Document ID rather than the name of the original file uploaded.

This is important for Content Creators when using `gotoSlide` navigation from HTML content to auto-packaged content.

## Preview Presentations

With this feature, Users can preview CLM content stored in their Vault PromoMats from a browser, instead of having to sync the content to a mobile device.

Open a CLM or Engage Presentation and click Preview CLM from the action menu.

It might take a few minutes for Vault to generate the preview.

There will be a notification visible under the alert bell button when the preview becomes available to view. Vault also sends a notification email.

Open the Presentation again and select the 'Preview CLM' action.

Functionalities:
- Preview shows fix navigation elements like navigation bar and history bar.
- Opens in new tba.
- Change between regular and retina iPad resolution.
- Simply email the preview link to colleagues.

## CLM Preview: Considerations

CLM Preview may not accurately represent content in the desktop browser. For the best results, view the CLM Preview in the native browser on a mobile device.

Always complete the final review using Veeva CRM Desktop app (Mac or Windows) or using the Veeva CRM apps for iPad.

In order to preview a presentation with the legacy packaging structure rendition package you will need to populate the HTML File Name field with the name of the HTML index file.

CLM Preview only mimics CLM.

- **HTML Content** - Some HTML files will not render properly, depending on how the HTML is coded.
- **PDF and Video content** embedded in HTML is not supported.
- **Links in PDF content** are not supported.
- Shared Resources can be used if correctly coded:
	- i.e. (./shared works, ../shared does not work)

