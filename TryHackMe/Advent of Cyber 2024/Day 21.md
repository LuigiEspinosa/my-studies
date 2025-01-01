## HELP ME...I'm REVERSE ENGINEERING!

[Getting Started With Reverse Engineering | TryHackMe Advent Of Cyber - Day 21 Walkthrough](https://www.youtube.com/watch?v=K-oowwtK_8Q)

Reverse Engineering (RE) is the process of breaking something down to understand its function. In cyber security, reverse engineering is used to analyse how applications (binaries) function. This can be used to determine whether or not the application is malicious or if there are any security bugs present.

﻿In computing, binaries are files compiled from source code. For example, you run a binary when launching an executable file on your computer. At one point in time, this application would've been programmed in a programming language such as C#. It is then compiled, and the compiler translates the code into machine instructions.

Binaries have a specific structure depending on the operating system they are designed to run. For example, Windows binaries follow the Portable Executable (PE) structure, whereas on Linux, binaries follow the Executable and Linkable Format (ELF). This is why, for example, you cannot run a **.exe** file on MacOS. With that said, all binaries will contain at least:

- **A code section:** This section contains the instructions that the CPU will execute
- **A data section:** This section contains information such as variables, resources (images, other data), etc
- **Import/Export tables:** These tables reference additional libraries used (imported) or exported by the binary. Binaries often rely on libraries to perform functions. For example, interacting with the Windows API to manipulate files

When reverse engineering binaries, you will employ two primary techniques.

Disassembling a binary shows the low-level machine instructions the binary will perform (you may know this as assembly). Because the output is translated machine instructions, you can see a detailed view of how the binary will interact with the system at what stage. Tools such as IDA, Ghidra, and GDB can do this.

Decompiling, however, converts the binary into its high-level code, such as C++, C#, etc., making it easier to read. However, this translation can often lose information such as variable names. This method of reverse engineering a binary is useful if you want to get a high-level understanding of the application's flow.

| **Comparison**      | **Disassembly**                                                                                   | **Decompiling**                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Readability**     | Requires knowing assembly and low-level knowledge of computing concepts.                          | Requires familiarity with programming and logic                                                                                                                           |
| **Level of output** | The translated output is the exact instructions that the machine will perform.                    | The translated output is often a "best guess". The output may not be accurate, and useful information, such as variables, function names, etc, will likely be lost.       |
| **Difficulty**      | The difficulty can be considered higher as the machine instructions are translated into assembly. | The machine instructions are translated into a high-level language, which makes them easier to understand if you are familiar with the language the binary is written in. |
| **Usefulness**      | The entire behaviour of the binary can be studied given enough time.                              | Decompiling is a quick way to understand some of the logic of the binary.                                                                                                 |
1. **Stage 1 - Dropper:** This binary is usually a lightweight, basic binary responsible for actions such as enumerating the operating system to see if the payload will work. Once certain conditions are verified, the binary will download the second - much more malicious - binary from the attacker's infrastructure.
2. **Stage 2 - Payload:** This binary is the "meat and bones" of the attack. For example, in the event of ransomware, this payload will encrypt and exfiltrate the data.

Sophisticated attackers may further split actions of the attack chain (e.g., lateral movement) into additional binaries. Using multiple stages helps evade detection and makes the analysis process more difficult.

For example, a small, more "harmless" initial binary is likelier to evade detection via email filtering than a fully-fledged binary that performs malicious actions such as encryption. Additionally, splitting these functions into multiple stages gives the attacker much more control (i.e. only downloading specific stages once conditions such as time have been met).
