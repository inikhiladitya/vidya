---
created: 20211022180919380
modified: 20211031193141544
tags:
  - tidbits
title: Get MAC Address from ifconfig
---

- `areas:` [[Networking]]

---

`ifconfig | grep ether | cut -d" " -f10`  
using [[cut]], [[ifconfig]], [[grep]]
