---
tags:
  - articles
---

# [Fri](https://satsumasbloggen.com/software/fri/)

*Fri* is a program for writing without distractions.

![screenshot](https://satsumasbloggen.com/images/fri_screenshot.png)

## What can I use it for?

You can use *Fri* for writing documentation, job applications, letters, novels, anything where you don't want your creativity to be kept back by distracting technicalities.

## Write now, edit later

The main feature of *Fri* is its lack of features. *Fri* doesn't have any support for text formatting nor any support for text editing beyond using backspace. This frees you from worrying about structure and formatting, making you much more productive. The idea is to produce content in *Fri*, then to open the resulting text file in a different program and refine it.

*Fri* is best used with the terminal emulator in full screen mode in order to shield you from distractions such as email or instant messaging.

## Why not just do `cat > out.txt`?

You can indeed use `cat`, but `cat` does not auto-save your data. It shows all previous lines of text and does not perform automatic line breaking. Also, it is all to easy to overwrite your data by typing `cat > my_bestselling_novel.txt`, when you really meant `cat >> my_bestselling_novel.txt`.

## Documentation

See the [man page](https://satsumasbloggen.com/fri.1.html).

## Installing Fri

*Fri* can be built for most Unix-like operating systems, including Linux, Free­BSD and Open­BSD.

1.  Clone the git repo with `git clone https://satsumasbloggen.com/repo/fri`
2.  Make sure the `ncurses` library has been installed, including header files.
3.  `cd fri`
4.  `make`
5.  Copy the `fri` executable to somewhere in your `$PATH`.

## Release history

### v1.1.0 (2022-03-24)

Added Hemingway mode.

### v1.0.0 (2022-03-23)

Initial release.

## Contact

Please send comments and bug reports to Fredrik Arnerup [arnerup@kth.se](mailto:arnerup@kth.se)