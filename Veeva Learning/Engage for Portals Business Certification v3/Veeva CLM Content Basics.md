## Meet the Veeva CRM Mobile Application

Veeva CRM is a Customer Relationship Management (CRM) software created specifically for the life sciences industry and is built on top of [Salesforce.com](https://www.salesfoce.com).

The Veeva CRM Mobile Application is used by Reps on either an iPad, Windows tablet or iPhone to support their day-to-day business processes. [^1]

Veeva CRM houses all of Veeva's multichannel products and is the cornerstone for delivering content.

[^1]: Veeva CLM content is not accessible via Veeva CRM for iPhone.

## CLM is Approved Content

Reps can only access presentations that have been Approved. This means that the content available for them in the field is the latest, up-to-date and compliant messaging.

Veeva CLM content is downloaded to the Veeva CRM application. Once downloaded, it can be accessed regardless of the Rep's internet connection.

## CLM Interactions with CRM Accounts

Veeva CLM tracks and records interactions (calls), capturing which pages of a CLM presentation are shown during a sales call to the individual Accounts in Veeva CRM.

Through CLM content, additional information such as responses to Surveys and other information can be captured and stored in the CRM as well.

## CLM is no just Detailers - More Use Cases

- Animation of disease progression and treatment impact.
- Video of Patient Testimony.
- Landing page with links to other slides or decks.
- Payor or Formulary Tool.
- Capture customer data and load into profile.
- Capture medical inquiry in CLM content.
- Capture surveys for HCP preferences.
- Capture consent and signature.
- AR (augmented reality) to influence stronger empathy.
- Integrating Events into CLM for RSVP and sending invites.
- Alexa integration for voice activated navigation.
- Bespoke patient program creation and ordering.
- Care pathway builder within CLM.
- Price calculator.
- Internal training.
- Approved email slide shopping cart.

## Accessing Content in Veeva CRM

The Veeva CRM Mobile application is rich in functionality to assist Reps in their jobs.

However, the core areas of the application used to show CLM content to an HCP are 'My Accounts' and 'Media'.

The following pages will explain these aras.

## My Accounts View

My Account allows Reps to access HCP and HCO Accounts aligned to them by territory in Veeva CRM.

Selecting an Account prior to viewing CLM Content is the recommended method of accessing content.

This allows for the automatic tracking of the media viewed to the Account.

### Action Access

From this screen, the Rep can access actions quickly by using the icons to the right of the Account:

![[My Accounts View Icons.png]]

Alternatively, the Rep can tap on the name of the Account to access the Account Detail Page.

### Account Detail Page

After selecting an Account by tapping on the name, the Account Detail page displays a snapshot of the Account including:

- HCP Name.
- Specialty.
- Credentials.
- Segmentation.
- Gender.

Each Account also displays standard and custom data fields that aligns with the Account. [^2]

[^2]: The fields associated to an HCP Account may differ by Customer depending on what custom fields they have created.

## Accessing CLM Content via the Media Tab

Whilst accessing CLM Content is recommended via an Account, the Rep can click on the Meda Tab which opens the Media Library.

The Media Library shows all CLM Content available to the Rep.

The primary function of the Media tab is the review of content before the use within the call.

To open a CLM Presentation, tap on the thumbnail image.

## Content Formats Overview

CLM Content support the following content types:

- HTML 5.
- PDF.
- Image.
- Video.
- PowerPoint.
- Augmented Reality (AR) - iPad only.

A CLM Presentation can use multiple types within it.

## Native User Experience

Veeva CLM has native functionality which needs to be considered when building CLM content.

Many of the native features can be turned on or off for either individual slides or the entire company (at org level).

## Action Button

The Action button is in the top left-hand corner of Veeva CLM.

This button allows the Rep to: [^3]

- Exit the Presentation.
- Complete a Survey.
- Send an Email.
- Send a Medical Inquiry.
- Order Products.
- Take other customizable actions.

This button cannot be disabled. The button is 54x36 pixels in size.

[^3]: By default, Done and Slides will always be available. The other actions need to be enabled and are not on by deafult.

## History Buttons

The History buttons in Veeva CLM are comparable to the back and forward buttons in a web browser.

The will displays as the content is navigated through and will bring the Rep back and forward to slides in the order in which they were displayed to the HCP.

These can be disabled for individual slides (at Key Message level).

## Highlighter Pen

The Highlighter Pen allows the Rep to highlight content to an Account.

This is turned on or off for the whole company (at org level).

The pen is available in three colors:

- Pink.
- Yellow.
- Green.

The Action button, Highlighter Pen and History buttons area is 60x176 pixels in total.

## Custom Reaction Buttons

Custom Reaction buttons allow a Rep to record the HCP's reaction to content by selecting the relevant button: [^4]

- Blue for Positive Reaction.
- White for Neutral Reaction.
- Red for Negative Reaction.

The Custom Reaction button can be disabled for the whole company (at org level) or disabled for individual slides (at Key Message level).

These are 160x37 pixels.

[^4]: The color of the reaction buttons cannot be changed.

## Navigation Bar

The Navigation Bar opens the swim lane to allow the Rep to see all the Key Messages (slides) that are part of the current Presentation or jump to another Presentation.

The Navigation Bar can be disabled for individual slides (at Key Message level). Unopened, the Navigation Bar icon is 61x30 pixels.

It can also be configured to conceal the slide content when the swim lane is open to remain compliant.

## Veeva Standard Swipe

By default, Reps can swipe to navigate from one slide (Key Message) to another. The swipe navigates linearly through the slides.

This can be disabled for individual slides (at Key Message level) and replaced with coded custom navigation (JavaScript).

## Custom Navigation

In addition to the standard Swipe functionality in CLM, for HTML content, Content Creators can code in custom navigation to allow quick and easy navigation to different areas of the CLM. This uses the Veeva JavaScript library 'gotoSlide' call.

## Content Display

By default, content displays in landscape mode.

However, on the iPad application only, individual Key Messages can be set to display in Portrait Mode.

## Tracking and Reporting

CLM content is tracked out of the box with no additional configuration. [^5]

Native tracking occurs on a slide (Key Message) basis and records:

- Duration on slide.
- Display order.
- Presentation in which the slide was viewed.
- Start time.
- Version.

[^5]: As live calls are completed in Customer environments, you will need to work with your Customers to get visibility of this data.

## Custom Tracking

In addition to the native tracking of which Key Messages are viewed, for HTML content, Content Creators can use Veeva JavaScript code, Call Clickstream, to record clicks in the content and write lines of data.

This can replicate Veeva native tracking or capture additional information for example the use of pop-ups in CLM.

## Supported Platforms

The Veeva CRM Mobile application is supported on both iOS and Window 10 devices.

Whilst most functions are supported on both platforms, there are some that are not supported on Windows. [^6]

[^6]: Functions not supported in Windows tablet are called out in CRM Help and within the training content.

### iOS Support Policy

Veeva CRM on iPad is supported on the most current available iOS version, as well as the two prior historical versions.

New iOS versions are supported on the first day that Apple announces general availability.

As of September 16, 2020, Veeva supports iPad OS,  iOS 14 & iOS 13 and all minor version in between.

iOS devices supported are iPad, iPad Mini, iPad Air, iPad Pro.

- Please check the [iOS Support Policy](https://crmhelp.veeva.com/doc/Content/CRM_topics/Getting_Started/MobileDeviceSetup/iOS/iOSOverview.htm) on the Veeva Website to ensure you know the latest supported devices.

### Windows Support Policy

Veeva CRM for Windows is supported on the Windows 10 Enterprise and Professional editions.

Recommended considerations for creating content for Windows versus iPad devices will be covered in later CLM training courses.

## Veeva CRM Mobile Application Sync

Once CLM content is synced to Veeva CRM, the Veeva CRM Mobile Application for iPad or Window tablet needs to be synced to download the CLM content.

Login using Veeva CRM testing Users (e.g. cviewer) and click 'Sync'.

## Quiz

> [!faq]- Is there tracking out of the box?
> 
> Yes

> [!faq]- What method is used for custom tracking?
> 
> Veeva Call Clickstream

> [!faq]- Which of the following versions are included in the Veeva CRM iOS Support Policy?
> 
> The latest version and one previous version.

> [!faq]- Which of the following can be disable within CLM?
> 
> The swipe motion for slide navigation.

> [!faq]- Which of the following **cannot** be made available from the Action Button?
> 
> Connect to the Brand website.
