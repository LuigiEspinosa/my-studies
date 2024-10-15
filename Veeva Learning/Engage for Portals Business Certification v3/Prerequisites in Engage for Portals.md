## Product Definition

A product must be created and defined in Vault to match the product in CRM.

- The product name in Vault must map to the product name in CRM.

In Vault you must define an External ID in order to transfer content successfully to CRM.

- The Veeva External ID in CRM must map to the External ID in Vault (case insensitive).

## Product view - Classic vs Lightning in CRM

![[Classic vs Lightning in CRM.png]]

## Websites

A website is required to host the Engage For Portals content. The defined website can be any 3rd party website (brand, industry, etc.).

Websites are entered in Vault in the Admin section.

Websites must also be defined in Veeva CRM.

Websites are added in the Engage Content Admin tab in CRM.

All Websites added in Vault must also be included in CRM.

## Vault and CRM Alignment

The following **Document Types** need to be mapped in both Vault and CRM for a successful sync and deployment.

![[Vault and CRM Alignment - Document Types.png]]

The following **Objects** need to be mapped in both Vault and CRM for a successful sync and deployment.

![[Vault and CRM Alignment - Objects.png]]

## Key Messages

There is an option to match the Engage for Portals content to a Standard Key Message.

Any single Key message in Engage for Portals can be associated with multiple slides when uploaded in Vault. [^1]

In similar way that Engage for Portals content must be linked to a website both in CRM and Vault, a Key Message assigned to a slide in Vault must also be mapped in CRM.

In a practical scenario, customers will choose to associate a standard Key Message to the actual content slide to help with reporting allowing them to see where key messages are utilized in presentations.

- Customers may use this to track key messages have been discussed with a doctor.

If leveraging the same zip file used for CLM content, the CLM Key Message can be associated and mapped together.

To utilize the Key Message functionality:

- A Key Message and External ID is automatically generated in CRM when a Presentation is uploaded in Vault and Publish for Veeva CRM (Portals) set to 'Yes'.
- The same Key Message and External ID must also be created in Vault.

[^1]: Unlike in CLM content, one slide creates one key message as the zip file content is linked to the Key Message record.

## Required Platforms for Engage for Portals

**Vault PromoMats**
- Content is uploaded to Vault and reviewed/approved by the customer.
- Content is managed and published within the Vault environment.
- Ensures the latest version of approved content is pushed to the web and available for use in Engage for Portals.

**Veeva CRM**
- Approved content is synced between CRM and Vault.
- Reps invite HCPs with accounts in CRM to view content using Engage for Portals. HCPs can also view content on a website without an invitation.
- Data on content usage is captured and saved in CRM.
- This is the Engage hub responsible for Account matching, activity tracking, and content authorization.

**Website**
- Any website can be used for Engage for Portals.
- The player is what gets deployed to customer hosted websites.

**Content Distribution Network (CDN)**
- In order to deliver quality content at the speed required in the customer space, global network infrastructure presence is necessary.
- Veeva utilizes an enterprise grade CDN to ensure content is delivered well within the acceptable time frame.

## Sync Engage for Portals Content

Only content with the Approved state will be pulled into CRM for testing and use.

