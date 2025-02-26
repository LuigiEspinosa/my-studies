## Understanding the different types of automated test

A robust suite of automated tests helps us deliver software faster without sacrificing its quality. There are various types of test, though, with each type having benefits and challenges. In this section, we are going to understand the different types of test and the benefits they bring to a single-page application.

### Unit Tests

Unit tests verify that individual and isolated parts of an app work as expected. These tests generally execute very fast, thus giving us a very tight feedback loop so that we know the part of the app that we are developing is working correctly.

### End-to-end Tests

End-to-end tests verify that key paths work together as expected. No parts of the app are isolated and mocked away. These tests run a fully functioning app just like a user would and so it gives us the maximum amount of confidence that our app is functioning correctly.

These tests are slow to execute, though, which can delay the feedback loop during development; they're also the most expensive to write and maintain. This is because everything that the tests rely on, such as the data in the database, needs to be consistent each time the tests are executed, which is a challenge when we implement multiple tests that have different data requirements.

### Integration Tests

Integration tests verify that several parts of an app work together correctly and give us more confidence than unit tests in terms of ensuring that the app as a whole is working as expected. These tests provide the most scope in terms of what is tested because of the many app part combinations that we can choose to test.

For single-page applications, the **return on investment (ROI)** of integration tests is arguably greater than the other two testing types if we choose our tests wisely.

## Getting started  with xUnit

> *The `Fact` attribute denotes that the method is a unit test for xUnit. Another attribute that denotes a unit test is called `Theory`. This can be used to feed the method a range of parameter values.*

We used the `Equal` method in the `Assert` class in this test. The following are globally some other useful methods in this class:

- `True`: Checks that a value is true.
- `NotNull`: Checks that a value isn't null.
- `Contains`: Checks that the value is in a string.
- `InRange`: Checks that the value is within a range.
- `Throws`: Checks that an exception is raised.

## Getting started with Jest

Jest is the de-facto testing tool in the React community and is maintained by Facebook.

The `test.ts` extension is important because Jest automatically looks for files with this extension when searching for tests to execute. Note that if our tests contained JSX, we would need to use the `test.tsx` extension.

## Implementing end-to-end tests with Cypress

Cypress is an end-to-end testing tool that works really well for **single-page applications (SPAs)**.

The `describe` function allows us to group a collection of tests on a feature. The first parameter is the title for the group, while the second parameter is a function that contains the tests in the group.

The `it` function allows us to define the actual test. The first parameter is the title for the test and the second parameter is a function that contains the steps in the test.

The `beforeEach` function allows us to define steps to be executed before each test runs. In our case, we are using the visit command to navigate to the root of the app.
