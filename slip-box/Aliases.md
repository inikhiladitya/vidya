---
created: 20211012141734163
modified: 20211031193139827
title: Aliases
---

- `areas:` [[Linux]]

---

- Aliases for commands
- Nicknames for your pipelines
- To get started you need a file in your user's `Home` dir named `.bash_aliases`
- Write the command inside the `.bash_aliases` file after writing `alias aliasName='command1 -opt args | command2 -opt args ...'` or alias for command that don't accept [stdin](#stdin) can be acheived by `alias aliasName='xargs command -opt args...'`
- Example:

`alias getdates='date | tee /home/user/date.txt | cut -d " " -f 1 | tee /home/user/day.txt | xargs echo hello'`

- You can also build piplines using multiple aliases, the first command in an alias should accept [stdin](#stdin)
- Terminal will have to be rebooted after creating an alias.
