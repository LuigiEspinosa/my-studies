# Additional Functionalities in Approved Email

Email Fragments may contain information or links to documents that must properly reference a citation and/or footnote within the Email Template. Approved Email can dynamically create and define footnotes, citations, and citation summaries. These are based on which Email Fragments the rep selects to include in the Email Template.

Approved Email Configuration Tokens are used to define what citations and footnotes are included, and where they are located in the Email Template. The Rep cannot view footnotes and citations in preview mode before sending the Approved Email.

## Tokens for Email Templates

- {{ InsertFootnotes }}           - Inserts the Footnotes in the Email Template.
- {{ InsertCitationSummaries }}   - Inserts the Citation Summaries in the Email Template.
- {{ InsertCitations }}           - Inserts the Citations in the Email Template.

### Footnote Tokens

- {{ FootnoteSymbol[Sequence Number] }}   - Inserts a footnote symbol. The order is
                                              1. *
                                              2. †
                                              3. ‡
                                              4. §
                                              5. ||
                                              6. ¶

- {{ FootnoteStart }}                     - Denotes the start of the footnote section.
- {{ FootnoteEnd }}                       - Denotes the end of the footnote section.

### Citations Tokens

- {{ CitationNumber[Squence Number] }}    - Inserts Citation number. The sequence number is logical and not directly printed in the email. This is to help the designer visually correlate the footnote/citation references in the Fragment to the actual footnote/citations printed in the folder.

- {{ CitationStart }}                     - Denotes the start of the citation section.
- {{ CitationEnd }}                       - Denotes the end of the citation section.
- {{ CitaionSummaryStart }}               - Denotes the start of the citation summary section.
- {{ CitationSummaryEnd }}                - Denotes the end of the citation summary section.

## What is the BEE Editor?

BEE is a WYSIWYG (What you see is what you get) drag and drop editing service allowing Content Creators to create responsive Approved Email templates within Veeva Vault ProtoMats. BEE Editor can reduce the time spent on prototyping or building Approved Email templates and doesn't require any HTML knowledge.

BEE Editor can't be used to create Email Fragments.

In order to use BEE Editor, you need to first create a Placeholder for an Email Template.

1. In the Library, click Create, then Placeholder.
2. Select Document Type = Email Template and click Next.
3. Enter the required fields and click Save.

To open BEE Editor and start building an email, click on the Action Button and select 'Edit Email'. The BEE Editor will open in a new tab. After Editing the Email, click 'Save' to return to Vault PromoMats.

### BEE Editor Toolbar

The BEE Editor Toolbar contains all the actions not related directly with content editing:

- **Help:** Takes users to the Vault Help, which contains an overview on BEE Editor, its components, as well as a link to BEE editor documentation.
- **Show Structure:** Allows content creators to see the overall Email template structure.
- **Preview:** Content creators can preview how the template appears on a desktop or mobile device.
- **Close/Save:** Closes/Saves the template being edited or created.

### Using BEE Email Editor

This section includes a seris of tiles which represent the different types of content you ca nuse in your message.

- Text.
- Dividers.
- Social.
- Images. When adding image files, do not include the following special characters in the file name (%, /, ?).
- Buttons.

To use them, just drag one inside a column, it will auto-adjust to the column width. Every content block has its own settings, such as granular control on padding.

When working with Text content, you can easily personalize content by inserting Special Links and Merge Tags from the Text menu.

- Special links
  - Approved Email Action Links: Double Opt-In Confirmation, Call to Action.
  - Vault Links: Engage Links, Survey Links, Links to other Vault Documents.
  - Ubsubscribe Links.

- Merga Tags
  - Contain pre-populated tokens.

Workin with Images:

- **Edit Image:** This button loads an image editing tool allowing you to resize the image, apply visual effects, etc.
- **Adjust to width:** Toggle this settings ON and OFF to automatically fill (ON) or not (OFF) the entire area of the message in which the images was placed.
- **Alt Text:** Enter the text to be displayed when images are turned off. This is a best practice in email design since there are still email clients which have images turned off by default.
- **URL:** Specifies where the image is saved. You can also paste an external URL to load an image from there.
- **Action:** Provided option to link the image to a URL, to a new message in an email client or to a telephone number for making a call or sending a text message.

Thumbnils of images display in editor to help the user select the correct image. (This only applied for newly added images - thumbnails for images previously loaded before 19R1 will not display).

By clicking on 'Rows', you can see the different types of rows that can be inserted into the message. Rows are structural units which define the horizontal composition of a message section. Within a row, there are columns that dictate how a row is formatted. A row can have one to four columns.

Using more than one column allows you to put different content elements side by side. Each row has its own setting, which provides flexibility that was previously only achieved with hand-coded emails.

General settings for the message. Inherited by Structure and Content block, this is useful to build a coherent message very quickly.

### Using BEE EMail Editor - Advanced

BEE Editor gives customer the opportunity to add a link to the PI, ISI or other Vault Documents. These documents must first be indetified in the Document's Related Document Properties before being added to the Template in BEE Editor and must be in the steady state.

1. In BEE Editor, identify the name of your file as you would like to have it displayed to your recipient and highlight it.
2. The click on Special Links > Vault Links and select the document type from the menu.

Special Links:

- Approved Email Action Links: Double Opt-In Confirmation, Call to Action.
- Vault Links: Engage Links, Survey Links, Links to Approved Vault Documents.
- Ubsubscribe Links: Standard or custom ubsubscribed link.

Merge Tags:

- Insert the known Approved Email Tokens lik `{{accFName}}`, `{{accLName}}` or `{{userPhoto}}` to make email personalized.

Users can personalize an Approved Email by adding contact information and photos of themselves. In the email template, use the `{{userPhoto}}` Token. User photo can be added to Veeva CRM in the User Detail object.

If using the `{{addToCalendar}}` Token in email invites, all DateTime Tokens will now display in the user's local format. This token will only work in invites for Windows in Engage Meeting, Medical Events and Events Management.

## Best Practices to migrate content created with BEE editor

1. Create content with BEE Editor.
2. Download both files you can find in Assets (an HTML and JSON file).
3. Send both files to your customer.
4. The customer needs to upload the HTML normally and once created, upload .json in Renditions specifying "email editor".
5. The customer will then be able to edit the email with BEE Editor.

Under no circunstances should a BEE Editor email be downloaded and the HTML edited directly as it causes issues with the email filtering to SPAM. If the images for the fragments were originally hosted in the BEE Editor template but the moved to a fragment, they need to bo referenced in the fragment via the assets folder. Using the BEE Editor CDB link in the fragment will cause the email to go to spam.
