## Survey Overlay in CLM

Reps can open a pre-specified Survey from the CLM media player when viewing a particular presentation. The Survey Overlay feature eliminates the need to navigate away from the presentation, complete the Survey and navigate back to the presentation.

## Enabling a Survey Overlay in CLM

For CLM Content uploaded into Vault PromoMats, two fields must be populated to enable the Survey Overlay page to display in CLM [^1]
- The Enable Survey Overlay field must equal Yes.
- Populate the Survey lookup with the correct Survey.

For CLM content uploaded directly into Veeva CRM, two fields must be populated to enable the Survey Overlay page to display in CLM. [^2]
- The Enable Survey Overlay box must be checked.
- Populate the Survey lookup with the correct Survey.

[^1]: A Survey record must have been created in Veeva CRM and Vault PromoMats prior to completing these steps.
[^2]: These fields may need to be configured in your Content Partner sandbox. A Survey record must have been created in Veeva CRM.

## Using Survey Overlay in CLM

Before the 'Survey' option is available, an Account must be selected, and the Rep must be viewing the Presentation where a Survey is populated.

'Select Account' enables additional information to be available including Survey Overlay.

The Survey Overlay appears over the top of the CLM content.

The 3 options for a Rep in Survey Overlay are:
- The Rep can cancel the Survey to return to the CLM content without completing the Survey.
- Selecting 'Save' keeps the Survey in memory until the CLM is closed at which point the Survey opens on top of the Call Report.
- Selecting 'Submit' will close the Survey and save all answers to sync to CRM Online.

## Survey Branching

Survey Branching allows for conditional questions based on previous answer choices.

Parent Questions are the question that starts the Survey Branch.
- The Parent Question must be either Picklist or Radio type question.

In order to create Survey Branches, navigate to the Survey Questions section on the Survey and click the + button on the question that will be the Parent Question.

There are two options:
1. 'Create Child Question' which will enable the Content Creator to create a new question.
2. 'Add Child Questions' will allow the Content Creator to select an existing question from the Question Bank as the child question.

Once the child questions are created, the Content Creator must select the answer on the parent question that will cause each child question to display. [^3]
- I.e. if the answer to Question 1 is Cholecap then display Child Question 1 and 2.
- I.e. if the anser to Question 1 is Provastatin then display Child Question 3.

When Survey Branching is used, HCPs will only see the main (parent) Survey Questions when the Survey initially loads on the page.

Once an answer for the parent question is selected, then the related child questions will appear. [^4]

[^3]: Parent questions can contain multiple child questions, but a child question can not have another sub-level of questions, i.e., a question can not be both a child and a parent.
[^4]: If a Child Question is required, the system will only enforce that the HCP answers the question if the Child Question is visible when the Survey is submitted.

## Survey Integration in CLM

it is possible to integrate a Survey directly into the HTML of the CLM Presentation.

This allows for a more seamless integration and user experience as the Rep is not required to leave the CLM Presentation at all.

Additionally, the Survey can be delivered in a more interactive way, i.e., sliders, or a question per page for example.

In order to integrate a Survey via HTML, it must be first associated to the CLM presentation via the Survey lookup and then using the Veeva JavaScript Methods, detailed on the following page, then it can be accessed programmatically. [^5]

[^5]: The Survey lookup field should be completed in either Vault PromoMats or Veeva CRM Online depending on where content is first uploaded.

## Survey CLM Integration - JavaScript

Surveys can be accessed from CLM Presentations by utilizing Veeva's JavaScript library.

- `getSurveyQuestions_Survey`
	- **Survey** - Specifies the record ID of the Survey to get all related Survey Questions for a specific Survey.
	- **Callback** - call back function that is used to return the information.

- `getQuestionResponse_SurveyTarget`
	- **SurveyTarget** - specifies the record ID of the Survey Target to get all related Question Responses for a specific Survey.
	- **Callback** - call back function that is used to return the information.

- `getSurveyTarget_Account`
	- **Account** - specifies the record ID of the Account to get all related Survey Targets from.
	- **Survey** - specifies the record ID of the Survey to get all related Survey Targets from.
	- **Callback** - call back function that is used to return the information.

- `createRecord` and `updateRecord`
	- **`createRecord`**` and **`updateRecord`** methods are used to save responses to the database.

## Quiz

> [!faq]- For Survey Branching, Parent questions can be which of the following types?
> 
> - Picklist.
> - Radio.

> [!faq]- Which of these are options for a Rep in the Survey Overlay?
> 
> - The Rep can select save, allowing the survey to be stored.
> - The Rep can cancel the survey without completing, and return to the CLM content.
> - The Rep can submit the survey, all answers will be saved to CRM Online.

> [!faq]- Select the advantages of using Survey Integration in CLM.
> 
> - The survey can be delivered in a more interactive way.
> - The Rep does not need to leave the CLM Presentation to complete the survey.

> [!faq]- What is the advantage of using the Survey Overlay?
> 
> Eliminates the need to navigate away from the presentation to complete a specified survey.
