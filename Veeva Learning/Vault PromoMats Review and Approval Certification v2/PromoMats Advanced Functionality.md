## User Profile

Your User Profile is easily accessible by hovering over the user picture or silhouette in the top-right corner and selecting User Profile.

From your User Profile, you have various options available:
- Update your user information.
- Change your password.
- Opt-in for notification emails from Veeva.
- Configure notifications for favorite documents.
- Provide delegate access to another user.

## Updating User Information

Updating your user information is simple. However, Vault administrators can disable this for users.

To update user information:
- Click **Edit** and update the relevant fields.
- When complete, click **Save**. If your customer has this disabled, you will need to work with them to update your information.

Form here, you can also upload a profile picture:
- Click **Change Profile Image**.
- Choose the image from your computer and click **OK**. [^1]

[^1]: The image format should be a JPG, PNG, or GIF and less than 10MB. A square aspect ratio is best for this use.

## Password Details

For customers that are not using Single Sign-on (SSO), you can update your password via the User Profile.

### To update your password:

1. Click **Change Password** in the menu on the left.
2. Enter your current and new password, click **Confirm**.

### Lockout

Vault will lock your user account after 5 consecutive unsuccessful login attempts. The account will remain locked out until the user or admin requests a password reset.

### Requesting a Password Reset

if you get locked out of Vault, you can manually request a password reset. [^2]

1. Go to the login page https://login.veevault.com/ and click **Having trouble logging in?**
2. Enter your username or email address to start the process of resetting your password.

[^2]: Requesting a Password Reset only works for customers not using SSO.

## Veeva Notification Emails

From the User Profile, you can opt-in to notification emails from Veeva.

There are two types of notifications:

1. **Product Announcements** will include notifications of upcoming webinars, pre-release environment notifications, and other product related news.
2. **Service Availability** This will send notifications about planned service windows and product outages.

## Favorite Document Notifications

Vault PromoMats allows you to enable notifications for documents that you have marked as favorites.

You can enable or disable these from your User Profile to receive notifications:

- **New Status:** Any change to the status of the document.
- **New Content:** If a new version, rendition, attachment, or content is added to a placeholder.
- **New Comment:** If an annotation or new document-level comment is added.

## Delegated Access

Delegated Access provides a secure an audited process for you to designate another use to handle Vault responsibilities on your behalf on a temporary or ongoing basis.

To provide delegated access, scroll to Delegate Access section and click on the blue icon. Fill in the information required and select Grant Access.

## Digital Asset Management

Vault PromoMats as a Digital Asset Management (DAM) creates efficiencies across the content creation journey.

### What is Digital Asset Management?

Digital Asset Management is a business process for organizing, storing, and retrieving digital assets and managing digital rights and permissions.

Digital assets include:

- **Components** (i.e. photos, music, videos, audio files, graphs, and logos) and [^3]
- **Composites** (final completed pieces, both the source files and renditions). In the life sciences industry, a DAM can also contain **reference documents**.

[^3]: Make sure you have the required custom font licenses for the content and its intended use.

## Select DAM Features

Below are some DAM features in Vault PromoMats that you may encounter while working with your customers that are using Vault PromoMats as a DAM.

- **Vault Digital Publishing:** Allows for sharing of approved content directly from Vault PromoMats via a URL.
- **Powerful Rights Management:** Ability to manage rights for assets with out of the box workflows, metadata, and automated expiration.
- **Auto Image Renditions:** Allows for multiple system generated renditions of a file.
- **InDesign Auto Linking:** Allows for efficiencies when uploading creative files, creating the viewable rendition and linking to component assets.
- **Brand Portal:** Provides the opportunity to share and promote content in a user-friendly interface to encourage content reuse.

## Make a Copy

One of the main benefits of using Vault PromoMats as a DAM is content reuse. A feature that helps with this is the option to **Make a Copy**.

This allows for the fields, content, structure, and/or relationships of the original document to be copied. Additionally, a link is created between the original and copy for traceability.

To make a copy of a document:
- Select **Make a Copy** from the **Action Menu**.
- Enter a name for the new document or binder.
- Choose whether to copy content, fields, or both.
- Click **Continue**.
- You'll be brought to the Doc Info page for the new document, make any required changes and click **Save**.

## Text and Claims Management

### What

- Manages a library of claims and reusable text assets as a single source of truth for content.
- Suggest Links automates creation of reference links on claims and reusable text statements in promotional materials.

### How

- Matches pre-approved Claims and Reusable Text Asset records and references to documents.
- Creates easy-to-review *Suggested Link* annotations for non-exact text matches.
- When approved, Suggested Links become Approved Link Annotations.
- Generates Auto Links for exact text matches which do not require review or approval.

### Benefits

- Reduces time, effort, errors and cost of referencing AND reviewing.
- Provides greater control of references, documents and process.
- Establishes groundwork for further automation and AI in Vault.

## Creating a Claim

- The foundation of **Suggest Links** is the **Claims and Text Asset Library**. The process to manage and update claims will vary from customer to customer, but there may be times that you're asked to create a claim. A claim consist of a number of key elements:
	- **Name:** this is automatically generated.
	- **Match Text:** this is the actual claim, the main claim would be the match text and any variations would be managed under match text variations.
	- **Category:** the type of the claim, efficacy or safety for example.
	- **Product:** this will be a reference field and is the product of which the claim applies.
	- **Country:** this is another reference field and is the country where the claim is used.
