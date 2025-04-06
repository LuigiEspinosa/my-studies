## Footnotes and Citations

Email Fragments may contain information or links to documents that must properly reference a citation and/or footnote within the Email Template.

Approved Email can dynamically create and define footnotes, citations, and citation summaries. These are based on which Email Fragments the rep selects to include in the Email Template.

Approved Email Configuration Tokens are used to define what citations and footnotes are included, and where they are located in the Email Template.

The Rep cannot view footnotes and citations in preview mode before sending the Approved Email.

Specific Tokens are used to insert Footnotes and Citations.

### Tokens for Email Templates

A subset of Tokens are required in both the Email Template and the Email Fragment.

The following Tokens govern where the dynamically assembled content is inserted into the Email Template:

- `{{InsertFootnotes}}` - Insert the Footnotes in the Email Template.
- `{{InsertCitationSummaries}}` - Insert the Citation Summaries in the Email Template.
- `{{InsertCitations}}` - Insert the Citations in the Email Template.

### Footnote Tokens for Email Fragments

The following Tokens are inserted into the Email Fragment:

- `{{FootnoteSymbol[Sequence Number]}}` - Inserts a footnote symbol. For example, `{{FootnoteSymbol[3]}}` renders as ‡. If more footnote symbols are needed, symbols can be duplicated by including multiple tokens. For example, `{{FootnoteSymbol[3]}} {{FootnoteSymbol[3]}}` renders as ‡‡. The symbols order is:
	1. *
	2. †
	3. ‡
	4. §
	5. ||
	6. ¶
- `{{FootnoteStart}}` - Denotes the start of the footnote section.
- `{{FootnoteEnd}}` - Denotes the end of the footnote section.

### Citations Tokens for Email Fragments

The following Tokens are inserted into the Email Fragment:

- `{{CitationNumber[Sequence Number]}}` - Inserts Citations number [^1]. These are integers starting from one. For example, `{{CitationNumber[2]}}`.
- `{{CitationStart}}` - Denotes the start of the footnote section.
- `{{CitationEnd}}` - Denotes the start of the footnote section.
- `{{CitationSummaryStart}}` - Denotes the start of the citation summary section.
- `{{CitationSummaryEnd}}` - Denotes the end of the citation summary section.

[^1]: The sequence number is logical and not directly printed in the email. This is to help the designer visually correlate the footnote/citation references in the Fragment to the actual footnote/citations printed in the folder.

### Email Template and Email Fragments with Footnotes and Citations

![[Footnotes and Citations.png]]

## BEE Editor

### What is the BEE Editor?

BEE is a WYSIWYG (What you see is what you get) drag and drop editing service allowing Content Creators to create responsive Approved Email templates within Veeva Vault PromoMats.

BEE Editor can reduce the time spent  on prototyping or building Approved Email templates and doesn't require any HTML knowledge.

BEE Editor can't be used to create Email Fragments.

### How to open BEE Email Editor

In order to use BEE Editor, you need to first create a Placeholder for an Email Template.

1. In the Library, click Create, then Placeholder.
2. Select Document Type = Email Template and click Next.
3. Enter the required fields and click Save.

To open BEE Editor and start building an email, click on the Action Button and select 'Edit Email'.

The BEE Editor will open in ta new tab. After Editing the Email, click 'Save' to return to Vault PromoMats.

### BEE Editor Toolbar

The BEE Editor Toolbar contains all the actions not related directly with content editing:

