## Training Content with Watermark

CLM content can be designated as training content in Vault PromoMats which gives customers the ability to separate training content from field-ready content and gives Reps the ability to practice on content prior to use in the field with HCPs.

The training option is only visible to Reps, in the Media section on the Veeva CRM Mobile, when content is flagged as training content. When an HCP Account has been selected, training presentations will not be displayed to avoid accidentally showing training material to an HCP.

## Flagging Content as Training Content

To define a CLM Presentation as training content, navigate to the CLM Presentation Binder in Vault PromoMats, in the CLM Properties section select:
- Publish for Veeva CRM (CLM) = Yes
- Training = Yes

## Required Content

In certain scenarios, e.g., Disclaimer or Safety Information, specific content must be show prior to displaying a slide or slides within the main presentation.

Content Creators can define a single slide or selection of slides that must be displayed prior to viewing a specified slide in the CLM Presentation.

To do this, Content Creators group these slides in a Presentation and add this Presentation to the main presentation.

This Sub-Presentation contains the required slides that will be shown prior to displaying a slide or slides within the main presentation.

## Adding Required Content

Adding Required Content means adding a CLM Presentation as a sub-presentation to a Multichannel Slide.

Open the Multichannel Slide, click the relationship button and then the '+ button' next to Related Sub Presentation.

Select the required Multichannel Presentation and click 'Save'.

## Hide Presentations

Hidden Presentations allow Content Creators to control the Rep's flow through a presentation based on brand team specifications while maintaining the "wide" content design philosophy.

Hidden Presentations do not display in the Media tab on the Offline CRM and must be navigated to by using the `gotoSlide` method from the Veeva JavaScript Library.

## Flagging a Presentation as Hidden Presentation

To define a CLM Presentation as hidden content, navigate to the CLM Presentation Binder in Vault PromoMats and select 'Hide from CLM Library = Yes'.

## Disabling Veeva CLM Native Functions

Veeva CLM has native functionality which needs to be considered when building CLM Content.

Many CLM features can be deactivated for individual slides using Disabling Actions. [^1]

As covered in CLM Content Basics, Swipe, History Buttons and Navigation Bar can be disabled on a slide by slide basis y selecting the option in the 'Disable Actions' field.

[^1]: If Swipe is disabled, then `gotoSlide` should be built into HTML content to allow for navigation.

## Pinch to Exit and Zoom

**Pinch to Exit** allows Reps to use a pinch action to exit a CLM Presentation.

Content Creators might disable the pinch to exit gesture to allow Reps to zoom in and out of a presentation without unintentionally exiting.

**Disabling Zoom** in case of compliance concerns. To prevent important information from displaying improperly or being hidden entirely, the Zoom functionality can be disabled on an image or PDF CLM Key Messages.

Zoom functionality for HTML Key Messages must be disabled in the HTML code.

Content Creators can include the following code to disable zoom:

```html
<!-- iPad HTML Code -->
<meta name=viewport content=width=device-width, initial-scale=1.0, user-scalable=no>
```

```css
/* Windows CSS Code */
html, body { -ms-content-zooming: none; }
```

## Rotation Lock

As covered in CLM Content Basics, individual Key Messages can be set to be displayed in Portrait Mode.

To do this, Select rotation lock in the 'Disable Actions' to allow content to be displayed in portrait mode.

The device's orientation lock setting must not be enabled.

## Custom Presentations

Custom Presentations when configured in Veeva CRM, allow the Rep to create and manage customised presentations from the existing presentations slides in their media libraries.

This allows them to deliver specifically tailored messages to targeted accounts.

These presentations can be saved for later use.

Reps cannot modify the CLM content in any way.

Reps can add slides with built-in navigation behavior to custom presentations, but the navigation behavior itself cannot be modified.

This means, where the Veeva standard swipe has been disabled, and the Veeva JavaScript `gotoSlide` implemented for navigation, the HTML content will continue to use the `gotoSlide` method. This is regardless of its inclusion in a custom presentation.

If a slide containing a sub-presentation (Required Content) is added to a custom presentation, the sub-presentation is also added to the custom presentation.

To create a custom presentation, the Rep must click on the Media tab (without accessing a HCP accounts first).

Click on the '**... Action button**' and click on **'Manage My Presentations'**.

To create a new custom presentation, click '+ button' and enter a name.

Custom presentations will be visible in the 'Media' tab for later calls.

All Key Messages that can be added to a custom presentation will be visible on the left-hand bar. Click on the Key Messages to add them to a Custom Presentation.

These will be automatically added in the order they are clicked. To re-order these, drag and drop into the correct order.

## PowerPoint Presentations in Veeva CLM

Veeva supports the use of PowerPoint as a content type for CLM presentations.

