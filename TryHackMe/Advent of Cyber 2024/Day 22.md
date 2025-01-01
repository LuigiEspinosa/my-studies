## It's because I'm kubed, isn't it?

https://www.youtube.com/watch?v=8LP9akZaJzU

Back in the day, it was very common for companies/organisations to use a monolithic architecture when building their applications. A monolithic architecture is an application built as a single unit, a single code base, and usually, a single executable deployed as a single component. For many companies, this worked and still does to this day; however, for some companies, this style of architecture was causing problems, especially when it came to scaling. The problem with monolithic applications is that if one single part of the application needs scaling, the whole application has to be scaled with it. It would make far more sense for companies with applications that receive fluctuating levels of demand across their parts to break the application down component by component and run them as their own microservices. That way, if one "microservice" starts to receive an increase in demand, it can be scaled up rather than the entire application.

Microservices architecture was adopted by companies like Netflix. Their need to scale up services dedicated to streaming when a new title is released (whilst services dedicated to user registration, billing, etc, won't need the same scaling level) made a microservices architecture a no-brainer. As time went by, companies similar to Netflix hopped aboard the Microservices Express, and it became very widely adopted. Now, as for the hosting of these microservices, containers were chosen due to their lightweight nature. Only as you may imagine, an application of this scale can require hundreds, even thousands of containers.

Kubernetes is a container orchestration system. Imagine one of those microservices mentioned earlier is running in a container, and suddenly, there is an increase in traffic, and this one container can no longer handle all requests. The solution to this problem is to have another container spun up for this microservice and balance the traffic between the two. Kubernetes takes care of this solution for you, "orchestrating" those containers when needed.

A DFIR expert will likely be called to action as soon as an incident is ascertained and will be expected to perform actions that fall into one or both of the two disciplines:

- **Digital Forensics**, like any other "forensics" discipline, aims to collect and analyse digital evidence of an incident. The artefacts collected from the affected systems are used to trace the chain of attack and uncover all facts that ultimately led to the incident. DFIR experts sometimes use the term "post-mortem" to indicate that their analysis starts _after_ the incident has occurred and is performed on already compromised systems and networks.
- **Incident Response**, while still relying on data analysis to investigate the incident, focuses on "responsive" actions such as threat containment and system recovery. The incident responder will isolate infected machines, use the data collected during the analysis to identify the "hole" in the infrastructure's security and close it, and then recover the affected systems to a clean, previous-to-compromise state.

Picture the incident responder as an emergency first responder whose aim is to contain the damage, extinguish the fire, and find and stabilise all the victims. On the other hand, the digital forensics analyst is the Crime Scene Investigator (CSI) or detective trying to recreate the crime scene and ultimately find evidence to identify and frame the criminal.

## Glossary

- Kubernetes is a container orchestration system used for automating deployment, scaling and management of applications.
- DFIR - Digital Forensics and Incident Response.
