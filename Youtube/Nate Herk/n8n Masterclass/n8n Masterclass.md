## What is n8n?

n8n is a low-code automation tool.
- It allows you to build tools as workflows.

Automating workflows
- Increased Efficiency
- Improved Data Handling
- Time & Cost Savings
- Enhanced Customer Experience
- Scalability

## Why Should You Learn n8n?

- Empowering Non-Developers with AI Automation.
	- You don't need to know how to code.
- Access to 300+ Built-In Integrations.
	- Google apps, Microsoft apps, Slack, X, etc.
	- String them together... infinite possibilities.
- Connect to Almost Any Tool.
	- Extend Using APIs, Webhooks, and Custom Code.

## Set Up n8n

Self-Hosted
- Control & Flexibility
- Data Ownership
- Cost
- Installation & Maintenance
- Customization

Cloud
- Ease of Use
- Availability & Reliability
- Security
- Cost
- Data Handling

## How to Choose

Self Hosted if...
- You need full control over your data and infrastructure.
- You want to fully integrated n8n deeply within other on-premise systems.
- You are comfortable handling server management

Cloud if...
- You prefer simplicity.
- Quick setup and reliable hosting.
- You're okay with paying a subscription for a managed service.
- You don't mind data being handled by a third-party provider.

## Types of Nodes

- [[#Trigger Nodes]]
- [[#Action Nodes]]
- [[#Data Transformation]]
- [[#Logic Nodes]]

### Trigger Nodes

- These tell n8n when/how to start the workflow.
- They're manual, Scheduled, On chat, On Event, _Called by Another Workflow_, etc.

### Action Nodes

- The "doers", they perform specific tasks.
- Send Emails, Create Records, Make API Requests, Get Text Messages, Set Calendar Events, etc.

### Data Transformation

- Change or process the data flowing through.
- Set: Add fields, change values, reduce data.
- Aggregate: Combines data into a single output.
- Merge: Combining data from two sources.

### Logic Nodes

- Conditional decision makers.
- If: True or False.
- Switch: Routes data based on condition.
- Wait: Pauses until a condition is met.

## RAG and Vector Databases

Retrieval-Augmented Generation (RAG) is a powerful technique that combines two approaches. Helps AI models provide more accurate and relevant answers.

- Retrieval - Retrieves relevant information from external sources.
- Generation - AI uses this information to generate an answer.

No Guessing
- AI Assistant
	- It's not gonna make up an answer based on training data.
	- More reliable and up-to-date information.

RAG needs a way to store and retrieve data efficienctly.

Vectors
- Data stored in "vectors".
- Numerical database that represents the meaning of words, text, etc.
- Relevant information quickly.

### Embedding Data to Vector Database

- Data Loading
	- Handles data coming in to pass it off to a text splitter.
	
- Text Splitting
	- "Chunks" up the text for more efficient retrieval.
	- _Character, Recursive Character, Token_

## API & HTTP Requests

APIs - Application Programming Interface, think of it as the bridge that allows two different software programs to exchange information.

- API Endpoint - The specific address (URL) for our request.
- API Call - The request you make to an API.
- HTTP Request - The method used to send the API call over the internet.

An HTTP Request is talking to other websites or services.

- GET - Get data, asking for information.
- POST - Send data, sending information.

HTTP Request is how you make an API Call.

- API - The service you're talking to.
- API Endpoint - The service station.
- API Call - The request.
- HTTP Request - The mechanism used to deliver the request.

