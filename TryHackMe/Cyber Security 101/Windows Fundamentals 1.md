The Windows operating system has a long history dating back to 1985, and currently, it is the dominant operating system in both home use and corporate networks. Because of this, Windows has always been targeted by hackers & malware writers.

Windows XP was a popular version of Windows and had a long-running. Microsoft announced Windows Vista, which was a complete overhaul of the Windows operating system. There were many issues with Windows Vista. It wasn't received well by Windows users, and it was quickly phased out.

When Microsoft announced the end-of-life date for Windows XP, many customers panicked. Corporations, hospitals, etc., scrambled and tested the next viable Windows version, which was Windows 7, against many other hardware and devices. Vendors had to work against the clock to ensure their products worked with Windows 7 for their customers. If they couldn't, their customers had to break their agreement and find another vendor that upgraded their products to work with Windows 7. It was a nightmare for many, and Microsoft took note of it.

Windows 7, as quickly as it was released soon after, was marked with an end of support date. Windows 8.x came and left and it was short-lived, like Vista.

Then arrived Windows 10 and Window 11 which is the current Windows operating system version for desktop computers.

## The Desktop (GUI)

The Windows Desktop, aka the graphical user interface or [[#^2348a9|GUI]] in short, is the screen that welcomes you once you log into a Windows 10 machine.

Traditionally, you need to pass the login screen first. The login screen is where you need to enter valid account credentials; usually, a username & password of a preexisting Windows account on that particular system or in the Active Directory environment (if it's a domain-joined machine). 

![[Windows 10.png]]
 
The above screenshot is an example of a typical Windows Desktop. Each component that makes up the GUI is explained briefly below.

1. The Desktop
2. Start Menu
3. Search Box (Cortana)
4. Task View
5. Taskbar
6. Toolbars
7. Notification Area

### The Desktop

The desktop is where you will have shortcuts to programs, folders, files, etc. These icons will either be well organized in folders sorted alphabetically or scattered randomly with no specific organization on the desktop. In either case, these items are typically placed on the desktop for quick access.

## The Start Menu

The Start Menu provides access to all the apps/programs, files, utility tools, etc., that are most useful.  Clicking on the Windows logo, the Start Menu will open. The Start Menu is broken up into sections.

The Start Menu provides quick shortcuts to actions that you can perform with your account or login session, such as making changes to your user account, lock your screen, or signing out of your account. Other shortcuts specific to your account are your Documents (document icon) folder and Pictures folder (pictures icon). Lastly, the gear/cog icon will take you to the Settings screen, and the power icon will allow you to Disconnect from a Remote Desktop session, shut down the computer, or restart the computer.

**Recently added** apps/programs at the top and all the installed apps/programs (that are configured to appear in the Start Menu). In this section, you'll also see the apps/programs will be listed in alphabetical order. Each letter will have its own section.

The right side of the Start Menu is where you will find icons for specific apps/programs or utilities. These icons are known as **tiles**. Some tiles are added to this section by default. If you right-click any of the tiles, you guessed it; a menu will appear to allow you to perform more actions on the selected tile; such as resizing the tile, unpinning from Start Menu, view its Properties, etc.

Apps/programs can be added to this Start Menu section by right-clicking the app/program and selecting Pin to Start.

### The Notification Area

The Notification Area, which is typically located at the bottom right of the Windows screen, is where the date and time are displayed. Other icons possibly visible in this area is the volume icon, network/wireless icon, to name a few. Icons can be either added or removed from the Notification Area in Taskbar settings.

## The File System

The file system used in modern versions of Windows is the **New Technology File System** or simply [NTFS](https://docs.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview).

Before NTFS, there was **FAT16/FAT32** (File Allocation Table) and **HPFS** (High Performance File System). 

You still see FAT partitions in use today. For example, you typically see FAT partitions in USB devices, MicroSD cards, etc. but traditionally not on personal Windows computers/laptops or Windows servers.

NTFS is known as a journaling file system. In case of a failure, the file system can automatically repair the folders/files on disk using information stored in a log file. This function is not possible with FAT.   

NTFS addresses many of the limitations of the previous file systems; such as: 

- Supports files larger than 4GB
- Set specific permissions on folders and files
- Folder and file compression
- Encryption ([Encryption File System](https://docs.microsoft.com/en-us/windows/win32/fileio/file-encryption) or **EFS**)

On NTFS volumes, you can set permissions that grant or deny access to files and folders.

![[NTFS permissions.png]]

How can you view the permissions for a file or folder?

- Right-click the file or folder you want to check for permissions.
- From the context menu, select `Properties`.
- Within Properties, click on the `Security` tab.
- In the `Group or user names` list, select the user, computer, or group whose permissions you want to view.

Alternate Data Streams (ADS) is a file attribute specific to Windows NTFS (New Technology File System).

Every file has at least one data stream (`$DATA`), and ADS allows files to contain more than one stream of data. Natively [Window Explorer](https://support.microsoft.com/en-us/windows/what-s-changed-in-file-explorer-ef370130-1cca-9dc5-e0df-2f7416fe1cb1) doesn't display ADS to the user. There are 3rd party executables that can be used to view this data, but [Powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.1) gives you the ability to view ADS for files.

From a security perspective, malware writers have used ADS to hide data.

Not all its uses are malicious. For example, when you download a file from the Internet, there are identifiers written to ADS to identify that the file was downloaded from the Internet.

## The Windows\System32 Folders

The Windows folder (`C:\Windows`) is traditionally known as the folder which contains the Windows operating system. 

The folder doesn't have to reside in the C drive necessarily. It can reside in any other drive and technically can reside in a different folder.

This is where environment variables, more specifically system environment variables, come into play. The system  environment variable for the Windows directory is `%windir%`.

Per [Microsoft](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.1), "_Environment variables store information about the operating system environment. This information includes details such as the operating system path, the number of processors used by the operating system, and the location of temporary folders_".

The System32 folder holds the important files that are critical for the operating system.

You should proceed with extreme caution when interacting with this folder. Accidentally deleting any files or folders within System32 can render the Windows OS inoperational.

## User Accounts, Profiles, and Permissions

User accounts can be one of two types on a typical local Windows system: **Administrator** & **Standard User**. 

The user account type will determine what actions the user can perform on that specific Windows system. 

- An Administrator can make changes to the system: add users, delete users, modify groups, modify settings on the system, etc. 
- A Standard User can only make changes to folders/files attributed to the user & can't perform system-level changes, such as install programs.

When a user account is created, a profile is created for the user. The location for each user profile folder will fall under is C:\Users.

Another way to access this information, and then some, is using **Local User and Group Management** (`lusrmgr.msc`).

You should see two folders: **Users** and **Groups**. 

If you click on Groups, you see all the names of the local groups along with a brief description for each group. 

Each group has permissions set to it, and users are assigned/added to groups by the Administrator. When a user is assigned to a group, the user inherits the permissions of that group. A user can be assigned to multiple groups.

## User Account Control

The large majority of home users are logged into their Windows systems as local administrators.

A user doesn't need to run with high (elevated) privileges on the system to run tasks that don't require such privileges, such as surfing the Internet, working on a Word document, etc. This elevated privilege increases the risk of system compromise because it makes it easier for malware to infect the system. Consequently, since the user account can make changes to the system, the malware would run in the context of the logged-in user.

To protect the local user with such privileges, Microsoft introduced **User Account Control** (UAC). This concept was first introduced with the short-lived [Windows Vista](https://en.wikipedia.org/wiki/Windows_Vista) and continued with versions of Windows that followed.

**Note**: UAC (by default) doesn't apply for the built-in local administrator account.

How does UAC work? When a user with an account type of administrator logs into a system, the current session doesn't run with elevated permissions. When an operation requiring higher-level privileges needs to execute, the user will be prompted to confirm if they permit the operation to run.

## Settings and Control Panel

On a Windows system, the primary locations to make changes are the Settings menu and the Control Panel.

For a long time, the Control Panel has been the go-to location to make system changes, such as adding a printer, uninstall a program, etc.

Control Panel is the menu where you will access more complex settings and perform more complex actions. In some cases, you can start in Settings and end up in the Control Panel.

## Task Manager

The last subject that will be touched on in this module is the **Task Manager**.

The Task Manager provides information about the applications and processes currently running on the system. Other information is also available, such as how much CPU and RAM are being utilized, which falls under **Performance**.

## Glossary

- The graphical user interface, or GUI, is a form of user interface that allows users to interact with electronic devices through graphical icons and audio indicators such as primary notation, instead of text-based UIs, typed command labels or text navigation. GUIs were introduced in reaction to the perceived steep learning curve of command-line interfaces (CLIs),which require commands to be typed on a computer keyboard. ^2348a9
- User Account Control (UAC) helps prevent malware from damaging a PC and helps organizations deploy a better-managed desktop. With UAC, apps and tasks always run in the security context of a non-administrator account, unless an administrator specifically authorizes administrator-level access to the system. UAC can block the automatic installation of unauthorized apps and prevent inadvertent changes to system settings.