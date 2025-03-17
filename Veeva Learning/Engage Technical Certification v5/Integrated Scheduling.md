## Sending Meeting Requests with AE

Users can now direct HCPs to a scheduling site via Approved Email. This site allows for HCPs to select a date, time and channel that works well with their schedules.

Integrating Scheduling allows HCPs and their administrative staff to request meeting times at their convenience.

Users have the option to accept, reschedule or decline the meeting as many times as needed.

### Request a Meeting

1. HCP selects a Meeting type - The Standard Metrics Call Channel fields are used.
2. Meeting Time and Date are then chosen in the HCP's time zone.
3. Request Confirmation.

## Accepting/Declining Meeting Requests in My Schedule

When CRM users receive meeting requests from HCPs via the Engage Scheduling Site, they can accept or decline the request directly in **My Schedule** in CRM.

This enables users to respond to requests for a meeting.

## Engage Scheduling Site: Unavailable Time Slots

CRM users can block time on their schedules to prevent HCPs from requesting meetings during that time.

The times available on the Engage Scheduling Site are also dynamically updated when users edit or delete unavailable time slots in My Schedule.

This gives the user flexibility to block time for internal meetings, holidays, travel, etc.

All the unavailable time slots are editable and can also be deleted.

### Block Option

- All Day.
- Specific Time.

### Unavailability

Unavailable Time Slots display in **grey** in My Schedule.

### Engage Scheduling View

View on the Engage Scheduling site. HCPs cannot select times or dates displayed in gray.

## Notifying Users About Meeting Requests

When a recipient requests a meeting using the Engage Scheduling Site, users receive an email from scheduling@veevacrm.com stating a recipient requested a meeting, along with a prompt to respond and schedule the meeting as soon as possible.

Users on the Browser (Lightning) platform also receive a notification when a new meeting request is created and assigned to them.

## Sending Meeting Requests with Approved Email

When a recipient opens an Approved Email containing the `{{schedulerLink}}` Token, the token renders as a link to the Engage Scheduling Site.

Add the `{{schedulerLink}}` Token to the appropriate Email Templates, Email Fragments, or Template Fragments. This token should be added as the `href` property of an anchor tag `<a>`, so that content creators can control the text of the link that displays to users.

For example: `<a href="{{schedulerLink}}">Book a meeting.</a>`

Each link is unique and can be used to create a single meeting request. Links expire 30 days after the email is sent.

## Copy Button for Meeting Invite Information

A copy button has been added to both the Remote Meeting Information and Send Invitations modals to simplify the process of providing meeting connection details to attendees.

## Quiz

> [!faq]- What time periods can the Rep block vis Integrated Scheduling? Select all the options that apply.
> 
> - A specific time.
> - All day.

> [!faq]- Users have the option to accept or reschedule a meeting through Integrated Scheduling, but never decline it.
> 
> False.

> [!faq]- CRM users can block time in their schedule via Integrated Scheduling, to prevent HCPs from requesting meetings during those times.
> 
> True.

> [!faq]- Unavailable time slots in a schedule are displayed in blue in My Schedule in CRM.
> 
> False.

> [!faq]- Integrated Scheduling allows HCPs to select a date, time and channel that works for their schedule. 
> 
> True.

> [!faq]- Which of the following are options for a meeting scheduled through Integrated Scheduling? Select all that apply.
> 
> - Video.
> - In-person.
> - Phone.

