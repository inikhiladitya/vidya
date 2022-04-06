---
created: 20211013081203245
modified: 20211031193140317
title: Collision Domains
---

- Comprised of all devices on shared [Ethernet](#Ethernet) segment (everything on same cable or [Hub](#Hub))
- Devices operate at half-duplex when connected to a [Hub](#Hub) (Layer 1 Device)
- Devices must listen before they transmit to avoid collisions when operating as [CSMA/CD](#CSMA%2FCD)
- The larger the Collision Domain, the more chaos in the network.
- Collision Domains need to broken down into smaller chunks for more efficiency

---

### Collision Domains on [Switch](#Switch)es

- [Ethernet](#Ethernet) [Switch](#Switch)es increase scalability of the network by creating multiple collision domains
- Each port on a switch is a Collision Domain, no chance of collisions and increases speed
- Switches can operate in full-duplex mode

---

### Collision Domains on [Hub](#Hub)s

- [Hub](#Hub)s were used to connect multiple network segments together
- Each [LAN](#LAN) segment becomes a separate [collsion domain](#Collision%20Domains)
- As the network gets larger in which a [Hub](#Hub) is being utilized to connect all the machines, the network will get more chaotic as [Hub](#Hub) don't break up [Collision Domains](#Collision%20Domains), it'll be treated as one large collision domain.
- To deal with this issue a [Bridge](#Bridge) needs to be introduced to the network.

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.cqfqt7rooe6.png)