Content loaded in Vault PromoMats can be kept in the PowerPoint format application on the Rep's device.

Alternatively, PowerPoint material can be converted into HTML or PDF content to be viewed as a CLM Presentation within Veeva CRM.

As with other content formats for CLM, PowerPoint presentations are stored within Vault PromoMats which ensures that the latest Approved version is available and used by all Reps.

When a PowerPoint presentation is viewed, the Call Report will track that an individual Key Message was viewed.

CLM PowerPoint content maintains the formatting, animations and slide transitions of PowerPoint without the additional cost and time effort of creating HTML materials.

The PowerPoint application must be installed on the iPad.

PowerPoint content in CLM has similar considerations to "Deep" content philosophy. On the Offline device the Rep can only view a thumbnail of the first slide of the PowerPoint, and will launch the content in the PowerPoint application to view the full content. As a result, Veeva CRM will report that only on Key Message is viewed and lose granular tracking of each page of the presentation.

PowerPoint is read only on the Offline device, unless users have Office 365, then they can edit and save the CLM content. The PowerPoint content does not display speaker notes in viewable rendition in Vault so reviewers will not be able to review these prior to approving the content.

## Converting PowerPoint Presentations for CLM

To upload a PowerPoint asset into Vault PromoMats that will open in the PowerPoint application on the Reps device, Content Creators must select the 'Retain PowerPoint as Source option' when completing Create Presentation.

## Understanding the Create Presentation Feature

With PowerPoint or PDF content Vault PromoMats can package and create a Multichannel Presentation from the single PDF/PPT document file.

This does not require the Content Creator to package this content according to the Vault packaging guidelines, as Vault automatically creates this as part of the Create Presentation feature.

![[Create Presentation Feature.png]]

## Uploading Content for Create Presentation

The first step to use Create Presentation in Vault PromoMats for CLM is to upload the PowerPoint or PDF file and specify this as a Promotional Piece.

- Login to Vault PromoMats.
- Navigate to 'Library'.
- Click 'Create'.
- Select 'Upload'.
- Drag and Drop or click choose to select file.
- Choose Document Type 'Promotional Piece'.
- Click 'Next'.

## Enter Required Vault Fields

Before the content can be saved, the required metadata fields (highlighted yellow) need to be filled out.

The Name field is automatically pulled from the name of the PowerPoint or PDF file but can be updated if needed.

After you have filled out the required fields, click Save.

## Technical Considerations of PowerPoint Presentations

Slide transitions in PowerPoint content through CLM are supported when they are linked to individual slides.

Hidden slides or links to Custom Shows in PowerPoint are not supported.

## Using the Create Presentation Feature

In order for the 'Create Presentation' option to become available, the content needs to be Approved first.

Click on the Action Button and select 'Create Presentation'.

Create Presentation allows the Content Creator to split each page of the file into a separate Multichannel Slide. This is also known as "Wide" content philosophy.

Or you can create a single Multichannel Slide, otherwise known as "Deep" content philosophy.

## Create Presentation

The process to convert a PDF to presentation is the same.

Considerations are that any interactivity including navigation will not be converted.

The results slides will be static images.

**'Create a single slide from the document'** option means that one Multichannel Slide will be created that contains the entire original document in a vertically scrollable version.

For PowerPoint content, if the Content Creator selects **'Retain PowerPoint as Source'** this creates a PowerPoint CLM Presentation that will be opened by the Native PowerPoint application.

**'Split the pages of this document into separate slides'** means each page of the original document should be a separate Multichannel Slide.

When using a PowerPoint file and selecting Split pages, Create Presentation retains dynamic link content (hyperlinks within the presentation) from PowerPoint presentations and converts source documents into HTML in order to retain intra-document links and external links. [^2]

[^2]: Create Presentation does not retain dynamic link content for any other file types (like PDF).

## How to Use the Create Presentation Feature

Before the content can be saved the required metadata fields (highlighted yellow) need to be filled out for both the Presentation and Slide.

- The Name and Product details will be pulled though from the Promotional Piece document previously loaded.
- Ensure that the Publish for Veeva CRM (CLM or Portals) fields are populated, just like when uploading content manually, e.g., Publish for Veeva CRM (CLM) = Yes and/or Publish for Veeva CRM (Portals) = Yes.

Click 'Start' to create the Presentation Binder and Slide documents.

Once this has completed processing, the generated Presentation and the slides will appear in the Library.

The Vault generated media ZIP file can be found as 'Veeva Distribution Package' rendition on each Multichannel Slide.

The name of the ZIP file is generated with the following formula: `{Vault id}_{Document id of the source document}_{#}.zip` where `#` is the sequential Slide number.

If the selected Promotional Piece has previously been used to Create a Presentation, then a message will appear asking the Content Creator to choose if they want to:

