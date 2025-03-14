## Engage Share

Use the CLM Media Library to **send** content to HCPs using **Web Links**.

**Use Case Examples**:

- Sharing content pre meeting: e.g., an agenda.
- Sharing content post meeting; digital leave piece.

## Overview

Feature capable of sending content to HCPs by using Web Links (iPad, CRM Desktop and iPhone)

**Timing**

When convenient for HCP at any time.

**Tracking**

1. When link is sent.
2. When link is opened.

You can find more information in the document: [Displaying Website Content in the Media Library](https://pfizer-gcma.veevavault.com/ui/#t/0TB000000000101/workflows)

## Sending Websites vie a link

Users can view websites in their media libraries and share them with HCPs, either during a call or by sending the link directly through iPad, iPhone and CRM Desktop.

Allows users to share approved content with HCPs using non-email channels. Website activity is tracked, allowing admins to analyze HCP engagement with specific websites and improve website content.

## Sending Web Links to Website Content

1. User navigates to 'Websites' tab in 'Media'.
2. User selects 'More Actions' and then 'Share Website'.
3. Configurable Share Modal appears. User can select channel and share with the HCP.

The same flow applies for iPad, iPhone and CRM Desktop.

## Track engagement with specific websites

Admins can add tracking tokens to website links to track visitor engagement with specific websites and identify where and when the link was shared.

Tokens must be appended to the URL of the website by updating the URL field of the appropriate Key Message record.

### Tracking Token

Tracking Token: `{{linkTracker}}` tracks the following data about a web link shared with an HCP when appended to the link URL:

- **Source** - The location from where the users shared the link. When shared from Veeva CRM, the value is set to Veeva CRM.
- **Device** - The device used by the user to share the link. When shared from Veeva CRM on iPad, the value is set to iPad.
- **Sent Datetime** - The datetime when the user shared the link in ISO 8601 format.

### Example

Example: `https://www.verteobiopharma.com?{{linkracker}}`

The tokens resolve the following: [https://verteobiopharma.com/?src=VeevaCRM&dvc=iPad&sentDateTime=2021-08-25T20:05:28Z](https://verteobiopharma.com/?src=VeevaCRM&dvc=iPad&sentDateTime=2021-08-25T20:05:28Z)

The following tokens are supported for website tracking: `{{ObjectAPIName.FieldAPIName}}, {{ObjectAPIName.RelationshipName.FieldAPIName}}`, `{{MessageId}}`.

### Considerations

- Engage license is required.
- Users must have an active internet connection to share websites. Latency in internet connection will impact the type of URL that is sent.
- The link does not expire.
- Respects restricted products, allowed products and segmentations.
- Websites that are marked as training content cannot be shared from the media library.
- Admins can define the SMS and WhatsApp phone numbers for an Account.

## Sharing Auto-Published CLM Content via Link

CRM Desktop (Windows) and iPhone users can send HCPs link to auto-published CLM content from their media library using messaging apps.

- iPhone users can share via Web Link or QR Code.
- CRM Desktop (Windows) users and share via web link only.

Users can view the sent message details, including tracked activities, for an account on the account timeline.

Interaction with the link itself is tracked, allowing admins to analyze engagement and improve CLM content.

1. User Navigates to 'CLM Presentation' tab in 'Media'.
2. User selects 'More Actions' and then 'Send Presentation'.
3. Configurable Share Modal appears, User can select channel and share with the HCP.

## Sending Auto-Published CLM Content via Link

1. Select the 'More Actions' menu above the appropriate presentation thumbnail.
2. Select 'Send Presentation' to view the available sharing options.
3. Select the appropriate app or sharing option.
4. Select the recipient in the app, if applicable and not already populated. The recipient field is automatically populated if the following options are true
	- The user selected the account before selecting the sharing option.
	- The selected sharing options is Messages or WhatsApp.
	- The `SMS_vod` or `WhatsApp_vod` fields for the account are populated.

If users attempt to send a link to expired content, the link is not generated, and an error message displays.

**Vault**

- **Type:** CLM Presentation.
- **Publish**: Auto-published.
- **Trigger:** "Publish to CRM (Web Links)" and "Publish to Veeva CRM (CLM)".

**Content Guidelines**

- **Supported:** PowerPoint, MS Word, PDF, Video.
- **Unsupported**: Binder and Slides.

### Auto Published

**PPTX / PDF / Word**

- Yes - PPTX / PDF / Word.
- No - Hyperlinks pointing to other sections within the document.

**Images / Video / Animations**

- Yes - Image.
- Yes - Video.
- Yes - Animations.

### Considerations

- Each PPTX slide, or PDF page is separate CLM slide (image).
- Each CLM slide is a unique Key Message: Document Title + Page#.
- The Advance Search for the Media Library in the Veeva CRM on iPad will show individual CLM slides rather than a single presentation, which is a big plus for users to find content quickly.

### Benefits

**Auto Published Content Benefits**

Content can be made directly available for Multichannel purposes from its original document, without an extra Vault Binder.

Content can be used for both Engage Share capabilities;

1. Remote CLM.
2. Sending Content by Web Links.

Very useful for high volumes of documents, e.g. for medical.

All content is automatically fully indexed for the Advanced Search capability for the Media Library in Veeva CRM on iPad.

Websites in the Media Library and Sending Links to Websites must be configured.

### Field Force Usability

In order to distinguish which CLM presentations can be used for Remote CLM and/or Sending Content by Web Links, it is best to include new [filter](https://crmhelp.veeva.com/doc/Content/CRM_topics/Multichannel/CLM/InitialConfig/ConfiguringCLM/CLMConfigUsers.htm) criteria for the Media Library.

## Auto Publishing Overview

![[Auto Publishing.png]]

## Quiz

> [!faq]- Websites that are marked as training content cannot be shared from the media library in Veeva CRM.
> 
> True.

> [!faq]- Binders and slides from Veeva Vault are not able to be sent via a link.
> 
> True.

> [!faq]- Admins can add tracking tokens to website links in Veeva CRM, to track visitor engagement with specific websites and identify where and when the link was shared.
> 
> True.

> [!faq]- Users can send websites via a link in Veeva CRM.
> 
> True.

> [!faq]- A document link sent via Veeva CRM expires after 2 weeks.
> 
> False.

> [!faq]- Only Auto-Published content can be shared via a link.
> 
> True.

> [!faq]- When sharing content through Veeva CRM, hyperlinks pointing to other sections within the same document will not work.
> 
> True.

> [!faq]- Admins can define the SMS and WhatsApp phone numbers for an Account in Veeva CRM.
> 
> True.

> [!faq]- Reps using Veeva CRM for iPhone can send HCPs Web Links using messaging apps on their phone.
> 
> True.
