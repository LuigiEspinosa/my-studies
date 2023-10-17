# Approved Email Basics

Approved Email enables Reps to send approved, compliant emails to HCPs from Veeva CRM.

## Advantages of Approved Email

Approved Email enables personalized content to be sent by the Rep to an HCP (or up to 50 HCPs) without the regulatory risk of traditional emails.

- Open rate of up to 42%
- Click through rate of 11%

## Elements of an Approved Email

Approved Email uses HTML, CSS and a set of Veeva Approved Email Configuration Tokens to enable Content Creators to create re-usable, compelling and compliant content for Reps to send to HCPs.

- The Email Template is an HTML file that is hosted in Vault PromoMats and available to Veeva CRM Users (Reps). Email templates can be standalone or include additional document types which must relate to the base Email Template.

- An Email Frgament is a modular HTML snippet that may contain embedded text, image(s), a link to promotional/reference material sotred in Veeva Vault PromoMats, or a URL. Email Fragments cannot be standalone but must be embedded into an Email Template.

- A Template Fragment is an HTML snippet, used to create a footer appended to an Email Template and can be used across many Email templates. The Template Fragment enables the use of repeated and standardized text and is stored in Vault PromoMats.

## Related Vault Documents and Vault Viewer

Related Vault Documents are documents that have been approved for distribution and stored in Vault PromoMats.

These can be linked via an Apprived Email Template or Fragment to allow Reps to share content which can be viewed in the Vault Viewer.

The Vault Viewer is a default document viewer that allows email recipients to view Vault documents and can be embedded into an external branded website.

## Creating an Email Temaplte

An Approved Email Template at minimum is a standard HTML document that must be UTF-8 encoded and adhere to the following guidelines:

- All comment tags must be preceded with a space or other form of indentation.
- Use `<table>` (and nested `<table>` tags) for absolute placement. Do not rely on `<div>`.
- Do not link external CSS style sheets. CSS should be inline in the head using the `<style>` tag or inline in the `<body>` HTML.
- Only a subset of CSS functinality are supported in many email clients.
- Images should be formatted for screen resolution and be as small as possible.

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>My Title</title>
    <style type="text/css"></style>
  </head>
  <body>
    <table>
      {{ insertEmailFragments }}
    </table>
  </body>
</html>
```

Email templates can reference Vault-managed or externally hosted images and hyperlinks. All images for an Email template need to be bundled into a ZIP archive to be added into Vault PromoMats in the document properties "Assets" section.

```html
<img src="my_local_folder/labrione_logo.png" />
```

Images will be published to the Content Delivery Network which will load and deploy the images to a public web server so all email recipients can view the images.

## Approved Email Configuration Tokens

Approved Email Configuration Tokens are used for personalization and adding functionality by Reps.

- **CRM Data Tokens** - Pull data from the CRM into the Approved Email.
- **Vault Content Tokens** - Link content in Vault to the Approved Email.
- **Functionality Tokens** - Enable new functionality within the email.
- **Custom Text Tokens** - Allow end users to enter free text in a controlled and compliant manner.

### CRM Data Tokens

Content Tokens add specific content from objects in CRM to enable the personalization of emails.

- {{ accTitle }}          - Account salutation
- {{ accFname }}          - Account first name
- {{ accLname }}          - Account last name
- {{ accCredentials }}    - Account credentials
- {{ userName }}          - Rep's name
- {{ userEmailAddress }}  - Rep's email address
- {{ userPhoto }}         - Photo of the Rep stored in the CRM

In addition, Content Creators can also reference the Account, Approved_Document_vod, Call2_vod, User and User_Detila_vod object to pull data stored in these fields into the Approved Email.

- {{ ObjectAPIName.FieldAPIName }}
- {{ ObjectAPIName.RelationshipName.FieldAPIName }}

Examples:

- {{ Account.Specialty_1_vod__c }}
- {{ User.Email }}
- {{ Call2_vod__c.Remote_Meeting_vod__r.Host_Link_vod__c }}

```txt
Dear {{accTitle}} {{accFname}} {{accLname}} {{accCredentials}}.

