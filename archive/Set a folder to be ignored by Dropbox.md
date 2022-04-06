---
created: 2022-04-01
title: Set a folder to be ignored by Dropbox
tags:
  - tidbits
---

- `areas:` [[Linux]]

---
## Set to ignore

`attr -s com.dropbox.ignored -V 1 /path/to/dir`

## Set to un-ignore

`attr -r com.dropbox.ignored`
