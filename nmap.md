---
caption: Network Mapper
created: 20211011081705090
modified: 20211031193143497
title: Nmap
---

- Network Mapper is a command line tool that maps the network.
- Do [ping](#ping) sweeps to check what is up and available.
- Look at individual ports and what OS that remote [Server](#Server) is running.

---

Scanning from a machine connected to the [LAN](#LAN), scanning for open ports on a web server also on [LAN](#LAN) using [Nmap](#Nmap)

    nmap -sS -O 10.0.2.6 |more

- `-sS` tells `nmap` to do a SYN Scan using only SYN packets from the [Three-Way Handshake](#Three-Way%20Handshake) (SYN-SYN/ACK-ACK).
- `-O` tells `nmap` to also scan what OS the web server is using.
- `10.0.2.0` should be replaced with the target [IP Address](#IP%20Address).
- `|more` tells `nmap` to give result one after another.
- Example Output: ![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.pbozqpwksbr.png)
- All of the unused service/port should be closed to make the server secure.
- [zenmap](#zenmap) is GUI for [Nmap](#Nmap)
