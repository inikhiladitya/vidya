---
created: 20211028135602438
modified: 20211031193142331
title: killall
---

- `areas:` [[Linux]]

---

`killall` is used for killing any or all running process on the system based on a given name. This command will terminate the processes forcibly when a specified name matches. If no [signal](#signal) name is specified, [SIGTERM](#SIGTERM) is sent.

It takes name of the process, instead of the [PID](#PID).

`killall` doesn't accept partial names, to [kill](#kill) using partial names, use [pkill](#pkill)

### Example

- `killall -15 processName`
