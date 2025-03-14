## Adapting Content Strategy in a Digital World

There are certain activities that Reps usually complete during a Face-to-Face (F2F) visit with an HCP including: [^1]

- Signature Capture.
- Sampling and Orders.
- Medical Inquiries.
- Follow up with content via Approved Email.
- Approved Email Surveys for HCP feedback.

Consider how Engage Meeting impacts Customer engagement strategy. The duration of an Engage Meeting is longer than a F2F meeting, so ensure content volume is adjusted accordingly.

The freshness of content impacts the length of calls, so it is advisable to update content frequently.

[^1]: Engage Meeting can allow a Rep to complete these activities remotely if configured in the Customer's environment.

## General User Experience (UX) Considerations

When using content in Engage Meeting, keep in mind that this is no longer a F2F experience. Certain taps or gestures which are obvious when F2F may not be apparent in a remote discussion.

Unlike F2F, HCPs cannot interact with content directly. 

Consider:

- Adjusting content to ensure HCPs know which elements are being tapped or clicked.
- Enabling or disabling features on a channel basis.
- Enabling the laser pointers (iPad only).

## Simplify Content

When creating content:

- Present unique information in a clear and concise way.
- Set a limit of one Key Message per Slide.
- Structure content well and think 'mobile first'.
- Use clear and simple graphs.
- Send more complex content via Approved Email.

## Content Size

When creating content:

- Enlarge images and fonts for readability.
- User images that make the next action clear to the user.
- Reduce text and use more visual functional CLM content.
- Use graphs and diagrams to support Key Message and product discussions.

## Content Navigation.

Content Access:

 1. Direct access to Home, abbreviations, etc.
 2. Use icons/design elements to simplify content.
 3. Structure message in 2-3 consecutive slides.
 4. Use identificable icons.

Pop Ups:

- Use pop ups to highlight key elements.
- Complex graphs should be at the maximum size in a pop up.

Use of navigation:

- Linear navigation for clarity of content and discussion.
- Avoid multilayer navigation if possible.
- Enable Laser Pointer, allowing the Rep to pinpoint elements.

## CLM Content Reuse for Engage Meeting

From the Rep's perspective, the CLM content they see and interact with on their device is what is screen-shared with the HCP.

Reps therefore do not need to learn the look and feel of existing CLM content, rather just a different method of sharing this content.

From a content administration perspective, the same processes can be followed to sync content from Veeva Vault PromoMats to Veeva CRM as for Veeva CLM content designed for F2F.

Although existing CLM content can be used during a Engage Meeting, technical limitations may require content updates to ensure content displays correctly to HCPs on all devices.

Before crating or adapting CLM content for Engage Meeting:

- Review the Engage Meeting Content Suitability Checklist.
- Test content to determine if updates are required.

## Web Client (HCP Experience)

Content Creators should consider the various ways in which an HCP might use the Web Client.

_Are they viewing in full screen? Or a minimized Window?_

Think about how content will display in less-than-ideal circumstances (e.g. not in full-screen) that are potentially beyond the control of the Rep.

## Mobile Devices

Content Creators should also consider the experience for HCPs joining from a Mobile Device.

Smaller fonts and detailed data/graphs will not be read as easily for the HCP on a smaller screen.

Also consider how content is displayed to the HCP based on the orientation of their device too.

## Web Client (Rep Experience)

Where possible, avoid content in the CLM Safe Zone on iPad.

This is most important on the left side of the screen, to make space for the Veeva native controls. Although there are no definitive plans, the other areas could potentially be used for Veeva controls in future releases.

Ultimately, HCPs will not be impacted by content overlapping any of these areas, but Content Creators should consider them for a better Rep user experience.

## Meeting Controls

When a Rep first starts a call via iPad, the Engage Meeting controls might cover content until they are collapsed or moved (e.g. Video Ribbon, Meeting Controls).

These are not visible to the HCP, but should be considered for custom navigation or elements that might need to be quickly accessed by the Rep when first starting a call.

## CLM Content Best Practices

- Build HTML content to work across browsers and devices.
- Size content to viewport.
- Use relative sizes for images.
- Use SVG for images and icons.
- Double your image size to account for zooming in/out and retina displays (zooming not available for CRM Online).

## CLM Content Suitability Considerations

- Does your content contain Video?
	- At this time, vide content of any type does not display to participants when presented from Engage Meeting on iPad.

- Does your content contain Audio?
	- HTML Content should not contain `<audio>` tags as this may interfere with the audio of the meeting.

- Does your content contain Augmented Reality (AR)?
	- AR content is not supported in Engage Meeting.

- Is your content sized to the viewport?
	- Include `width=device-width` through the viewport meta tag to match the screen's width.
	- Ensure the page is accessible by not disabling user scaling.
	- Do not use large fixed-width elements.
	- Ensure your content does not rely on a specific viewport width to render.

- Does your content include CSS animations?
	- Certain animations within the transition and transform CSS properties, may not display to participants as expected.

