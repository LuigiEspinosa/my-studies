## SOC-mas XX-what-ee?

[Advent of Cyber - Day 5: Exploiting XXE in Web Apps!](https://www.youtube.com/watch?v=w7aAinxT1pE)

XML is a commonly used method to transport and store data in a structured format that humans and machines can easily understand. Consider a scenario where two computers need to communicate and share data. Both devices need to agree on a common format for exchanging information. This agreement (format) is known as `XML`.

A DTD (Document Type Definition) is a set of **rules** that defines the structure of an XML document. Just like a database scheme, it acts like a blueprint, telling you what elements (tags) and attributes are allowed in the XML file. Think of it as a guideline that ensures the XML document follows a specific structure.

```dtd
<!DOCTYPE people [ 
	<!ELEMENT people(name, address, email, phone)> 
	<!ELEMENT name (#PCDATA)> 
	<!ELEMENT address (#PCDATA)> 
	<!ELEMENT email (#PCDATA)> 
	<!ELEMENT phone (#PCDATA)> 
]>
```

In the above DTD, **<!ELEMENT>**  defines the elements (tags) that are allowed, like name, address, email, and phone, whereas `#PCDATA` stands for parsed `people` data, meaning it will consist of just plain text.

Entities in XML are placeholders that allow the insertion of large chunks of data or referencing internal or external files. They assist in making the XML file easy to manage, especially when the same data is repeated multiple times. Entities can be defined internally within the XML document or externally, referencing data from an outside source.

The following proactive approach helped to address the potential risks against XXE attacks:

- **Disable External Entity Loading**: The primary fix is to disable external entity loading in your XML parser. In PHP, for example, you can prevent XXE by setting `libxml_disable_entity_loader(true)` before processing the XML.
- **Validate and Sanitise User Input**: Always validate and sanitise the XML input received from users. This ensures that only expected data is processed, reducing the risk of malicious content being included in the request. For example, remove suspicious keywords like `/etc/host`, `/etc/passwd`, etc, from the request.

## Glossary

- XML - Extensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.
- XML external entity injection (also known as XXE) is a web security vulnerability that allows an attacker to interfere with an application's processing of XML data. It often allows an attacker to view files on the application server filesystem, and to interact with any back-end or external systems that the application itself can access.
- Burp Suite is an integrated platform for performing security testing of web applications. It includes various tools for scanning, fuzzing, intercepting, and analyzing web traffic. It is used by security professionals worldwide to find and exploit vulnerabilities in web applications.