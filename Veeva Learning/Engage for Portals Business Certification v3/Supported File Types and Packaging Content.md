## Supported Media File Types

Engage for Portals supports the following Media File types:

- HTML5
- Images
- PDF
- Videos
- PowerPoint

### HTML

HTML can be coded as Fixed size or Responsive content:

- **Fixed Size Content**
	- If coded as Fixed Size content, content will display at that predetermined size with scroll bars as needed.
	- May not take up the entire screen.
	- Utilize the HTML height and width properties in Vault to center the fixed size content in the player.
- **Responsive Content**
	- Content will resize and adjust with the player.

For the best results, HTML content should be coded using **Responsive design**.

Embedded videos in HTML are not supported in Engage for Portals.

### Image

Engage for Portals supports **.jpg, .gif, .bmp** and **.png** image formats. Images can be created at any resolution size and any aspect ratio.

Image uploaded to Vault are then converted to .png format.

If the media player is:

- Larger than the image - the content will appear with black borders around it.
- Smaller then the image - the content will be resized to fit into the player.

In full screen mode, the image expands to fit the screen while retaining the aspect ratio.

Images display at 800x600 resolution.

### Video

Engage for Portals supports **.avi, .flv, .mpg, .mp4, .mov/m4gv,** and **.wmv.** video formats. Videos should be created at 720p and at any aspect ratio.

When videos are uploaded to Vault they are converted to .mp4 and encoded into 3 different bit rates. When displayed in the Engage For Portals player, the best bit rate for the connection speed will be automatically chosen.

If the media player is:

- Larger than the video - the content will appear with black borders around it.
- Smaller than the video - the content will be resized to fit into the player.

Full screen mode will expand the video to fit the screen .Any black bars will remain to maintain the aspect ratio.

### PDF

PDF is a common file type for delivering content.

Any document type for which Vault generates a Viewable Rendition can be used as a PDF slide.

There is a limit for PDF documents to 100 pages for best performance.

When the Engage player encounters a PDF slide, it automatically resizes the PDF content to fit inside the player. The PDF displays with all player controls and buttons enabled.

## Veeva Content Packaging

Vault PromoMats has a specific packaging format that must be followed for content to be available for use in CLM, Engage Meeting or Engage for Portals.

Content must be **compressed** into **a ZIP file**. Note the format of the documents in the ZIP file varies and is dependent on the content type (HTML, Image, Video, PDF or PowerPoint content).

- **HTML and PowerPoint content** must be created and manually packaged according to the Vault PromoMats requirements.
- **Image, Video and PDF content** can be uploaded to Vault PromoMats without packaging in a ZIP file and Vault PromoMats can automatically create and package this content.

## HTML Content Packaging

HTML ZIPs must contain an **index.html** and **thumb.png** file. They can also have folders for CSS, fonts, images, JS, etc.

These files must be compressed directly into a ZIP file (without an additional folder layer).

The ZIP is named **\<filename\>.zip**

![[HTML Content Packaging.png]]

## Other CLM Content Packaging

As a reminder, **Image, PDF, Video** and **PowerPoint** ZIPs must follow the same process with specific file types that are compressed into a ZIP file named **\<filename\>.zip**.

- **Image:** contain image.png and thumb.png.
- **Video:** contain video.mp4, poster.png and thumb.png.
- **PDF:** contain pdf.pdf and thumb.png.
- **PowerPoint:** contain \<document name\>.pptx, poster.png and thumb.png.

![[Other CLM Content Packaging.png]]

## Auto-Packaging for Images, PDFs and Videos

Vault PromoMats can automatically create Veeva Distribution Packages for Images, PDFs and Videos which allows the content to sync to Veeva CRM and be viewed in CLM and Engage for Portals. The auto-packaging feature can reduce administration effort for simple content as it will create a ZIP file in the required format.

Vault PromoMats adds the content file and a system generated thumbnail to the ZIP package and displays a viewable rendition for annotations.

To ensure that Vault PromoMats creates the Veeva Distribution Package for these content types there are additional fields that must be populated when loading the file:

- CRM Media Type must be populated with Image, PDF or Video.
- Publish for Veeva CRM (CLM) or Publish for Veeva CRM (Portals) must be populated with Yes.

The Veeva Distribution Package or ZIP file that is created is named based on the Vault ID and Document ID rather than the name of the original file uploaded.

This is important for Content Creators when using gotoSlide navigation from HTML content to auto-packaged content.
