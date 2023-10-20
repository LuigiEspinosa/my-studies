# Veeva Javascript Library

## Veeva JavaScript Library and Key Functionality

With Veeva CLM it is possible to create a sophisticated presentation which can react to user interaction and/or data in Veeva CRM. There are various elements which enable this through a combination of conding and Veeva CLM functionality.

This course will explain the Veeva CLM features and functionality learnt in previous courses and how they can be combined with the Veeva JavaScript Lirabry to create an interactive and sophisticated HTML presentation.

### What is the Veeva JavaScript Library?

Veeva publishes a JavaScript library to assist customers and their creative agencies with developing personlized and dynamic HTML5 content that interacts with the Veeva CRM database.

This module will explain the most common methods within Veeva JavaScript Library with worked examples, however the library is fully documented here: [https://developer.veevacrm.com/](https://developer.veevacrm.com/doc/Content/Home.htm).

This library is supported for CLM, Engage for Portals and Engage Meeting content creation.

- Enables content creators to access the Veeva CRM database to get information including, but not limited to the doctors name and preferences allowing the content journeys to be personalised (`getDataforCurrentObject`).
- Enables content creators to implement custom navigation and control the flow of the presentation and access to hiddne presentations (`gotoSlide`).
- Enables the integration of Surveys directly into the HTML of a CLM Presentatin, allowing for a more controlled and user-friendly interaction.
- Enables the launching of Approved Email directly from a CLM presentation to a specific email template, which allows the Rep to quickly send a relevant email before returning to CLM converstaion (`launchApprovedEmail`).

### Hidden Presentations

Hidden Presentations are presentations that are hidden from the Rep on the Veeva CRM Mobile Application. It is not possible to see the presentation using the Media tab or native Veeva swipe.

There are a number of reasons that you may wanto to hide content but at its essence, it is a **control mechanism**, i.e., to allow controlled access to that content. As we will see in our example later, Hidden Presentations are used to control access to specific content.

Presentations are indicated as Hidden in Vault. To reach a slide within a Hidden Presentation, Content Creators must use the '`gotoSlide`' JavaScript function to link directly to a slide in the Hidden Presentation.

### Shared Resources

To optimize storage space and reduce sync times, HTML assets known as Shared Resources can be used with multiple Key Messages.

Shared Resources are not displayed as individual slides in Veeva CLM.

- i.e. as opposed to having the same Product Image file in every Key Message ZIP, you can have the image file in one Shared Resource Key Message and the others can reference it.

### Disable Actions

There are a number of standrard features in a Veeva CLM Presentation that aid navigation but can also be deactivated including:

- **History Buttons**

As Reps progress trough slides within a presentation, a browser-like history is saved. Selecting the forward or backward buttons transitions the Rep forward or backward one slide in the history of displayed slides, which can include slides from multiple presentations.

The History Buttons only display once the Rep has navigated between slides in the presentation and created slide history. Selecting and holding either of the History Buttons displays a list of slides (with a maximum of 10) to which Reps can navigate.

- **Navigation Bar**

Reps can select the button in the bottom left to display the thumbnail Navigation Bar. When the Navigation Bar displays at the bottom of the screen, thumbnails of the slides in the current presentation display and the current slide displays with a blue border so Reps can identify their place in the presentation.

Reps can select a slide thumbnail to display that slide, regardless of its position in the presentation.

On the iPad platform the navigation bar displays by selecting the button on the bottom left hand side of the screen. On the Windows platform the navigation bar displays by swiping up or down from the top or bottom of the screen.

- **Swipe**

Veeva CLM Mobile has a built-in swipe function to allow Reps to transition between Key Messages. This swipe gesture does not requrie programming, however this gesture can be disabled to improve presentation navigation.

Admins can disable the swipe gesture for slide navigation in CLM presentations to allow more creativity and flexibility when adding interactive controls, for example, draggin or dropping elements within a slide, or adding horizontal sliders.

Swipe sensitivity is the length of the gesture needed to swipe from one slide to the next. Admins can configure swipe sensitivity to allow users to smoothly and easily navigate through a CLM Presentation.

- **Slide Reuse**

Key Messages are independent entities and as such can be linked to more than one presentation i.e. if you have a Key Message about Prescribing information, this can be associated with more than one CLM Presentation.

In our worked example you will see that a number of slides are reused across the Hidden Presentations.

## Common Veeva JavaScript Methods

### gotoSlide

The purpose of this method is to allow navigation betwenn slides. As background, each slide is its own independent entity that is not aware of another slide. As such, there is no way to use standard HTML anchors to navigate to another slide.

`gotoSlide` allows content creators to jump to specific slide.

The classic example would be a navigation menu built into HTML, which allows the Rep to access the sections within a CLM Presentation. Additionally, it is also possible to jump to a slide in another CLM Presentation. A typical example would be to allow controlled access to a hidden presentation.

The method is `gotoSlide(key, presentation)`:

- The key uses the Media Fle Name. Key is a string.
- The presentation is the Presetation ID, which is a separate field from Presentation Name and Presentation Description, is under Multichannel Properties in Vault. Presentation is a string.

### getDataForCurrentObject

This function "Returns the value of a field for a specific record related to the current call". This means that you can request specific information from the database within the context of the call that you are in.

`getDataForCurrentObject(object, field, callback)`:

- This method requires the context of a call therefore the object parameter can only be one of the following: Account, TSF, User, Address, Call, Presentation, KeyMessage, and CallObjective. Object is a string.
- The field parameter uses the API name of field to retrieve the specific data. Callback is the chained method which will be called upon completion. Field is a string and callback is a function reference.

### getDataForObject

`getDataForObject` is similar to the previous method in that it retrieves specific field data from the database. However this time you can get information from any objetc record and not specifically linked to objects associated to a call.

If the Rep has the correct permission, they can access any object using this method - `getDataForObject(object, field, callback)`:

- The object parameter can be any object. The record parameter identifies the specific data record to be accessed.
- The field parameter uses the API name of the field to retrieve the specific field data. Callback is the chained method which will be called upon completion.

### createRecord

The method `createRecord` allow data record to be created in the Veeva CRM database. Records can only be created if the Rep has permission to create record for that object type.

`createRecord(object, values, callback)`:

- The object parameter can be any object, that the user has permission to access.
- The values parameter lists the fields and corresponding values to be inserted into the database.
- Callback is the chained method which will be called upon completion.

### updatedRecord

`updateRecord` method allows a specific data record within Veeva CRM to be updated with new information. All the fields can be updated at the same time.

`updateRecord(object, record, values, callback)` method enables the updating of an existing data record in the database:

- The object parameter can be any object, that the user has permission to access. The record parameter indetifies the specific data record to be accessed. The values parameter lists the fields and corresponding values to be updated into the database. The Callback parameter is the chained method which will be called upon completion.

```js
function getCurrentAction() {
  com.veeva.clm.getDataForCurrentObject("Account", "Id", updateAccount);
}

function updateAccount() {
  if (result.sucess == true) {
    var newValues = {};
    newValues.My_Custom_Field__c = "new value";
    newValues.Number_Field_1__c = 42;
    com.veeva.clm.updateRecord("Account", result.Account.Id, newValues, callBack);
  }
}

function callBack(result) {}
```

### queryRecord

The purpose of this methid is to query and return the specified fields for all records which match the where clause. Also returns count of records returned.

`queryRecord(object, fields [, where] [, sort] [, limit], callback)` method enables you to return multiple fields and data records for an object:

- It functions like SQL statement, i.e. you declare the fields, there is a where clause, you can set the sort order and limit the number of records.
- However, you cannot create joins to get additional data back from other objects at the same time.

```js
function queryAccount() {
  var objectName = "Account";
  var fields = ["Id", "Name"];
  var whereClause = "WHERE Specialty_1_vod__c = 'Cardiology'";
  var sortClause = ["Name, ASC"];
  var limit = "10";

  com.veeva.clm.queryRecord(objectName, fields, whereClause, sortClause, limit, displayQueryResults);
}
```

### launchApprovedEmail

`launchApprovedEmail` launches the Send Email user interface, directly from a CLM presentation with the email template and fragments selected. An account must be selected prior to using this method. Practical real world scenarios are:

- Sending a follow-up email after a call with links to relevant documents.
- Sending a link to a survey.
- Sending a link to an event registration.

By using `launchApprovedEmail` you can access the exact email template with specific fragments already selected.

`launchedApprovedEmail(email_template, email_fragments, callback)`, you must first retrieve the Approved Email template from the target Vault then get the Email Fragments. However, if this is not required, you can skip this step.

```js
// Generally, getApprovedDocument is only used when Vault Instance Id's and Vault Document Ids are hard-coded into the CLM content
// Store Email Template id in a global variable called "myTemplate"
function getTemplateDocId() {
  com.veeva.clm.getApprovedDocument("https://my-test-vault.veevavault.com", "11", getFragmentId);
}

// Also get an Email Fragment
function getFragmentId(result) {
  if (result.success == true) {
    myTemplate = result.Approved_Document_vod__c.ID;
    com.veeva.clm.getApprovedDocument("https://my-test-vault.veevavault.com", "33", launchAE);
  }
}

function launchAE(result) {
  if (result.success == true) {
    com.veeva.clm.launchApprovedEmail(myTemplate, result.Approved_Document_vod__c.ID, callback);
  }
}

function callback(result) {}
```

## Real World Examples

### Slide Reuse

Firstly, we will explain the puporse of the content.

The first part of the content is the intro slides, which is an opportunity for the Rep to introduct the subject and pose a question. The purpose of the question is to determine the current circumstances with the HCP. The answer to the simple Yes/No question will determine which content will be shown next.

Subsequently, the presentation will show slides to update/capture data as well as to send follow up information, remote call invites, or registration to a Brand website.

### Structure of Content

As a consequence of the purpose, this determines how we will implement the content structure.

The first decision we have to make is regarding showing the intro slides. This is quite straightforward as the Rep must be able to access these to start the call as per the presentation depiction on the right.

However, the next step is a bit trickier. We need to ask a question, but we want to prevent the rep from showing non-relevant content until we know what should be shown. As a consequence, it makes sense to hide the content until we have the answer to the Yes/No question.

So, we will create 2 presentations, one for each response i.e. Yes or No and we will hide these. Since these two presentations are hidden, the next logical question is how do you access hidden presentations?

### How to access a Hidden Presentation?

In order to access a Hidden Presentation, we need to use the Veeva JavaScript Library. To navigate to a Hidden Presentation, you need to use the Veeva JavaScript method gotoSlide. In essence, the method is defined as `gotoSlide(key, presentation)`.

- Key is the slide you want to go to.
- Presentation is the presentation you want to go to.

In responding to the Yes/No question, we can use JavaScript to determine the answer selected and then provide the correct parameters to the gotoSlide function. Additionaly, you can use the function gotoSlide without the Presentation parameter to navigate to a slide within the same presentation.

### Example of Shared Resources

In each slide, there are common elements used, in particular the Brand Logo. Thid Brand Logo is a typical example of an asset loaded into Shared Resources. As a result of being in Shared Resources the image is only loaded once.

Using Shared Resources helps with download times but also ensures any change to the logo only requires one change to the Key Message Zip file. Shared Resources can contain HTML, CSS, Images, Videos, PDF, JavaScript files.

### Content Reuse

It is possible to reuse content, i.e. slides, within more than one presentation. For example, it is possible to reuse one of the slides in another presentation.
