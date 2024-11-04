## Surveys in Veeva CRM

Surveys are a module in Veeva CRM which, when enabled[^1], allows CRM Users to gather additional reliable information about HCPs.

Some of the use cases for Surveys include:
- Gathering information for market research to help brand messaging and to allocate sales resources.
- Following up after an event.
- Understanding HCP treatment preferences.
- Evaluating speakers.

[^1]: Veeva CRM modules are not separate products with a license cost but require Customers to configure and turn them on to be able to use.

## What are Surveys?

Surveys are a set of questions that Reps can ask HCPs and respond to in Veeva CRM.
- Reps can use it to help build useful Account profiles by better understanding the needs of their HCPs, as responses will be stored in the Survey Data fields to the CRM connected to the HCP Account.
- Marketing can also use surveys to collect information for building effective Key Messages.

Surveys are easy to design and deploy.
- Administrators configure and enable Survey functionality.
- Business Administrators can create and report on Surveys without the need for a System Administrator to be involved in the process.

Types of Surveys Users:
- Surveys Creators - End Users/Business Admins who create, design and publish surveys.
- Reps - End users who administer the surveys for their HCPs.

## Types of Surveys

Surveys can be created for two different purposes:

1. Internal purposes, i.e., to gather feedback from Reps within the company.
	- These are called User Surveys. To create the Record Type = User Survey.

2. External purposes, i.e., to gather information from HCPs.

## External Surveys

External Surveys are a way to gather more information from the HCP.

These Surveys have two different types:

1. One-time Survey, i.e., the HCP can only respond to the Survey once and therefore gathers a set of information only one time.
2. Recurring Surveys, i.e., the Survey can be responded to by the same HCP multiple times, allowing the same set of questions to be answered by and HCP on a recurring basis. These Surveys maintain a history of responses, enabling Customers to track changes to answers over time.

## Survey Devices

Surveys can be accessed by Reps to complete with an HCP via Veeva CRM Mobile (iPad and Windows), Veeva CRM iPhone application and Veeva CRM Online.

## Survey Channels

A Survey can be completed via the following channels:
- CRM: The rep can review or update the Survey on the device.
- CLM: The Survey can be accessed within the CLM presentation via Survey Overlay or integrated into the HTML.
- Approved Email: Reps can send an Approved Email to the HCP with a link to the Survey.

## Survey on Veeva CRM Mobile

Reps can review or update Survey responses (if the Survey is not ended) on each HCP Survey Targets page.

## Survey Overlay

Reps can also open a Survey from the Action Button using the feature Survey Overlay.

Survey Overlay eliminates the need to navigate away from the presentation, complete a Survey and navigate back to the presentation.

## Survey integrated in CLM Presentations

Surveys can be accessed from CLM Presentations by utilizing Veeva's JavaScript library.

Surveys integrated into CLM can be customized according the look and feel of the presentation.

## Surveys in Approved Email

Reps can send an Approved Email to the HCP with a link to the Survey which allows the HCP to respond to the Survey outside of the face-to-face interaction with the Rep.

The Survey response is recorded and tracked in Veeva CRM against the Survey record.

## Survey Data Model Overview

The Survey Data Model indicates where the information is stored in Veeva CRM when submitting a Survey.

![[Survey Data Model.png]]

## Survey Process

To create a Survey and make this available to be used in the field, there are 6 general steps that Content Creators or Admins need to complete.

1. Create Survey.
2. Add Questions.
3. Select Targets.
4. Publish Survey.
5. Create Responses.
6. Review Results.

## Creating a New Survey

Login to Veeva CRM Online.

Open 'Surveys' tab (if the tab is not visible, click + to see all tabs).

Click 'New'.

Choose the relevant 'Survey Record Type':
- One Time.
- Recurring.
- User Survey.

Select 'Continue'.

Enter a name in the 'Survey Name' field.

Select a value from the 'Start Date' and 'End Date' fields, this controls how long the Survey is available for.

Select the 'Channels' in which the survey will be published.
 
Select the 'Assignment type', either 'Product and Territory' or 'Territory'. If Product is selected then select the Product that this Survey will be associated to.

Select the 'Include User Territories' drop-down.
- Select at least one territory from the drop-down list and select Insert Selected. If the User creating the Survey only belongs to one territory this will auto-fill.

Select 'Save'.

Add questions. Choose the appropriate formatting for the question.
- Picklist
- Text
- Radio
- Multiselect
- Number
- Date
- Date Time
- Long Text
- Description

