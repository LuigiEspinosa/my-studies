## How to use Surveys in Approved Email?

### Surveys in Approved Email

Surveys can be sent to HCPs via Approved Email to allow Surveys to be completed without a face-to-face meeting.

HCPs click a link in an email that launches the Survey in an iFrame on a Veeva hosted site.

Surveys expand the available react across multiple HCPs, and means we are less reliant on face-to-face interactions.

Use cases:

- Gain feedback from HCPs on topics via email.
- Conduct ad hoc market research with accounts.

### Create an Approved Email Survey in Veeva CRM

In Veeva CRM, create the Survey Record.

The Approved Email Channel and External ID field are necessary to set up a Survey for use in Approved Email.

Remember to 'Publish' the survey before testing. Unpublished surveys are not available to survey targets (HCPs).

### Create an Approved Email Survey in Veeva Vault

For a Survey to be included within an Approved Email, a Survey record also needs to be created in Vault PromoMats.

To add a Survey record in Vault PromoMats, navigate to the Admin section, and in the Business Administration tab, search and select the Survey Object, and click 'Create'.

Enter the Survey Name, Start Date, End Date and External ID to match Veeva CRM and click 'Save'.

### Link Survey to Approved Email Content in Veeva Vault

When the Approved Email content is uploaded in Vault PromoMats, the Content Creator needs to link the Survey to the Approved Email content and sync with Veeva CRM.

### Setup Email Templates

In the Email Templates or Email Fragment, include the `{{surveyLink}}` Token to create a hyperlink to the Survey.

Once uploaded to Vault PromoMats, select the relevant Survey in the document metadata.

### Survey Experience via Approved Email

1. Approved Email in HCPs inbox.
2. Survey Landing Page.
3. Confirmation Message.

### Landing Page

Surveys shared via Approved Email use a Veeva landing page which is the default option for displaying the Survey and capturing responses from the recipients.

There is no configuration or customization required to utilize this option.

Embedding the Survey iFrame in a custom landing page is not supported.

## Quiz

> [!faq]- Which fields must be filled in when creating a survey in CRM for use in Approved Email?
> 
> - External ID.
> - Channels.

> [!faq]- If an Approved Email includes a Survey, the user needs to create the Survey in Veeva CRM and set the External ID.
> 
> True.

> [!faq]- Embedding the Survey iFrame in a custom landing page is supported.
> 
> False.

> [!faq]- Surveys can be available to survey targets without being Published.
> 
> False.

> [!faq]- When an HCP receives an Approved Email with a link to a survey, the link launches the Survey in an iFrame on Veeva hosted site.
> 
> True.

> [!faq]- What are potential use cases for surveys in Approved Email?
> 
> - Gain feedback from HCPs on topics vie email.
> - Conduct ad hoc market research with accounts.

> [!faq]- If an Approved Email includes a Survey, the user needs to create the Survey Record in Vault and set the same External ID and Start & End Dates as in Veeva CRM.
> 
> True.
