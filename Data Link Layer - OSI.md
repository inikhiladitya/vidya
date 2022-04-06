---
created: 20211010103518378
modified: 20211031193140783
title: Data Link Layer - OSI
---

- `areas:` [[Networking]]

---

In the Data Link Layer, we'll package up the [Bit](#Bit)s we received from the Layer 1 ([Physical Layer - OSI](#Physical%20Layer%20-%20OSI)) and put them in [Frames](#Frames) and take those frames and transmit them throughout the network while performing error detection/correction, uniquely identifying network devices with an address ([MAC](#MAC)), and a providing flow control.

---

### How is communication synchronized?

- Isochronous
  - Similar to Synchronous in [Physical Layer - OSI](#Physical%20Layer%20-%20OSI) but they also create time slots for tramission.
  - They use a common reference clock source and create time slots for transission with less overhead than synchronous or asynchronous methods.
- Synchronous
  - Network devices agree on clocking method to indicate beginning and end of frames and can use control chracters or separate timing channels.
- Asynchronous
  - Network devices reference their own internal clocks and use start/stop [Bit](#Bit)s.

---

### Layer 2 Examples

- [[NIC]]
- [[Bridge]]s
- [[Switch]]es
- [[MAC]] Addresses