- A claim is created in Claims Library, vie the Claims tab. All the key elements must be completed for a claim to be created. [^4]
	1. Click **Create**.
	2. Enter **Country** and **Product** (optional) as matching fields.
	3. Enter the **Match Text** (claim text that will match to the claim in document content).
	4. Click **Save**.
- Once the claim's metadata is completed and saved, you'll be able to assign a document and/or anchor links as references to support the claim. These will be sued in the submission process. A reference document/anchor can be added in the references section below the Claim details. [^5]
	1. Open **Reference** panel from the Claim record detail page.
	2. Click **Add Reference** button.
	3. Search or select the relevant Reference or specific anchor and click **+** button.

[^4]: Naming convention for Claims tab may vary according to customer environment. Standard variations are Claims tab or Text Asset tab.
[^5]: All Claims need to be approved through an MLR workflow.

## Using Suggest Links

- Once the claims library has been populated and has approved claims, they can be used in the submission process. There are two ways to run Suggest Links.
	- Use the **Suggest Links** action in the Actions menu or click on the light bulb icon.
	- When configured, Vault can automatically create suggested links once a document enters a given life-cycle state.
- Once you're notified that the process is complete, the document page.
	- Click + balloon or light bulb icons to view document annotations.
	- Any annotations created by Suggest Links will show the light bulb icon.
	- You can also remove all Suggest Links by clicking the strike-through light bulb icon button.
- If you run **Suggest Links** action on a document bu receive no Suggested Links as a result, there could be several reasons:
	- The claim statements in the document do not exactly match any Match Text values in the claims library. This can happen for several reasons, including uncommon text effects or non-linear layouts in the source document.
	- None of the approved claims have matching field values (Product, Country, or any other object reference and picklist fields) that match the equivalent fields on the document.
	- None of the matching claims records are in approved state. (Only approved records are available to the Suggest Links action).
	- Some combination of the above.

## Veeva Web2PDF

Veeva Web2PDF is a free web solution that converts dynamic digital content, such as websites, to PDFs. These rendered PDFs allow faster, more accurate review and approval by facilitating comparison, review and iteration of website content.

The PDF is created full length with embedded links and annotable text.

## Using Veeva Web2PDF

To create a PDF of your website, access www.veevaweb2pdf.com and input:

1. Website URL you want to screenshot.
2. Viewing Experince
	-  Desktop
	- Smartphone
	- Tablet
3. Email Address that the PDF should be sent to.

To create a general PDF of your website, open up your website and click on the Veeva Web2PDF Chrome extension and input:

1. Email Address that the PDF should be sent to.
2. Viewing Experince
	-  Desktop
	- Smartphone
	- Tablet
3. If a Password should be entered to access restricted areas of the website.

## Using Hintify via Chrome Extension

Use Hints to capture relevant interactions and hidden content without the need for a developer via adding:
	- Clicks, hovers, carousels, and accordions.
	- Form fill and submit.
	- Sequences, decision trees, and scenarios.

Once all hints have been added, the PDF can be generated directly from the Chrome Extension.

To create the hint code for your website:

1. Navigate to your website in Chrome.
2. Click the **Veeva** icon to open the extension.
3. Click the **Hintify** button to activate the extension. When the extension is active, the Veeva icon changes.
4. Hover over a dynamic or interactive element in your website and right click on it to capture the interaction in your PDF.
5. Select an **Event**, or select **Site Entry** hint.
6. Fill in the fields, which may depend on the Event you selected, and click **Save**.
7. Repeat for other elements on your website.

VeevaWeb2PDF [^6] ISI control will automatically take 2 screenshots:

- 1st screenshot of the page in normal height to showcase the floating ISI.
- 2nd screenshot with stretched window to show the complete page.

Hints created via the Chrome Extension are not permanent, and are local to your computer.
- I.e., Only the individual that created the hints will be able to capture a PDF using these.

In order to make hints permanent so that other users can create PDFs that include these interactions and hidden content, it is possible to download a JSON file that can be hosted on your website.

Hints can be viewed and edited via the **Hint** tab from the Chrome extension.
- There can be up to 150 hints in your Chrom extension at once.

[^6]: To use Veeva Web2PDF go to https://veevaweb2pdf.com

## Standard Metrics

Vault PromoMats Standard Metrics allows customers to keep track of key metrics about their content.

Standard Metrics tracks information that helps to answer the following questions:
- What types of materials have been developed?
- What is the average approval time for a type of content?
- How many review cycles does it take for content to be approved?
- What is the average time content spends in review?

When content is uploaded, it's assigned to a global content type which is usually mapped by your customer. If they haven't mapped, you'll be asked to populate this field when uploading content.

Once the content is loaded, Vault PromoMats begins to calculate fields and dates related to the questions above. This allows for customers to report on it and act accordingly to create efficiencies where possible.

In 2021, Veeva began to work with customers and share industry benchmarks based on the data collected.
