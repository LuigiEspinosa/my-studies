## Oh, no. I'M SPEAKING IN CLOUDTRAIL!

[[#^9c7393|AWS]] CloudWatch is a monitoring and observability platform that gives us greater insight into our AWS environment by monitoring applications at multiple levels. CloudWatch provides functionalities such as the monitoring of system and application metrics. Running an application in a cloud environment can mean leveraging lots of different services (e.g. a service running the application, a service running functions triggered by that application, a service running the application backend, etc.); this translates to logs being generated from lots of different sources. CloudWatch logs make it easy for users to access, monitor and store the logs from all these various sources. A CloudWatch agent must be installed on the appropriate instance for application and system metrics to be captured.

- **Log Events:** A log event is a single log entry recording an application "event"; these will be timestamped and packaged with log messages and metadata.
- **Log Streams:** Log streams are a collection of log events from a single source.
- **Log Groups:** Log groups are a collection of log streams. Log streams are collected into a log group when logically it makes sense, for example, if the same service is running across multiple hosts.

CloudWatch can track infrastructure and application performance, but what if you wanted to monitor actions in your AWS environment? These would be tracked using another service called AWS CloudTrail. Actions can be those taken by a user, a role (granted to a user giving them certain permissions) or an AWS service and are recorded as events in AWS CloudTrail. Essentially, any action the user takes (via the management console or AWS CLI) or service will be captured and stored. Some features of CloudTrail include:

- **Always On:** CloudTrail is enabled by default for all users
- **JSON-formatted:** All event types captured by CloudTrail will be in the CloudTrail JSON format
- **Event History:** When users access CloudTrail, they will see an option "Event History", event history is a record of the actions that have taken place in the last 90 days. These records are queryable and can be filtered on attributes such as "resource" type.
- **Trails:** The above-mentioned event history can be thought of as the default "trail," included out of the box. However, users can define custom trails to capture specific actions, which is useful if you have bespoke monitoring scenarios you want to capture and store **beyond the 90-day event history retention period**.
- **Deliverable:**  As mentioned, CloudWatch can be used as a single access point for logs generated from various sources; CloudTrail is no different and has an optional feature enabling **CloudTrail logs to be delivered to CloudWatch**.

As mentioned, Cloudtrail helps capture and record actions taken. These actions could be interactions with any number of AWS services. For example, services like **S3** (Amazon Simple Storage Service used for object storage) and **IAM** (AWS's Identity and Access Management service can be used to secure access to your AWS environment with the creation of identities and the assigning of access permissions to those identities) will have actions taken within their service recorded. These recorded events can be very helpful when performing an investigation.

It might be overwhelming to see the sheer amount of information in one event, but there are some elements that we can focus on for our investigation:

| **Field**         | **Description**                                                                      |
| ----------------- | ------------------------------------------------------------------------------------ |
| userIdentity      | Details of the user account that acted on an object.                                 |
| eventTime         | When did the action occur?                                                           |
| eventType         | What type of event occurred? (e.g., AwsApiCall or AwsConsoleSignIn, AwsServiceEvent) |
| eventSource       | From what service was the event logged?                                              |
| eventName         | What specific action occurred? (e.g., ListObjects, GetBucketObject)                  |
| sourceIPAddress   | From what IP did the action happen?                                                  |
| userAgent         | What user agent was used to perform the action? (e.g., Firefox, AWS CLI)             |
| requestParameters | What parameters were involved in the action? (e.g., BucketName)                      |
```shell
jq -r '.Records[] | select(.eventSource == "s3.amazonaws.com" and .requestParameters.bucketName=="wareville-care4wares")' cloudtrail_log.json
```

|Command|Description|
|---|---|
|`jq -r 'FILTER' cloudtrail_log.json`|- The **-r** flag tells **jq** to output the results in RAW format instead of JSON. <br>- Note that the **FILTER** section is enclosed with single quotes.<br>- The last part of the command accepts the input file, which is **cloudtrail_log.json**.|
|`.Records[]`|- Instructs **jq** to parse the events in the Records container element. The **Records** field is the top element in the JSON-formatted CloudTrail log.|
|`\| select(.eventSource == "s3.amazonaws.com" and .requestParameters.bucketName=="wareville-care4wares")`|- Uses the previous command's output, and filters it on the **eventSource** and **requestParameters.bucketName** keys.<br>- The value **s3.amazonaws.com** is used to filter events related to the Amazon AWS S3 service, and the value  **wareville-care4wares** is used to filter events related to the target S3 bucket.|

```shell
jq -r '.Records[] | select(.eventSource == "s3.amazonaws.com" and .requestParameters.bucketName=="wareville-care4wares") | [.eventTime, .eventName, .userIdentity.userName // "N/A",.requestParameters.bucketName // "N/A", .requestParameters.key // "N/A", .sourceIPAddress // "N/A"]' cloudtrail_log.json
```

|Command|Description|
|---|---|
|`\| [.eventTime, .eventName, .userIdentity.userName // "N/A",.requestParameters.bucketName // "N/A", .requestParameters.key // "N/A", .sourceIPAddress // "N/A"])'`|- The piped filter uses the previous command's output and formats it to only include the defined keys, such as **.eventTime**, **.eventName**, and **.userIdentity.userName**.<br>- The defined keys are enclosed with square brackets (`[]`)  **to process and create an array with the specified fields from each record**.<br>- Note that the string `// "N/A"` is included purely for formatting reasons. This means that if the defined key does not have a value, it will display **N/A** instead.|
```shell 
jq -r '["Event_Time", "Event_Name", "User_Name", "Bucket_Name", "Key", "Source_IP"],(.Records[] | select(.eventSource == "s3.amazonaws.com" and .requestParameters.bucketName=="wareville-care4wares") | [.eventTime, .eventName, .userIdentity.userName // "N/A",.requestParameters.bucketName // "N/A", .requestParameters.key // "N/A", .sourceIPAddress // "N/A"]) | @tsv' cloudtrail_log.json \| column -t
```
| Command                                                                                                                  | Description                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `jq -r '["Event_Time", "Event_Name", "User_Name", "Bucket_Name", "Key", "Source_IP"], SELECT_FILTER \| SPECIFIC FIELDS'` | - The new command prepends a column header row and is defined using square brackets since it is an array that corresponds to the selected fields.<br>- Note that a comma is used before the select filter to combine with those of the select filter results we previously used. |
| `\| @tsv'`                                                                                                               | - Sets each array element, the output processed after the filters, as a line of tab-separated values.                                                                                                                                                                            |
| `\| column -t -s $'\t'`                                                                                                  | - It takes the output of the **jq** command, now resulting in tab-separated values, and beautifies its result by processing all tabs and aligning the columns.                                                                                                                   |

```shell
jq -r '["Event_Time", "Event_Source", "Event_Name", "User_Name", "Source_IP"],(.Records[] | select(.userIdentity.userName == "glitch") | [.eventTime, .eventSource, .eventName, .userIdentity.userName // "N/A", .sourceIPAddress // "N/A"]) | @tsv' cloudtrail_log.json | column -t -s $'\t'
```

```shell
jq -r '["Event_Time", "Event_type", "Event_Name", "User_Name", "Source_IP", "User_Agent"],(.Records[] | select(.userIdentity.userName == "glitch") | [.eventTime,.eventType, .eventName, .userIdentity.userName //"N/A",.sourceIPAddress //"N/A", .userAgent //"N/A"]) | @tsv' cloudtrail_log.json | column -t -s $'\t'
```

| `S3Console/0.4, aws-internal/3 aws-sdk-java/1.12.750 Linux/5.10.226-192.879.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.412-b09 java/1.8.0_412 vendor/Oracle_Corporation cfg/retry-mode/standard` | - This is the userAgent string for the internal console used in AWS. It doesn’t provide much information.                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36`                                                                           | - This userAgent string provides us with 2 pieces of interesting information.<br>- The anomalous account uses a Google Chrome browser within a Mac OS system. |
```shell
jq -r '["Event_Time", "Event_Source", "Event_Name", "User_Name", "Source_IP"], (.Records[] | select(.eventSource == "iam.amazonaws.com") | [.eventTime, .eventSource, .eventName, .userIdentity.userName // "N/A", .sourceIPAddress // "N/A"]) | @tsv' cloudtrail_log.json \| column -t -s $'\t'
```

```shell
jq '.Records[] |select(.eventSource=="iam.amazonaws.com" and .eventName== "CreateUser")' cloudtrail_log.json
```

```shell
jq '.Records[] | select(.eventSource=="iam.amazonaws.com" and .eventName== "AttachUserPolicy")' cloudtrail_log.json
```

```shell
jq -r '["Event_Time", "Event_Source", "Event_Name", "User_Name", "Source_IP"], (.Records[] | select(.sourceIPAddress=="53.94.201.69") | [.eventTime, .eventSource, .eventName, .userIdentity.userName // "N/A", .sourceIPAddress // "N/A"]) | @tsv' cloudtrail_log.json | column -t -s $'\t'
```

```shell
jq -r '["Event_Time","Event_Source","Event_Name", "User_Name","User_Agent","Source_IP"],(.Records[] | select(.userIdentity.userName=="PLACEHOLDER") | [.eventTime, .eventSource, .eventName, .userIdentity.userName // "N/A",.userAgent // "N/A",.sourceIPAddress // "N/A"]) | @tsv' cloudtrail_log.json | column -t -s $'\t'
```
** Replace PLACEHOLDER with the username.
## Glossary

- Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon. It provides a wide range of services such as computing power, storage, databases, networking, analytics, and more, delivered over the internet on a pay-as-you-go basis. ^9c7393
- JavaScript Object Notation (JSON) is an open standard file and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.