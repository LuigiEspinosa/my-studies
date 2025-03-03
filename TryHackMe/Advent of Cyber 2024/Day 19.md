# I merely noticed that you’re improperly stored, my dear secret!

[Advent Of Cyber Day 19: Game Hacking](https://www.youtube.com/watch?v=W6QxdRBL6Xk)

The **executable** file of an application is generally understood as a standalone binary file containing the compiled code we want to run. While some applications contain all the code they need to run in their executables, many applications usually rely on external code in library files with the "so" extension.

Library files are collections of functions that many applications can reuse. Unlike applications, they can't be directly executed as they serve no purpose by themselves. For a library function to be run, an executable will need to call it. The main idea behind libraries is to pack commonly used functions so developers don't need to reimplement them for every new application they develop.

Frida is a powerful instrumentation tool that allows us to analyze, modify, and interact with running applications. Frida creates a thread in the target process; that thread will execute some bootstrap code that allows the interaction. This interaction, known as the agent, permits the injection of JavaScript code, controlling the application's behavior in real-time. One of the most crucial functionalities of Frida is the Interceptor. This functionality lets us alter internal functions' input or output or observe their behavior.
