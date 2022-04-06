---
created: 20211012130708337
modified: 20211123202434471
title: Piping
---

- The Pipe Symbol `|`
- Redirecting [stdout](#stdout) of a command as [stdin](#stdin) of another command is known as Piping.

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.xa8e0nfb4zr.png)

- Example: passing stdout from date using `|` symbol as the stdin for the [[cut]] command and then outputting ([[stdout|redirecting]]) it in a file `date.md` using `>` symbol.

`date | cut --delimiter=" " --fields=1 > date.md`

- We can also use the short forms

`date | cut -d " " -f 1 > date.md`

- We can also pass the [stdout](#stdout) as [stdin](#stdin) yet again using `|` symbol like

`date | cut -d " " -f 1 | command -opt args ...`

so on and so forth

Examples:

- `ls -lSh /etc/ | head`
- `ls -lSh /etc/ | head -n 20 | tail -n 1`

<!-- end list -->

- `cat -n /var/log/auth.log | grep -a "authentication failure"`
- `cat -n /var/log/auth.log | grep -a "authentication failure" | wc -1` using [[cat]], [[grep]] and [[wc]]

---

### The [tee](#tee) command

- Picking up here from [[Piping]]
- By default redirection of [stdout](#stdout) breaks pipelines, unless the `tee` command is used.
- We use `tee` command to continue using [stdout](#stdout) after redirecting it.
- The `tee` command helps us with data flow in two directions:

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.mgl2zixejh.png)

- Example:
  - `date | tee date.md | cut -d " " -f 1 > day.md`
    - Not only are we saving the full date inside `date.md` using the `tee` command but we are also saving the day inside `day.md`.
    - `date | tee date.md | cut -d " " -f 1 | tee day.md | command -opt args ...` to keep using [stdout](#stdout)

### Another Example using [[ifconfig]] and [[grep]]

- `ifconfig | grep ether` just prints [stdout](#stdout)
- `ifconfig | grep ether > mac.txt` only redirects [stdout](#stdout) to `mac.txt` without printing it out to the screen

Combining these two using the `tee` command

- `ifconfig | grep ether | tee mac.txt` now it would both create the file `mac.txt` and also print out the [stdout](#stdout)

### Append Option

- Passing the `-a` option to the `tee` command would instruct it to append the [stdout](#stdout) when redirecting it to a file instead of overwriting it.
- Example:
  - `who | tee -a who.txt`
  - `uname -r | tee -a who.txt kernel.txt` would append the kernel version to both `who.txt` as well as `kernel.txt`

---

### The [xargs](#xargs) command

- Picking up here from [Piping](#Piping) and [tee](#tee)
- The xargs come into play for commands that don't accept any [stdin](#stdin) to be piped, commands that only accept commad arguments.
- Example: `echo` command doesn't accept any [stdin](#stdin), it only accepts command args
- To work around this we first need to convert the [stdin](#stdin) into command args and then pipe it.
- Demonstration:

`date | echo` will not work nor will `date | echo "hello"` work

What will work is:

`date | xargs echo`

you can also pass `echo`'s own command args such as:

`date | xargs echo "hello"` but here it will run its own arg first

To see this in action:

`date | cut -d " " -f 1 | xargs echo`

---

- Using `cat` to get file names to delete from a file, passing(piping) it as args to `rm` command.
- Making a file and writing file names to be deleted.
- `FilesToDelete.txt` contains: date.txt day.txt
- Now:

`cat FilesToDelete.txt | xargs rm`
