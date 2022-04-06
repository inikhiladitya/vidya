---
created: 20211009090217118
modified: 20211031193145227
title: Switch
---

A switch is a smarter version of the [[hub]], a device that connects network devices together.

Switches learn which devices are on which ports, a switch knows what port to forward data to.

It broadcasts data only to the port that needs to receive it.

Provides more security and effcient bandwith usage than a hub.

---

- Layer 2 device used to connect multiple network segments together
- Essentially a multiport [[Bridge]]
- Switches learn [[MAC]] addresses and make forwarding decisions based on them
- Switches analyze _source_ [[MAC]] addresses in frames entering the switch and populate an internal MAC address table based on them

---

- Each port on a switch represents an individual [[Collision Domains|collision domain]]
- All ports belong to the same [[Broadcast Domain]]

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.n7uo6r73ptb.png)

---

### How Switches Improve Network Performance

- Using ARP to discover MAC addresses of devices on the network and storing them in MAC Address table to confirm it back to the original requester. Basically everyone on the network answers to the query for the MAC address.

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.fkh5obynpjf.png)

- And the next time, when anyone needs to communicate with anyone, they can directly communicate with them since [[Switch]] has memorized the MAC address of all the devices on the network.
- In this way, Switches improve performance and security of the network.

---

### Switch Icon

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.5ud89v9j7.png)
