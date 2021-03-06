---
created: 20211017154535144
modified: 20211031193145075
title: stat
---

`stat` is a command-line utility that displays detailed information about given files or file systems.

When invoked without any options, `stat` displays the following file information:

- File - The name of the file.
- Size - The size of the file in bytes.
- Blocks - The number of allocated blocks the file takes.
- IO Block - The size in bytes of every block.
- File type - (ex. regular file, directory, symbolic link.)
- Device - Device number in hex and decimal.
- Inode - Inode number.
- Links - Number of hard links.
- Access - File permissions in the numeric and symbolic methods.
- Uid - User ID and name of the owner .
- Gid - Group ID and name of the owner.
- Context - The SELinux security context.
- Access - The last time the file was accessed.
- Modify - The last time the file’s content was modified.
- Change - The last time the file’s attribute or content was changed.
- Birth - File creation time (not supported in Linux).

> —via [Stat Command in Linux](#%20Linuxize%7Chttps%3A%2F%2Flinuxize.com%2Fpost%2Fstat-command-in-linux%2F)
