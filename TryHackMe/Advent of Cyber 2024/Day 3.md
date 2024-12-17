## Even if I wanted to go, their vulnerabilities wouldn't allow it.

Log analysis is crucial to blue-teaming work. Analyzing logs can quickly become overwhelming, especially if you have multiple devices and services. [[#^339502|ELK]], or Elasticsearch, Logstash, and Kibana, combines data analytics and processing tools to make analyzing logs much more manageable.

| **Query/Syntax** | **Description**                                                                                                                                                                               | **Example**                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| " "              | The two quotation marks are used to search for specific values within the documents. Values in quotation marks are used for **exact** searches.                                               | "TryHackMe"                                             |
| *                | The asterisk denotes a wildcard, which searches documents for similar matches to the value provided.                                                                                          | United* (would return United Kingdom and United States) |
| OR               | This logical operator is used to show documents that contain **either** of the values provided.                                                                                               | "United Kingdom" OR "England"                           |
| AND              | This logical operator is used to show documents that contain **both** values.                                                                                                                 | "Ben" AND "25"                                          |
| :                | This is used to search the (specified) field of a document for a value, such as an IP address. Note that the field you provide here will depend on the fields available in the index pattern. | ip.address: 10.10.10.10                                 |

### Why Unrestricted File Uploads Are Dangerous

Unrestricted file uploads can be particularly dangerous because they allow an attacker to upload any type of file. If the file's contents aren't properly validated to ensure only specific formats like PNG or JPG are accepted, an attacker could upload a malicious script, such as a PHP file or an executable, that the server might process and run. This can lead to code execution on the server, allowing attackers to take over the system.

Examples of abuse through unrestricted file uploads include:

- Uploading a script that the server executes, leading to RCE. 
- Uploading a crafted image file that triggers a vulnerability when processed by the server. 
- Uploading a web shell and browsing to it directly using a browser.

### Usage of Weak Credentials

One of the easiest ways for attackers to break into systems is through weak or default credentials. This can be an open door for attackers to gain unauthorised access. Default credentials are often found in systems where administrators fail to change initial login details provided during setup. For attackers, trying a few common usernames and passwords can lead to easy access.

### What Is a Web Shell

A web shell is a script that attackers upload to a vulnerable server, giving them remote control over it. Once a web shell is in place, attackers can run commands, manipulate files, and essentially use the compromised server as their own. They can even use it to launch attacks on other systems.

For example, attackers could use a web shell to:

- Execute commands on the server
- Move laterally within the network
- Download sensitive data or pivot to other services

A web shell typically gives the attacker a web-based interface to run commands. Still, in some cases, attackers may use a reverse shell to establish a direct connection back to their system, allowing them to control the compromised machine remotely. Once an attacker has this level of access, they might attempt privilege escalation to gain even more control, such as achieving root access or moving deeper into the network.

## Glossary

- ELK stands for Elasticsearch, Logstash, and Kibana. These are three open-source tools that are commonly used together to collect, store, analyze, and visualize data. ^339502
- RCE - Remote Code Execution.
- Kibana is a web-based visualization tool for exploring data stored in Elasticsearch. It can be used to create interactive dashboards and charts that help users to understand data.
- KQL can refer to Kusto Query Language in the context of Azure, and Kibana Query Language in the context of Elastic. Both are query languages used to explore and process data based on search terms and filters.
- Elasticsearch is a distributed, scalable, and highly available search engine. It is used to store and index data so that it can be quickly searched and analyzed.
- SPL - Search Processing Language. A processing language used for searching in Splunk.
- XSS - A type of security vulnerability typically found in web applications. It allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can then steal sensitive information, like user's cookies, session tokens, or other sensitive data.