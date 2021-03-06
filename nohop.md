---
created: 20211028205052387
modified: 20211031193143537
title: nohop
---

- `areas:` [[Linux]]

---

When you close a terminal, logout or disconnect, any processes running in that terminal will be terminated. [SIGHUP](#SIGHUP) signal is sent to the process and the process will be killed. This can become an issue if you're running a remote server, executing programs over SSH and if the connection drops, the session will be terminated, all the executed processes will stop, to avoid this issue, use `nohop` command which will make the process ignore all hang up signals.

[stdin](#stdin) will not be available to the user and `nohup.out` file is used as the default file for [stdout](#stdout) and [stderr](#stderr), it is created in the current working directory or if the user doesn't have the right permissions for the current directory, the file will be created in the user's home dir. If the output of the nohup command is redirected to some other file, nohup.out file is not generated.

If a process is started and its parent(bash shell) gets terminated, the process will be adopted by [init](#init) or [systemd](#systemd) which runs with the [PID](#PID) `1` and are the first process run by the system.

- `nohup sleep 123 &` will begin a `sleep` process

Alternatives to nohup are [GNU Screen](https://www.gnu.org/software/screen/) and [tmux](https://github.com/tmux/tmux)
