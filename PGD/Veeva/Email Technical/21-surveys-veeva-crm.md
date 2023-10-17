# Surveys in Veeva CRM Approved Email

Surveys can be sent to HCPs via Approved Email to allow Surveys to be completed without a face-to-face meeting. HCPs click a link in an email that launches they Survey in an iFrame on a Veeva hosted site.

Surveys expand the available reach across multiple HCPs, and means we are less reliant on face-to-face interactions.

- Gain feedback from HCPs on topics via email.
- Conduct ad hoc market research with accounts.

## Create an Approved Email Survey in Veeva CRM

In Veeva CRM, create the Survey Record. The Approved Email Channel and External ID field are necessary to set up a Survey for use in Approved Email.

- Channels field: Choose 'Approved Email' Survey Channel.
- External ID field: Define unique External ID for the Survey.

Click 'Publish' to the survey before testing. Unpublished surveys are not available to survey targets (HCPs).

For a Survey to be included within an Approved Email, a Survey record also needs to be created in Vault PromoMats. To add a Survey record in Vault PromoMats, navigate to the Admin section, and in the Business Administration tab, search and select the Survey Object, and click 'Create'.

Enter the Survey Name, Start Date, End Date and External ID to match Veeva CRM and click 'Save'.

## Link Survey to Approved Email Content in Veeva Vault

When the Approved Email content is uploaded in Vault PromoMats, the Content Creator needs to link the Survey to the Approved Email content and sync with Veeva CRM.

## Setup Email Templates

In the Email Template or Email Fragment, include the `{{ surveyLink }}` Token to create a hyperlink to the Survey. Once uploaded to vauilt PromoMats, select the relevant Survey in the document metadata.

```html
<td class="" style="">
  <a href="{{surveyLink}}">Click here to access the Survey.</a>
</td>
```

## Survey Experience via Approved Email

1. Approved Email in HCPs Inbox.
2. Survey Landing Page.
3. Confirmation Message.

Surveys shared via Approved Email use a Veeva Landing page which is the default option for displaying the Survey and capturing responses from the recipients. There is no configuration or customization required to utilize this option.

Embedding the Survey iFrame in a custom landing page is not supported.
