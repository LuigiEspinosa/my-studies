# Surveys in CLM

Reps can open a pre-specified Survey from the CLM media player when viewing a particular presentation. The Survey Overlay feature eliminates the need to navigate away from the presentation, complete the Survey and navigate back to the presentation.

## Enabling a Survey Overlay in CLM

For CLM Content uploaded into Vault PromoMats, two fields must be populated to enable the Survey Overlay page to display in CLM.

- The Enable Survey Overlay field must be equal Yes.
- Populate the Survey lookup with the correct Survey.

A Survey record must have been created in Veeva CRM and Vault PromoMats prior to completing these steps. This is convered in Survey Basics if not completed.

For CLM Content uploaded directly into Veeva CRM, two fields must be populated to enable the Survey Overlay page to display in CLM.

- The Enable Survey Overlay box must be checked.
- Populate the Survey lookup with the correct Survey.

These fields may need to be configured un your Content Partner sandbox. A Survey record must have been created in Veeva CRM. This is convered in Survey Basics if not completed.

## Using Survey Overlay in CLM

Before the 'Survey' option is available, an Account must be selected, and the Rep must be viewing the Presentation where a Survey is populated. 'Select Account' enables additional information to be available including Survey Overlay.

The Survey Overlay appears over the top of the CLM content. The 3 options for a Rep in Survey Overlay are:

- The Rep can cancel the Survey to return to the CLM content without completing the Survey.
- Selecting "Save" keeps the Survey in memory until the CLM is closed at which point the Survey opens on top of the Call Report.
- Selecting "Submit" will close the Survey and save all answers to sync to CRM Online.

## Survey Branching

Survey Branching allows for conditional questions based on previous answer choices. Parent Questions are the questions that starts the Survey Branch.

- The Parent Question must be either Picklist or Radio type question.

In order to create Survey Branches, navigate to the Survey Questions section on the Survey and click the + button on the question that will be the Parent Question.

1. 'Create Child Question' which will enable the Content Creator to create a new question.
2. 'Add Child Questions' will allow the Content Creator to select an existing question from the Question Bank as the child question.

Once the child questions are created, the Content Creator must select the answer on the parent question that will cause each child question to display.

- i.e. If the answer to Question 1 is Cholecap thend display Child Question 1 and 2.
- i.e. If the answer to Question 1 is Provastatin the display Child Question 3.

![Survey Branching](Assets/Survey-Branching.png)

Parent questions can contain multiple child questions, but a child question can not have another sub-level of questions, i.e. a question can not be both a child and a parent.

When Survey Branching is used, HCPs will only see the main (parent) Survey Questions when they Survey initially loads on the page. Once an answer for the parent question is selected, then the realted child questions will appear.

If a Child Question is required, the system will only enforce that the HCP answers the question if the Child Question is visible when the Survey is submitted.

## Survey Integration with CLM Presentations

It is possible to integrate a Survey directly into the HTML of the CLM Presentation. This allows for a more seamless integration and user experience as the Rep is not required to leave the CLM Presentation at atll.

Additionally, the Survey can be delivered in a more interactive way. i.e., sliders, or a question per page for example.

In order to integrate a Survey via HTML, it must be first assocaited to the CLM presentation via the Survey lookup and then using the Veeva JavaScript Methods, detailed on the following page, then it can be accessed programmatically.

The Survey lookup field should be completed in either Vault PromoMats or Veeva CRM Online depending on where content is first uploaded.

### Survey CLM Integration - JavaScript

Surveys can be accessed from CLM Presentations by utilizing Veeva's Javascript Library.

- `getSurveyQuestions_Survey`
  - Survey: Specifies the record ID of the Survey to get all related Survey Questions for a specific Survey.
  - Callback: Callback function that is used to return the information.

- `getSurveyTarget_Account`
  - Account: Specifies the record ID of the Account to get all related Survey Targets from.
  - Survey: Specifies the record ID of the Survey to get all related Survey Targets from.
  - Callback: Callback function that is used to return the information.

- `getQuestionResponse_SurveyTarget`
  - SurveyTarget: Specifies the record ID of the Survey Target to get all related Questions Responses for a specific Survey.
  - Callback: Callback function that is used to return the information.

- `createRecord` and `updateRecord`
  - createRecord and updateRecord methods are used to save responses to the database.