1. Update all slides.
2. Create or update specific slides.
3. Create new slides.

Updating slides overwrites the existing slides, but creating new slides leaves existing slides as is.

## Single Doc Publishing

Single document Multichannel publishing allows the User to manage the distribution, creating, versioning, and withdrawal of multichannel content directly from an original document.

Like Create Presentation, with single document multichannel publishing, Vault automatically generates multichannel content when the multichannel content fields (Publish for Veeva CRM (CLM)) or (Publish for Veeva CRM (Portals)) are set to 'Yes'.

Single Doc publishing supports PDF, PowerPoint, Microsoft Word and Video file types.

## Single Doc Publishing Dynamic Content

Single document multichannel publishing retains dynamic link content (i.e. navigation) from PowerPoint presentations and converts source documents into HTML. This retains intra-document links and external links, creating a Multi-slide Presentation.

To retain dynamic link content for Microsoft Word and PDF files, Single Doc Publishing can only create single slide presentations.

## Create Presentation vs. Single Doc Publishing

Create Presentation and Single Doc Publishing are very similar in functionality, however, there are a number of differences, and it will depend on your customers needs. The following is a short list of differences:

1. Both processes support PowerPoint and PDF, but Single Doc Publishing also supports Word Documents.
2. Create Presentation creates individual slides of the source document, however Single Doc Publishing retains the doc its entirety. This means, for Create Presentation, that individual slides can be replaced.
	- A scenario to consider: A customer has an existing PowerPoint presentation with 70 slides of which 3 have rich animation. In this case using the Create Presentation function creates the individual slides. For the 3 slides with rich animation, they can be updated with HTML versions that include the rich animation.
	- If there is a simple sequential presentation then Single Doc Publishing can be used.

## Background to iOS Native Resolution Change

Veeva has traditionally supported the original iPad resolution of 1024x768. However, for example, on an 11-inch iPad Pro, the Veeva CRM app displayed at its normal size but caused black bars to be displayed on the device.

iPad Pros have had a variety of different display resolutions since 2017 including:
- Larger screen sizes.
- Wide screen aspect ratios.
- Newer non-Pro iPads that are 10.2" and greater.

## What is Native Resolution?

Content creators can set the display resolution of CLM Presentations created with HTML. This allows presentations to be responsive and fit screens with higher resolution, including the following devices:
- iPad 2019 10.2 inch
- iPad Air 2019 10.2 inch
- iPad Pro 10.5 inch
- iPad Pro 11 inch
- iPad Pro 12.9 inch
- All future iPad models with screens larger than 9.7 inches.

For any PDF, image, video or content created via Single Doc Publishing or Create Presentation, the content will automatically display in the default resolution of the device.

## Resolution Options

There are 3 resolution options:

1. **Scale to 1024x768:** - content displays in full-screen or in the centre of the screen with a black border on devices with higher resolution. Swipe and pinch actions and view rotation are only supported inside the content but CLM controls displays in the borders outside the content. **CLM content uses Scale to 1024x768 by default**.
2. **Default for Device** - content displays in the device's default resolution. Veeva recommends selecting this option for responsive HTML content.
3. **Scale to Fit** - content scales to display in full-screen. Veeva does not recommend selecting this option for responsive content. This option allows fixed layout content to fill the screen. Content creators must test all content using this option to ensure the content displays appropriately. After launching a presentation, the content briefly displays in its original size before visibly scaling up to fill the screen. **The Scale to Fit option works best for content designed to display with 1024x768 resolution**.

## Selecting Resolution Option

In Vault PromoMats, the iOS Resolution option controlled by a field on the Multichannel Slide.

To edit this, in the Multichannel Slide, click the 'Edit Fields' icon. [^3]

Under the CLM Properties section header click on the iOS Resolution field and select the preferred Resolution option and click Save.

[^3]: If no option is selected tis field defaults to Scale to 1024x768. All Multichannel Slides in a CLM Presentation must have the same iOS Resolution option selected

## Fixed Size Non-Responsive Content

For fixed resolution content designed to 1024z768 (designed for 9.7-inch iPad) it is recommended to use either Scale to 1024x768 or Scale to Fit.

Before using Scale to Fit it is recommended to test to ensure this works well with the HTML code in the Presentation as this option injects code to scale the presentation.

![[Fixed Size Non-Responsive Content.png]]

## Responsive Content

For HTML content built responsively, it is recommended to select Default for Device to allow content to display in the correct resolution for the device being used.

## What are Shared Resources?

Shared Resources are HTML assets that can be used with multiple Key Messages. They help Content Creators to optimize content updates, storage space and reduce sync times.

The HTML Shared Resource asset can include PDF references, logos, JavaScript libraries and CSS files which can be accessed by regular Slides in a CLM Presentation.

