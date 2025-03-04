## What is Offensive Security?

In short, offensive security is the process of breaking into computer systems, exploiting software bugs, and finding loopholes in applications to gain unauthorized access to them.

On the flip side, there is also defensive security, which is the process of protecting an organization's network and computer systems by analyzing and securing any potential digital threats; learn more in the digital forensics room.

- Find hidden folders

```bash
gobuster dir --url http://www.onlineshop.thm/ -w /usr/share/wordlists/dirbuster/directory-list.txt
```

- Crack login credentials

```bash
hydra -l admin -P passlist.txt www.onlineshop.thm http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect" -V
```

[vanhauser-thc/thc-hydra: hydra (github.com)](https://github.com/vanhauser-thc/thc-hydra)

Hydra is a free and open-source password-cracking tool. It can try numerous passwords till the correct password is found. It can be used to crack passwords for various network services, including SSH, Telnet, FTP, and HTTP. ^4d0b23

## What careers are there?

The cyber careers room goes into more depth about the different careers in cyber. However, here is a short description of a few offensive security roles:

- **Penetration Tester** - Responsible for testing technology products for finding exploitable security vulnerabilities.
- **Red Teamer** - Plays the role of an adversary, attacking an organization and providing feedback from an enemy's perspective.
- **Security Engineer** - Design, monitor, and maintain security controls, networks, and systems to help prevent cyberattacks.
