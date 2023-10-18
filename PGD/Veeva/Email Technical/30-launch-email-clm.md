# Launch Approved Email from CLM

Launching Approved Email from CLM provides a seamless experience for a Rep allowing an easy transition from detailing to follow up activities. It can be a difficult process in CLM when coding for the launch of an Approved Email.

This requires extensive use of JavaScript and firm knowlodefe of Vault PromoMats

1. Email Templates and Fragments must be loaded into Vault PromoMats and set to Staged or Approved then synced to Veeva CRM. The Rep can view this via the 'Send Email' button.
2. In the relevant Key Message ZIP, the API calls need to be chained together and called simultaneously. Within the ZIP, the Veeva JavaScript library will need to be included or referenced via a Shared Resources path.
3. In the Veeva CRM Mobile application, the Rep should always select an acocunt and then open the Media tab to select the CLM presentation.

In Content Partner environments, the Email Templates and Fragments should be set to Approved. The steps to load Email Templates and Email Fragments are covered in the 'Uploading and Syncing Email Templates' and 'Uploading and Syncing Email Fragments, Template Fragments and Document Types' courses.

## getApproved Document function

For Veeva CLM to identify the Email Template and corresponding Fragments, Salesforce Record IDs must be found. The `getApprovedDocument` frunction is used to get these Salesforce Record IDs:

`com.veeva.clm.getApprovedDocument(vault_id, document_num, callback)`

- `vault_id` = Specifies the Vault ID of the Approved document to retrieve `(Vault_Instance_ID_vod__c` on `Approved_Document_vod__c)`.

- `document_num` = Specifies the document number of the Approved document to retrieve `(Vault_Instance_ID_vod__c` on `Approved_Document_vod__c)`.

- `callback` = call back function which is used to return the information.

The call returns the record ID(s) for the Approved Document which match the values specified and Status_vod = Approved. It also compares against products assigned to the Rep through MySetup to ensure visibility to applicable Approved Documents.

If there are multiple documents with these same IDs, an error will be thrown and `Approved_Document_vod__c` will return as undefined if no documents match the specified criteria.

## Muilti-Product Support and getApprovedDocument

In Vault PromoMats, multiple products can be assigned to a CLM Presentation, Key Message, Email Template, and Email Fragment. Within Veeva CRM, this creates one record per product.

The `getApprovedDocument()` method in the JavaScript library references the `Vault_Document_ID_vod` field to select the appropriate `Approved_Document_vod` record.

With Multi-Product support enabled, multiple `Approved_Document_vod` records can have identical `Vault_Document_ID_vod` fields. Multi-product support for this method requires a JavaScript Library and app version if at least 212.0.100.

When applying Multi-Product content, the following logic is used to select which `Approved_Document_vod` record is called:

- If the Rep does not have FLS read permission to the `Product_vod` and `Detail_Group_vod` fields on the `Key_Message_vod` object, an error displays.

- If an Approved Document matches the `Product_vod` and `Detail_Group_vod` (if populated) fields on the current Key Message, that Approved Document is used, i.e. the Product record for an Email Template and the Key Message are the same.

- If an Approved Document does not match any of these fields, the first Approved Document record available for the given `Vault_Document_ID_vod` sorted by SalesforceID is used.

## launchApproved Email function

In order to trigger Approved Email functionality from CLM content, the `launchApprovedEmail` call must be used. This opens the Send Email user interface with the Email Template and Email Fragments (if included) already selected:

`com.veeva.clm.launchApprovedEmail(email_template, email_fragments, callback)`

- `email_template` = Specifies the record ID of the Email Template to use. Record ID is a string.

- `email_fragments` = Array of record IDs of the Email Fragments to use. This can be made optional by putting in "".

- `callback` = Callback function which will be used to return success or error information. This is an array of strings.

Before the Send Email User interface can open, an Account must be selected. If `CLM_Select_Account_Preview_Mode` Veeva Setting is enabled, the Select Account dialogue opens so the Rep can select an account. If the Veeva Setting is not enabled and no Account is selected, no action is performed and the Send Email user interface will no open.

