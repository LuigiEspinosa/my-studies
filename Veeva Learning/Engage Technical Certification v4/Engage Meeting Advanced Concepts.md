## Splash Screen

When a Rep is not sharing a CLM Presentation during a Engage Meeting hosted on an iPad, a Splash Screen displays to HCPs.

Admins and Content Creators can customize the Splash Screen using a Veeva CRM MyInsights visualization to enhance the hosting experience for HCPs.

### How MyInsights Relates to Splash Screens

For context, MyInsights allows Content Creators to create custom visualizations using the [Veeva MyInsights JavaScript Library]([MyInsights v2.0](https://developer.veevacrm.com/doc/Content/CRM_topics/Veeva/myinsights-veeva.htm)) and HTML.

These visualizations or 'HTML Reports' can be directly delivered to Reps via Veeva CRM and displays contextual and historical information to assist under in their day-to-day activities.

In the case of Engage Meeting, it leverages the underlying MyInsights product for both the creation and delivery of the Splash Screen.

### Veeva Default Splash Screen

The HTML Splash Screen is an optional configuration.

If one is not configured the Veeva default Splash Screen displays to HCPs.

### Custom Splash Screen Content Creation

Where Content Creators create a custom Splash Screen, they can dynamically pull Rep and Company Information into it using the Veeva MyInsights JavaScript Library.

```js
function getUserName() {
	com.veeva.clm.getDataForCurrentObject("User", "Name", didGetUserName);
}

function didGetUserName() {
	namePlaceHolder = document.getElementById("userName");
	if (result.success) {
		namePaceHolder.innerHTML = rsult.User.Name;
	}

	com.veeva.clm.getDataForCurrentObject("User", "Id", didGetUserId);
}

function didGetUserId(result) {
	if (result.success) {
		com.veeva.clm.queryRecord("User_Detaul_vod__c", "Photo_vod__c", "User_vod__c='" + result.User.Id + "'", null, 1, didGetUserPhoto);
	}
}
```

### Packaging Custom Splash Screen Content

Once the custom Splash Screen has been created, Content Creators must prepare the media for upload into Veeva CRM.

Although custom Splash Screens are uploaded directly to Veeva CRM Online, they must be packaged in the Vault Packaging format.

- font folder.
- img folder.
- `index.html`
- js folder.
- `veeva-library.js`

### Splash Screen Content Administration

Splash Screens are uploaded directly to Veeva CRM Online.

To upload a Splash Screen:

1. Navigate to 'All Tabs' via the '+' icon.
2. Select 'HTML Reports'.
3. Once in the 'HTML Reports' Tab, Click 'New'.
4. Select the Record Type = 'Remote Meeting' and click 'Continue'.
5. Specify a 'Report Name' for the Splash Screen and Click 'Save'.
6. Attach the HTML Splash Screen zip file to the HTML_Report record type using the Notes and Attachment Related List.
7. To upload the Splash Screen zip file, first Select the file, then click 'Attach File'. Once attached, Click 'Done',

Although custom Splash Screens are uploaded directly to Veeva CRM Online, they must be packaged in Vault Packaging format.

## Dynamic Content

### Content Use in CLM and Engage Meeting

Due to the similar nature of CLM and Engage Meeting, there are a number of occasions where content could be reused in both Face-to-Face (F2F) and remote situations. Or, where a single CLM Presentation is required and can adapt to how the content is being presented.

### Adapting Content to the Call Type

#### Can content adapt to the Call Type (F2F with CLM vs Remote with Engage Meeting)?

##### Example Use Case

We want the content to include animations when presented F2F but not when presented via Engage Meeting.

##### Solution

Yes,, this is possible. Query the Call Object.

This code can be used to determine if the content is shown in an Engage Meeting.

Based on this, the flow of CLM Presentation can be controlled to show only the correct functionality, or it can be redirect to an appropriate Hidden Presentation.

```js
function RemoteMeeting() {
	com.veeva.clm.getDataForCurrentObject("Call", "Remote_Meeting_vod__c", ShowRemoteResponses);
}

function ShowRemoteResponses(result) {
	if (result.success == true)	 {
		alert("Remote_Meeting_vod__c: " + JSON.stringify(result.Call.Remote_Meeting_vod__c));
		if (result.Call.Remote_Meeting_vod__c == null) {
			// This is a CLM (F2F Call)
		} else {
			// This is a Remote Call (Engage Meeting)
		}
	} else {
		alert("Remote_Meeting_vod__c: Fail");
	}
}
```

##### Additional Considerations

There are many ways to include or exclude content on the basis of identifying the call as Remote or CLM. For example:

- Jumping to Hidden Presentation developed specifically for Engage Meeting.
- Programming in each CLM Slide what is shown on screen by Call Type.
- Controlling the flow of the CLM Presentation programmatically so that the correct CLM Slides are accessible for the different Call Types.

### Adapting Content to the Rep's Device

#### Can content adapt to the Rep's device (iPad vs Windows PC?

##### Example Use Case

Global only wants to produce one version fo a CLM Presentation for Engage Meeting but Rep device usage varies across teams and countries.

##### Solution 

There is no CRM field available with this information to query, however it is possible to query the device type via standard JavaScript.

##### Alternative

Where simpler content will suffice and/or speed is essential, Single Document Publishing can be used to create a static version of a CLM Presentation that will work across all Rep devices.

##### Additional Considerations

It is important to know which device Reps are presenting from as the HTML engines are different i.e. iOS uses mobile Webkit (WKWebView) and Windows uses Webkit for Windows (Edge Browser).

##### Adapting Content

To adapt content based on the Rep's device, check if `Mobile_id` is populated on the `Remote_Meeting_vod__c` record.

if `Mobile_id` is populated, it's an Engage Meeting started from iPad.

Otherwise, the meeting was started from Veeva CRM Online (Windows PC).

```js
function MobileID() {
	com.veeva.clm.getDataForCurrentObject("Call", "Mobile_ID_vod__c", MobileIDResponses);
}

function MobileIDResponses(result) {
	if (result.success == true)	 {
		alert("Mobile_ID_vod__c: " + JSON.stringify(result.Call.Mobile_ID_vod__c));
		if (result.Call.Mobile_ID_vod__c == null) {
			// This is Veeva CRM Online
		} else {
			// This is Veeva CRM on iPad
		}
	} else {
		alert("Mobile_ID_vod__c: Fail");
	}
}
```

##### Alternative

You can use the following JavaScript to determine if you are presenting from the iPad:

```js
navigator.platform.indexOf("iPad") !== -1 
	|| (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
```

Additionally, `navigator.maxTouchPoints` determines the maximum number of simultaneous touch contact points that are supported by the current device.

### Adapting Content to the HCP's Device

#### Can content adapt to the HCP's device (smartphone vs tablet/laptop/desktop)?

##### Example Use Case

HCPs joining via smartphone will be locking at the content on a much smaller screen that those joining via tablet/laptop/desktop; we want content to adapt accordingly (e.g. less content, increased font sizes).

##### Solution

No, this is not currently possible. Although there is a Veeva CRM field that can be configured to capture the HCP device information, the applicable record is not available to query from the iOS Veeva CRM Application or **CRM Engage Application**.

##### Alternative

Simply ask the HCP at the start of the Engage Meeting which device they are using and have separate flows available which can be selected by the Rep.