- Does your content include complex animations or animated GIFs?
	- WebGL 2D and 3D animations do not display to participants.
	- Complex JavaScript animations may not display or may only partially display.
	- Animated GIFs will display to participants at two frames per second. If there are more than two frames per second, the content may not display as expected.

## Supported Media Formats in Engage Meeting

| Type       | Ext                  | Display (iPad and Online)                                                                | Additional Considerations                                                                                                                                                                         |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML**   | .html<br>.htm        | Full screen - landscape.                                                                 | - Can be multiple files (HTML, CSS, images, video, PDF).<br>- Videos are not supported on iPad.                                                                                                   |
| **Images** | .jpg<br>.png         | - Full screen - landscape.<br>-If resolution larger than display, pinch zooming allowed. | Should be smallest resolution and compressed as much as possible without impacting quality (max: 2499x2499).                                                                                      |
| **PDF**    | .pdf                 | - Full screen - landscape.<br>- Stretches to fill scene width.<br>- Scrolls vertically.  | - Supports multi-page PDFs and retains hyperlinks.<br>- 150 dpi resolution with medium quality image compression.<br>- Certain interactive features not supported due to OS limitations.          |
| **PPTX**   | .pptx                | Full screen - landscape.                                                                 | - Sub presentations are not supported.<br>- CLM PPT Presentations are not supported for Engage Meeting unless they are converted using Auto-Publishing.                                           |
| **Video**  | .mov<br>.m4v<br>.mp4 | Full screen - landscape.                                                                 | - Video content can be embedded within HTML CLM content or as a standalone Vide Slide.<br>- Videos should be 1080p resolution or below for best results.<br>- .avi video files are not supported. |
Note: It is possible to display content in Portrait mode on the iPad only.

## Video Support with Microsoft Edge WebView2

The CRM Desktop application can be configured to use Microsoft Edge WebView2, which uses Microsoft Edge (Chromium) as its rendering engine for embedded web content, to present CLM content shared during an Engage Meeting.

This allows Reps to share video and audio CLM content from Engage Meetings hosted on CRM Desktop application from a Windows 10 Device.

