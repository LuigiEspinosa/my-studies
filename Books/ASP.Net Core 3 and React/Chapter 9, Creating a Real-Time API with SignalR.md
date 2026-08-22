---
source: books
slug: books/asp-net-core-3-and-react/chapter-9-creating-a-real-time-api-with-signalr
status: done
started: 2025-02-27
finished: 2025-02-27
tags: []
code: []
kind: note
---

# Chapter 9: Creating a Real-Time API with SignalR

## Understanding the benefits of SignalR

SignalR is a feature in ASP.NET Core that we can use to create a real-time API. A real-time API is where data is pushed to connected clients when the data arrives at the server.

Real-time APIs are different from REST APIs. With a REST API, the client needs to make a request to get new data that's available on the server. When there is no updated data, the response data in this type of request isn't needed by the client because it already has a copy of that data. So, this is an inefficient and slow approach to updating the client with new data. SignalR solves this efficiency problem because new data can be pushed from the server to clients.

> _The Web sockets technology allows an open two-way interactive communication session between the user's browser and a server using a TCP socket. A TCP socket is a lower-level and faster mechanism than HTTP. This technology is available in the latest versions of all modern browsers, including IE._

- There is nothing like an HTTP status code in a web socket message. So, how does the client know that a form that has been submitted has invalid data? Or maybe that the user isn't authorized to submit the form? In the web socket world, we'd need to implement something such as an HTTP status code ourselves.
- HTTP has other features such as caching and compression that aren't available as standard for web sockets.
- Web sockets are stateful and there is no standard way to scale them horizontally. A REST API is stateless and therefore can be easily scaled across multiple web servers.

The following are descriptions of some useful methods:

- **`AllExcept`:** This allows us to interact with clients, except for a list of clients we supply by their connection ID.
- **`Client`:** This allows us to interact with a specific client by passing their connection ID.
- **`Clients`:** This allows us to interact with a list of clients by passing a list of their connection IDs.
- **`Group`:** This allows us to interact with a group of clients by passing the group name.
- **`Groups`:** This allows us to interact with a list of groups by passing a list of group names.

## Adding CORS to our backend

> _CORS stands for Cross-Origin Resource Sharing and is a mechanism that uses HTTP headers to tell a browser to let a web application run at certain origins (domains) so that it has permission to access certain resources on a server at a different origin._

## Quiz

> [!TIP]- In a SignalR hub class, what method can we use to push data to a group of connected clients?
>
> `Clients.Group("GroupeName).SendAsync()`

---

> [!TIP]- In a SignalR hub class, what method can we use to push data to all clients except for the client that has made the request?
>
> `Clients.AllExcept(Context.ConnectionId).SendAsync()`

---

> [!TIP]- Why did we need a CORS policy for our React app to be able to interact with out SignalR real-time API?
>
> A CORS policy is required because the frontend and backend were hosted in different domains.

---

> [!TIP]- In our React frontend, why did we check whether the connection was in a connected state before subscribing to the question?
>
> If starting the connection failed, the connection would be in an unconnected state and not able to make the request for the subscription.

---

> [!TIP]- Why did we stop the connection when the user navigates away from the question page?
>
> The user is unsubscribed from question updates when navigating away from the question page and so there is no requirement to interact with the SignalR server anymore. So, we stop the connection to save resources.