## Using JavaScript functions in practice

There are 3 steps in order to launch Approved Email and the JavaScript should be built out in this order:

1. Retrieve the Record ID of the Email Template to be sent, using the `getApprovedDocument` function to return the Salesforce Record 18 digit ID.
    - Vault Instance ID - `https://sandbox1-vv.agency.veevavault.com`
    - Vault Document ID - 108

    ```javascript
      function GetFragmentID() {
        com.veeva.clm.getApprovedDocument("https://sandbox1-vv.agency.veevavault.com", "108", myAllValue);
      }
    ```

2. If Email Fragments are included (this is optional), retrieve the Record ID of the email fragments using the `getApprovedDocument` function.
    - If there is more than one Fragment ID, user comma separator. E.g. "Fragment1ID, Fragment2ID".

3. Open the Approved Email User Interface using the `launchApprovedEmail` function.

    ```javascript
      function SendEmail() {
        com.veeva.clm.launchApprovedEmail(<EmailTemplate_Record_ID />, <Fragment_Record_ID_Array_if_used_otherwhise />, myCallBack);
      }
    ```

The Admin User and the Rep need access to the following fields on the `Approved_Document_vod` object to be able to use this functionality:

- Vault Instance ID (`Vault_Instance_ID_vod`).
- Document ID (`Vault_Document_ID_vod`).

## Example Code

### HTML

```javascript
var template = "";
var myArr = [];

function GetTemplateID() {
  com.veeva.clm.getApprovedDocument("https://sandbox1-vv.agency.veevavault.com", "12", GetFragmentID);
}

function GetFragmentID(result) {
  console.log("template ID " + JSON.stringify(result.Approved_Document_vod__c.ID));
  template = result.Approved_Document_vod__c.ID
  com.veeva.clm.getApprovedDocument("https://sandbox1-vv.agency.veevavault.com", "8", SendEmail);
}
```

- Set the Global Variables for scope.
- GetTemplateID function will get the Salesforce Record ID of the Email Template.
- GetTemplateID API call is to get the Salesforce Record ID of the Email Template.
- GetFragmentID function will get the Salesforce Record ID of the Fragment.
- Console log the sucess or failure.
- Set the template Salesforce ID to the variable template.
- GetFragmentID API call is to get the Fragment Salesforce Record ID.

### CSS

```javascript
function SendEmail(result) {
  console.log("email Fragment ID " + JSON.stringify(result.Approved_Document_vod__c.ID));
  myArr.push([result.Approved_Document_vod__c.ID]);
  console.log(myArr);
  console.log(template);

  com.veeva.clm.launchApprovedEmail(template, myArr, finalCall);
  /* com.veeva.clm.launchApprovedEmail(template, "", finalCall); */
}

function finalCall() {}
```

- Console log the Email Fragment ID Sucess or Failure.
- Push Salesforce Record ID of the Fragment into an array.
- Console showing the record IDs of the Approved Docs. Show the Salesforce Record IDs of the Fragments in the Array.
- Show the Salesforce record ID.
- To use with fragments to launch Approved Email Entry Point of the Template.
- To use WITHOUT fragments to launch Approved Email Entry Point.

## Handing Off Content

CLM and Approved Email content is often moved from one Vault to another:

- Agency Vault (source) -> Customer Vault (target).
- Customer sandbox vault (source) -> Customer production vault (target).

The `launchApprovedEmail()` function in the Veeva JavaScript Library uses the Vault Document ID as the indentifier of the Email Template and Email Fragment to launch the Approved Email.

The Document ID is an auto-generated value in every Vault. The Email Templates and Email Fragments receive a new Document ID when they are uploaded to a new Vault. In case the CLM content uses static Document IDs, this requires manually updating the IDs within the code each time the content is moved to a different Vault environment (as in the examples above).

### Create a Unique External ID

