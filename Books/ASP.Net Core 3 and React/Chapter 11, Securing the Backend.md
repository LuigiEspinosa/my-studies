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

## Quiz

> [!faq]- In the `Configure` method in the `Startup` class, what is wrong with the following?
> 
> ```cs
> public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
> 	// ...
> 	app.UseEndpoints(...);
> 	app.UseAuthentication();
> }
> ```
> 
> The problem is that authentication comes after the endpoints are handled in the request pipeline, which means that the user will always be unauthenticated in controller action methods even if the request has a valid access token. This means that protected resources will never be able to be accessed. `UseAuthentication` should come before `UseEndpoints` in the `Configure` method.

> [!faq]- What attribute can be added to a protected action method to allow unauthenticated users to access it?
> 
> `AllowAnonymous`
> 

> [!info] We are building an app with ASP.NET Core backend and using an identity provider to authenticate users. The default audience has been set to `http://my-app` in the identity provider and we have configured the authentication service as follows in our ASP.NET Core backend:
> 
> ```cs
> services.AddAuthentication(options => {
> 	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
> 	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
> }).AddJwtBearer(options => {
> 	// ...
> 	options.Audience = "https://myapp";
> })
> ```
> 
>> [!faq]- When we try to access protected resources in our ASP.NET Core backend, we receive HTTP status code 401. What is the problem?
>> 
>> The problem is that the ASP.NET Core backend validations that the audience in the JIWT is `https://myapp`, but the identity provider has been configured to set the audience to `http://my-app`. This results in the request being unauthorized.

> [!faq]- A JWT has the following decoded payload data. What date and time does it expire?
> 
> ```json
> {
> 	"nbf": 1559876843,
> 	"auth_time": 1559876843,
> 	"exp": 1559900000,
> 	...
> }
> ```
> 
> The `exp` field gives the expiry date, which is 1559900000 seconds after 1 Jan 1970, which, in turns, is 7 Jun 2019 9:33:20 (GMT).

> [!info] We have a valid access token from an identity provider and are using it to access a protected resource. We have set the following HTTP header in the request:
> 
> `Authorisation: bearer some-access-token`
> 
>> [!faq]- We receive HTTP status code 401 from the request though. What is the problem?
>> 
>> The problem is that the HTTP header name needs to be `Authorization` there is a typo.

> [!faq]- How can we access HTTP request information in a class outside of an API controller?
> 
> The request can be accessed by injecting `IHttpContextAccessor;`
> 
> ```cs
> private readonly IHttpContextAccessor _httpContextAccessor;
> 
> public MyClass(IHttpContextAccessor httpContextAccessor) {
>  _httpContextAccessor = httpContextAccessor;
> }
> 
> public SomeMethod() {
> 	var request = _httpContextAccessor.HttpContext.Request;
> }
> ```
> 
> The `HttpContextAccessor` service must be added in the `ConfigurationServices` method in the `Startup` class as follows
> 
> `services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();`

> [!faq]- In an API controller, how can we access an authenticated user ID?
> 
> We can access the user ID via the `sub` claim in the controller's `User` property as follows:
> 
> `User.FindFirst(ClaimTypes.NameIdentifier).Value`
