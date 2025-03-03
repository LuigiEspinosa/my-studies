## Terminal Text Editors

### Nano

It is easy to get started with Nano! To create or edit a file using nano, we simply use `nano filename` -- replacing "filename" with the name of the file you wish to edit.

Nano has a few features that are easy to remember & covers the most general things you would want out of a text editor, including:

- Searching for text
- Copying and Pasting  
    
- Jumping to a line number
- Finding out what line number you are on

You can use these features of nano by pressing the "**Ctrl**" key (which is represented as an `^` on Linux)  and a corresponding letter. For example, to exit, we would want to press "**Ctrl**" and "**X**" to exit Nano.

### VIM

VIM is a much more advanced text editor.  Some of VIM's benefits, albeit taking a much longer time to become familiar with, includes:

- Customisable - you can modify the keyboard shortcuts to be of your choosing
- Syntax Highlighting - this is useful if you are writing or maintaining code, making it a popular choice for software developers
- VIM works on all terminals where nano may not be installed
- There are a lot of resources such as [cheatsheets](https://vim.rtorr.com/), tutorials, and the sorts available to you use.

## General Utilities

### Downloading Files

We're going to cover the use of `wget` .  This command allows us to download files from the web via HTTP -- as if you were accessing the file in your browser. We simply need to provide the address of the resource that we wish to download.

### Transferring Files From Your Host - SCP (SSH)

Secure copy, or SCP, is just that -- a means of securely copying files. Unlike the regular cp command, this command allows you to transfer files between two computers using the SSH protocol to provide both authentication and encryption.

Working on a model of SOURCE and DESTINATION, SCP allows you to:

- Copy files & directories from your current system to a remote system
- Copy files & directories from a remote system to your current system

### Serving Files From Your Host - WEB

Ubuntu machines come pre-packaged with python3. Python helpfully provides a lightweight and easy-to-use module called "HTTPServer". This module turns your computer into a quick and easy web server that you can use to serve your own files, where they can then be downloaded by another computing using commands such as `curl` and `wget`. 

Python3's "HTTPServer" will serve the files in the directory where you run the command, but this can be changed by providing options that can be found within the manual pages. Simply, all we need to do is run `python3 -m  http.server` in the terminal to start the module!

Now, let's use `wget` to download the file using the ip address and the name of the file. Remember, because the python3 server is running port 8000, you will need to specify this within your wget command.

One flaw with this module is that you have no way of indexing, so you must know the exact name and location of the file that you wish to use. For this `Updog` is more advanced yet lightweight webserver.

## Processes

Processes are the programs that are running on your machine. They are managed by the kernel, where each process will have an ID associated with it, also known as its [[#^ac349a|PID]] The PID increments for the order In which the process starts. I.e. the 60th process will have a PID of 60.

### Viewing Processes

We can use the friendly `ps` command to provide a list of the running processes as our user's session and some additional information such as its status code, the session that is running it, how much usage time of the [[#^54eab0|CPU]] it is using, and the name of the actual program or command that is being executed

To see the processes run by other users and those that don't run from a session (i.e. system processes), we need to provide **aux** to the `ps` command like so: `ps aux`.

Another very useful command is the top command; top gives you real-time statistics about the processes running on your system instead of a one-time view. These statistics will refresh every 10 seconds, but will also refresh when you use the arrow keys to browse the various rows. Another great command to gain insight into your system is via the `top` command.

### Managing Processes

You can send signals that terminate processes; there are a variety of types of signals that correlate to exactly how "cleanly" the process is dealt with by the kernel. To kill a command, we can use the appropriately named `kill` command and the associated PID that we wish to kill. i.e., to kill PID 1337, we'd use `kill 1337`.

Below are some of the signals that we can send to a process when it is killed:

- SIGTERM - Kill the process, but allow it to do some cleanup tasks beforehand
- SIGKILL - Kill the process - doesn't do any cleanup after the fact
- SIGSTOP - Stop/suspend a process

### How do Processes Start?

Let's start off by talking about namespaces. The Operating System ([[#^70c330|OS]]) uses namespaces to ultimately split up the resources available on the computer to (such as CPU, [[#^6a7498|RAM]] and priority) processes. Think of it as splitting your computer up into slices -- similar to a cake. Processes within that slice will have access to a certain amount of computing power, however, it will be a small portion of what is actually available to every process overall.

Namespaces are great for security as it is a way of isolating processes from another -- only those that are in the same namespace will be able to see each other.

We previously talked about how PID works, and this is where it comes into play. The process with an ID of 0 is a process that is started when the system boots. This process is the system's init on Ubuntu, such as **systemd**, which is used to provide a way of managing a user's processes and sits in between the operating system and the user. 

For example, once a system boots and it initialises, **systemd** is one of the first processes that are started. Any program or piece of software that we want to start will start as what's known as a child process of **systemd**. This means that it is controlled by **systemd**, but will run as its own process (although sharing the resources from **systemd**) to make it easier for us to identify and the likes.

### Getting Processes/Services to Start on Boot

Some applications can be started on the boot of the system that we own. For example, web servers, database servers or file transfer servers. This software is often critical and is often told to start during the boot-up of the system by administrators.

Enter the use of `systemctl` -- this command allows us to interact with the **systemd** process/daemon. Continuing on with our example, systemctl is an easy to use command that takes the following formatting: `systemctl [option] [service]`.

We can do four options with `systemctl`:

- Start
- Stop
- Enable
- Disable

### Background and Foreground in Linux

Processes can run in two states: In the background and in the foreground. For example, commands that you run in your terminal such as "echo" or things of that sort will run in the foreground of your terminal as it is the only command provided that hasn't been told to run in the background.

Here we're running `echo "Hi THM"` , where we expect the output to be returned to us like it is at the start. But after adding the `&` operator to the command, we're instead just given the ID of the echo process rather than the actual output -- as it is running in the background.

This is great for commands such as copying files because it means that we can run the command in the background and continue on with whatever further commands we wish to execute (without having to wait for the file copy to finish first)

We can do the exact same when executing things like scripts -- rather than relying on the & operator, we can use `Ctrl + Z` on our keyboard to background a process. It is also an effective way of "pausing" the execution of a script or command.

With our process backgrounded using either `Ctrl + Z` or the `&` operator, we can use `fg` to bring this back to focus like below, where we can see the `fg` command is being used to bring the background process back into use on the terminal, where the output of the script is now returned to us.
## Managing You System: Automation

Users may want to schedule a certain action or task to take place after the system has booted. Take, for example, running commands, backing up files, or launching your favourite programs on, such as Spotify or Google Chrome.  

We're going to be talking about the `cron` process, but more specifically, how we can interact with it via the use of `crontabs` . Crontab is one of the processes that is started during boot, which is responsible for facilitating and managing cron jobs.

A crontab is simply a special file with formatting that is recognized by the `cron` process to execute each line step-by-step. Crontabs require 6 specific values:

| Value | Description                               |
| ----- | ----------------------------------------- |
| MIN   | What minute to execute at                 |
| HOUR  | What hour to execute at                   |
| DOM   | What day of the month to execute at       |
| MON   | What month of the year to execute at      |
| DOW   | What day of the week to execute at        |
| CMD   | The actual command that will be executed. |
Let's use the example of backing up files. You may wish to backup "cmnatic"'s  "Documents" every 12 hours. We would use the following formatting: 

```bash
0 */12 * * * cp -R /home/cmnatic/Documents /var/backups/
```

An interesting feature of crontabs is that these also support the wildcard or asterisk (`*`). If we do not wish to provide a value for that specific field, i.e. we don't care what month, day, or year it is executed -- only that it is executed every 12 hours, we simply just place an asterisk.

Crontabs can be edited by using `crontab -e`, where you can select an editor (such as Nano) to edit your crontab.

### Maintaining Your System: Package Management

### Packages & Software Repos

When developers wish to submit software to the community, they will submit it to an  "apt" repository. If approved, their programs and tools will be released into the wild. Two of the most redeeming features of Linux shine to light here: User accessibility and the merit of open source tools.

Whilst Operating System vendors will maintain their own repositories, you can also add community repositories to your list! This allows you to extend the capabilities of your OS. Additional repositories can be added by using the `add-apt-repository`command or by listing another provider! For example, some vendors will have a repository that is closer to their geographical location.

### Managing Your Repositories (Adding and Removing)

Normally we use the apt command to install software onto our Ubuntu system. The `apt` command is a part of the package management software also named apt. Apt contains a whole suite of tools that allows us to manage the packages and sources of our software, and to install or remove software at the same time.

One method of adding repositories is to use the `add-apt-repository` command we illustrated above, but we're going to walk through adding and removing a repository manually. Whilst you can install software through the use of package installers such as `dpkg`, the benefits of apt means that whenever we update our system -- the repository that contains the pieces of software that we add also gets checked for updates.

### Maintaining Your System: Logs

These services and logs are a great way in monitoring the health of your system and protecting it. Not only that, but the logs for services such as a web server contain information about every single request - allowing developers or administrators to diagnose performance issues or investigate an intruder's activity.

There are, of course, logs that store information about how the OS is running itself and actions that are performed by users, such as authentication attempts.
## Glossary

- In the context of operating systems, PID stands for Process ID. It is a unique identifier assigned to each running process in a system. PIDs are usually assigned in sequential order as processes are created, but can be recycled once a process has completed and terminated. ^ac349a
- A central processing unit (CPU)—also called a central processor or main processor—is the most important processor in a given computer. Its electronic circuitry executes instructions of a computer program, such as arithmetic, logic, controlling, and input/output (I/O) operations. This role contrasts with that of external components, such as main memory and I/O circuitry, and specialized co-processors such as graphics processing units (GPUs). ^54eab0
- Operating System (OS) is a layer between the hardware and the applications. From the application's perspective, the OS provides an interface to access the different hardware components, such as CPU, RAM, and disk storage. Examples of OS are Android, FreeBSD, Linux, macOS, and Windows. ^70c330
- Random-access memory (RAM; /ræm/) is a form of electronic computer memory that can be read and changed in any order, typically used to store working data and machine code. ^6a7498
- GPG stands for GNU Privacy Guard. It is a free and open-source encryption software that uses public-key cryptography. GPG can be used to encrypt files and messages, and to sign files and messages. Encryption makes it so that only the intended recipient can decrypt the file or message while signing makes it so that the recipient can verify that the file or message was sent by the person it claims to be from.