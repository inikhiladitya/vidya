---
created: 20211012132455881
modified: 20211031193145395
title: tee
---

- `areas:` [[Linux]]

---

- Picking up here from [[Piping]]
- By default redirection of [[stdout]] breaks pipelines, unless the `tee` command is used.
- We use `tee` command to continue using [[stdout]] after redirecting it.
- The `tee` command helps us with data flow in two directions:

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.mgl2zixejh.png)

- Example:
  - `date | tee date.md | cut -d " " -f 1 > day.md`
    - Not only are we saving the full date inside `date.md` using the `tee` command but we are also saving the day inside `day.md`.
    - `date | tee date.md | cut -d " " -f 1 | tee day.md | command -opt args ...` to keep using [[stdout]]

### Another Example using [[ifconfig]] and [[grep]]

- `ifconfig | grep ether` just prints [[stdout]]
- `ifconfig | grep ether > mac.txt` only redirects [[stdout]] to `mac.txt` without printing it out to the screen

Combining these two using the `tee` command

- `ifconfig | grep ether | tee mac.txt` now it would both create the file `mac.txt` and also print out the [[stdout]]

### Append Option

- Passing the `-a` option to the `tee` command would instruct it to append the [[stdout]] when redirecting it to a file instead of overwriting it.
- Example:
  - `who | tee -a who.txt`
  - `uname -r | tee -a who.txt kernel.txt` would append the kernel version to both `who.txt` as well as `kernel.txt`
