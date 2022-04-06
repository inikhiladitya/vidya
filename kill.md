---
created: 20211028132557814
modified: 20211031193142316
title: kill
---

- `areas:` [[Linux]]

---

`kill` is used to terminate a process.

It sends a [signal](#signal) to a [process](#process) or a group of processes causing them to act according to the signal.

When the signal is not specified its default is: 15 or [SIGTERM](#SIGTERM)

`kill -l` to list all available signals: [SIGHUP](#SIGHUP),[SIGKILL](#SIGKILL) etc

Besides `kill`, [killall](#killall) and [pkill](#pkill) can also be used to send signals to processes.
