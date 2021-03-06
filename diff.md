---
created: 20211023110101081
modified: 20211031193140855
title: diff
---

- `areas:` [[Linux]]

---

`diff` stands for difference. This command is used to display the differences in the files by comparing the files line by line. Unlike its fellow members, [cmp](#cmp) and [comm](#comm), it tells us which lines in one file have is to be changed to make the two files identical. It can also compare the contents of directories.

The important thing to remember is that diff uses certain special symbols and instructions that are required to make two files identical. It tells you the instructions on how to change the first file to make it match the second file.

Special symbols are:

- a : add
- c : change
- d : delete
- Lines preceded by a `<` are lines from the first file.
- Lines preceded by `>` are lines from the second file.

> —via [diff command in Linux with examples - GeeksforGeeks](https://www.geeksforgeeks.org/diff-command-linux-examples/)

Example:

- `diff file1 file2`

The diff command is most commonly used to create a [patch](#patch) containing the differences between one or more files that can be applied using the `patch` command.

### Other options include

- \-B to ignore blank lines
- \-w to ignore white spaces
- \-i to ignore case differences
- \-c to do a detailed comparison
- \-y to get a detailed comparison side by side on two columns

See also: [cmp](#cmp), [sha256sum](#sha256sum)
