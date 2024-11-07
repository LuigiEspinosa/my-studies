## Introduction to Approved Email

Approved Email enables Reps to send approved, compliant emails to HCPs from Veeva CRM.

## Advantages of Approved Email

Approved Email enables personalized content to be sent by the Rep to an HCP (or up to 50 HCPs on browser, but no limit on iOS devices and events management) without the regulatory risk of traditional emails.

This is not a mass-mailing tool.

Approved Email has higher open rates than industry average.

- Open rate of up to 38%.
- Click through rate of 15%

## Elements of an Approved Email

Approved Email uses HTML, CSS and a set of Veeva Approved Email Configuration Tokens to enable Content Creators to create re-usable, compelling and compliant content for Reps to send to HCPs.

There are several elements that can make up an Approved Email. The main component is the Email Template.

### Email Template

The Email Template is an HTML file that is hosted in Vault PromoMats and available to Veeva CRM Users (Reps). It is an email framework for the message.

Email Templates can be standalone or include additional document types which must relate to the base Email Template.

### Email Fragments

An Email Fragment is a modular HTML snippet that may contain embedded text, image(s), a link to promotional/reference material stored in Veeva Vault PromoMats, or a URL.

Email Fragments cannot be standalone but must be embedded into an Email Template.

### Template Fragments

A Template Fragment is an HTML snippet, used to create a footer appended to an Email Template and can be used across many Email templates.

The Template Fragment enables the use of repeated and standardized text and is stored in Vault PromoMats.

## Related Vault Documents and Vault Viewer

Related Vault Documents are documents that have been approved for distribution and stored in Vault PromoMats.

These can be linked via an Approved Email Template or Fragment to allow Reps to share content which can be viewed in the Vault Viewer.

The Vault Viewer is a default document viewer that allows email recipients to view Vault documents and can be embedded into an external branded website.

## Creating an Email Template

An Approved Email Template at minimum is a standard HTML document that must be UTF-8 encoded and adhere to the following guidelines:

- All comment tags must be preceded with a space or other form of indentation.
- Use `<table>` (and nested `<table>` tags) for absolute placement. Do not rely on `<div>`.
- Do not link to external CSS style sheets. CSS should be inline in the head using `<style>` tag or inline in the `<body>` HTML.
- Only a subset of CSS functionality are supported in many email clients.
- Images should be formatted for screen resolution and be as small as possible.

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>My Title</title>
    <style type="text/css">
      <!-- Inline CSS styles -->
    </style>
  </head>
  <body>
    <!-- Content goes here. Styles can also be inline. -->
    <table>
      <!-- Rquired if using fragments. Table must be empty and include the following token -->
      {{insertEmailFragments}}
    </table>
  </body>
