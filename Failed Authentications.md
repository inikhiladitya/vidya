---
created: 20211022173313843
modified: 20211031193141239
tags:
  - tidbits
title: Failed Authentications
---

- `cat -n /var/log/auth.log | grep -a "authentication failure"`
- `cat -n /var/log/auth.log | grep -a "authentication failure" | wc -1` using [cat](#cat), [grep](#grep) and [wc](#wc)
