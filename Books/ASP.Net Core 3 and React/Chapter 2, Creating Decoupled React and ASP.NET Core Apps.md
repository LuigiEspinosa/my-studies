## Understanding the benefits of TypeScript

TypeScript adds an optional static typing layer on top of JavaScript that we can use during our development. Static types allow us to catch certain problems earlier in the development process.

## Adding linting to React and TypeScript

Linting is a series of checks that are used to identify code that is potentially problematic. A linter is a tool that performs linting, and it can be run in our code editor as well as the **continuous integration (CI)** process. So, linting help us write consistent and hight-quality code as it si being written.

**ESLint** is the most popular linter in the React community.

## Adding automatic code formatting to React and TypeScript

Enforcing a consistent code style improves the readability of the code base. **Prettier** is one of many tools.

## Quiz

> [!faq]- What class does an API controller need to inherit from for invalid models to automatically return HTTP status code 400?
> 
> `ControllerBase`

> [!faq]- What option on `create-react-app` did we use to create a React with a TypeScript project?
> 
> `--typescript`

> [!faq]- What ESLint rule could we use to help to prevent `console.log` statements being added to our code?
> 
> `no-console`

> [!faq]- What setting in `.prettierrc` could we set to use single quotes in our code?  
> 
> `"singleQuote": true`

> [!faq]- What file can we use to tell Visual Studio Code to validate TypeScript code using ESLint and to automatically format code using Prettier?
> 
> `settings.json` in a `.vscode` folder
