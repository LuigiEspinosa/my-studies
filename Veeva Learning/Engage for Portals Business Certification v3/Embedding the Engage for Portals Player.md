A website is required to host the Engage player with the following considerations:

- This can be an existing page such as a brand.com site with surrounding links/documents.
- This page could also be solely for hosting the Engage player.

## Embedding the Player on your Site

Integration of an embed code is required for the Engage for Portals player to appear on the specific website.

The embed code can be found on the Engage Admin page and can be included on multiple websites. Each website should be listed as a "Site" on the Engage Content Admin page.

```html
<div align="center" id="engage"></div>
<script>
	var tag = document.createElement("script");
	tag.src = "//cdnmcl.vod309.com/multichannel/veeva/js/engage/embed-engage.js";

	var engage = document.getElementById("script");
	engage.parentNode.insertBefore(tag, engage.nextSibling);

	var player;
	function onVeevaEngageReady() {
		player = new VeevaEngage.initialize("engage", {
			dns: "//cdnmcl.vod309.com/multichannel/release/engage/index.html",
			mc: "https://mc-20-app-eu.veevacrm.com/multichannel",
			cookie_error: "Please allow cookies in order to view presentation",
			width: "100%",
			height: "100%"
		});
	}	
</script>
```

## Embedding the player

By default, the player is set to 100% width which makes it responsive.

We recommend that content designed for Engage for Portals is built in a responsive format:

- However, if you wish to use a fixed window size, set height or width attributes (in percentages) on the div element for the best user experience. This makes it responsive to changes in the browser size.

To restrict the player to a certain size, set height and width attributes in pixels on the dive element for the player making it a fixed size.

### Recommendations

We recommend that if you want your HTML content to look and feel like a mini-site: [^1]

- Create responsive content.
- Embed the Engage for Portals player on a site without other HTML.
- The player will automatically fill to 100% of the website and act like a mini site.

```html
<!DOCTYPE html>
<html>
	<head></head>
	<body>
		Engage for Portals test
		<br />
		<!-- Engage for Portals Frame Code here -->
	<body>
</html>
```

[^1]: It is the responsibility of the website host to decide whether or not to display a message which informs users that cookies are utilized by a 3rd party (the Engage Player). It is the responsibility of the customer to update any wording in their Privacy Policy that may need to be changed because of the use of cookies.

## Engage Media Player

The player can be configured for open access or through Approved Email only:

**Accessible via Approved Email only**
- This configuration allows you to have the Engage Media Player on a public site, however, content will be hidden unless viewers clicked on the link via an Approved Email.
- The embed code is available on the Engage Content Admin page in the **Site Manager** section. The embed code is generic for every Site.

**Open Access**
- The presentation in the Engage Media Player will be publicly available to anyone who navigates to the page regardless of how they received the link. This page can also be used to display Engage content that was delivered via Approved Email.
- The embed code is available on the Engage Content Admin page in the **Deployment Manager** section. The embed code is unique to every Site and Multichannel Content Name (Presentation). There is a unique embed code for each row in this table, and the 'Engage' token has a value.

## Engage for Portals Player + Force.com Sites

Force.com Sites is a convenient way to deploy a public-facing portal.

![[Deploy a public-facing portal.png]]

## Accessing the Content

The Engage Media Player is deployed within a customer-owned website. It is embedded as a window within a websites and its pixel dimensions are smaller than the CLM Media Player.

The Engage Media Player is commonly sized at 600x400 pixels to fit within a customer's existing website template. As a result, content for CLM that has a fixed size may not fit as expected. This is an important reason why Engage content is often built separately from CLM content.

Ensure the sitemap and URLs are clearly mapped out for configuration purposes.

To make your Engage content look and feel like a mini site, embed it on a site without other HTML. The player automatically fills the website and acts like a mini site.

### HCP Access

There are multiple ways in which an HCP would access the Engage for Portals content:

1. **Approved Email via link**
2. **Open access website with the Engage for Portals Player** embedded within an existing branded page.
3. **Logging in/registering as an HCP** on the customer Portal and navigating to Engage content in the Portal with all activity tracked in CRM.
	- Implement an HCP registration/authentication process that can support HCP registration and can return an unique identifier for each HCP (either SFDC Id or an account external Id) referring to the HCP within CRM.
	- Maintenance of the Mapping can be done manually by an Admin in both systems or via customs Integration.
	- The registration and authentication process can become fairly complex.

### Accessing the Content

Engage for Portals is supported on the following devices and browsers:

- **Desktop:** Internet Explorer 11 and above, Chrome, Safari, and Firefox.
- **iPad:** Safari mobile on iPad
- **Android:** Chrome and stock browser on Android.
- **Mobile device:** Internet Explorer 11.

HCPs/HCOs often have older browsers:

- Rich interactive content will not display.
- If existing CLM content is re-purposed, additional work may be required.

## Engage Media Player Parameters

The following optional parameters can be used to configure the Engage Media Player.

| Parameter Name | Values                                                                                                                     | Behavior                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **engage**     | Security Token that's available in the Engage Content Administrator page for each specific Presentation + Site combination | Engage content is open access.<br>Engage content is only accessible via Approved Email.                                         |
| **autplay**    | true = ON / false = OFF                                                                                                    | Video slides will auto-play by default, without the user clicking the 'play' button. Default is OFF, videos will not auto-play. |
| **error**      | Error message between single quotes, e.g., 'Content cannot be displayed'.                                                  | Display error when Engage Media Player cannot connect to Veeva CRM.                                                             |
## HTML Content Matrix

This is the behavior depending on responsive or fixed website content.

| Type of Content                                   | Responsive Website                                                                                                                                                                                                                                      | Fixed Website                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Responsive Content                                | Content automatically adjust for different screen sizes/devices                                                                                                                                                                                         | Player will stay at the size designated on the browser window.                                                                                                                                                                                                                                                            |
| Fixed Content HTML height and width filled in     | Content will be centered in the player. <br>- If player gets too small, the content will be cut off. <br>- If player is larger, there will be black box around the content.                                                                             | Player size should be designated to be the same size as the HTML height and HTML width. Content adjust to fit the player. <br>- If player size is designated too small, the content will be cut off. <br>- If player size is designated too large, there will be a black box around the content.                          |
| Fixed Content HTML height and width not filled in | Content will display starting from the top left corner of the player. <br>- If player gets too small, the content will be cut off. <br>- If player is larger, than there will be a black box in the empty space to the right and bottom of the content. | Player size should be designated to be the same size as the content. Content adjusts to fit the player. <br>- If player size is designated too small, the content will be cut off. <br>- If player size is designated too large, the there will be a black box in the empty space to the right and bottom of the content. |
## CRM Configuration

The Engage site must be added to the Engage Content Administration tab:

- Enter the correct URL to the Engage website in the site properties.

![[CRM Configuration.png]]

## Vault Configuration

Define the equivalent Engage Site in Vault PromoMats (Admin > Business Admin > Website object) [^2]

- Distribution Channel: Engage.
- URL: Defined for the website.
- External ID: Must be same value as the URL value.

[^2]: Websites cannot be created via Metadata sync from CRM.
