---
created: 20211011140104292
modified: 20211123202434494
title: stdout
---

- It is part of [[Standard Data Stream]]
- [[stdout]] is denoted by the number 1 in the [[Standard Data Stream]]
- Example of changing destination of [[stdout]]: `cat 1> output.txt`
- Where `1` is the number of data stream `>` is direction and `output.txt` is destination. (note that we cannot add a space after `1` or before the `>` sign)
- Alternatively you can skip the `1` because Linux by default is expecting [[stdout]] so just do: `cat > output.txt`
- To avoid truncation (overwriting), you can use `>>` example:  
  `cat >> output.txt` and now whenever you try to redirect [[stdout]], it'll append instead of truncating.
- Example: `date >> date.md`
