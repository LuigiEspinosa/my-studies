## If I can't find a nice malware to use, I'm not going.

YARA is a tool used to identify and classify malware based on patterns in its code. By writing custom rules, analysts can define specific characteristics to look for—such as particular strings, file headers, or behaviors—and YARA will scan files or processes to find matches, making it invaluable for detecting malicious code.

```javascript
rule SANDBOXDETECTED {
	meta:
		description = "Detects the sandbox by querying the registry key for Program Path"
		author = "TryHackMe"
		date = "2024-10-08"
		version = "1.1"

	strings:
		
	$cmd= "Software\\Microsoft\\Windows\\CurrentVersion\" /v ProgramFilesDir" nocase
	
	condition:
		$cmd
}
```

- In the **strings** section, we have defined variables that include the value to look out for: $cmd
- In the **condition** section, we define when the rule will match the scanned file. In this case, if any of the specified strings are present.

While obfuscation is helpful, we also need to know that there are tools available that extract obfuscated strings from malware binaries. One such tool is Floss, a powerful tool developed by Mandiant that functions similarly to the Linux strings tool but is optimized for malware analysis, making it ideal for revealing any concealed details.

```powershell
floss.exe C:\Tools\Malware\MerryChristmas.exe | Out-file C:\tools\malstrings.txt
```

- `floss.exe C:\Tools\Malware\MerryChristmas.exe`: This command scans for strings in the binary MerryChrismas.exe. If any hardcoded variables were defined in the malware, Floss should find them.
- The `|` symbol redirects the output of the command in front of it to the input of the command behind it. 
- `Out-file C:\tools\malstrings.txt`: We save the command results in a file called `malstrings.txt`.

