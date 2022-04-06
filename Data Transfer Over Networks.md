---
created: 20211011053357504
modified: 20211031193140795
title: Data Transfer Over Networks
---

When we're trying to transfer data over network, we've to tell the device where its going to go.

We use [[IP Address]]es to get to the system but how does the data know which applications are listening on that system? That where Ports come into the picture.

- Port numbers can range from 0 to 65,536, you can run services on all of these ports.
- Ports are categorized into "Well-known" & "Reserved Ports".
  - Well-known ports range from 0 to 1024.
    - Examples: [[FTP]] on [[Port 21]], [[HTTP]] on [[Port 80]] and so on
- Ephemeral Ports:
  - Short-lived transport port that is automatically selected from predefined range
  - Ports 1025 to 65,536
  - Examples: Running a Web Application locally, such as [TiddlyWiki](#TiddlyWiki) on [NodeJs](#NodeJs) on Port 4000.

---

### Data Transfer in the real world

![](https://cdn.jsdelivr.net/gh/zubayrrr/twiki/bin/image.t9bioahw8x.png)

---

### IPv4 Packets

IPv4 Packets (Packet Header) contain the following information:

- Source Address
  - IP of sender
- Destination Address
  - IP of receiver
- IP Flags
  - Allows packet fragmentation
- Protocol
  - [TCP](#TCP) or [UDP](#UDP)

---

### Overhead of [TCP](#TCP) and [UDP](#UDP)

[TCP](#TCP) has a lot more overhead than [UDP](#UDP).

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.png)
