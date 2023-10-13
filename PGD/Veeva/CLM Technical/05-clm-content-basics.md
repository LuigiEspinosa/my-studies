# Veeva CLM Content Basics

## Introduction to Veeva CLM

Veeva CRM is a Customer Relationship Management (CRM) software created specifically for the life sciences industry and is built on top of Salesforce.com. The Mobile Application is used by Reps on either an iPad, Window Tablet or iPhone to support their day-to-day business processes.

Veeva CRM houses all of Veeva's multichannel products and is the cornerstone for delivering content.

Reps can only access presentations that have been Approved. This means that the content available for them in the field is the latest, up-to-date and compliant messaging.

Veeva CLM tracks and records interactions (calls), capturing which pages of a CLM presentation are show during a sales call to the individual Accounts in Veeva CRM, additional information such as responses to Surveys and other information can be captured and stored in the CRM as well.

CLM is not just Detailers - More Use Cases:

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

## Veeva CLM Core Functions

The core areas of the application used to show CLM content to an HCP are 'My Accounts' and  'Media'.

### My Accounts View

My Accounts allows Reps to access HCP and HCO Accounts aligned to them by territory in Veeva CRM. Selecting an Account prior to viewing CLM Content is the recommended method of accessing contet. This allows for the automatic tracking of the media viewed to the Account.

For the Action Access, Rep can access certain actions quicly by using the incons on the right.

- Creata a Call Report
- Launch Media
- Additional quick actions via the Action Menu
- Send an Approved Email

Alternatively, the Rep can tap on the name of the Account to access the Account Detail Page. This page display a snapshot of the Account including:

- HCP Name
- Specialty
- Credentials
- Segmentation
- Gender

Each account also displays standard and custom data fields that align with the Account.

### Media Tab

Whils accessing CLM Content is recommended via an Account, the Rep can click on the Media Tab which opens the Media Library. This shows all CLM Content available to the Rep.

The primary function of the Media tab is the review of content before the use within the call.

To open a CLM Presentation, tap on the thumbnail image.

CLM Content supports:

- HTML5
- PDF
- PowerPoint
- Image
- Video
- Augmented Reality (AR) - iPad only

A CLM Presentation can use multiple media types within it.

### Native User Experience

Veeva CLM has native functionality which needs to be considered when building CLM content. Many of the native features can be turned on or off for either individual slides or the entire company (at org level).

The Action button is in the top left-hand corner and allows the Rep to:

- Exit the presentation.
- Complete a Survey.
- Send an Email.
- Send a Medical Inquiry.
- Order Products.
- Take other customizable actions.

> !! This button cannot be disabled and 54x36 pixels in size.

**The History buttons** in Veeval CLM are comparable to the back and forward buttons in a web browser. They will display as the content is navigated through and will bring the Rep back and forward to slides in the order in which they were display to the HCP.

This can be disabled for individual slides (at Key Message level).

**The Highlighter Pen** allows the Rep to highligh content to an Account. This is turned on or off for the whole company. The pen is available in Pink, Yello and Green colors.

> !! The action button, highliter pen and History buttons area is 60x176 pixels in total.

**Custom Reaction Buttons** allow a Rep to record the HCP's reaction to content by selecting the relevant button:

- Blue for Positive Reaction.
- White for Neutral Reaction.
- Red for Negative Reaction.

The Custom Reaction button can be disabled for the whole company or disabled for individual slides.

> !! These are 160x37 pixels.

**Navigation Bar** opens the swim lane to allow the Rep to see all the Key Messages (slides) that are part of the current Presentation or jump to another Presentation. It can be disabled for individual slides. I can also be configured to conceal the slide content when the swim lane is open to remain compliant.

> !! Unopened, the navigation bar icon is 61x30 pixels.

By default, Reps can swipe to navigate from one slide to another. This can be disabled for individual slides and replaced with coded custom navigation.

Content Creators can code in **custom navigation** to allow quick and easy navigation to different areas of the CLM. This uses the Veeva JavaScript library `'goToSlide'` call.

### Content Display

By default, content displays in landscape mode. However, on the iPad application only, individual Key Messages can be set to display in Portrait Mode.

### Tracking and Reporting

CLM content is tracked out of the box with no additional configuration. Native tracking occurs on a slide basis and records:

- Duration on slide.
- Display order.
- Presentation in which the slide was viewed.
- Start time.
- Version.

In addition to the native tracking of which Key Messages are viewed, for HTML Content, Content Creators can use Veeva JavaScript code, Call Clickstream, to record clicks in the content and write lines of data. This can replicate Veeva native tracking or capture additional information for example the use of pop-ups in CLM.

## CLM Platform Considerations

Most functions are supported on both platforms, there are some that are not supported on Windows.

### iOS

iPad is supported on the most current available iOS version, as well as the two prior historical versions. New iOS versions are supported on the first day that Apple announces general availability.

### Windows

Is supported on the Windows 10 Enterprise and Professional editions.

## Synchronizing CLM Content

Once CLM content is synced to Veeva CRM, the Veeva CRM Mobile Application for iPad or Windows tablet needs to be synced to download the CLM content. Login using Veeva CRM testing Users and click 'Sync'.
