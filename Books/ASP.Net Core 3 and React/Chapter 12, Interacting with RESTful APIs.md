> *It is important to note that requests that contain HTTP error codes are not handled by the catch method. HTTP errors must be handled in the first then method by looking at the ok or status properties on the response parameter.*

## Quiz

> [!faq]- What is wrong with the following HTTP POST request using the `fetch` function?
> 
> ```ts
> fetch('http://localhost:17525/api/person', {
> 	method: 'post',
> 	headers: {
> 		'Content-Type': 'application/json',
> 	},
> 	body: {
> 		firstName: 'Fred',
> 		surname: 'Smith'
> 	}
> })
> ```
> 
> The problem is that the `fetch` function expects the body to be in `string` format. The corrected call is a follows:
> 
> `body: JSON.strigify({ ... })`

> [!faq]- What is wrong with the following request using the `fetch` function?
> 
> ```ts
> fetch('http://localhost:17525/api/person/1')
> 	.then(res => {
> 		console.log('firstName', res.body.firstName);
> 	})
> ```
> 
> The problem is that the response body cannot be accessed directly in the response like this. Instead, the responses's `json` asynchronous method should be used:
> 
> ```ts
> fetch('http://localhost:17525/api/person/1')
> 	.then(res => res.json())
> 	.then(body => {
> 		console.log('firstName', body.firstName);
> 	});
> ```

> [!faq]- What is wrong with the following request using the `fetch` function?
> 
> ```ts
> fetch('http://localhost:17525/api/person/21312')
> 	.then(res => res.json())
> 	.catch(res => {
> 		if (res.status === 404) {
> 			console.log('person not found')
> 		}
> 	});
> ```
> 
> The problem is that the `catch` method is for network erros and not HTTP request errors. HTTP request errors can be dealt with in the `then` method:
> 
> ```ts
> ...
> 	.then(res => {
> 		if (res.status === 404) {
> 			console.log('person not found');
> 		} else {
> 			return res.json();
> 		}
> 	});
> ```

> [!faq]- We have an endpoint for deleting people that only administrators have access to use. We have the users' access token in a variable called `jwt`. What is wrong with the following request?
> 
> ```ts
> fetch('http://localhost:17525/api/person/1', {
> 	method: 'delete',
> 	headers: {
> 		'Content-Type': 'application/json',
> 		'authorization': jwt
> 	}
> });
> ```
> 
> The problem is that the world `bearer` followed by a space is missing from the `authorization` HTTP header. The corrected call is as follows:
> 
> `'authorization': 'bearer ${jwt}'`

> [!faq]- In this chapter, we implemented an `AuthorizedPage` component that we could wrap around a page component so that it is only rendered for authenticated users. We could implement a similar component to wrap around components within a page so that they are only rendered for authenticated users. Have a go at implementing this.
> 
> ```tsx
> import React, { FC, Fragment } from 'react';
> import { useAuth } from './Auth';
> 
> export const AuthorizedElement: FC = ({ children }) => {
> 	const auth = useAuth();
> 	if (auth.isAuthenticated) {
> 		return \<Fragment>{children}\</Fragment>;
> 	} else {
> 		return null;
> 	}
> };
> ```
> 
> The component would be consumed as follows
> 
> ```tsx
> \<AuthorizedElement>
> 	\<PrimaryButton ...>
> 		Ask a Question
> 	\</PrimaryButton>
> \</AuthorizedElement>
> ```

