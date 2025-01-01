## What is SSH & how Does it Work?

Secure Shell (SSH) refers to a cryptographic network protocol used in secure communication between devices. SSH encrypts data using cryptographic algorithms, such as Advanced Encryption System (AES) and is often used when logging in remotely to a computer or server.

Secure Shell or SSH simply is a protocol between devices in an encrypted form. Using cryptography, any input we send in a human-readable format is encrypted for travelling over a network -- where it is then un-encrypted once it reaches the remote machine, such as in the diagram below.

![[SSH.png]]

- SSH allows us to remotely execute commands on another device remotely.
- Any data sent between the devices is encrypted when it is sent over a network such as the Internet

## Flags and Switches

A majority of commands allow for arguments to be provided. These arguments are identified by a hyphen and a certain keyword known as flags or switches.

When using a command, unless otherwise specified, it will perform its default behaviour. For example, `ls` lists the contents of the working directory. However, hidden files are not shown. We can use flags and switches to extend the behavior of commands.

However, after using the `-a` argument (short for `--all`), we now suddenly have an output with a few more files and folders such as ".hiddenfolder". Files and folders with "**.**" are hidden files.

Commands that accept these will also have a `--help` option. This option will list the possible options that the command accepts, provide a brief description and example of how to use it.

The manual pages are a great source of information for both system commands and applications available on both a Linux machine, which is accessible on the machine itself and [online](https://linux.die.net/man/).

To access this documentation, we can use the `man` command and then provide the command we want to read the documentation for. Using our ls example, we would use `man ls` to view the manual pages for `ls` like so.

## Filesystem Interaction

| Command | Full Name      | Purpose                      |
| ------- | -------------- | ---------------------------- |
| touch   | touch          | Create file                  |
| mkdir   | make directory | Create a folder              |
| cp      | copy           | Copy a file or folder        |
| mv      | move           | Move a file or folder        |
| rm      | remove         | Remove a file or folder      |
| file    | file           | Determine the type of a file |

## Permissions

When using the `-l` switch, we can see ten columns such as in the screenshot below. However, we're only interested in the first three columns:

- Read
- Write
- Execute

### The difference between users & groups

The great thing about Linux is that permissions can be so granular, that whilst a user technically owns a file, if the permissions have been set, then a group of users can also have either the same or a different set of permissions to the exact same file without affecting the file owner itself.

Let's put this into a real-world context; the system user that runs a web server must have permissions to read and write files for an effective web application. However, companies such as web hosting companies will have to want to allow their customers to upload their own files for their website without being the webserver system user -- compromising the security of every other customer.

### Switching between users

Switching between users on a Linux install is easy work thanks to the `su` command. Unless you are the root user (or using root permissions through sudo), then you are required to know two things to facilitate this transition of user accounts:

- The user we wish to switch to
- The user's password

## Common Directories

- **/etc** - This root directory is one of the most important root directories on your system. The etc folder (short for etcetera) is a commonplace location to store system files that are used by your operating system.

- **/var** - The "/var" directory, with "var" being short for variable data,  is one of the main root folders found on a Linux install. This folder stores data that is frequently accessed or written by services or applications running on the system. For example, log files from running services and applications are written here (**/var/log**), or other data that is not necessarily associated with a specific user (i.e., databases and the like).

- **/root** - Unlike the **/home** directory, the **/root** folder is actually the home for the "root" system user. There isn't anything more to this folder other than just understanding that this is the home directory for the "root" user. But, it is worth a mention as the logical presumption is that this user would have their data in a directory such as "**/home/root**" by default.

- **/tmp** - This is a unique root directory found on a Linux install. Short for "temporary", the /tmp directory is volatile and is used to store data that is only needed to be accessed once or twice. Similar to the memory on your computer, once the computer is restarted, the contents of this folder are cleared out.



