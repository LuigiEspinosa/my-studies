> *Unlike other attributes, you don't need to specify the value of a Boolean attribute on an HTML element. Its presence on an element automatically means the value is `true` and its absence means the value is `false`.*

> *When using triple equals (\=\=\=), we are checking for strict equality. This means both the type and the value we are comparing have to be the same. When using a double equals (\=\=), the type isn't checked. Generally, it is good practice to use the triple equals (\=\=\=) to do a strict equality check.*

>*In React, a component can only return a single element. This rule applies to conditional rendering logic where there can be only a single parent React element being rendered. React **Fragment** allows us to work around this rule because we can nest multiple elements within it without creating a DOM node.*

## Navigating programmatically

> *The `history` object in React Router keeps track of the locations that have been visited in the app and contains quite a few different properties and methods. The `push` method pushes a new entry into the history stack and performs navigation to the location that's passed in as a parameter.*

## Lazy loading routes

>*The `lazy` function in React lets us render a dynamic import as a regular component. A dynamic import returns a promise for the requested module that is resolved after it has been fetched, instantiated, and evaluated.*

