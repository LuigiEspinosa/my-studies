---
source: tryhackme
slug: tryhackme/pre-security/computer-types
status: done
started: 2026-11-05
finished: 2026-11-05
tags: [hardware, computer-fundamentals, iot]
code: []
kind: note
---

# Computer Types

[Computer Types (TryHackMe)](https://tryhackme.com/room/computertypes)

There are four types of computers that often look similar but serve very different purposes.

- Portable everyday computing
- Sustained performance at a fixed location

Let's compare these below:

| Computer Type | Screen and Keyboard | Main Purpose                                      |
| ------------- | ------------------- | ------------------------------------------------- |
| Laptop        | Yes                 | Portable everyday computing.                      |
| Desktop       | Yes                 | Sustained performance at a fixed location.        |
| Workstation   | Yes                 | Precision and reliability for professional tasks. |
| Server        | No                  | Providing services to many users over a network.  |

The most powerful computer most people own fits in their pocket, but millions more hide inside everyday objects: doors, lamps, coffee machines.

**We continue to find computers hiding in everyday objects:**

| Type                  | What it is                                                        | Examples                                                         |
| --------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Smartphone**        | Pocket-sized computer optimized for battery life and connectivity | iPhone, Android phone                                            |
| **Tablet**            | Touch-first computer with larger screen                           | iPad, drawing tablet                                             |
| **IoT device**        | Network-connected device with a single purpose                    | Thermostat, smart doorbell, fitness tracker                      |
| **Embedded computer** | Computer built into another device                                | Coffee maker controller, automatic door sensor, lamp dimmer chip |

**IoT vs Embedded:** Both can be small and single-purpose. The difference is connectivity. IoT devices connect to a network to report data or receive commands. Embedded computers might not connect to anything; they do their job inside the machine, often for years without anyone knowing they exist.

## _Why not just build one computer that does everything?_

**Mobility costs power.** Smaller, portable computers must sacrifice sustained performance. Reliability costs money. Servers and critical systems use redundancy, such as extra power supplies and disks, to avoid failure.

Before you open the site, here are the building blocks you will meet in it. ECC[^1] memory is RAM[^2] that can detect and correct a single flipped bit, which is why servers and workstations use it and most laptops do not. Redundancy means keeping a spare: a server with two power supplies keeps running if one fails, and two disks that mirror each other keep your data if one dies. Storage can be a hard disk drive (cheap, spinning, slower) or a solid-state drive (faster, no moving parts). Portable devices trade sustained speed for battery life and low heat, while servers trade cost for reliability. Keep these in mind as you pick the right parts for each computer.

Purpose shapes everything. You touch a phone. You ask a server for information. An IoT[^3] device works quietly without demanding attention.

---

[^1]: ECC (error-correcting code) memory stores extra check bits so it can detect and correct single-bit errors.

[^2]: Random-access memory (RAM) is a form of electronic computer memory that can be read and changed in any order, typically used to store working data and machine code.

[^3]: IoT (Internet of Things) refers to the network of physical objects, or "things", that are embedded with sensors and software which allow them to collect and exchange data over the Internet. These objects can include various devices, from everyday household items like thermostats, refrigerators, and lightbulbs, to industrial equipment, vehicles, and more.
