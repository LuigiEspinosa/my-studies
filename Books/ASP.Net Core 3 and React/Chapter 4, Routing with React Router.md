---
source: books
slug: books/asp-net-core-3-and-react/chapter-4-routing-with-react-router
status: done
started: 2025-02-27
finished: 2025-02-27
tags: []
code: []
kind: note
---

# Chapter 4: Routing with React Router

> _Unlike other attributes, you don't need to specify the value of a Boolean attribute on an HTML element. Its presence on an element automatically means the value is `true` and its absence means the value is `false`._

---

> _When using triple equals (\=\=\=), we are checking for strict equality. This means both the type and the value we are comparing have to be the same. When using a double equals (\=\=), the type isn't checked. Generally, it is good practice to use the triple equals (\=\=\=) to do a strict equality check._

---

> _In React, a component can only return a single element. This rule applies to conditional rendering logic where there can be only a single parent React element being rendered. React **Fragment** allows us to work around this rule because we can nest multiple elements within it without creating a DOM node._

## Navigating programmatically

> _The `history` object in React Router keeps track of the locations that have been visited in the app and contains quite a few different properties and methods. The `push` method pushes a new entry into the history stack and performs navigation to the location that's passed in as a parameter._

## Lazy loading routes

> _The `lazy` function in React lets us render a dynamic import as a regular component. A dynamic import returns a promise for the requested module that is resolved after it has been fetched, instantiated, and evaluated._

## Quiz

> [!NOTE] We have the following routes defined:
>
> ```tsx
> \<BrowseRouter>
>  \<Route path="/" component={HomePage} />
>  \<Route path="/search" component={SearchPage} />
> \</BrowserRouter>
> ```
>
> > [!TIP] - What component(s) will be rendered when the `/` location is entered in the browser?
> >
> > `HomePage`
>
> > [!TIP] - What about when the `/search` locations is entered in the browser?
> >
> > Both `HomePage` and `SearchPage`

---

> [!NOTE] We have the following routes defined:
>
> ```tsx
> \<BrowseRouter>
>  \<Switch>
>   \<Route path="/" component={HomePage} />
>   \<Route path="/search" component={SearchPage} />
>  \</Switch>
> \</BrowserRouter>
> ```
>
> > [!TIP] - What component(s) will be rendered when the `/` locations is entered into the browser?
> >
> > `HomePage`
>
> > [!TIP] - What about when the `/search` location is entered into the browser?
> >
> > `HomePage`

---

> [!NOTE] We have the following routes defined:
>
> ```tsx
> \<BrowseRouter>
>  \<Switch>
>   \<Route path="/search" component={SearchPage} />
>   \<Route path="/" component={HomePage} />
>  \</Switch>
> \</BrowserRouter>
> ```
>
> > [!TIP] - What component(s) will be rendered when the `/` locations is entered into the browser?
> >
> > `HomePage`
>
> > [!TIP] - What about when the `/search` location is entered into the browser?
> >
> > `SearchPage`

---

> [!TIP] - In our Q and A app, we want a `/login` path to navigate to the sign-in page as well as the `/signin` path. How can we implement this?
>
> ```tsx
> \<Redirect from="/login" to="/signin" />
> ```

---

> [!NOTE] We have the following routes defined:
>
> ```tsx
> \<BrowseRouter>
>  \<Switch>
>   \<Route path="/search" component={SearchPage} />
>   \<Route path="/" component={HomePage} />
>   \<Route component={NotFoundPage} />
>  \</Switch>
> \</BrowserRouter>
> ```
>
> > [!TIP] - What component(s) will be rendered when the `/signin` locations is entered into the browser?
> >
> > `HomePage`

---

> [!NOTE] We have the following routes defined:
>
> ```tsx
> \<BrowseRouter>
>  \<Switch>
>   \<Route path="/" component={HomePage} />
>   \<Route path="/search" component={SearchPage} />
>   \<Route component={NotFoundPage} />
>  \</Switch>
> \</BrowserRouter>
> ```
>
> With the preceding implementation, when a user navigates to the `/search` path or an invalid path such as `/unknown`, the `HomePage` component is rendered.
>
> > [!TIP] - How can we change the code to render `HomePage` when only the `/` path is entered in the browser?
> >
> > `<Route exact path="/" component={HomePage} />`

---

> [!NOTE] We have the following route defined:
>
> `<Route path="/users/:userId" component={UserPage} />`
>
> > [!TIP] - How can we reference the `userId` route parameter in the `UserPage` component?
> >
> > if we make the props type for `User Page RouteComponentProps<{ userId: string }>`, then `props.match.params.userId` will hold the `userId` route paramter.
