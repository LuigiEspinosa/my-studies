## Nine o'clock, make GRC fun, tell no one.

[Learn to Assess Third Party Risk (GRC Skills)](https://www.youtube.com/watch?v=NoMNMJGdwn0

Governance, Risk, and Compliance (GRC) plays a crucial role in any organization to ensure that their security practices align with their personal, regulatory, and legal obligations. Although in general good security practices help protect a business from suffering a breach, depending on the sector in which an organization operates, there may be external security regulations that it needs to adhere to.

Let's take a look at some examples in the financial sector:

- **Reserve Bank Regulations:** In most countries, banks have to adhere to the security regulations set forth by the country's reserve bank. This ensures that each bank adheres to a minimum security level to protect the funds and information of their customers.
- **SWIFT CSP:** Banks use the SWIFT network to communicate with each other and send funds. After a [massive bank breach resulted in a $81 million fraudulent SWIFT transfer](https://www.wired.com/2016/05/insane-81m-bangladesh-bank-heist-heres-know/), SWIFT created the Customer Security Programme ([[#^c645c8|CSP]]), which sets the standard of security for banks to connect to the SWIFT network.
- **Data Protection:** As banks hold sensitive information about their customers, they have to adhere to the security standards created by their data regulator (usually the reserve bank in most countries).

To assess risk, we must first identify the factors that can cause revenue or reputation loss resulting from cyber threats. This exercise requires carefully assessing the attack surface of the organization and identifying areas which might be used to harm the organization. Examples of identified risks can be:

- An unpatched web server.
- A high-privileged user account without proper security controls.
- A third-party vendor who might be infected by a malware connecting to the organization's network.
- A system for which support has ended by the vendor and it is still in production.

﻿To quantify risk, we need to identify how likely or probable it is that the risk will materialize. We can then assign a number to quantify this likelihood.

Once we have identified the risks and the likelihood of a risk, the next step is to quantify the impact this risk's materialization might have on the organization. For example, if there is a public-facing web server that is unpatched and gets breached, what will be the impact on the organization? Different organizations calculate impact in different ways. Some organizations might use the CVSS scoring to calculate the impact of a risk; others might use their own rating derived from the Confidentiality, Integrity, and Availability of a certain asset, and others might base it on the severity categorization of the incidents. Similar to likelihood, we also quantify impact, often on a scale of 1 to 5.

## Assessment

1. Data in transit and data at rest needs to be encrypted with AES encryption as a requirement for this project. What type of AES encryption does your company use for data in transit and data at rest?
	- R: AES-256 for data in transit and AES-256 for data at rest.
	- D: Data captured and later decrypted
	- Impact Level - High
	- Likelihood Level - Unlikely

2. What kind of access controls do you have to ensure data is accessed only by authorized people?
	- R: Data can be accessed by all the people on the relevant team.
	- D: Data is accessed by individuals with access but not with need to know, resulting in data compromise.
	- Impact Level - Critical
	- Likelihood Level - Possible

3. How long do you keep client data after the case is closed?
	- R: More than 1 month.
	- D: Retaining data longer than need to can result in data compromise through a data breach.
	- Impact Level - Critical
	- Likelihood Level - Very Likely

4. Data in transit and data at rest needs to be encrypted with AES encryption as a requirement for this project. What type of AES encryption does your company use for data in transit and data at rest?
	- R: None for data in transit and AES-256 for data at rest.
	- D: AitM or network sniffing can results in data in transit compromise to include altering or confidentiality breach.
	- Impact Level - High
	- Likelihood Level - Likely

5. What kind of access controls do you have to ensure data is accessed only by authorized people?
	- R: Data can be accessed only on a need-to-know-basis.
	- D: An insider threat could leak data or cause compromise.
	- Impact Level - Critical
	- Likelihood Level - Unlikely

6. What kind of access controls do you have to ensure data is accessed only by authorized people?
	- R: Data can be accessed by all the people on the relevant team, and the global administrators
	- D: Individuals without a need to know could access it (insider threat) or credential compromise could result in unauthorized access.
	- Impact Level - Critical
	- Likelihood Level - Likely

7. How long do you keep client data after the case is closed?
	- R: Less than 1 week
	- D: A compromise occurs within the 1 week time window and results in data leakage.
	- Impact Level - Critical
	- Likelihood Level - Likely

## Glossary

- A Cloud Service Provider is a company which offers scalable cloud computing resources on demand. The cloud resources CSPs offer include computing power, data storage and applications. ^c645c8
- National Institute of Standards and Technology (NIST). This organization develops frameworks and policies for information security that is used all throughout the industry.
- CVSS - Common Vulnerability Scoring System.
- DREAD - A system used by Microsoft to assess risk to computer security threats.