More information in [[#Question Bank Options]] section.

Select targets.
- Allows you to select specific HCP Accounts that this Survey is targeted for.

## Creating Survey Records

The Survey record with a group of questions and information about the accounts is created in Veeva CRM.

When this Survey is used via the CLM or Approved Email channel, a corresponding record of this Survey must be created in Vault PromoMats.

The External ID field in Veeva CRM and Vault PromoMats must be the same.

## Adding a Survey to Vault PromoMats

The corresponding Survey record in Vault PromoMats needs to match the record created in Veeva CRM with the following fields:
- Survey Name.
- Start Date.
- End Date.
- External ID

To create a Survey record, you must login with an Admin User and click on the 'Admin' cog button.

Within the 'Business Admin' tab, there is a component object search box, click on this box and type in Surveys.

To create a new Survey, click the 'Create' button.

Enter the following fields to match the data in Veeva CRM:
- Survey Name.
- Start Date.
- End Date.
- External ID (this must match exactly and is case sensitive)

And click 'Save' button.
## Question Bank Options

The Question Bank is a list of reusable questions created for Surveys. Any questions created for a Survey can be added to the Question Bank to be used on other Surveys in the future.

Any time a User adds a question to a Survey, the 'Save' and 'Add to Question Bank' button displays, giving them the option to save the question for other Surveys.

When creating a Survey, the User has the option to create a Survey question or open the Question Bank. Selecting the Question Bank button opens the Question Bank screen.

Users can select the check box beside any question and use the Add Selected button to add the questions to their Survey.

## Survey Question Types

Surveys in Veeva CRM can include the following question types:

- Picklist - up to 20 answer choices with a maximum of 200 characters.
- Radio - up to 20 answer choices with a maximum of 200 characters.
- Multi-select - up to 10 answer choices with a maximum of 200 characters.
- Number
- Date
- Datetime
- Description - an open text field used for instructions and notifications. No response is required.
- Text - maximum of 255 characters.
- Long text - maximum of 2500 characters.

Survey Creators can select if a question is required to be answered before the Survey can be submitted.

## Create a Survey Question

To create a new 'Survey Question' for a Survey, click the 'New Survey Question' button below the Survey record.

Select the 'Type' and enter the question, answer choices (if appropriate).

The Required checkbox, if checked, will prevent the Survey from being saved without this question being answered.

If more 'Answer Choices' are required, click the green + button.

To save the Survey, click 'Save' or 'Save and Add to Question Bank'.

## Adding Accounts to a Survey

In order to allow an Account to complete a Survey, a Survey Target needs to be created.

When creating a Survey, the User can either pre-select the list of Survey Targets that can complete a Survey or allow Reps to add Survey Targets after the Survey is published.

To allow Reps to add a Survey target, the User ticks the 'Allow users to choose targets?' checkbox.

## Creating Survey Targets

To pre-select the list of Survey Targets that can complete a Survey, scroll down the Survey Management page to the Survey Targets section and click 'New Survey Target'.

Add all HCPs that should complete this survey.

## Survey Branching on iOS

Survey Branching is available via the CRM and CLM channels for use on the iPad, iPhone and CRM Online platforms.

Branching in Surveys allows for conditional questions based on previous answer choices. [^2]

![[Branching.png]]

- Users see each of the main line questions when Survey initially loads on the page.
- Once an answer for the parent question is selected the related children questions will also appear.
- If a child question is required, the validation to ensure the question is answered will only be enforced if the question is visible when the user submits the Survey.

Survey Branching can be utilized across survey types: One Time, Recurring and User Surveys.

This is available for CRM and CLM channels only and is not supported for use in Approved Email.

Branching logic is preserved when cloning Surveys.

Branching logic is copied to translated Surveys.

If a parent/child question is added to the Question Bank, the branching logic is not preserved in the Question Bank.

[^2]: Branching Surveys are not supported via Approved Email.

## Survey Branching Results on Veeva CRM Online

When Survey admins review the results only the questions that were displayed to the user during submission are included in the calculations.

## Survey Publishing

Once the Survey is created, Surveys must be published in order to be available to complete.

First step is t click on the 'Publish' button.

Publishing indicates a Survey is ready to be completed by Reps and HCPs.

Publishing locks the Survey, restricting editing to Survey properties and questions.

## Survey for Internal Use

Customers are able to administer Surveys for feedback and analysis from internal users (employees).

They are different compared to Surveys for external users, Survey Targets are Users (Reps) not Accounts (HCPs) and can automatically be created based on selected Territories and Products.

The User targeted for the Survey is also the owner.

Internal Surveys in CLM are only available in training content on iPad (remember the activity is no tracked in training content).