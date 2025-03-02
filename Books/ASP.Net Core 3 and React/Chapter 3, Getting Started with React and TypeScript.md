> *An arrow function is an alternative function syntax that was introduced in ES6. The arrow function syntax is a little shorter than the original syntax and it also preserves the lexical scope of `this`. The function parameters are defined in parentheses and the code that the function executes follows `a =>`, which is often referred to as a "fat arrow".* 

> *The `const` keyword can be used to declare and initialize a variable where its reference won't change later in the program. Alternatively, the `let` keyword can be used to declare a variable whose reference can change later in the program.*

> *When an implicit return statement is over multiple lines, parentheses are required. When an implicit return is on just a single line, we can get away without the parentheses.
> Prettier automatically adds parentheses in an implicit return if they are needed.*

>*An `interface` is a contract that defines a type with a collection of property and method definitions without any implementation. Interfaces don't exist in JavaScript, so they are purely used by the TypeScript compiler to enforce the contract by type checking. We create an interface with the `interface` keyword, followed by its name, followed by the bits that make up the interface in curly braces.*

>***Type annotations** let us declare variables, properties, and function parameters with specific types. This allows the TypeScript compiler to check that the code adheres to these types. In short, type annotations allow TypeScript to catch bugs where our code is using the wrong type much earlier than we would if we were writing our code in JavaScript. *

## Understanding the benefits of CSS in JS

CSS is global in nature. So, if we use a CSS class name called container within a Header component, it would collide with another CSS class called container in a different CSS file if a page references both CSS files.

As the app grows and new team members join the development team, the risk of CSS changes impacting areas of the app we don't expect increases. We reduce this risk by being careful when naming and structuring our CSS by using something such as BEM.

Reusability in CSS is also a challenge. CSS custom properties give us the ability to use variables, but they are global variables and are not supported in IE. CSS preprocessors such as SCSS can, of course, help us with this. 

Ideally, we want to easily scope styles to a component. It would also be nice if local styles were defined in the component code, so that we can see and understand the structure, logic, and styling for a component without having to navigate through different files. This is exactly what CSS in JS libraries do, and **Emotion** is a popular CSS in the JS library. 

>*A **template literal** is a string enclosed by backticks (``) that can span multiple lines and can include a JavaScript expression in curly braces, prefixed with a dollar sign (`${expression}`). Template literals are great when we need to merge static text with variables.*

>*A **tagged template literal** is a template string that is executed through a function that is specified immediately before the template literal string. The function is executed on the template literal before the string is rendered in the browser.*

## Implementing component props

Components can have *props* to allow consumers to pass parameters into them, just like we pass parameters into a JavaScript function. 

>*The word **props** is short for properties.*

> *A **Functional Component (FC)** is a generic TypeScript type we can use to pass strongly-typed props to a function-based component. The syntax is `FC<Props>`, where **Props** is the interface for the props.*

> *The **key** prop helps React detect when the element changes or is added or removed. Where we output content in a loop, in React, it is good practice to apply this prop and set it to a unique value within the loop so that React can distinguish it from the other elements during the rendering process. If we don't provide a key prop, React will unnecessarily re-render this element, which makes the rendering process slower.*

>***Destructuring** is a special syntax that allows us to unpack objects or arrays into variables.*

## Optional and default props

A prop can be optional so that the consumer doesn't necessarily have to pass it into a component. 

> *A JavaScript ternary is a short way of implementing a conditional statement that results in one of two branches of logic being executed. The statement has three operands. The first operand is a condition, the second is what is returned if the condition is **true**, and the third is what is returned if the condition is **false**. The ternary operator is a popular way of implementing conditional logic in JSX.*

> *The short-circuit operator (**&&**) is another way of expressing conditional logic. It has two operands, with the first being the condition and the second being the logic to execute if the condition evaluates to **true**. It is often used in JSX to conditionally render an element if the condition is true.*

> *Optional properties are actually a TypeScript feature. Function parameters can also be made optional by putting a question mark at the end of the parameter name before the type annotation, for example, **(duration?: number)**.*

There is another way of setting default props that's arguably neater. Let's remove the `defaultProps` object literal and specify the default after the de-structured component's `showContent` parameter:

```jsx
export const Question: FC<Props> = ({ data, showContent = true }) => ( ... )
```

This arguably makes the code more readable because the default is right next to its parameter and our eyes don't need to scan right down to the bottom of the function to see that there is a default value for a parameter.

