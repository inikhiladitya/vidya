---
created: 20211026103546875
modified: 20211031193145931
title: usermod
---

- `areas:` [[Linux]]

---

`usermod` is a command used to change the properties of an existing user.
It uses same options as [useradd](#useradd).

- Change comment of an existing user account
  - `sudo usermod -c 'Goland Developer' james`
- Change primary [group](#groups)
  - `sudo usermod -g daemon james`
  - `sudo usermod -G group1,group2 james` separated with comma with no intervening white space, if we don't mention the option `-a` for appending, the user will only be assigned to the groups mentioned (group1,group2) and will be removed from all the groups they previously belonged to.
  - `sudo usermod -aG sudo james` with this they'll be part of group1,group2 and sudo

See also: [groupadd](#groupadd), [userdel](#userdel)
