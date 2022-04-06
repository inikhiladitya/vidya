---
created: 20211029074105340
modified: 20211031193140960
title: DNS Server
---

- `areas:` [[Networking]],[[Linux]]

---

- On the latest version of Ubuntu, the DNS is under the control of [[systemd-resolve]] [[daemon]].
- A service that provides DNS name resolution to local services and applications and can be configured with [[netplan]], the default network management tool on Ubuntu.
- To display the DNS server used by the system:
  - `systemd-resolve --status`