Destructuring is an ES6 feature and is commonly used in React apps. For more information on destructuring, see [Destructuring assignment - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Children prop

The `children` prop is a prop that all React components automatically have. It can be used to render child nodes.

So, the children prop allows a consumer to render custom content within the component. This gives the component flexibility and makes it highly reusable.

## Function props

> *The pattern of implementing a function prop to allow consumers to render an internal piece of the component is often referred to as a **render prop**. It makes the component extremely flexible and useable in many different scenarios.*

## Implementing component state

Components can use what is called **state** to have the component rerender when a variable in the component changes. This is crucial for implementing interactive components. For example, when filling out a form, if there is a problem with a field value, we can use state to render information about that problem. State can also be used to implement behavior when external things interact with a component, such as a web API. 

## Asynchronous functions

> *A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. The **Promise** type in TypeScript is like the **Task** type in .NET.*

Notice the `<void>` after the Promise type in the return type annotation. Angle brackets after a TypeScript type indicate that this is a generic type.

> *Generic types are a mechanism for allowing the consumer's own type to be used in the internal implementation of the generic type. The angle brackets allow the consumer type to be passed in as a parameter. Generics in TypeScript is very much like generics in .NET.*

We are passing a `void` type into the generic Promise type. But what is the void type?

> *The `void` type is another TypeScript-specific type that is used to represent a non-returning function. So, `void` in TypeScript is like void in .NET.*

Notice the `await` keyword before the call to the `wait` function and the async keyword before the function signature.

>*`async` and `await` are two JavaScript keywords we can use to make asynchronous code read almost identically to synchronous code. `await` stops the next line from executing until the asynchronous statement has completed, while `async` simply indicates that the function contains asynchronous statements. So, these keywords are very much like `async` and `await` in .NET.*

## Using `useEffect` to execute logic

> *The `useEffect` hook is a function that allows a side effect, such as fetching data, to be performed in a component. The function takes in two parameters, with the first parameter being a function to execute. The second parameter determines when the function in the first parameter should be executed. This is defined in an array of variables that, if changed, results in the first parameter function being executed. If the array is empty, then the function is executed only when the component is mounted into the DOM.*

## Using `useState` to implement component state

> *The `useState` function returns an array containing the state variable in the first element and a function to set the state in the second element. The initial value of the state variable is passed into the function as a parameter. The TypeScript type for the state variable can be passed to the function as a generic type parameter.*

> *A **union type** is a way of specifying that a type can be one of multiple types. The different types in the union are separated by a pipe character (|).*

> *|| is a logical OR operator and returns the operand before if it is truthy; otherwise, it returns the operand after.*

## Handling events

JavaScript events are invoked when a user interacts with a web app. For example, when a user clicks a button, a `click` event will be raised from that button. We can implement a JavaScript function to execute some logic when the event is raised. This function is often referred to as an **event listener**.

> *In JavaScript, event listeners are attached to an element using its `addEventListener` method and removed using its `removeEventListener` method.*

React allows us to declaratively attach events in JSX using function props, without the need to use `addEventListener` and `removeEventListener`.

## Rendering Optimization

The `memo` function ensures that the component that's passed into it only rerenders when its props change.

There is a performance cost when `memo` determines whether a component has changed. If the component doesn't actually do any unnecessary rendering, using memo would result in the component being slower. So, `memo` should be used with care and considered only if a component has some of the following traits:

- The component returns the same output for a given set of props.
- The component renders often.
- The component outputs lots of elements.

## Quiz

> [!faq]- Does a component re-render when its props change?
> 
> Yes.

> [!faq]- Does a component re-render when a parent's props change?
> 
> Yes.

> [!faq]- How can we ensure a component re-renders only when its props change?
> 
> Wrap the component in the `memo` function.

> [!faq]- What function prop would we use to add a `keydown` event listener?
> 
> `onKeyDown`.

> [!info] A component has the following props interface:
> 
> ```ts
> interface Props {  
> 	name: string;  
> 	active: boolean;
> }
> ```
> 
>> [!faq]- How can we destructure the props parameter and default active to true?
>>
>> ```tsx
>> export const myComponent: FC<\Props> = ({ name, active = true }) => ( ... )
>> ```
>

> [!faq]- Let's say we have a state called dateOfBirth. How can we type this to be Date?
> 
> ```tsx
> const [dateOfBirth, setDateOfBirth] = useState<\Date>(undefined);
> ```

> [!faq]- How could we use the `useEffect` hook to call a synchronous function called `getItems` when a piece of state called `category`changes, passing in `category` to `getItems`?
> 
> ```tsx
> useEffect(() => {
> 	getItems(category);
> }, [category]);
> ```