Thank you for meeting with me. following on from our discussion on the comparison between {{Account.Preferred_Statin__c}} and Cholecap I'd like to share some further data with you.

{{insertEmailFragments}}

Kind regards,

{{userName}}
Verteo Biopharma
{{userEmailAddress}}

{{userPhoto}}
```

### Vault Content Tokens

Vault Content Tokens create links to Materials (Promotional Pieces) and Reference Documents in Vault, that allows reps to quickly and compliantly distribute documents like PDF files or Videos in the emails.

A great benefit is that customers can update documents and HCP will always access the latest and approved version reducing regulatory risk. The files must be uploaded to Veeva Vault and referenced in the email as a hyperlink and are not traditionally attached to the email.

Tracking on when and how many times was a document opened by the HCP is automatically recorded.

The customer may manually or schedule the expiration of a distributed document, preventing HCP access if the document is withdrawn.

- Promotional Piece: Leave behinds such as clinical trials, safety studies, dosing guidelines, etc
  - {{ PieceLink }}

- Reference Document: Important Safety Information or Prescribing Information.
  - {{ ISILink }}
  - {{ PILink }}

It is also possible using the {{$VaultDocumentID}} Token, remember to pull this Document ID from the document's Vault URL.

### Custom Text Tokens

Approved Email Templates are hard-coded HTML emails whoch do not allow Reps to edit any of the content.

There are specific Tokens which when added to the Template enable end users to enter free text in a controlled and compliant manner.

These Tokens are not supported in Email Fragments as they require user input which the UI does not support.

{{ customText }} is the base Custom Text Token which creates a blank text area for the Rep to populate with free text.

Additional variations of the {{ customText }} Token are:

- {{ customText(Length) }} - This sets a maximum length for the entered free text. {{ customText(255) }} will allow up to 255 characters of text.

- {{ customText(Length|DefaultText) }} - This token allows the Rep to either write a custom message with a maximum length, or utiliza the default text.

- {{ customText(|DefaultText) }} - This token can also be used to add default text without specifying a character length.

- {{ customText:Required }} - This Token marks the free text field as required which means the Rep cannot send the email without entering text in this field.

- {{ customText[options] }} - This Token creates a Picklist field in the email. The values of the Picklist are defined in the HTML of the email. This creates a list of options for the Rep to choose from so they can personalize the email. {{customText[practice|congress|pharmacy|clinic|hospital]}}.

- {{ customText[##ContentToken1##|##ContentToken2##] }} - This Token enables the picklist to be filled with Content Tokens to allow a picklist with CRM values.

- {{ customRichText }} - In order to allow a more versatile free text area in an email, it is possible to use a Rich Text Token which creates a default text area of 400x300 pixels. It allows Reps to Bold, italicize and underline text, add bullets and numbers, increase or decrease indents.

### Functionality Tokens

Functionality Tokens can be used in both a template or a fragment to enable new functinality within the email.

- {{ approvedEmailAction }} - This creates a link in the email which when selected creates a record in the CRM as a Multichannel Activity record based on the Record Type set up.

- {{ addToCalendar }} - This inserts an .ICS attachment for HCPs to add their calendar. This token only works for emails sent via Engage Meeting, Medical Events or Events Management entry points.

Approved Email provides a built-in email unsubscribe solution that is automatically available to any recipient of an Approved Email when the {{ unsubscribe_product_link }} Token is included in the Approved Email.

```html
<a href="{{unsubscribe_product_link}}">Unsubscribe</a>
```

The standard Veeva unsubscribe page can also be embedded into an external customer webpage to allow for control of the branding. In this situation, Content Creators will use the {{ unsubscribe_product_link[External URL] }} Token.

## Approved Email Tokens in Email Fragments and Template Fragments

To enhance both flexibility and reusability of Approved Email content, content creators can add several Approved Email tokens that do not require input from the user to Email Fragments and Template Fragments.

- Tokens in template fragments and email fragments are supported in all Approved Email entry points.
- Tokens in template fragments and email fragments are **not** supported on the Windows Tablet platform.
