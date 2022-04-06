---
created: 20211028133927951
modified: 20211031193144881
title: SIGHUP
---

- `areas:` [[Linux]]

---

The SIGHUP signal is sent to a process when its controlling terminal is closed. It was originally designed to notify the process of a serial line drop (a hangup). In modern systems, this signal usually means that the controlling pseudo or virtual terminal has been closed. Many daemons will reload their configuration files and reopen their logfiles instead of exiting when receiving this signal. [nohup](#nohup) is a command to make a command ignore the [signal](#signal).

> —via [POSIX signals](https://dsa.cs.tsinghua.edu.cn/oj/static/unix_signal.html)

### Example

Servers read their configuration file only once on their boot up to make them reload, we can use SIGHUP signal, in this example, we'll use [ssh](#ssh) [daemon](#daemon)

- `sudo systemctl status ssh`
- `tail -f /var/log/auth.log/`
- The [PID](#PID) of a server, is typically located inside `/var/run` dir
  - `ssh.pid` will be the name of the file that is storing the [PID](#PID) in our case
- `cat /var/run/ssh.pid` or `pgrep -l sshd` using [pgrep](#pgrep)
- `sudo kill -1 processID` or `sudo kill -1 $(cat /var/run/sshd.pid)`
  - The daemon should reload
