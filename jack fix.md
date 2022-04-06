---
created: 20211121165344861
modified: 20211121165356150
title: jack fix
---

- `areas:` [[Linux]],[[Music]]

---

`pacmd load-module module-jack-source channels=2; pacmd load-module module-jack-sink channels=1;`

`killall jackd`
