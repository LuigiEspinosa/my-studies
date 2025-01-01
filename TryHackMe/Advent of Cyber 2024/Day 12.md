## If I can’t steal their money, I’ll steal their joy!

[TryHackMe - Advent of Cyber 2024 - Day 12 Walkthrough](https://www.youtube.com/watch?v=0FGAm4QrdvM)

In its simplest form, a web timing attack means we glean information from a web application by reviewing how long it takes to process our request. By making tiny changes in what we send or how we send it and observing the response time, we can access information we are not authorized to have.

Race conditions are a subset of web timing attacks that are even more special. With a race condition attack, we are no longer simply looking to gain access to information but can cause the web application to perform unintended actions on our behalf.  

Web timing vulnerabilities can be incredibly subtle. Based on the following [research](https://portswigger.net/research/listen-to-the-whispers-web-timing-attacks-that-actually-work), response time differences ranging from 1300ms to 5ns have been used to stage attacks. Because of their subtle nature, they can also be hard to detect and often require a wide range of testing techniques. However, with the increase in adoption of HTTP/2, they have become a bit easier to find and exploit.

HTTP/2 was created as a major update for HTTP, the protocol used for web applications. While most web applications still use HTTP/1.1, there has been a steady increase in the adoption of HTTP/2, as it is faster, better for web performance, and has several features that elevate the limitations of HTTP/1.1. However, if implemented incorrectly, some of these new features can be exploited by threat actors using new techniques.

A key difference in web timing attacks between HTTP/1.1 and HTTP/2 is that HTTP/2 supports a feature called single-packet multi-requests. Network latency, the amount of time it takes for the request to reach the web server, made it difficult to identify web timing issues. It was hard to know whether the time difference was due to a web timing vulnerability or simply a network latency difference. However, with single-packet multi-requests, we can stack multiple requests in the same TCP packet, eliminating network latency from the equation, meaning time differences can be attributed to different processing times for the requests.

Timing attacks can often be divided into two main categories:

- **Information Disclosures:** Leveraging the differences in response delays, a threat actor can uncover information they should not have access to. For example, timing differences can be used to enumerate the usernames of an application, making it easier to stage a password-guessing attack and gain access to accounts.

- **Race Conditions:** Race conditions are similar to business logic flaws in that a threat actor can cause the application to perform unintended actions. However, the issue's root cause is how the web application processes requests, making it possible to cause the race condition. For example, if we send the same coupon request several times simultaneously, it might be possible to apply it more than once.
