---
created: 20211028201906978
modified: 20211031193141440
title: foreground process
---

- `areas:` [[Linux]]

---

Foreground processes are started by the user and not by the system services and while they're running, the user cannot start another from the same terminal. By default every [process](#process) you start runs in the foreground. It gets its input from the keyboard and sends output through the terminal. Simulate this using the [sleep](#sleep) command, `sleep 15` will run in foreground for 15 seconds.

You can suspend processes running in the foreground anytime by using `Ctrl + Z`, the process will not be discarded from the RAM or terminated, it was simply temporarily stopped and can be viewed using [jobs](#jobs) command when ran from the same shell that started the foreground process.

You can resume is anytime using [fg](#fg) or [bg](#bg)

- `bg %JobID` resumes it in the background
- `fg %JobID` resumes it in the foreground
