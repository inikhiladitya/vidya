---
created: 20211026082726931
modified: 20211031193141670
title: groups
---

- `areas:` [[Linux]]

---

The primary purpose of groups is to define a set of privilages or permissions like read, write or execute for a given file that can be shared among users within the group.

There are two types of groups that a user can belong to:

- 1\. The primary group: The ID is stored in [/etc/passwd](#%2Fetc%2Fpasswd) and the group name in [/etc/group](#%2Fetc%2Fgroup)
  - When a user creates a file the user will be the owner of the file and its primary group will be the group owner of the file. (in Linux a file is owned both by a group and a user)
  - Each user should belong to exactly one primary group (usually the name of the group is same as the username and no other user would be part of this group)
- 2\. The secondary group: stored in [/etc/group](#%2Fetc%2Fgroup)
  - A user can belong to none or many secondary or supplementary groups.

---

- `grep 'userName' /etc/passwd`
  - Third field indicates the user ID, fourth indicates the primary group ID
- `grep 'groupID' /etc/group`
- To search for secondary groups that a user belongs to, type for `/username` after `less /etc/group`
  - If there are multiple users belonging to a secondary group, they'll be separated by a comma.
- You can also use the [id](#id) command to get info about the groups and their IDs the current user belongs to.

---

### The `groups` command

- `groups` when executed without any arguments returns all the groups the current user belongs to, the first group being the primary group.
- `groups username` to search for a specific user
