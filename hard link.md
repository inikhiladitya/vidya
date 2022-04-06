---
created: 20211024094337852
modified: 20211031193141686
title: hard link
---

- `areas:` [[Linux]]

---

- It is an association between an [inode](#inode) structure and a file name in a directory.
- You cannot create a hard link to a directory.
- All hard links have some [inode](#inode) structure and [inode](#inode) number

### Example

- `ps aux > processes.txt`
  - To create a [hard link](#hard%20link): `ln processes.txt p.txt`
  - If we were to change the location of `processes.txt`, `p.txt` will not be effected.
