---
created: 20211012134449205
modified: 20211031193146302
title: xargs
---

- `areas:` [[Linux]]

---

- Picking up here from [[Piping]] and [[tee]]
- The xargs come into play for commands that don't accept any [[stdin]] to be piped, commands that only accept commad arguments.
- Example: `echo` command doesn't accept any [[stdin]], it only accepts command args
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
