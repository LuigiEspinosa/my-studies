> *An **indexable type** is where the index signature is defined rather than specific properties. The type in the square brackets defines the type for the keys in the object and the type after the colon defines the return type when indexed.*

```ts
export interface Props {
	[key: string]: any;
}
```

> *A non-null assertion operator (!) tells the TypeScript compiler that the variable before it cannot be `null` or `undefined`. This is useful in situations when the TypeScript compiler isn't smart enough to figure this fact out itself.*
## Understanding a React context

A React **context** is a way to pass data through the component tree without passing it through component props. A context is created and provided at the appropriate place in the component tree for other components lower in the tree to consume.

> *The **spread syntax** expands the properties in the object that is referenced after the dots. It can also be used on arrays to expand the elements in the array.*

## Implementing validations

> *In simple terms, a **type alias** creates a new name for a type. To define a type alias, we use the `type` keyword, followed by the alias name, followed by the type that we want to alias.*
