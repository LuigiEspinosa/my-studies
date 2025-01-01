## One man's false positive is another man's potpourri.

[Advent of Cyber - Day 2: Threat Hunting with Elastic SIEM!](https://www.youtube.com/watch?v=-FSt5WmvTEM)
### True Positives or False Positives?

In a SOC, events from different devices are sent to the [[#^9e0b02|SIEM]], which is the single source of truth where all the information and events are aggregated. Certain rules (Detection Engineering rules) are defined to identify malicious or suspicious activity from these events. If an event or set of events fulfils the conditions of a rule, it triggers an alert. A SOC analyst then analyses the alert to identify if the alert is a True Positive (TP) or a False Positive (FP). An alert is considered a TP if it contains actual malicious activity. On the flip side, if the alert triggers because of an activity that is not actually malicious, it is considered an FP. This might seem very simple in theory, but practically, separating TPs from FPs can be a tedious job. It can sometimes become very confusing to differentiate between an attacker and a system administrator.

When they are unsure whether an activity is performed by a malicious actor or a legitimate user, they can just confirm with the user. This privilege is not available to the attacker. A SOC analyst, on the other hand, can just send an email or call the relevant person to get confirmation of a certain activity.

While it might seem like using the SOC superpower makes things super easy, that is not always the case. There are cases which can act as Kryptonite to the SOC superpower:

- If an organization doesn't have a change request process in place.
- The performed activity was outside the scope of the change request or was different from that of the approved change request.
- The activity triggered an alert, such as copying files to a certain location, uploading a file to some website, or a failed login to a system. 
- An insider threat performed an activity they are not authorized to perform, whether intentionally or unintentionally.
- A user performed a malicious activity via social engineering from a threat actor.

In such scenarios, it is very important for the SOC analyst to understand the context of the activity and make a judgement call based on their analysis skills and security knowledge.

## Glossary

- SIEM - Security Information and Event Management system that is used to aggregate security information in the form of logs, alerts, artifacts and events into a centralized platform that would allow security analysts to perform near real-time analysis during security monitoring. ^9e0b02