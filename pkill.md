---
created: 20211028140114463
modified: 20211031193144027
title: pkill
---

- `areas:` [[Linux]]

---

`pkill` is used to send [signal](#signal) to the [process](#process)es of a running program based on given criteria. The processes can be specified by their full or partial names(unlike [killall](#killall)), a user running the process, or other attributes.

`pkill` is basicity a wrapper around the [pgrep](#pgrep) program that only prints a list of matching processes.

### Example

- `pkill processName` or `pkill partialProcessNa`
