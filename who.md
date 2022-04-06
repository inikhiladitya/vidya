---
created: 20211026121830427
modified: 20211031193146163
title: who
---

- `areas:` [[Linux]]

---

- It displays the [RUID](#RUID%20and%20EUID), the user that initially logged in(the current shell).
- `who` parses and displays the contents of the file [/var/run/utmp](#%2Fvar%2Frun%2Futmp), that logs the current users on the system.
- [/var/log/wtmp](#%2Fvar%2Flog%2Fwtmp) - its kinda like history for the [/var/run/utmp](#%2Fvar%2Frun%2Futmp) file, it maintains the logs for all the logged in users and logged out users (in the past)
- `who -H` -H Prints a line of column headings.
- `who -aH` a for –all
- `w` command provides list of users that are logged in, what current processes are they running
  - `load average` value should be below `1` or else theres a problem
  - [uptime](#uptime) command also provides the same info
