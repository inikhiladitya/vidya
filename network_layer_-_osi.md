---
created: 20211010110412868
modified: 20211031193143344
title: Network Layer - OSI
---

- At Layer 3 we're concerned with Routing(forwarding traffic with logical addresses or [IP Address](#IP%20Address))
- Routing is called Switching at Layer 3, which can be confusing because [Switch](#Switch)es are Layer 2 ([Data Link Layer - OSI](#Data%20Link%20Layer%20-%20OSI)) devices.
- Connection services
- Bandwidth usage
- Multiplexing strategies

---

### Logical Address

- Numerous routing protocols were used for logical addressing over the years:
  - AppleTalk
  - Internetwork Packet Exchange(IPX)
  - Internet Protocol (IP)
- Only Internet Protocol (IP) remains dominant
  - [IPv4](#IPv4)
  - [IPv6](#IPv6)

---

### How should data be _forwarded_ or routed?

Three main ways of achieving this are as follows:

- Packet switching(known as _routing_)
  - Data is divided into packets and forwarded.
- Circuit switching
  - Dedicated communication link is established between two devices.
- Message switching
  - Data is divided into messages, similar to packet switching, except, these messages may be stored then forwarded.

---

### Route Discovery and Selection

- [router](#router)s maintain a routing table to understand how to forward a packet based on destination [IP Address](#IP%20Address)
- Manually configured as a static route or dynamically through a routing protocol
  - RIP
  - OSPF
  - EIGRP

---

### Connection Services

- Layer 3 augment Layer 2 to improve reliability.
- Flow control
  - Prevents sender from sending data faster than receiver can get it.
- Packet reordering
  - Allows packets to be sent over multiple links and across multiple routes for faster service.

---

### Internet Control Message Protocol (ICMP)

- Used to send error messages and operational information about an IP destination
- Not regularly used by end-user applications
- Used in troubleshooting ([ping](#ping) & [traceroute](#traceroute))

---

### Layer 3 Examples

- [router](#router)s
- Multilayer [Switch](#Switch)s
- [IPv4](#IPv4) protocol
- [IPv6](#IPv6) protocol
- [ICMP](#ICMP)
