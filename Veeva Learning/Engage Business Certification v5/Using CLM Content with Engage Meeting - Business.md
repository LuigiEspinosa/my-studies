## General Content Guidelines

### Adapting Content Strategy in a Digital World

#### Face-to-Face

There are certain activities that Reps usually complete during a Face-to-Face (F2F) visit with an HCP including:

- Signature Capture.
- Sampling and Orders.
- Medical Inquiries.
- Follow up with content via Approved Email.
- Approved Email Surveys for HCP feedback.

We recommend considering how your Customer will 'replace' activities normally done via Face-to-Face (F2F) and create alternative methods for remote engagement.

Engage Meeting ca allow a Rep to complete these activities remotely if configured in the Customer's environment.

#### Engagement Strategy

Consider how Engage Meeting impacts Customer engagement strategy. The duration of an Engage Meeting is longer than a F2F meeting, The duration of an Engage Meeting is longer than a F2F meeting, so ensure content volume is adjusted accordingly.

The freshness of content impacts the length of calls, so it is advisable to update content frequently.

### General User Experience (UX) Considerations

When using content in Engage Meeting, keep in mind that  this is no longer a F2F experience. Certain taps or gestures which are obvious when F2F may not be apparent in a remote discussion.

Unlike F2F, HCPs cannot interact with content directly.

Consider:

- Adjusting content to ensure HCPs know which elements are being tapped or clicked.
- Enabling or disabling features on a channel basis.
- Enabling the laser pointer (iPad only).

### Simply Content

When Creating content:

- Present unique information in a clear and concise way.
- Limit to one Key Message per Slide.
- Structure content well and think 'mobile first'.
- Use clear and simple graphs.
- Send more complex content via Approved Email.

### Content Size

When creating content:

- Enlarge images and fonts for readability.
- Use images that lead to clarity in next action.
- Reduce text and use more visual, functional CLM content.
- Use visual graphs to support Key Message and product discussions.

### Content Navigation

**Content Access**

1. Direct access to Home, abbreviations. etc.
2. Use icons/design elements to simplify content.
3. Structure message in 2-3 consecutive slides
4. Use identifiable icons.

**Pop Ups**

- Use pop ups to highlight key elements.
- Complex graphs should be at the maximum size in a pop up.

**Use of Navigation**

- Linear navigation for clarity of content and discussion.
- Avoid multilayer navigation if possible.
- Enable Laser Pointer, allowing the Rep to pinpoint elements.

### CLM Content Reuse for Engage Meeting

From the Rep's perspective, the CLM content they see and interact with on their device is what is screen-shared with the HCP.

Reps therefore do not need to learn the look and feel of existing CLM content, rather just a different method of sharing this content.

From a content administration perspective, the same processes can be followed to sync content from Veeva Vault PromoMats to Veeva CRM as for Veeva CLM content designed for F2F.

**Existing CLM content can be used for Engage Meeting**.

Although existing CLM content can be used during a Engage Meeting, technical limitations may require content updates to ensure content displays correctly to HCPs on all devices.

Before creating or adapting CLM content for Engage Meeting:

- **Review the Engage Meeting Content Suitability Checklist**.
- **Test content to determine if updates are required**.

## Consider the HCP Experience

### Web Client

Content Creators should consider the various ways in which can HCP might use the Web Client.

*Are they viewing in full screen? Or a minimized Window?*

Think about how content will display in less-than-ideal circumstances (e.g. not in full-screen) that are potentially beyond the control of the Rep.

### Mobile Devices

Content Creators should also consider the experience for HCPs joining from a Mobile Device.

Smaller fonts and detailed data/graphs will not be read as easily for the HCP on a smaller screen.

Also consider how content is displayed to the HCP based on the orientation of their device too.

## Consider the Rep Experience

### Web Client

Where possible, avoid content in the CLM Safe Zone on iPad.

This is most important on the left side of the screen, to make space for the Veeva native control. Although there are no definitive plans, the other areas could potentially be used for Veeva Controls in future releases.

Ultimately, HCPs will not be impacted by content overlapping any of these areas, but Content Creators should consider them for a better Rep user experience.

### Meeting Controls

