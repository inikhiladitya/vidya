---
created: 20211123201345476
modified: 20211123202411511
title: gawk
---

- `areas:` [[Linux]]

---

`gawk` or `awk` is a very powerful text processing tool.

### Example

gawk can parse the results of the "uptime" command (uptime provides length of time a Linux server has been running and some other system load data).

Getting the eigth field from the [[stdout]] of [[uptime]]

`uptime|sed 's/min,\ //' |sed 's/,//g'|awk '{print $8}'`