See [Microsoft's WebView2 documentation](https://learn.microsoft.com/en-us/microsoft-edge/webview2/) for more information.

## Supported CLM Features in Engage Meeting

- **Shared Resources:** HTML assets can be shared across multiple Key Messages to optimize storage space and reduce sync times.
- **Required Slides:** CLM Presentations can contain a sub-presentation of a required set of slides that must be shown prior to displaying a certain Slide or Slides within the main CLM Presentation.
- **Hidden Presentations:** [^2] It is possible to hide a presentation so that it does not display in the CLM Presentations view or the Presentation picker in the navigation bar. This allows the Rep's flow through a CLM Presentation to be controlled based on a brand team specifications while maintaining a "wide" design philosophy. To reach a slide within a Hidden Presentation, Content Creators must use the `gotoSlide` JavaScript function to link directly to a Slide in the Hidden Presentation.

[^2]: Hidden Presentations are not supported on CRM Online.

## Device Considerations when Sharing Content

- Using **iPad**:
	- Limit high resolution content with many different colors.

- Using **Windows PC:**
	- Confirm [JS Library](https://developer.veevacrm.com/doc/Content/clm-v1.htm) functions.
	- Content sourced from Vault.
	- Revise content built for iOS.

## CLM Content Suitability Considerations

In some cases, when presenting CLM content vie Engage Meeting on iPad, Veeva CRM can be slow to respond to Rep Taps and gestures.

High resolution content (image, PDF, HTML), such as 2490x1868, with lots of different colors, may result in performance issues depending on the processing power of the iPad.

- Content at a lower resolution, such as 1024x768, performs better.
- Content with fewer colors performs better.

It's important to test the content before moving to production.

## Veeva CLM JavaScript Library

The code below provides a basic example of utilizing the Veeva CLM JavaScript Library to Query the Account Object and then display the Account Name on screen using a callback function.

```html
<script src="js/veeva-library.js"></script>
```

```js
function start() {
	getAccountName()
}

function getAccountName() {
	com.veeva.clm.getDataForCurrentObject('Account', 'Name', displayAccountName)
}

function displayAccountName(result) {
	var AccountNameHTML = document.getElementById('account_name')
	AccountNameHTML.innerHTML += result.Account.Name
}
```

Refer to the [Veeva CLM JavaScript Library documentation](https://developer.veevacrm.com/doc/C ontent/clm-v1.htm) for mor information.

While swipe is Veeva CLM's native navigation, it is also possible to leverage the Veeva CLM JavaScript Library to navigate with custom coded buttons or links. For example:

- Navigation between CLM Slides and CLM Presentations.
- Navigation to Next and Previous Slides.

```js
// Navigating to a Presentation and a Slide
function navigateToHomePage() {
	com.veeva.clm.gotoSlide("Home_Page", "my_hidden_presentation");
}

// Navigating to a Slide in the Current Presentation
function navigateToHomePage() {
	com.veeva.clm.gotoSlide("Home_Page", "");
}

// Navigating to Next/Previous Slide
function JSnextSlide() {
	com.veeva.clm.nextSlide();
}

function JSprevSlide() {
	com.veeva.clm.prevSlide();
}
```

**All CLM JS Library functions** can be used in CLM Presentations presented in Engage Meetings hosted on iPad.

**Only the ten CLM JS Library functions listed below** can be used in CLM Presentations presented in Engage Meetings hosted on CRM Desktop (Windows PCs), [^3]

- `nextSlide()`
- `prevSlide()`
- `gotoSlide()`
- `gotoSlideV2()`
- `launchApprovedEmail()`
- `updateCurrentRecord()`
- `updateRecord()`
- `createRecord()`
- `getDataForCurrentObject()`
- `queryRecord()`

[^3]: This means common functions such as **Surveys** via the Veeva CLM JavaScript Library are not supported in CRM Desktop.

## Adapting CLM Content for CRM Desktop

The majority of existing CLM content will need to be adapted to render properly in the CRM Desktop Application to Windows PCs.

Differences in platform rendering engines and aspect ratios cause most existing CLM content to not render consistently across platforms. For example, CLM on iOS uses Mobile Webkit and the Engage Media Desktop Player uses Webkit for Windows.

Content created via Vault's Create Presentation and via Auto-Publishing addresses these inconsistencies and renders the presentations correctly in the CRM Engage Media Player.

Veeva recommends testing content in the CRM Desktop Application to evaluate how each presentation renders.

## Testing Content

Ensure content is tested using all devices the Reps may use to host a Engage Meeting, i.e.

- Test on the same model(s) of iPad that Reps use.
- Test on a Windows PC if Reps present from Veeva CRM Online.

Ensure content is tested as an HCP attendee on various devices such as:

- iPads and iPhones on iOS 9+.
- Android devices on Android 4.4+.
- Windows laptops and desktops on Windows 7+.

Use the following links for testing the viewer application on various devices:

- [Android Veeva Engage Application](https://play.google.com/store/apps/details?id=com.veeva.engage)
- [iOS Veeva Engage Application](https://apps.apple.com/us/app/veeva-engage/id1155146582)
- [Web Client](https://app.veevaengage.com/web/join)

Thoroughly test animations from the perspective of the HCP attendee, as some animations may only display the start and end of an animation.

## ISI, PI and References

For best cross-device compatibility, Reference Documents within CLM presentations are best treated as their own Multichannel Slides.

Another good practice would be to use Approved Email to send the Reference Document to the HCP during or after the Engage Meeting call.

Emails can be manually sent from the Call Report page of Veeva CRM Online outside of Engage Meeting.

## Content Packaging and Upload

Because Engage Meeting uses CLM content, it follows the same content packaging standards.

Best practice is to prepare content using the Vault Packaging format and upload to Veeva Vaults PromoMats. This allows for content to be used by Reps on **both** iPad and Windows PCs.

If Legacy Packaging is used, content will only be available to Reps on the iPad.

## Vault Packaging

Vault uses this packaging format. There is a zip called `<filename>.zip`. The contents of the zip files vary depending on content type:

- **Image ZIPs** - contain files named `image.png` and `thumb.png`.
- **HTML ZIPs** - contain `index.html`  and `thumb.png` along with images, js, etc. folders.
- **PDF ZIPs** - contain `pdf.pdf` and `thumb.png`.
- **PowerPoint ZIPs** - contain `<document name>.pptx`, `poster.png`, and `thumb.png`.

## Vault Metadata

For compatibility with Engage Meeting, content must have the **Publish for Veeva CRM (CLM)** document field set to 'Yes'.

Conversely, the Engage Content document field **does not** need to be filled as this is only used for Engage for Portals and CoBrowse content.

## Sync to CRM

Once CLM content is uploaded to Veeva Vault, it can be synced to Veeva CRM. This process is outlined in detail in the Managing Your Sandbox Course.

## Quiz

> [!faq]- Microsoft Edge WebView2 allows for the support of what types of video files in Engage Meeting?
> 
> - .mp4
> - .m4v
> - .mov

> [!faq]- Existing CLM content can be reused in Engage Meeting.
> 
> True.

> [!faq]- A CLM Presentation must be uploaded to Veeva Vault PromoMats in order to be visible in the Media Library when hosting an Engage Meeting from a Windows PC (via CRM Online).
> 
> True.

> [!faq]- What should Content Creators consider when creating/adapting CLM content for use in Engage Meeting.
> 
> - Enabling the laser pointer (iPad only).
> - Adjusting content to ensure HCPs know which elements are being tapped or clicked.
> - Enabling or disabling features on a channel basis.

> [!faq]- All CLM JS Library functions are supported in CLM presentations used in Engage Meetings Hosted via the iPad.
> 
> True.