When a Rep first starts a call via iPad, the Engage Meeting controls might cover content until they are collapsed or moved (e.g. Video Ribbon, Meeting Controls).

There are not visible to the HCP, but should be considered for custom navigation or elements that might need to be quickly accessed by the Rep when first starting a call.

## Technical Guidance

### CLM Content Suitability Considerations

**Does your content contain Video?**

At this time, video content of any type does not display to participants when presented from Engage Meeting. [^1]

If there is a video format as part of the content to be shared, content creators must embed the video into a slide of the CLM. Please keep in mind the following consideratins:

- Video content can be embedded within HTML5 CLM content.
- Videos should be 1080p resolution or below for best results.
- `.avi` video files are not supported.
- Ext: `.mov`, `.m4v`, and `.mp4`.

**Does your content contain Audio?**

HTML Content should not contain `<audio>` tags as this may interfere with the audio of the meeting.

**Does your content contain Augmented Reality (AR)**

AR content is not supported in Engage Meeting.

**Does your content include animations or animated GIFs?**

- There are limitations to the types of animations that will display to participants.
- Animated GIFs will display to participants at two frames per second, if there are more than two frames per second, the content may not display as expected.
- It is recommended to limit animations, and test your animated content across various devices.

### Supported Media Formats in Engage Meeting

| Type       | Ext               | Display (iPad and Online)                                                                  | Additional Considerations                                                                                                                                                                |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML**   | `.html`<br>`.htm` | Full screen - landscape                                                                    | - Can be multiple files (HTML, CSS, images, video, PDF).<br>- Videos are not supported on iPad.                                                                                          |
| **Images** | `.jpg`<br>`.png`  | - Full screen - landscape.<br>- If resolution larger than display, pinch zooming allowed.` | Should be smallest resolution and compressed as much as possible without impacting quality (max: 1499x2499).                                                                             |
| **PDF**    | `.pdf`            | - Full screen - landscape.<br>- Stretches to fill scene width.<br>- Scrolls vertically.    | - Supports multi-page PDFs and retains hyperlinks.<br>- 150 dpi resolution with medium quality image compression.<br>- Certain interactive features not supported due to OS limitations. |
| **PPTX**   | `.pptx`           | Full screen - landscape.                                                                   | - Sub presentations are not supported.<br>- CLM PPT Presentations are not supported for Engage Meeting unless they are converted using Auto-Publishing.                                  |

[^1]: From CRM Online it is possible to share non-CLM video content, e.g. video content from desktop or website.

### Supported CLM Features in Engage Meeting.

- **Shared Resources:** HTML assets can be shared across multiple Key Messages to optimize storage space and reduce sync times.
- **Required Slides:** CLM Presentations can contain a sub-presentation of a required set of slides that must be shown prior to displaying a certain Slide or Slides within the main CLM Presentation.
- **Hidden Presentations:** It is possible to hide a presentation so that it does not display in the CLM Presentations view or in the Presentation picker in the navigation bar. This allows the Rep's flow through a CLM Presentation to be controlled based on brand team specifications, while maintaining a "wide" design philosophy. To reach a slide within a Hidden Presentation, Content Creators must use the `gotoSlide` JavaScript function to link directly to a Slide in the Hidden Presentation. [^2]

[^2]: Hidden Presentations are not supported on CRM Online.

### Testing Content: Rep Experience

Ensure content is tested using all devices the Reps may use to host a Engage Meeting, i.e.

- Test on the same model(s) of iPad that the Reps use.
- Test on a Windows PC if Reps present from Veeva CRM Online.

## Quiz

> [!faq]- Content must be sourced from __ to be available in the CRM Engage Application on Windows PCs.
> 
> Veeva Vault PromoMats.

> [!faq]- AR content is supported in Engage Meeting.
> 
> False.

> [!faq]- Only some CLM JavaScript Library functions can be used in CLM Presentations presented in Engage Meeting hosted on Windows PCs (via CRM Online).
> 
> True.

> [!faq]- Before creating or adapting CLM content for Engage Meeting:
> 
> - Review the Engage Meeting Content Suitability Checklist.
> - Test content to determine if updates are required.

> [!faq]- Existing CLM content can be reused in Engage Meeting.
> 
> True.
