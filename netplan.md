---
created: 20211029081225612
modified: 20211031193143203
title: netplan
---

- `areas:` [[Linux]]

---

`netplan` is used to statically configured a network interface. Typically Laptops and Desktops have their [IP Address](#IP%20Address) assigned dynamically by a [DHCP](#DHCP) server(in most cases, the [router](#router)), however a server requires a static configuration to avoid single point of failure problem using a [DHCP](#DHCP) server.

`netplan` is default network configuration tool in Ubuntu. It uses [YAML](#YAML) files located in [/etc/netplan](#%2Fetc%2Fnetplan), it currently supports two renderers or backend services to control network interfaces on Ubuntu based systems, they're [NetworkManager](#NetworkManager) and [systemd-networkd](#systemd-networkd).

[NetworkManager](#NetworkManager) is commonly used Desktop machines while [systemd-networkd](#systemd-networkd) is used on servers without a [GUI](#GUI).
