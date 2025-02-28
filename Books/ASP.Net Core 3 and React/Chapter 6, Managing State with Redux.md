## Principles

- **Single source of truth:** This means that the whole application state is stored in a single object. In a real app, this object is likely to contain a complex tree of nested objects.
- **The state is read-only:** This means that the `state` can't be directly changed. In Redux, the only way to change the `state` is to dispatch what's called the action.
- **Changes are made with pure functions:** The functions that are responsible for changing the state are called reducers.

Redux shines when many components need access to the same data because the `state` and its interactions are stored in a single place.

## Key concepts

The whole **state** of the application lives inside what is called a store. The state is stored in a JavaScript object.

The `state` won't contain any functions or setters or any getters. It's a simple JavaScript object. The store also orchestrates all the moving parts in Redux. This includes pushing actions through reducers to update the state.

So, the first thing that needs to happen in order to update the `state` in a store is to dispatch an **action**. An action is another simple JavaScript object.

**Action creators**, which are types of functions, are often used to create the action objects. This is beneficial when a user interaction results in a number of store actions or the interaction is asynchronous, such as fetching data from a server.

**Reducers** are pure functions that make the actual state changes.

> *A **pure function** always returns the same result for a given set of parameters. So, these functions don't depend on any state outside the scope of the function that isn't passed into the function. Pure functions also don't change any state outside the scope of the function.*

- Reducers take in two parameters for the current state and the action that is being performed.
- A `switch` statement is used on the action type and creates a new state object appropriately for each action type in each of its branches.
- To create the new state, we spread the current state into a new object and then overwrite it with properties that have changed.
- The new state is returned from the reducer.

## Creating Actions

> *Interfaces can inherit properties and methods from another interface using the `extends` keyword. The interface that's being inherited from is specified after the extends keyword.*

Action creators are functions that create actions. When the process of creating the action is synchronous, the action creator will return the action object. However, when the process of creating the action is asynchronous, the action creator will return a function that dispatches the action. Asynchronous actions can also dispatch more than one action. 

## Creating a reducer

The reducer takes in two parameters: one for the current state and another for the action that is being processed. The state will be undefined the first time the reducer is called, so we default this to the initial state we created earlier.

The reducer needs to return the new state object for the given action. 

> *The `never` type is a TypeScript type that represents something that would never occur and is typically used to specify unreachable areas of code.*

## Quiz

> [!faq]- When implementing an action object, how many properties can it contain?
> 
> As many as we like. It needs to include at least one for the `type` property. It can then include as many other properties as we need for the reducer to change the state, but this is generally lumped in one additional property. So, generally, an action will have one or two properties.

> [!faq]- Why did we need Redux Thunk in our Redux store?
> 
> By default, a Redux store can't manage asynchronous action creators. Middleware needs to be added to the Redux store to facilitate asynchronous action creators. Redux Thunk is the middleware we added to do this.

> [!faq]- How did we make the state in our store read-only?
> 
> We used the `readonly` keyword in the properties in the interface for the state.

> [!faq]- In the `questionsReducer` function we implemented, why didn't we use the array `push` method to add th new question to the state?
> 
> ```tsx
> case 'PostedQuestion': {
> 	return {
> 		...state,
> 		unanswered: action.result
> 			? (state.unanswered || []).push(action.result.question)
> 			: state.unanswered
> 		postedResult: action.result,
> 	};
> }
> ```
> 
> The `push` method would mutate the product's state directly, which would make the function impure. This is because we have changed the state argument, which lives outside the scope of our function.

> [!faq]- Does the `Provider` component from React Redux need to be placed at the top of the component tree?
> 
> The `Provider` component needs to be placed above the components that need access to the store. So, it doesn't need to be right at the top of the tree.

> [!faq]- As well as the `Provider` component, what is the other item from React Redux that allows a component to consume data from the Redux store?
> 
> The other key item from React Redux is a function called `connect`, which wraps a component, giving it access to the store.

> [!faq]- Is a component that consumes the Redux store allowed to have a local state?
> 
> Yes, it is. if the state is not useful outside the component, then it is perfectly acceptable to have this state local within the component.
