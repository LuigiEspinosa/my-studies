## Understanding the benefits of SignalR

SignalR is a feature in ASP.NET Core that we can use to create a real-time API. A real-time API is where data is pushed to connected clients when the data arrives at the server.

Real-time APIs are different from REST APIs. With a REST API, the client needs to make a request to get new data that's available on the server. When there is no updated data, the response data in this type of request isn't needed by the client because it already has a copy of that data. So, this is an inefficient and slow approach to updating the client with new data. SignalR solves this efficiency problem because new data can be pushed from the server to clients.

> *The Web sockets technology allows an open two-way interactive communication session between the user's browser and a server using a TCP socket. A TCP socket is a lower-level and faster mechanism than HTTP. This technology is available in the latest versions of all modern browsers, including IE.*

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

> *CORS stands for Cross-Origin Resource Sharing and is a mechanism that uses HTTP headers to tell a browser to let a web application run at certain origins (domains) so that it has permission to access certain resources on a server at a different origin.*
