## Content Best Practices

- Determine how the **HCP** will **get to the persentation;** will they be recognized or anonymous?
- **Track** using multichannel activity line when needed to complement automatic slide capture.
- **Content** should pull in data from CRM to **personalize presentation** when appropriate.
- Content should be **easy to navigate** without a rep.
- Always use the most **updated JavaScript library**.

## UX Considerations

Keep in mind that this is no longer a re-driven experience.

This means that the navigation throughout the presentation must be explicit. Adjust content as necessary so the viewer can navigate through content easily.

While dynamic navigation within a presentation is possible by using `gotoSlide` links with HTML slides, a user may not be able to quickly navigate back to the previous slide as there are no history buttons.

## Creating New HTML Content from CLM and Engage for Portals

If web design best practices are applied, content can be created to work in BOTH CLM and Engage for Portals. Keep in mind CLM is typically to rep-led while Engage for Portals is HCP-led.

Build and design content that can be deployed across:

- Different screen resolutions.
- Multiple web browsers (IE, Chrome, Safari, Firefox).

Engage for Portals is supported by browsers which are IE 8 and above, Chrome, Safari and Firefox.

Fullscreen mode is limited to the following browsers: Chrome for Android, Chrome for desktop, Firefox (laptop), and Safari (laptop only). No other browsers are supported.

Content Creators should not use fixed width designs if the goal is to deploy the same content on both CLM and Engage for Portals.

## Legacy Content - Reuse of Existing CLM Content in Engage for Portals

HTML, CSS and JS are open web standards used also in Veeva CLM.

Web browsers (Internet Explorer, Chrome, Firefox, Safari, etc.) are not 100% compliant. They will not interpret these standards in a consistent way.

Factor in time for testing and rework of content across multiple browsers and devices/orientations.

While legacy content created for CLM can often be updated for Engage For Portals - it is unlikely to display correctly without some re-work and testing.

## Content Reusability Matrix

| Media Type | CLM | Engage for Portals |
| ---------- | --- | ------------------ |
| Images | Yes | Yes; Any Vault supported format at any resolution size and aspect ratio |
| Video-only | Yes | Yes; Any Vault supported format at 720p at any aspect ratio |
| Video-embedded in HTML | Yes | No |
| HTML + browser events | All | All |
| Rich HTML Interactions (drags, touch-specific, animations) | Yes | Yes |
| PDF | Yes | Limited (Must be converted to image) 

| Veeva JavaScript Support | CLM | Engage for Portals |
| ------------------------ | --- | ------------------ |
| Read - `GetDataForCurrentObject()` | Yes | Yes[^1] |
| Write - `CreateRecord()` | Yes | No |
| Custom Tracking | Call Clickstream | MC Activity Line |
| Custom Navigation - `GoToSlide()` | Yes | No[^2] |
| Requried to be included in .zip package | No | No |

[^1]: `GetDataForObject()`, Survey and Order read functions not supported.
[^2]: `NextSlide()` and `PrevSlide()` are supported.

## Responsive Content on the Web

**Responsive Content** is a design pattern for HTML

- Popular with the explosion of web usage on mobile devices and tablets.
- Adapts the content to flow based on content-defined breakpoints.

**Fixed Layout HTML Content**.

- "Traditional" web design.
- Content is designed for a fixed pixel height and width.
- User must scroll if browser window smaller than content.

## Responsive vs Fixed Content Behavior


| Type of Content                                   | Responsive Website                                                                                                                                                                                                                                      | Fixed Website                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Responsive Content                                | Content automatically adjust for different screen sizes/devices                                                                                                                                                                                         | Player will stay at the size designated on the browser window.                                                                                                                                                                                                                                                            |
| Fixed Content HTML height and width filled in     | Content will be centered in the player. <br>- If player gets too small, the content will be cut off. <br>- If player is larger, there will be black box around the content.                                                                             | Player size should be designated to be the same size as the HTML height and HTML width. Content adjust to fit the player. <br>- If player size is designated too small, the content will be cut off. <br>- If player size is designated too large, there will be a black box around the content.                          |
| Fixed Content HTML height and width not filled in | Content will display starting from the top left corner of the player. <br>- If player gets too small, the content will be cut off. <br>- If player is larger, than there will be a black box in the empty space to the right and bottom of the content. | Player size should be designated to be the same size as the content. Content adjusts to fit the player. <br>- If player size is designated too small, the content will be cut off. <br>- If player size is designated too large, the there will be a black box in the empty space to the right and bottom of the content. |

## Available APIs Using JS library

The following functions in the library will work with Enage for Portals: [^3]

-  `GetDataForCurrentObject` 
	- Append `&actId = <Account SFDC records ID>` parameters to Engage for Portals link to associate the specific account with the Multichannel Activity and Multichannel Activity Line. 
	- The `&extId = <anything>` parameter can be utilized to associate a 3rd party external ID Multichannel Activity and Multichannel Activity Lines via an Account External ID Map record. 
	- Allows access using following keywords: Account.
	- Can be used to jump to other slides within  the same presentation or to slides within a different presentation.
- `createMultichannelActivityLine`
	- Similar to Call Clickstream functionality in CLM.
- `nextSlide`
- `prevSlide`

[^3]: Remember to check the Agency Portal for the latest JS library. `Gotoslide` is not officially supported but you may find it works when using HTML.

## CLM Functionality NOT Supported

- Required Slides
- Surveys
	- Survey functionality is possible by tracking to multichannel activity lines, but you cannot use CRM's survey module.
- Call Clickstream
	- Call Clickstream is not available, but you can record elements within HTML content by tracking to multichannel activity lines.
- PDF Documents embedded within HTML popups.
- Embedded videos within HTML content.
	- Standalone video key messages are possible.

## Development Tips

Always use cross-browser supported HTML while assuming the customer expects content to work on IE8+

- [Can I Use](https://caniuse.com) is the authoritative website on cross-browser supported HTML.

Do not user rem or vw units for sizing.

Consider device-specific behaviors, i.e. a video opening on an iPhone displays in full screen whereas in-line on a desktop browser.

Shared Resources can be used when following the Shared Resources Guide in the CRM Help online reference code example (./shared works, ../shared does not work).
