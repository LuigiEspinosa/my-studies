## Approved Email Invitations for Engage Meeting

The best way to invite an HCP to an Engage Meeting is by an Approved Email invitation.

This email can provide the day and time of the meeting, enable the HCP to join the call by clicking on a unique Participant URL and add an .ICS file to allow the HCP to add this meeting to their calendar.

An Email Template is the only required component to send an Approved Email Engage Meeting invitation.

## Engage Meeting Configuration Tokens

In addition to the standard Approved Email Configuration Tokens, there are Tokens that are specific to Engage Meeting that provide the HCP with the date and time of the meeting and details to join the meeting.

## Participant URL Token

Engage Meeting Invitations should include the Participant URL, which will allow HCPs to seamlessly join an Engage Meeting from a unique link.

The Participant URL can be added to the Email Template with the following Token: `{{Call2_vod__c.Cobrowse_URL_Participant_vod__c}}`

## Date and Time Tokens

To include the Meeting Date and Time in an Engage Meeting invitation, it is best to use the `{{parentCallDatetime}}` Token, This ensures compatibility for both Person Account and Group Account Calls, as well as with the Token used for [[#Add to Calendar Token for Engage Meeting|Calendar Reminders]].

Other Date and Time related Tokens include:

- Date and Time (Person Call) [^1] - `{{Call2_vod__c.Call_Datetime_vod__c}}`
- Date and Time (Group Call) [^1] - `{{Call2_vod__c.Parent_Call_vod__r.Call_Datetime_vod__c}}`
- Date only - `{{Call2_vod__c.Call_Date_vod__c}}`

[^1]: Beware that using `{{Call2_vod__c.Call_datetime_vod__c}}` or `{{Call2_vod__c.Parent_Call_vod__r.Call_Datetime_vod__c}` with `{{addToCalendar}}` causes the date and time to display in Zulu format.

## Time Zone Tokens

Time Zone Tokens enable the time zone of the Rep, as specified in the CRM to be pulled into the Email Template. There are two versions that can be used.

- `{{timeZone}}` - Renders in the email as the time zone abbreviation, e.g., GMT.
- `{{User.TimeZoneSidKey}}` - Renders in the email as the location, description and time relative to GMT, e.g., (GMT +00:0) Greenwich Mean Time (Europe/London).

## Meeting ID and Meeting Password Tokens

Meeting ID and Meeting Password Tokens are used to display the unique meeting ID and password in an Approved Email Invitation.

```html
{{Call2_vod__c.Veeva_Remote_Meeting_Id_vod__c}}
{{Call2_vod__c.Remote_Meeting_vod__r.Meeting_Password_vod__c}}
```

An HCP can type the unique ID and password in the Engage Meeting application when joining from a different device to the one where the email was viewed.

## Add to Calendar Token for Engage Meeting

Approved Email invitations allow HCPs to add the meeting to their calendars, setting a reminder for their Engage Meeting.

To enable HCPs to access this reminder, the `{{addToCalendar}}` Token must be placed in the HTML of the Email Template.

This Token automatically generates an .ICS file from the meeting details in CRM.

When using the `{{addToCalendar}}` Token, any Date and Time Tokens will display in the Reps local format.

We recommend that Email Templates include instructions on how HCPs can add the .ICS file event to their calendar.

`{{addToCalendar}}` Token will not work in an Email Template if it is sent through the Veeva CRM Mobile Application on a Windows tablet. Engage Meetings can not be run from this application, so this is not likely to occur in most use cases.

## Adding Dial-in Numbers to Engage Meeting Invitations

To make it easier for attendees to join the audio of an Engage Meeting via dial-in, Engage Meeting hosts can add dial-in numbers to invitations sent to attendees. This can be their preferred or required method of joining the meeting's audio.

For dial-in numbers to display in invitations sent to attendees, content creators must add the `{{insertZoomDialInNumbers[Language Code]}}` [^2] Token to the appropriate email templates.

[^2]: The Token's `[Language Code]` parameter must be replaced with a supported language code, which determines the language of the rendered text.

## Additional Country Dial-in Numbers

In addition to the country defined in the user's `Country_Code_vod` field, additional countries can be added to a user to add the corresponding dial-in numbers to the invitation. This is especially useful if a user frequently hosts meetings in different countries.

## Adding the Zoom URL to Approved Email Templates

Content Creators can add the Zoom URL to Approved Email Invitation Templates by using the following Token: `{{insertEngageAndZoomJoinURL[Language Code]}}`.

In the BEE Editor, this Token can be found by navigating to Merge tags > Remote Meeting and Zoom Invite Links.

The `{{insertEngageAndZoomJoinURL[Language Code]}}` Token's `[Language Code]` parameter must be replaced with one of the following language values to render the text of the Token in that language.

For example, `{{insertEngageAndZoomJoinURL[en_US]}}` renders the text in English.

## Approved Email Content Considerations

Given how the  `{{insertEngageAndZoomJoinURL[Language Code]}}` Token behaves, it can be used in place of the following Engage Meeting-specific tokens:

- Meeting URL - `{{Call2_vod__c.Cobrowse_URL_Participant_vod__c}}`.
- Meeting ID - `{{Call2_vod__c.Veeva_Remote_Meeting_Id_vod__c}}`.
- Meeting Password - `{{Call2_vod__c.Remote_Meeting_vod__r.Meeting_Password_vod__c}}`

There are no equivalent tokens to only display the Zoom URL.

The `{{insertEngageAndZoomJoinURL[Language Code]}}` Token must be used to display both the Engage Meeting Participant URL and Zoom URL.

Therefore, Content Creators should also note that the `{{insertEngageAndZoomJoinURL[Language Code]}}` Token displays as strings of text, and these strings cannot be split up to edit the default text or put the Engage Meeting Participant URL and Zoom URL behind buttons.

## Upload an Email Template

In order to upload the Approved Email Invitation into Vault PromoMats, Content Creators must have an HTML file as well as a separated Assets ZIP file containing the email images.

1. Login to Vault PromoMats.
2. Navigate to 'Library'.
3. Click 'Create'.
4. Select 'Upload' and 'Continue'.
5. Upload the HTML source file.
6. Choose 'Email Template' from the document type drop-down.
7. Click 'Next' button.

## Enter Required Vault Fields
 
Before the Email Template can be saved the required metadata fields (highlighted yellow) need to be filled out.

In addition, the Email Template Type drop=down must be selected as 'Remote Meeting Invite Template'.

This field allows the Email Template to be sent from Engage Meeting.

After filling out the required fields, click 'Save'.

The 'From' and 'Reply to' fields can be hard-coded, or can use the `{{userEmailAddress}}` and `{{userName}}` tokens. The 'Subject' field can be hard-coded or use the Custom Text or Merge Tokens.

## Upload Image Assets

Once the Email Template has been created, the images need to be associated with the Template.

To add images select the '+' in the Assets section of the Vault PromoMats metadata.

Upload the Assets ZIP file.

The path in the HTML should be like this: `src="./folder_name/image_name.png"`.

Once the Assets have been uploaded, the viewable rendition in Vault PromoMats will show the email HTML and images.

If the images aren't rendering, you may need to re-render the document via the Actions menu.

## Approving the Email Template

Before syncing Vault PromoMats and Veeva CRM, the Email Template must be set to Approved [^3] by clicking the Workflow Actions menu and selecting 'Approved'.

[^3]: In Customer environments, testing is usually done using the Staged State rather than Approved State. If the Email Template is in the Staged State, then this will only be available to Users with the 'Approved Email Admin' field checked on their User Record.

## Syncing CRM and Vault

Approved Email content is uploaded in Vault PromoMats and needs to be synced across to Veeva CRM to be accessible via Veeva CRM Online and Mobile.

Log in to Veeva CRM as an Admin User (e.g. cloader) and click on the 'Approved Email Administration' tab.

Select 'Incremental Refresh'.

If successful, this will sync the Approved Email Template from Vault PromoMats into Veeva CRM, making it available to be used.

if the Approved Email Administration Tab isn't visible, all Tabs in Veeva CRM can be accessed via the '+' button.

## Quiz

> [!faq]- Meeting ID and Meeting Password tokens are used to display the unique meeting ID and password in an Approved Email Invitation.
> 
> True.

> [!faq]- To include the Meeting Date & Time in an Engage Meeting Invitation it is best to use the `{{Call2_vid__c.Cobrowse_URL_Participant_vod__C}}` token.
> 
> False.

> [!faq]- Approved Email Templates used for Engage Meeting invitations cannot contain images.
> 
> False.

> [!faq]- An Email Template is the only required component to send an Approved Email Engage Meeting invitation.
> 
> True.

> [!faq]- Engage Meeting Invitations should never include the Participant URL.
> 
> False.
