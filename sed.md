---
created: 20211123201031067
modified: 20211123201304628
title: sed
---

- `topics:` [[Linux]]
- `resources:` [[The Grymoire's tutorial on SED]] 
***


`sed` command is used for string replacement

### Example

If we want to eliminate the "," in "Kutuzov," and redirect the output to a new-file

`sed 's/Kutuzov,/Kutuzov/' war-and-peace.txt > new-file`
