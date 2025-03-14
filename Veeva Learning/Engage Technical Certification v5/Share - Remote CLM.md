## Engage Share

Use the CLM Media Library to instantly share Content with an HCP using Remote CLM.

**Use Case Examples:**

- Augmenting a phone call with content.
- Sharing content with HCPs at a table during lunch, whereby each HCP can view the content on their own device.

## Remote CLM

Feature capable of instantly sharing Content with HCP.

**Timing**.

Instant and together with the Rep or MSL.

**Tracking:**

1. Via Call Report.
2. With Key Messages.

## Viewing Remote CLM

Remote CLM allows HCPs to view CLM content on their own devices during calls without being in Engage, including face-to-face meetings and phone calls.

Link details are shared with HCPs using social messaging apps, verbally, or with a QR code. Selecting the link allows the HCP to view the CLM content in their browser without installing an app.

## Supported CLM Content for Remote CLM

CLM content for remote CLM respects the restricted calls, restricted products, allowed products, and segmentations for the attendee account.

**Only content published from Vault is supported,** including auto-published content, binders and slides, and content created via Create Presentation.

The following content packaging formats are supported:

- Images.
- Videos.
- HTML.
- PDF, including PDF files and PDF slides in presentations.
- `goToSlide`.

## Not Supported CLM Content for Remote CLM

The following content packaging formats are **not supported** for remote CLM:

- PowerPoint.
- AR.
- Shared Resources.

External links in HTML  content are not supported. When a user selects an external link and launches the browser, the browser window is not displayed to the attendee.

## Starting Remote CLM

Users can start remote CLM for a presentation from the 'More Actions' button in the following entry points:

- Presentation thumbnail in the media library.
- Presentation slide library.
- Specific slide in a presentation.

Users must have an active internet connection to start remote CLM.

Presentation is displayed in a standard search results.

Advanced text search is no supported.

### Start Remote CLM

To start remote CLM content:

1. Select the 'More Actions' button and click on 'Share Presentation'.
2. Select the appropriate attendee account, if applicable.

### Share

To share remote CLM Content:

1. Select the appropriate sharing option or verbally share the link details, including the ID, with the attendee to allow them to start reviewing the CLM Presentation. [^1]

[^1]: The user can only share the link details with one attendee at a time.

### Considerations

Users cannot start remote CLM during an Engage Meeting.

Sharing begins once the first slide loads and pauses when the user views the slide library for the presentation.

When sharing a video slide, user must select the pop-up message to play the video.

### Share the link

To share the link details while sharing content:

1. Select the 'More Actions' button in the Media Player or the slide sorter and select 'Share Presentation'.
2. Select the 'Attendees' button in the meeting ribbon to view the attendees, including the Rep user.

A notification displays when the attendee joins or leaves remote CLM.

## Ending Remote CLM

### End Sharing

Users can stop sharing CLM content by:

1. Selecting the 'End' button in the meeting ribbon and then selecting 'End' in the confirmation popup, or
2. Selecting 'Done' in the 'More Actions' menu.

Remote CLM automatically ends if there is no user interaction with the device screen for 5 minutes. A confirmation popup to stop displaying content displays, and users have 60 seconds to be active again before it ends.

### Select Tracked Activity

Users are prompted to select an account with which to associate the tracked remote CLM activity, if an account was not selected before sharing the presentation.

Ending remote CLM does not expire the link, which means users can share CLM content with the HCP again with the same link details. Users must launch the media library from the call report associated with the previous remote CLM activity, then start remote CLM for the appropriate presentation. The link expires two hours after the most recently ended remote CLM activity.

### Review Activity

After creating a call and confirming the end of remote CLM, the CLM Details section of the call report displays, allowing users to review the activity.

## Remote CLM Content

**Vault**

- **Type:** CLM Presentation.
- **Publish**: Auto-published / Binder & Slides.
- **Trigger:** "Publish to CRM (Remote CLM)" and "Publish to Veeva CRM (CLM)".

**Content Guidelines**

- **Supported:** PDF, HTML, Images, Videos, goToSlide.
- **Unsupported:** PPTX, AR, Shared Resources.

### Bunders and Slides

**Binders and Slides (Create Presentation)** supported file types:

- **PPTX / PDF**
	- No - PPTX / PDF + CRM rendition Single slide.
	- No - PPTX + CRM rendition PPTX.
	- Yes - PPTX / PDF + CRM rendition Multi-slide.

- **HTML**
	- Yes - HTML containing any PDF.
	- Yes - HTML containing any JavaScript.
	- Yes - Only Go-To-Slide.

- **Images/Video**
	- Yes - Images.
	- Yes - Video.

### Auto Published

**Auto Published (Single Doc Publishing)** supported file types:

- **PPTX / PDF / Word**
	- Yes - PPTX / PDF / Word.
	- Yes - Hyperlinks pointing to other sections within the document.

- **Images / Video / Animations**
	- Yes - Image.
	- Yes - Video.
	- Yes - Animations.

### Benefits

**Auto Published Content Benefits**

Content can be made directly available for Multichannel purposes from its original document, without an extra Vault Binder.

Content can be used for both Engage Share capabilities:

1. Remote CLM.
2. Sending Content by Web Links.

Very useful to high volumes of documents, e.g. for medial.

All content is automatically fully indexed for the Advanced Search capability for the Media Library in Veeva CRM on iPad.

Websites in the Media Library and Sending Links to Websites must be configured.

### Considerations

**Field Force Usability**

In order to distinguish which CLM presentations can be used for Remote CLM and/or Sending Content by Web Links, it is best to include new [filter](https://crmhelp.veeva.com/doc/Content/CRM_topics/Multichannel/CLM/InitialConfig/ConfiguringCLM/CLMConfigUsers.htm) criteria for the Media Library.

## Auto Publishing Overview

![[Auto Publishing.png]]

## Quiz

> [!faq]- After creating a call and confirming the end of Remote CLM, the CLM Details section of the Call Report displays to the Rep.
> 
> True.

> [!faq]- Users must have an active internet connection in order to start remote CLM.
> 
> True.

> [!faq]- Remote CLM allows HCPs to view CLM content only in face-to-face meetings and not through Engage Meeting.
> 
> False.

> [!faq]- It is possible to enhance a phone call between a Rep and an HCP using Remote CLM.
> 
> True.

> [!faq]- Only content published from Vault is supported in Remote CLM.
> 
> True.

> [!faq]- Which of the following entry points are available from the 'More Actions' button in Remote CLM? Select all that apply.
> 
> - Presentation slide library.
> - Specific slide in a presentation.
> - Presentation thumbnail in the media library.

> [!faq]- On ending a call, Rep users are prompted to select an account with which to associate the tracked remote CLM activity if one was not selected before sharing the presentation.
> 
> True.
