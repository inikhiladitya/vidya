---
created: 20211026111556344
modified: 20211031193145920
title: userdel
---

- `areas:` [[Linux]]

---

`userdel` is used to delete a user, it also deletes the group with the same name as the user, if no other user belongs to that group.

- Deleting a user
  - `sudo userdel james` account will be removed but the home dir will stay
- Deleting a user along with it's home dir
  - `sudo userdel -r james`
- If the group `james` was not the primary group of that user, it will not removed by default
- Other files belonging to `james` will not be deleted, will have to be removed manually
- Just like [adduser](#adduser) for [useradd](#useradd), [Debian](#Debian) and [Ubuntu](#Ubuntu) have a friendlier command line utility [deluser](#deluser) that uses userdel as backend.
