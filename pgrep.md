---
created: 20211028101903224
modified: 20211031193143928
title: pgrep
---

- `areas:` [[Linux]]

---

`pgrep` looks through the currently running processes and lists the process IDs which match the selection criteria to stdout(to the terminal). All the criteria have to match.

For example

`pgrep -u root sshd` will only list the processes called sshd AND owned by root. On the other hand, `pgrep -u root,daemon` will list the processes owned by root OR daemon.

- `pgrep -l sshd` to get both [process](#process) IDs and names
- `pgrep -l cups` its not looking for the whole name but also partial names

See also: [pstree](#pstree)
