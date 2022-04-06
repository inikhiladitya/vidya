---
created: 20211026104643589
modified: 20211031193141630
title: groupadd
---

- `areas:` [[Linux]]

---

`groupadd` command is used to create a new user [groups](#groups).

Syntax:

`sudo groupadd [option] group_name `

- `sudo groupadd engineering` create a new group
- `tail -3 /etc/group` or `cat /etc/group` - check last 3 groups or all groups inside `/etc/group`
- Adding users to the group can be acheived using [useradd](#useradd), note that users can only be added to groups that have already been created using `groupadd`
- [groupmod](#groupmod) can be used to make changes to the group name, [groupdel](#groupdel) to delete a group
