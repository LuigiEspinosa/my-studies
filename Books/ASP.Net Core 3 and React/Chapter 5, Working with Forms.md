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

## Quiz

> [!faq]- In our generic `Form` implementation, why did we make the `onSubmit` function prop asynchronous?
> 
> The `onSubmit` function prop is likely to call a web service asynchronously and so needs to be asynchronous.

> [!faq]- When we implemented the generic `Form` and `Field` components, what was the purpose of the `touched` state?
> 
> The `touched` state allowed us to prevent validation checks when the user first enters the field, which can be annoying for the user. Generally, it is better to do the validation checks when the field loses focus and if the user comes back to the field an changes it.
 
> [!info] When we implment a form field like the following:
> 
> ```tsx
> \<label htmlFor={name}>{label}\</label>
> \<input
> 	type="text"
> 	id={name}
> 	value={values[name] === undefined ?'' : values[name]}
> 	onChange={handleChange}
> 	onBlur={handleBlur}
> />
> ```
> 
>> [!faq]- Why do we tie `label` to `input`using the `htmlFor` attribute?
>> 
>> This makes the field accessible, which means a screen reader will read `label` when `input` gains focus. Clicking on `lable` will also set focus to `input`.

> [!faq]- Why did we use the React context in our generic `Form` and `Field` implementations?
> 
> We used the React context to allow `Field` to access state such as the field value from `Form`. We couldn't pass the state via props because `Form` doesn't directly reference `Field`- it indirectly references it via the `children` prop.

> [!faq]- Extend our generic `Field` component to include a number editor, using the native number `input`.
> 
> Here we extend the `type` prop in `Form`:
> 
> ```tsx
> interface Props {
> 	name: string;
> 	label?: string;
> 	type?: "Text" | "TextArea" | "Password" | "Number";
> }
> ```
> 
> In `Form`, JSX allows `FieldInput` to be rendered if `type` is Number:
> 
> ```tsx
> {(type === "Text" || type === "Password" || type === "Number") && (
> 	\<FieldInput
> 		type={type.toLowerCase()}
> 		id={name}
> 		value={values[name]}
> 		onChange={handleChange}
> 		onBlur={handleBlur}
> 	/>
> )}
> ```

> [!faq]- Implement a validator in `Form.tsx` that will check that field value is between two numbers:
> 
> ```tsx
> export const between: Validator = (
> 	value: any,
> 	bounds: { lower: number; upper: number }
> ): string =>
> 	value && (value < bounds.lower || value > bounds.upper)
> 		? `This must be between ${bounds.lower} and ${bounds.upper}`
> 		: "";
> ```