- **Help:** Takes users to the Vault Help, which contains an overview on BEE Editor, its components, as well as a link to BEE editor documentation: [https://support.beefree.io/hc/en-us](https://support.beefree.io/hc/en-us).
- **Show Structure:** Allows content creators to see the overall Email template structure.
- **Preview:** Content creators can preview how the template appears on a desktop or mobile device.
- **Close/Save:** Closes/Saves the template being edited or created.

### Using BEE Email Editor

This section includes a series of tiles which represent the different types of content you can use in your message.

- Text.
- Dividers.
- Social.
- Images. When adding image files, do not include the following special characters in the file name (%, /, ?).
- Buttons.

To use them, just drag one inside a column, it will auto-adjust to the column width.

Every content block has its own settings, such as granular control on padding.

When working with Text content, you can easily personalize content by inserting Special Links and Merge Tags from the Text menu.

**Special Links**

- Approved Email Action Links: Double Opt-In Confirmation, Call to Action.
- Vault Links: Engage Links, Survey Links, Links to other Vault Documents.
- Unsubscribe Links.

**Merge Tags**

- Contain pre-populated tokens.

![[BEE Editor.png]]

Thumbnails of images display in editor to help the user select the correct image.

- Note this only applies for newly added images - thumbnails for images previously loaded before 19R1 will not display.

By clicking on 'Rows', you can see the different types of rows that can be inserted into the message.

- Rows are structural units which define the horizontal composition of a message section. Within a row, there are columns that dictate how a row is formatted. A row can have one to four columns.

Using more than one column allows you to put different content elements side by side.

Each row has its own setting, which provides flexibility that was previously only achieved with hand-coded emails.

General settings for the mssage.

Inherited by Structure and Content block.

- For example, the font family set in the message settings is then used everywhere in your message, except where you use a custom setting.

This is useful to build a coherent message very quickly.

### Using BEE Email Editor - Advanced

BEE Editor gives customer the opportunity to add a link to the PI, ISI or other Vault Documents.

These documents must first be identified in the Document's Related Document Properties before being added to the Template in BEE Editor and must be in the steady state (e.g. Approved).

![[Adding Vault Doc Link.png]]

**Special links**

- **Approved Email Action Links** - Double Opt-In Confirmation, Call to Action.
- **Vault Links** - Engage Link, Survey Link and Links to Approved Vault Documents.
- **Unsubscribe Links** - Standard or custom unsubscribe Link.

**Merge Tags**

- Insert the known Approved Email Tokens like `{{accFName}}`, `{{accLName}}` or `{{userPhoto}}` to make the email personalized.

Users can personalize an Approved Email by adding contact information and photos of themselves.

In the email template, use the `{{userPhoto}}` Token.

If using the `{{addToCalendar}}` Token in email invites, all DateTime Tokens will now display in the user's local format. This token will only work in invites for Windows in Engage Meeting, Medical Events and Events Management.

### Best practices to migrate content created with BEE editor

Follow these steps:

1. Create content with BEE editor.
2. Download both files you can find in Assets (an HTML and JSON file).
3. Send both files to your customer.
4. The customer needs to upload the HTML normally and once created, upload `.json` in Renditions specifying "email editor".
5. The customer will then be able to edit the email with BEE Editor.

Under no circumstances should a BEE Editor email be downloaded and the HTML edited directly as it causes issues with the email filtering to SPAM.

If the images for the fragments were originally hosted in the BEE Editor template but then moved to a fragment, they need to be referenced in the fragment via the assets folder. Using the BEE Editor CDB link in the fragment will cause the email to go to spam.

## Quiz

> [!faq]- Which of the following actions are visible in the BEE Editor Toolbar?
> 
> - Preview.
> - Close/Save.
> - Show Structure.
> - Help.

> [!faq]- When working with Images in the BEE Editor, users are not able to edit the image (e.g. resize the image, apply visual effects, etc.).
> 
> False.

> [!faq]- The Rep can view footnotes and citations in preview mode before sending the Approved Email.
> 
> False.

> [!faq]- BEE Editor requires HTML knowledge.
> 
> False.

> [!faq]- Under no circumstances should a BEE Editor email be downloaded and the HTML edited directly as it cause issues with the email filtering to SPAM.
> 
> True.

> [!faq]- Which of the following tokens are available in BEE Editor?
> 
> - Double Opt-In Confirmation.
> - Survey Link.
> - Links to Approved Vault Documents.

> [!faq]- When working with Text content in the BEE Editor, users can easily personalize content by inserting Special Links and Merge Tags from the Text menu.
> 
> True.

> [!faq]- In Approved Emails, users need to manually create footnotes, citations, and citation summaries.
> 
> False.

> [!faq]- The following citation tokens are inserted into the Email Fragment:
> 
> - `{{CitationNumber[Sequence Number]}}`
> - `{{CitationStart}}`
> 

> [!faq]- The following footnote tokens are inserted into the Email Fragment:
> 
> - `{{FootnoteStart}}`
> - `{{FootnoteEnd}}`
> - `{{FootnoteSymbol[Sequence Number]}}`

> [!faq]- In BEE Editor, it is not possible to have multiple columns in a row.
> 
> False.

> [!faq]- BEE Editor gives customers the opportunity to add a link to the PI, ISI or other Vault Document. These documents must be in the steady state (e.g. Approved).
> 
> True.

> [!faq]- Approved Email Configuration Tokens are used to define what citations and footnotes are included, and where they are located in the Email Template.
> 
> True.

