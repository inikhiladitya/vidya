---
created: 20211029071020310
modified: 20211031193143418
title: Networking in Linux
---

- `areas:` [[Linux]], [[Networking]]

---

- Getting Information about the Network Interfaces
  - [[ifconfig]], [[ip]]
  - `lo` stands for loopback (inteface)
  - [[enp0s3]] for the [[Ethernet]] interface
  - There are other names for interfaces such as [wlo1](#wlo1) , [wlan0](#wlan0) for wireless interface.
- When configuring network intefaces using [ip](#ip), [ipconfig](#ipconfig), [route](#route) you must run them as root([sudo](#sudo))
- Network inteface configuration set by [ifconfig](#ifconfig) or [ip](#ip) are not persistent, after a system restart all the changes are lost. To make them persist, we need to edit [distro](#distro) specifc configuration file. For example on Ubuntu you have to use [netplan](#netplan), [systemd-networkd](#systemd-networkd) for static configuration of the network.
- Network Troubleshooting/Tesing
  - [ping](#ping)