To avoid having to manually update the IDs each time the content is moved to a different Vault environment, create a new identifier field that won't change. The purpose of the field is to provide a single Approved Document identifier that is independent from the document ID.

The External ID fields should be created in the source and target Vault and CRM environments.

In the source Vault, the External ID field should be populated with a unique value for the Email Template and Email Fragment Documents. The External ID value is synchronized to the Online and Mobile CRM through the regular Vault-CRM sync.

- **Recommendation:** Use JavaScript query in CLM content to find the Email Template/Email Fragment based on the External ID values.

To ensure that the Template and Fragment with the correct status is opened, the CLM API calls a formula field named "Approved Email External ID with Status" which is a combination of the External ID and the status of the Approved Document.

- **Recommendation:** Even after migrating the integrated CLM and Approved Email, the External IDs are used to identify Email Templates and Email Fragments.

Limit the number of users able to edit the Approved Email External ID field in Vault. Avoid generic ('ext_id_1', 'test external id', ...) External ID values for the Email Templates and Fragments.

Check with your Program Manager if you are planning to implement this solution with a customer or have any questions about it.

The Approved Email External ID custom field must be created in the source and target Vaults, and within the related CRM environments. Due to environment limitations, the Approved Email External ID field should not be set to unique in Veeva CRM.

- Processes should exist to avoid the having multiple Approved State Templates/Fragments with the same External ID.

In the CRM environment, make sure the Approved Email Admin User has edit FLS and the Rep has read FLS on the new field.

```javascript
// Define the document status. This should be "Approved Email"
var document_status = "Approved_vod"

// Define the Email Template to launch
var template_external_id = "template1_agencyname_cholecap_2017" + "_" + document_status;

// Define the Email Fragment to add
var fragment_external_id = "fragment1_agencyname_cholecap_2017" + "_" + document_status;

// Set the global variables for scope
var template = "";

// Query Email Template matching the Approved Email External ID
function launchAE() {
  com.veeva.clm.queryRecord("Approved_Document_vod__c", ["Vault_Document_ID_vod__c", "Vault_Instance_ID_vod__c"], "WHERE Approved_Email_External_Id_with_Status__c = '" + template_external_id = "'", ["Document_Last_Mod_DateTime_vod__c, DESC"], 1, getTemplateDocumentId);
}

// getApprovedDocumentId to get the ID of the Email Template.
// This also ensures we are referring to the latest approved version of the Template
function getTemplateDocumentId(result) {
  com.veeva.clm.getApprovedDocument(result.Approved_Document_vod__c[0].Vault_Instance_ID_vod__c, result.Approved_Document_vod__c[0].Vault_Document_ID_vod__c, GetFragmentID);
}

function GetFragmentID(result) {
  // Store the ID of the Emailt Template
  template = result.Approved_Email_Document_vod__c.ID;

  // Query Email Fragment matching the External ID
  com.veeva.clm.queryRecord("Approved_Document_vod__c", ["Vault_Document_ID_vod__c", "Vault_Instance_ID_vod__c"], "WHERE Approved_Email_External_Id_with_Status__c = '" + fragment_external_id = "'", ["Document_Last_Mod_DateTime_vod__c, DESC"], 1, getFragmentDocumentId);
}

// getApprovedDocumentId() to get the ID of the Email Fragment.
// This also ensures we are referring to the latest approved version of the Fragment
function getFragmentDocumentId(result) {
  com.veeva.clm.getApprovedDocument(result.Approved_Document_vod__c[0].Vault_Instance_ID_vod__c, result.Approved_Document_vod__c[0].Vault_Document_ID_vod__c, Open_AE_dialog);
}

// Launching the Approved Email with the selected Email Template and Fragment
function Open_AE_dialog(result) {
  var myArr = [];
  myArr.push([result.Approved_Document_vod__c.ID]);
  com.veeva.clm.launchApprovedEmail(template, myArr, getResult)
}

function getResult(result) {
  console.log(result)
}
```
