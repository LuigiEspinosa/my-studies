## If you utter so much as one packet…

[TryHackMe | Advent of Cyber 2024: Day 20 (Traffic Analysis)](https://www.youtube.com/watch?v=4S17sVDNCtM)

Whenever a machine is compromised, the command and control server (C2) drops its secret agent (payload) into the target machine. This secret agent is meant to obey the instructions of the C2 server. These instructions include executing malicious commands inside the target, exfiltrating essential files from the system, and much more. Interestingly, after getting into the system, the secret agent, in addition to obeying the instructions sent by the C2, has a way to keep the C2 updated on its current status. It sends a packet to the C2 every few seconds or even minutes to let it know it is active and ready to blast anything inside the target machine that the C2 aims to. These packets are known as beacons.

Wireshark, an open-source tool that captures and inspects network traffic saved as a PCAP file.

- Wireshark can analyze traffic and display the information in an easy-to-navigate format regardless of the protocols used (e.g., HTTP, TCP, DNS).
- Wireshark can reconstruct back-and-forth conversations in a network.
- Wireshark allows easy filtering to narrow down essential details.
- Wireshark can also export and analyze objects that are transferred over the network.

Usually, the reply from a C2 server contains the command, instructing the malicious program what to do next. However, the type of instruction depends on the malicious actor’s configuration, intention, and capabilities. These instructions often fall into several categories:

1. **Getting system information:** The attacker may want to know more about the compromised machine to tailor their next moves. This is what we are seeing above.
2. **Executing commands:** If the attacker needs to perform specific actions, they can also send commands directly. However, this is less stealthy and easily attracts attention.
3. **Downloading and executing payloads:** The attacker can also send additional payloads to the machine containing additional functionality or tools.
4. **Exfiltrating data:** This is one of the most common objectives. The program may be instructed to steal valuable data such as sensitive files, credentials, or personal information.

A typical C2 beacon returns regular status updates from the compromised machine to its C2 server. The beacons may be sent after regular or irregular intervals to the C2 as a heartbeat.


## Glossary

- Packet capture (PCAP) is a networking practice involving the interception of data packets travelling over a network. Once the packets are captured, they can be stored by IT teams for further analysis. The inspection of these packets allows IT teams to identify issues and solve network problems affecting daily operations.
- Command and Control (C2) Infrastructure are a set of programs used to communicate with a victim machine. This is comparable to a reverse shell, but is generally more advanced and often communicate via common network protocols, like HTTP, HTTPS and DNS.
