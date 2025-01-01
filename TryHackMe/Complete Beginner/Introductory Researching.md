
Without a doubt, the ability to research effectively is _the_ most important quality for a hacker to have. By its very nature, hacking requires a _vast_ knowledge base — because how are you supposed to break into something if you don't know how it works? The thing is: no one knows everything. Everyone (professional or amateur, experienced or totally new to the subject) will encounter problems which they don't automatically know how to solve. This is where research comes in, as, in the real world, you can't ever expect to simply be handed the answers to your questions.

As your experience level increases, you will find that the things you're researching scale in their difficulty accordingly; however, in the field of information security, there will never come a point where you don't need to look things up.

The methodology here. We started with nothing, but gradually built up a picture of what we needed to do. We had a question (How can I extract data from this image). We searched for an answer to that question, then continued to query each of the answers we were given until we had a full understanding of the topic. This is a really good way to conduct research: Start with a question; get an initial understanding of the topic; then look into more advanced aspects as needed.

## Questionary

1. In the Burp Suite Program that ships with Kali Linux, what mode would you use to manually send a request (often repeating a captured request numerous times)?
	- Repeater

2. What hash format are modern Windows login passwords stored in?
	- NTLM

3. What are automated tasks called in Linux?
	- Cron Jobs

4. What number base could you use as a shorthand for base 2 (binary)?
	- Base 16

5. If a password hash starts with $6$, what format is it (Unix variant)?
	- sha512crypt

6. What is the CVE for the 2020 Cross-Site Scripting (XSS) vulnerability found in WPForms?
	- CVE-2020-10385

7. There was a Local Privilege Escalation vulnerability found in the _Debian_ version of Apache Tomcat, back in 2016. What's the CVE for this vulnerability?
	- CVE-2016-1240

8. What is the very first CVE found in the VLC media player?
	- CVE-2007-0017

9. If you wanted to exploit a 2020 buffer overflow in the sudo program, which CVE would you use?
	- CVE-2019-18634

10. SCP is a tool used to copy files from one computer to another. _What switch would you use to copy an entire directory?_
	- -r

11. fdisk is a command used to view and alter the partitioning scheme used on your hard drive. _What switch would you use to list the current partitions?_
	- -L

12. nano is an easy-to-use text editor for Linux. _What switch would you use to make a backup when opening a file with nano?_
	- -B

13. Netcat is a basic tool used to manually send and receive network requests. _What **command** would you use to start netcat in listen mode, using port 12345?_
	- nc -l -p 12345

## Vulnerability Searching

Often in hacking you'll come across software that might be open to exploitation. For example, Content Management Systems (such as Wordpress, FuelCMS, Ghost, etc) are frequently used to make setting up a website easier, and many of these are vulnerable to various attacks. So where would we look if we wanted to exploit specific software?

The answer to that question lies in websites such as:

- [ExploitDB](https://www.exploit-db.com)
- [NVD](https://nvd.nist.gov/vuln/search)
- [CVE Mitre](https://cve.mitre.org)

NVD keeps track of CVEs (**C**ommon **V**ulnerabilities and **E**xposures) -- whether or not there is an exploit publicly available -- so it's a really good place to look if you're researching vulnerabilities in a specific piece of software. CVEs take the form: CVE-YEAR-IDNUMBER

## Manual Pages

One of the many useful features of Linux is the inbuilt `man` command, which gives you access to the manual pages for most tools directly inside your terminal. Occasionally you'll find a tool that doesn't have a manual entry; however, this is rare. Generally speaking, when you don't know how to use a tool, `man` should be your first port of call.
## Glossary

- Linux is a command line operating system based on unix. There are multiple operating systems that are based on Linux.
- Common Vulnerabilities and Exposures (CVE), this term is given to a publicly disclosed vulnerability
- CLI - Command Line Interface