Shared resources are not displayed as individual slides in CLM.

These are available for use on iPad and Windows CRM Offline devices.

## Shared Resources Use Case

One use case for Shared Resources is to include the product logo in the Shared Resource and reference this in every Key Message in the CLM Presentation.

This means if the product logo needs to be updated then the content updates are faster and more efficient since the changes are made in one place in the Shared Resource rather tan every Key Message ZIP file.

## Using Shared Resources

There are 2 methods for packaging Shared Resources which affects how the content is referenced in the HTML file.
- Please not, all Shared Resources ZIPs require an **index.html** and **image.png** file.

1. `./shared/js/veeva_javascript_library_v3.2.js`
	- ZIP Layer
		- CSS
		- JavaScript
		- Images
		- index.html
		- image.png

2. `./shared/Cholecap_Shared/js/veeva_javascript_library_v3.2.js`
	- ZIP Layer
		- Cholecap_Shared
			- CSS
			- JavaScript
			- Images
			- index.html
			- image.png

## Using Shared Resources: Method 1

The `./shared/` part of the path is an automatically created symlink which links to the shared content.

Structure for referencing the content from the HTML content is as follows: **./shared/\<folder structure inside the zip\>** [^4]

Example reference code directly compressed:

```html
<img src="./shared/images/cholecap_logo.jpg">
<script src="./shared/js/veeva_javascript_library_v3.2.js" type="text/javascript"></script>
<link href="./shared/css/base.css" rel="stylesheet" type="text/css">
```

[^4]: It is not recommended to include black spaces in the file names.

## Packaging Shared Resources: Method 1

You have 3 folders (JS, CSS and Images) and an HTML and thumb image file that you would like to include within the shared resource.

Select the 3 folders, HTML and thumb image files and compress them.

The ZIP file is the Shared Resource asset, this can be renamed as needed.

## Using Shared Resources: Method 2

The `./shared/` part of the path is an automatically created symlink which links to the shared content.

Structure for referencing the content from the HTML content is as follows: **./shared/Cholecap_Shared/\<folder structure inside the zip\>** [^4]

Example reference code directly compressed:

```html
<img src="./shared/Cholecap_Shared/images/cholecap_logo.jpg">
<script src="./shared/Cholecap_Shared/js/veeva_javascript_library_v3.2.js" type="text/javascript"></script>
<link href="./shared/Cholecap_Shared/css/base.css" rel="stylesheet" type="text/css">
```

## Packaging Shared Resources: Method 2

You have 3 folders (JS, CSS and Images), a HTML and thumb image file that you would like to include within the shared resource.

These sit within the main folder which is called \<SharedFolderName\> i.e. 'Cholecap_Shared'.

Select the folder called \<Cholecap_Shared\> containing the 3 subfolders, HTML and image thumb file and compress it. The ZIP file is the Shared Resource asset.

## Upload Shared Resources

To upload the Shared Resources ZIP file:

1. Login to Vault PromoMats.
2. Navigate to 'Library'.
3. Click 'Create' and Select 'Upload'.
4. Drag and Drop or click choose to select ZIP file.
5. Choose Document Type 'Multichannel Slide'.
6. Click 'Next'.

## Enter Required Vault Fields

Before the content can be saved the required metadata fields (highlighted yellow) need to be filled out.

The Name field is automatically pulled from the ZIP file but can be updated if needed.

Require Vault fields:
- Shared Resource = Yes.
- Publish to Veeva CRM (CLM) or Publish for Veeva CRM (Portals)[^5] = Yes.
- Product

After filling out the required fields, click 'Save',

[^5]: Portals refers to Engage for Portals content. Engage Meetings content is covered under Publish to Veeva CRM (CLM) = Yes.

## Add a Shared Resource to CLM Presentation

The Shared Resource Multichannel Slide should not be added to a CLM Presentation Binder.

In Vault navigate to the CLM Presentation Binder and select Multichannel Slide that will reference the Shared Resource (i.e. the Slide where you want to use the Shared Slide).

In the metadata section of the Multichannel Slide look for the "Related Shared Resource" relationship.

Click the (+) sign to add a Shared Slide.

Select the recently created Shared Slide and click 'Save'.

Assets in the Shared Resource are now available for Slide 1 in the CLM Presentation.

Repeat this process for all slides that need to be updated.

## Shared Resources Considerations

Using Shared Resources is highly recommended when creating HTML content.

Never add the Shared Slide to a Presentation: it causes errors during the sync.

Shared relationships is always on Slide to Slide base:
- One Shared Resource can be referenced by many regular Slides but one regular Slide can have only one Shared Resource.
- One Shared Resource can be referenced by many Slides, even if they belong to different presentations.

When updating a Shared Resource, the update affects all content where the Shared Resource is currently in use.
