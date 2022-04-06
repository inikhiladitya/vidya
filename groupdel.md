---
created: 20211026114228339
modified: 20211031193141644
title: groupdel
---

- `areas:` [[Linux]]

---

`groupdel` command is used to delete an existing [group](#groups)

Syntax:

`sudo groupdel groupName`

- On successful deletion it doesn't print any output
- It is not possible to delete the primary group of an existing user without first removing the user with [userdel](#userdel)
