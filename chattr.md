---
created: 20211027181733650
modified: 20211031193140131
title: chattr
---

- `areas:` [[Linux]]

---

`chattr` is used to change [File Attributes](#File%20Attributes) on a Linux file system.

The operator `+` causes the selected attributes to be added to the existing attributes of the files; `-` causes them to be removed; and `=` causes them to be the only attributes that the files have. (via `man chattr`)

The letters 'acdeijstuADST' select the new attributes for the files:

- append only (a)
- compressed (c)
- no dump (d)
- extent format (e)
- immutable (i)
- data journalling (j)
- secure deletion (s)
- no tail-merging (t)
- undeletable (u)
- no [atime](#atime) updates (A)
- synchronous directory updates (D)
- synchronous updates (S)
- top of directory hierarchy (T)

The following attributes are read-only, and may be listed by [lsattr](#lsattr) but not modified by [chattr](#chattr):

- huge file (h)
- compression error (E)
- indexed directory (I)
- compression raw access (X)
- compressed dirty file (Z)

Not all flags are supported or utilized by all file systems; refer to file system-specific man pages such as [btrfs](#btrfs), [ext4](#ext4), and [xfs](#xfs) for more file system-specific details.

> —via [chattr(1): change file attribs on file system - Linux man page](https://linux.die.net/man/1/chattr)

### Examples

- `sudo chattr +a file.txt` now `file.txt` is append only
- `sudo chattr +A file.txt` no access time ([atime](#atime)) update (helps save system resources)
- `sudo chattr +i file.txt` cannot be modified, deleted, no [hard link](#hard%20link), no read, write, change permission. Only the the superuser (root) user has the capability to set or clear this attribute(only then the file can be removed)
- `sudo chattr -R +i dirName` to set it recursively
