---
created: 20211028135238397
title: SIGKILL
---

- `areas:` [[Linux]]

---

The SIGKILL [signal](#signal) is sent to a [process](#process) to cause it to terminate immediately ([kill](#kill)). In contrast to [SIGTERM](#SIGTERM) and [SIGINT](#SIGINT), this signal cannot be caught or ignored, and the receiving process cannot perform any clean-up upon receiving this signal.

> —via [POSIX signals](https://dsa.cs.tsinghua.edu.cn/oj/static/unix_signal.html)

- Also known as `hard kill`
