## System Configuration

The **System Configuration** utility (`MSConfig`) is for advanced troubleshooting, and its main purpose is to help diagnose startup issues. 

Reference the following document [here](https://docs.microsoft.com/en-us/troubleshoot/windows-client/performance/system-configuration-utility-troubleshoot-configuration-errors) for more information on the System Configuration utility.

The utility has five tabs across the top. Below are the names for each tab. We will briefly cover each tab in this task. 

1. In the **General** tab, we can select what devices and services for Windows to load upon boot. The options are: **Normal**, **Diagnostic**, or **Selective**.
2. In the **Boot** tab, we can define various boot options for the Operating System.
3. The **Services** tab lists all services configured for the system regardless of their state (running or stopped). A service is a special type of application that runs in the background.
4. In the **Startup** tab, you manage startup items, we can also use the Startup section of Task Manager (`taskmgr`).
5. There is a list of various utilities (tools) in the **Tools** tab that we can run to configure the operating system further. There is a brief description of each tool to provide some insight into what the tool is for. To run a tool, we can use the command to launch the tool via the run prompt, command prompt, or by clicking the `Launch` button.

## Computer Management

The Computer Management (`compmgmt`) utility has three primary sections: System Tools, Storage, and Services and Applications.

### Task Scheduler

Per Microsoft, with **Task Scheduler**, we can create and manage common tasks that our computer will carry out automatically at the times we specify.

A task can run an application, a script, etc., and tasks can be configured to run at any point. A task can run at log in or at log off. Tasks can also be configured to run on a specific schedule, for example, every five mins.

### Event Viewer

Event Viewer allows us to view events that have occurred on the computer. These records of events can be seen as an audit trail that can be used to understand the activity of the computer system. This information is often used to diagnose problems and investigate actions executed on the system.

Event Viewer has three panes.

1. The pane on the left provides a hierarchical tree listing of the event log providers. (as shown in the image above)
2. The pane in the middle will display a general overview and summary of the events specific to a selected provider.
3. The pane on the right is the actions pane.

There are five types of events that can be logged. Below is a table from [docs.microsoft.com](https://docs.microsoft.com/en-us/windows/win32/eventlog/event-types) providing a brief description for each.

The standard logs are visible under Windows Logs. Below is a table from [docs.microsoft.com](https://docs.microsoft.com/en-us/windows/win32/eventlog/eventlog-key) providing a brief description for each.

### Shared Folders

**Shared Folders** is where you will see a complete list of shares and folders shared that others can connect to.

In the above image, under Shares, are the default share of Windows, C$, and default remote administration shares created by Windows, such as ADMIN$. 

As with any object in Windows, you can right-click on a folder to view its properties, such as Permissions (who can access the shared resource). 

Under **Sessions**, you will see a list of users who are currently connected to the shares.

### Performance

In **Performance**, you'll see a utility called **Performance Monitor** (`perfmon`).

Perfmon is used to view performance data either in real-time or from a log file. This utility is useful for troubleshooting performance issues on a computer system, whether local or remote.

### Device Manager

**Device Manager** allows us to view and configure the hardware, such as disabling any hardware attached to the computer.

### Storage

Under Storage is **Windows Server Backup** and **Disk Management**. We'll only look at Disk Management in this room.

Disk Management is a system utility in Windows that enables you to perform advanced storage tasks.  Some tasks are:

- Set up a new drive
- Extend a partition
- Shrink a partition
- Assign or change a drive letter (ex. E:)

### Services and Applications

Recall from the previous task; a service is a special type of application that runs in the background. Here you can do more than enable and disable a service, such as view the Properties for the service.

[[#^d0d948|WMI]] Control configures and controls the **Windows Management Instrumentation** (WMI) service.

Per Wikipedia, "_WMI allows scripting languages (such as VBScript or Windows PowerShell) to manage Microsoft Windows personal computers and servers, both locally and remotely. Microsoft also provides a command-line interface to WMI called Windows Management Instrumentation Command-line (WMIC)._"

**Note**: The WMIC tool is deprecated in Windows 10, version 21H1. Windows PowerShell supersedes this tool for WMI.

## System Information

What is the **System Information** (`msinfo32`) tool?

Per Microsoft, "_Windows includes a tool called Microsoft System Information (Msinfo32.exe).  This tool gathers information about your computer and displays a comprehensive view of your hardware, system components, and software environment, which you can use to diagnose computer issues._"

The  information in **System Summary** is divided into three sections:

- **Hardware Resources**
- **Components**
- **Software Environment**

System Summary will display general technical specifications for the computer, such as processor brand and model.

The information displayed in **Hardware Resources** is not for the average computer user. If you want to learn more about this section, refer to the official Microsoft [page](https://docs.microsoft.com/en-us/windows-hardware/drivers/kernel/hardware-resources#:~:text=Hardware%20resources%20are%20the%20assignable,of%20bus%2Drelative%20memory%20addresses.).

Under **Components**, you can see specific information about the hardware devices installed on the computer. Some sections don't show any information, but some sections do, such as **Display** and **Input**.

In the **Software Environmen**t section, you can see information about software baked into the operating system and software you have installed. Other details are visible in this section as well, such as the **Environment Variables** and **Network Connections**.

Per [Microsoft](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.1), "_Environment variables store information about the operating system environment. This information includes details such as the operating system path, the number of processors used by the operating system, and the location of temporary folders._

_The environment variables store data that is used by the operating system and other programs. For example, the WINDIR environment variable contains the location of the Windows installation directory. Programs can query the value of this variable to determine where Windows operating system files are located_".

Click on `Environment Variables` to see the assigned values.

Another method to view environment variables is `Control Panel > System and Security > System > Advanced system settings > Environment Variables` **OR** `Settings > System > About > system info > Advanced system settings > Environment Variables`.

## Resource Monitor

What is **Resource Monitor** (`resmon`)?

Per Microsoft, "_Resource Monitor displays per-process and aggregate CPU, memory, disk, and network usage information, in addition to providing details about which processes are using individual file handles and modules. Advanced filtering allows users to isolate the data related to one or more processes (either applications or services), start, stop, pause, and resume services, and close unresponsive applications from the user interface. It also includes a process analysis feature that can help identify deadlocked processes and file locking conflicts so that the user can attempt to resolve the conflict instead of closing an application and potentially losing data._"

As some of the other tools mentioned in this room, this utility is geared primarily to advanced users who need to perform advanced troubleshooting on the computer system.  

In the Overview tab, Resmon has four sections:

- **CPU**
- **Disk**
- **Network**
- **Memory**

## Command Prompt

The command prompt (`cmd`), In early operating systems, the command line was the sole way to interact with the operating system.

When the GUI (graphical user interface) was introduced, it allowed users to perform complex tasks with a few clicks of a button instead of entering commands in the command prompt. 

Even though the GUI is the primary way to interact with the operating system, a computer user can still interact via the command prompt.

- The command **`hostname`** will output the computer name.
- The command **`whoami`** will output the name of the logged-in user.
- A command used often is `ipconfig`. This command will show the network address settings for the computer.
- `netstat`. Per the help manual, this command will display protocol statistics and current [[#^4e1419|TCP]]/IP network connections.
- The `net` command is primarily used to manage network resources. This command supports sub-commands.

Each command will have a help manual to explain the expected syntax to execute the command properly, along with any additional parameters that can be added to the command to expand its execution.

A  command to retrieve the help manual for a command is `/?`.

## Registry Editor

The **Windows Registry** (per Microsoft) is a central hierarchical database used to store information necessary to configure the system for one or more users, applications, and hardware devices.

The registry contains information that Windows continually references during operation, such as:

- Profiles for each user
- Applications installed on the computer and the types of documents that each can create
- Property sheet settings for folders and application icons
- What hardware exists on the system
- The ports that are being used.

The registry is for advanced computer users. Making changes to the registry can affect normal computer operations. 

There are various ways to view/edit the registry. One way is to use the **Registry Editor** (`regedit`).

Refer to the following Microsoft documentation [here](https://docs.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users) to learn more about the Windows Registry.

## Glossary

- Windows Management Instrumentation (WMI) is the infrastructure for management data and operations on Windows-based operating systems. It is used to automate administrative tasks on remote computers and supply management data to other parts of the operating system and products. ^d0d948
- Transmission Control Protocol (TCP) is a connection-oriented protocol requiring a TCP three-way-handshake to establish a connection. TCP provides reliable data transfer, flow control and congestion control. Higher-level protocols such as HTTP, POP3, IMAP and SMTP use TCP ^4e1419