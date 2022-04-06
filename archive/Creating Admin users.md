---
created: 20211026113118414
modified: 20211031193140533
tags:
  - tidbits
title: Creating Admin users
---

### Creating Admin Users

- A user has to be added to the [sudo](#sudo) [group](#groups) or the `sudoer file` inorder for them to use `sudo` privileges, [usermod](#usermod) can be used to achieve this.
  - `sudo usermod -aG sudo james`