</html>
```

## Images in Email Templates

Email Templates can reference Vault-managed or externally hosted images and hyperlinks.

All images for an Email template need to be bundled into a ZIP archive to be added into Vault PromoMats in the document properties "Assets" section.

The image path in the HTML file will use a relative path e.g.: [^1]

```html
<img src="my_local_folder/brand_logo.ong" />
```

Images will be published to the Content Delivery Network which will load and deploy the images to a public web server so all email recipients can view the images.

[^1]: File names cannot include special characters (%, ?).

## Approved Email Configuration Tokens

Approved Email Configuration Tokens are used for personalization and adding functionality by Reps.

There are 4 groups of Tokens available to use:

- **CRM Data Tokens -** Pull data from the CRM into the Approved Email.
- **Vault Content Tokens -** Link content in Vault to the Approved Email.
- **Functionality Tokens -** Enable new functionality within the email.
- **Custom Text Tokens -** Allow end users to enter free text in a controlled and compliant manner.

## CRM Data Tokens

### Personalization

Content Tokens add specific content from objects in CRM to enable the personalization of emails.

| Token                  | Content                             |
| ---------------------- | ----------------------------------- |
| `{{accTitle}}`         | Account salutation.                 |
| `{{accFname}}`         | Account first name.                 |
| `{{accLname}}`         | Account last name.                  |
| `{{accCredentials}}`   | Account credentials.                |
| `{{userName}}`         | Rep's name.                         |
| `{{userEmailAddress}}` | Rep's email address.                |
| `{{userPhoto}}`        | Photo of the Rep stored in the CRM. |

### Reference the Account

In addition, Content Creators can also reference the `Account`, `Approved_Document_vod`, `Call2_vod`, `User` and `User_Detail_vod` object to pull data stored in these fields into the Approved Email. There are two Tokens that allow this:

```html
{{ObjectAPIName.FieldAPIName}} {{ObjectAPIName.RelationshipName.FieldAPIName}}
```

![[CRM Data Tokens.png]]

## Vault Content Tokens

Vault Content Tokens create links to Materials (Promotional Piece) and Reference Documents in Vault, that allows reps to quickly and compliantly distribute documents like PDF files or Videos in the emails.

A great benefit is that customers can update documents and HCP will always access the latest and approved version reducing regulatory risk.

The files must be uploaded to Veeva Vault and referenced in the email as hyperlink and are not traditionally attached to the email.

Tracking on when and how many times was a document opened by the HCP is automatically recorded.

The customer may manually or schedule the expiration of a distributed document, preventing HCP access if the document is withdrawn.

### Examples

- Promotional Piece `{{PieceLink}}` - Leave behinds such as clinical trials, safety studies, dosing guidelines, etc.
- Reference Document `{{ISILink}}` `{{PILink}}` - Important Safety Information or Prescribing Information.
- It is also possible using the `{{$VaultDocumentID}}` Token, remember to pull this Document ID from the document's Vault URL.

## Custom Text Tokens

Approved Email Templates are hard-coded HTML emails which do not allow Reps to edit any of the content.

There are specific Tokens which when added to the Template enable end users to enter free text in a controlled and compliant manner.

These Tokens are not supported in Email Fragments as they require user input which the UI does not support.

`{{customText}}` is the base Custom Text Token which creates a blank text area for the Rep to populate with free text.

### Additional Variations

- `{{customText(Length)}}` - This sets a maximum length for the entered free text. `{{customText(255)}}` will allow up to 255 characters of text.
- `{{customText(Length|DefaultText)}}` - This token allows the Rep to either write a custom message with a maximum length, or utilize the default text. `{{customText(255|Thank you for meeting with me in the morning}}`.
- `{{customText(|DefaulText)}}` - This token can also be used to add default text without specifying a character length. `{{customText(|Thank you for meeting with me in the morning)}}`.

### Free Text/Picklist Field

- `{{customText:Required}}` - This Token marks the free text field as required which means the Rep cannot send the email without entering text in this field.
- `{{customText[options]` - This Token creates a Picklist field in the email. The values of the Picklist are defined in the HTML of the email. This creates a list of options for the Rep to choose from so they can personalize the email. `{{customText[practice|congress|pharmacy|clinic|hospital]}}`.

### Content Token

`{{customText[##ContentToken1##|##ContentToken2##]}}`, This Token enables the picklist to be filled with Content Tokens to allow a picklist with CRM Values.

`{{customText[##accTitle##|##accFname##|##accLname##|##accCredentials##|##accFname##]}}`, creates a picklist with the options Salutation, First Name, Last Name, Credentials or First Name.

### Rick Text Token

In order to allow a more versatile free text area in an email, it is possible to use a Rick Text Token which creates a default text area of 400x300 pixels.

The Token used for this is `{{customRichText}}`.

This allows Reps to:

- Bold, Italicize and underline text.
- Add bullets and numbers.
- Increase or decrease indents.

## Functionality Tokens

Functionality Tokens can be used in both a template or a fragment to enable new functionality within the email.

- `{{approvedEmailAction}}` - This creates a link in the email which when selected creates a record in the CRM as a Multichannel Activity record based on the Record Type set up.
- `{{addToCalendar}}` - This inserts an .ICS attacgment for HCPs to add to their calendar. This token only works for emails sent via Engage Meeting, Medical Events or Events Management entry points.

A common example is using this token to create a Request a Rep button in an email.

### Unsubscribe Solution

Approved Email provides a built-in email unsubscribe solution that is automatically available to any recipient of an Approved Email when the `{{unsubscribe_product_link}}` Token is included in the Approved Email.

For example: `<a href="{{unsubscribe_product_link}}">Unsuscribe</a>` from all future emails about Cholecap.

The standard Veeva unsubscribe page can also be embedded into an external customer webpage to allow for control of the branding. In this situation, Content Creators will use the `{{unsuscribe_product_link[External URL]}}` Token.

## Approved Email Tokens in Email Fragments and Template Fragments

To enhance both flexibility and reusability of Approved Email content, content creators can add several Approved Email tokens that do not require input from the user to Email Fragments and Template Fragments.

For example, a content creator adds the `{{accCredentials}}` Token to an Email Fragment. Sarah Jones sends several Approved Emails using different email templates. She adds the Email Fragment to each one, and the `{{accCredentials}}` Token inside the fragment renders exactly the same across all of the email templates, just as it would if the token was added to each individual Email Template.

This feature does not require configuration.

### Considerations

- Tokens in template fragments and email fragments are supported in all Approved Email entry points.
- Tokens in template fragments and email fragments are not supported on the Windows Table platform.

See the [21R3.0 Functionality Guide](https://crmhelp.veeva.com/doc/Content/CRM_topics/ReleaseNotes/21R3.0/21R3.0FunctionalityGuide.htm#Approved) for a complete list of newly available Tokens.
