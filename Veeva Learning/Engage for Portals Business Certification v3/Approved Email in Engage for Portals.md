## Using Approved Email in Engage for Portals

Approved Email is the preferred distribution channel.

Content is accessed via a unique URL (embed code) sent to the HCP directly via Approved Email.

The embed code would be include in an email fragment or email template.

An Engage presentation can be accessed from within an Approved Email Template or Fragment:
- The Email Template or Email Fragment must have the `{{engageLink}}` Token.
- Labeling Links in Approved Email can help identify Engage for Portal links for reporting purpose: `<a href="https://www.veeva.com/?LinkName=MyEngageLinkName" target="_blank">Click Here!</a>`

The Email Template or Email Fragment must have the following setup in Vault:
- Engage presentation in the Related Engage Presentation section.
- URL of the website containing the Engage Media Player in the Embedded Viewer Page field.

## Approved Email Integration

Syncing Approved Email content from Vault creates CRM records in the Approved Documents tab.

Engage for Portal links are commonly embedded into Approved Email Fragments or Templates to maintain the Account association.
