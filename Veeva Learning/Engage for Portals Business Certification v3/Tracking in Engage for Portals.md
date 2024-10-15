## Native Tracking

Engage for Portals has native tracking:
- Tracking of slide views is automatically captured by the player.
- Each time the player is accessed, a Multichannel Activity record is created.
- Each slide view will create Multichannel Activity Line record.

Key information tracked:
- Multichannel Content.
- Key Message.
- Product/Detail Group.
- Duration.
- Display Order.
- Video length and duration spent on video.

Engage for Portals player tracks HCP activities:
- Per account and for anonymous visits.
- Total duration on presentation.
- Duration on each slide.
- Lookup to Approved Email record (if used).

HCP Session Details:
- IP and Geo-location.
- Cookie (if user allows).
- Technical Information
	- OS, browser, device type (mobile vs desktop).
	- Viewport size (Engage viewer height/width).

## Engage for Portals Tracking

To ensure each interaction is captured accurately, the duration of the activity is also tracked.

Captured data can include account information to identify the HCP, and their interaction with the content during the session.

Veeva API is used to track usage of HTML content back to Veeva CRM.

Custom tracking is available (create Multichannel activity line times).

## Example of Multichannel Activity Record

![[Multichannel Activity Record.png]]

## Example for Portals Multichannel Activity

![[Portals Multichannel Activity.png]]

## Duration Field

Formula fields can simplify the understanding of the duration fields on the Multichannel Activity and Multichannel Activity Line as they are not easy to understand.

If necessary, create formula field:

- MCA.Duration -> `IF(Duration_vod__c >= 60, LEFT(TEXT(Duration_vod__c / 60), 4) + " minutes", TEXT(Duration_vod__c) + " seconds")`
- MCA.Length of Video -> `IF(Video_Length_vod__c >= 60, LEFT(TEXT(Video_Length_vod__c / 60), 4) + " minutes", TEXT(Video_Length_vod__c) + " seconds")`
- MCA.Total Duration -> `IF(Total_Duration_vod__c >= 60, LEFT(TEXT(Total_Duration_vod__c / 60), 4) + " minutes", TEXT(Total_Duration_vod__c) + " seconds")`

## Duration Tracking Behavior

**First slide**
- The duration value is tracked if the user views the first slide for more than 2 seconds.
- If the first slide is viewed for less than 2 seconds, the duration value is NULL. This implies the user opened the first slide, but navigated away from the page within 2 seconds.

**Intermediary slides**
- Duration values are updated every 30 seconds when the user is viewing a slide. The duration value will be updated in 30 seconds increments.
- When the user navigates to the next slide, the duration value on the prior slide will be updated with the total actual time spent as of the transition to the next slide.
- Time spent on a single slide is capped at 300 seconds (5 minutes) at which point it is assumed the user is no longer active.

**Final slide**
- When the user closes the browser window, Engage for Portals may not captured the exact duration of the final slide due to a browser limitation.
- Some browser allow Engage for Portals to track the close event, and some do not. When a browser does not allow it, we capture the duration on a 30 second timer, and the trailing time up to 29 seconds may not be captured.

**Scenarios where the duration value is NULL**
- The user spent less than 2 seconds on a slide.
- If only one slide was viewed and the duration was less than 2 seconds, the duration on the activity line will be NULL, and the total duration on the `Multichannel_Activity_vod` record will also be NULL.
- In exceptional circumstances, tracking events might be lost that will cause the duration times on the last slide to be NULL.

## Additional Tracking with Engage for Portals

### Custom Tracking Using JavaScript JS Library

`CreateMultichannelActivityLine` functionality works with Engage for Portals.
- It automatically fills in various properties from Multichannel Content Asset, Multichannel Activity lookup, and the date/time.

### Account Tracking

- Appending the "`&actId=<Account SFDC record ID>`" parameter to an Engage for Portals link will associate the Multichannel Activity and Multichannel Activity Line to a specific Account.
- The "`&extId=<anything>`" parameter can be used to associate a 3rd party External ID to Multichannel Activity and Multichannel Activity Lines via an Account External ID Map record.
