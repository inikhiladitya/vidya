---
created: 20211124212945335
modified: 20211124213025017
tags:
  - tidbits
title: Give execution permissions
---

- `areas:` [[Linux]]

---

To give yourself execute permission for the file containing the script use the command:

`chmod u+rwx filename.py`

To give other users permission to read and execute but not alter the shell script use:

`chmod go+rx filename.py`
