## It came without buffering! It came without lag!

[Advent of Cyber Day 13: Exploring WebSocket Vulnerabilities with InsiderPhD](https://www.youtube.com/watch?v=ozgRXn44FF0)

WebSockets let your browser and the server keep a constant line of communication open. Unlike the old-school method of asking for something, getting a response, and then hanging up, WebSockets are like keeping the phone line open so you can chat whenever you need to. Once that connection is set up, the client and server can talk back and forth without all the extra requests.

WebSockets are great for live chat apps, real-time games, or any live data feed where you want constant updates. After a quick handshake to get things started, both sides can send messages whenever. This means less overhead and faster communication when you need data flowing in real-time.

When you use regular HTTP, your browser sends a request to the server, and the server responds, then closes the connection. If you need new data, you have to make another request. Think of it like knocking on someone's door every time you want something—they'll answer, but it can get tiring if you need updates constantly.

Take a chat app as an example. With HTTP, your browser would keep asking, "Any new messages?" every few seconds. This method, known as polling, works but isn’t efficient. Both the browser and the server end up doing a lot of unnecessary work just to stay updated.

WebSockets handle things differently. Once the connection is established, it remains open, allowing the server to push updates to you whenever there’s something new. It’s more like leaving the door open so updates can come in immediately without the constant back-and-forth. This approach is faster and uses fewer resources.

### WebSockets Vulnerabilities

- **Weak Authentication and Authorisation:** Unlike regular HTTP, WebSockets don't have built-in ways to handle user authentication or session validation. If you don't set these controls up properly, attackers could slip in and get access to sensitive data or mess with the connection.
- **Message Tampering:** WebSockets let data flow back and forth constantly, which means attackers could intercept and change messages if encryption isn't used. This could allow them to inject harmful commands, perform actions they shouldn't, or mess with the sent data.
- **Cross-Site WebSocket Hijacking (CSWSH):** This happens when an attacker tricks a user's browser into opening a WebSocket connection to another site. If successful, the attacker might be able to hijack that connection or access data meant for the legitimate server.
- **Denial of Service (DoS):** Because WebSocket connections stay open, they can be targeted by DoS attacks. An attacker could flood the server with a ton of messages, potentially slowing it down or crashing it altogether.

With WebSockect Message Manipulation, a hacker could intercept and tweak these WebSocket messages as they're being sent. Let's say the app is sending sensitive info, like transaction details or user commands—an attacker could change those messages to make the app behave differently. They could bypass security checks, send unauthorised requests, or alter key data like usernames, payment amounts, or access levels.

For example, imagine a web app using WebSockets to handle money transfers between accounts. If an attacker gets hold of the message before it hits the server, they could change the amount being transferred or even send the money to a different account. Since WebSocket connections happen in real-time, these changes would take effect instantly without the user or server noticing immediately.

This kind of manipulation can also lead to more significant problems. Hackers could inject harmful code or try to get higher-level access. For instance, they might change a message to give themselves admin rights or insert malicious commands to take control of the server.

- **Doing Things Without Permission:** If someone can tamper with WebSocket messages, they could impersonate another user and carry out unauthorised actions such as making purchases, transferring funds, or changing account settings. For example, if a WebSocket manages payment transactions, an attacker could manipulate the transaction amount or reroute the payment to their own account.
- **Gaining Extra Privileges:** Attackers could also manipulate messages to make the system think they have more privileges than they actually do. This could let them access admin controls, change user data, view sensitive info, or mess with system settings.
- **Messing Up Data:** One of the significant risks is data corruption. If someone is changing the messages, they could feed bad data into the system. This could mess with user accounts, transactions, or anything else the app handles. They could change things in real-time and disrupt everyone's work in circumstances such as a shared document or tool.
- **Crashing the System:** An attacker could also spam the server with bad requests, causing it to slow down or crash. If this happens enough, the system could go offline, causing serious downtime for users and businesses.

