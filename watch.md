---
created: 20211022075034541
modified: 20211031193146101
title: watch
---

- `areas:` [[Linux]]

---

- `watch` is used to run any arbitrary command at regular intervals and displays the output of the command on the terminal window.
- It is useful when you have to execute a command repeatedly and watch the command output change over time. For example, you can use the watch command to monitor the system uptime or disk usage.
- The watch utility is a part of the [procps](#procps) (or [procps-ng](#procps-ng)) package which is pre-installed on nearly all Linux distributions.
- You can use `-d` flag to view difference between two successive updates, `-n` option to change the update interval time.
- Examples:
  - `watch -n 3 -d ls -l`
  - `watch date`
  - `watch ls`
  - `watch -n 1 -d ifconfig` to keep track of network traffic

> —via [Linux Watch Command](#%20Linuxize%7Chttps%3A%2F%2Flinuxize.com%2Fpost%2Flinux-watch-command%2F)
