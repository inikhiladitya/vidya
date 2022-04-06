---
created: 20211029073153522
modified: 20211031193144589
title: route
---

- `areas:` [[Networking]]

---

`route` is use to work with the IP/kernel routing table. It is mainly used to set up static routes to specific hosts or networks via an interface. It is used for showing or update the IP/kernel routing table.

### Examples

- To display routing table/names numeric form:
  - `route -n`
  - A capital `G` in the `Flags` column, indicates the [default gateway](#default%20gateway)
- To change default gateway:
  - Removing existing default gateway: `route del default gw 192.168.0.1`
  - Add a new default gateway: `route add default gw 192.168.0.2`
