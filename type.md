---
created: 20211028080401139
modified: 20211031193145784
title: type
---

- `areas:` [[Linux]]

---

- There are two type of commands, executables files on the disk and shell builtin commands.
- To check if a command is an executable or a shell builtin command, use `type` followed by the command you want to check, example: `type df`, if it returns a path, its an executable and will have a dedicated [Man Page](#Man%20Pages).
- If a command is a shell builtin, such as: `type cd`, it'll return "cd is a shell builtin".
- `type` is also a shell builtin
