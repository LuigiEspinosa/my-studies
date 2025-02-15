## Understanding OIDC

Authentication verifies that the user is who they say they are. In our app, the user will enter their email and password to prove who they are. Authorization decides whether a user has permission to access a resource. In our app, some of the REST API endpoints, such as posting a question, will eventually be protected by authorization checks.

OIDC is an industry-standard way of handling both authentication and authorization as well as other user-related operations. This works well for a wide variety of architectures including **single-page applications (SPAs)** where there is a JavaScript client and a server-side REST API that need to be secured.

1. The client makes an authorization request to an identity provider because it wants to get access to a protected resource in the REST API.
2. The client is redirected to the identity provider so that the user can enter their credentials to prove who they are.
3. The identity provider then generates a code and redirects back to the client with the code.
4. The client then makes a web API request containing the generated code to get an access code. The identity provider validates the code and responds with an access token.
5. The client can then access protected resources in the REST API by including the access token in the requests.

Notice that our app never handles user credentials. When user authentication is required, the user will be redirected to the identity provider to carry out this process. Our app only ever deals with a secure token, which is referred to as an **access token**, which is a long encoded string. This token is in **JSON Web Token (JWT)** format, which again is industry standard.

There are three parts to a JWT separated by dots and they appear as different colors in jwt.io:

- HEADER
- PAYLOAD
- SIGNATURE

The header usually contains the type of the token in a `typ` field and the signing algorithm being used in an `alg` field. So, the preceding token is a JWT that uses an RSA signature with the SHA-256 asymmetric algorithm. There also is a `kid` field in the header, which is an opaque identifier that can be used to identify the key that was used to sign the JWT.

- `iss`: This is the identity provider that issued the token.
- `sub`: This is short for `subject` and is the user's identifier.
- `aud`: This is the intended audience.
- `iat`: This is when the JWT was issued. This is in Unix epoch time format, which is the seconds that have passed since January 1, 1970.
- `exp`: This is when the token expires and again is in Unix epoch time format.
- `azp`: This is the party to which the token was issued, which is a unique identifier for the client using the JWT.
- `scope`: This is what the client can get access to.
- The `openid` scope allows the client to verify a user's identity.

OIDC deals with securely storing passwords, authenticating users, generating access tokens, and much more. Being able to leverage an industry-standard technology such as OIDC not only saves us lots of time but also gives us the peace of mind that the implementation is very secure and will receive updates as attackers get smarter. 

> *A claim is information about a user from a trusted source. A claim represents what the subject is, not what the subject can do. The ASP.NET Core authentication middleware automatically puts `userId` in a name identifier claim for us.*
