---
created: 20211024072419307
modified: 20211031193145319
title: tar
---

- `areas:` [[Linux]]

---

`tar` stands for tape archive, it is used to create compressed or uncompressed Archive files and also maintain and modify them. `tar` doesn't do compression by default but by passing specific options we can have it compress our files.

An Archive file is a file that is composed of one or more files along with metadata. Archive files are used to collect multiple data files together into a single file for easier portability and storage, or simply to compress files to use less storage space.

Archiving and Compressing are two different processes, for example:

- If you take 10 files of 100KB and archive them, the resulting single file would be 1000KB
- on the other hand, compressing those 10 files 100KB would result in a single file of varying size(close to the original fle), depending on the type of file. In general, text files have higher compression ratio.

### Options

- \-c : Creates Archive
- \-x : Extract the archive
- \-f : creates archive with given filename
- \-t : displays or lists files in archived file
- \-u : archives and adds to an existing archive file
- \-v : Displays Verbose Information
- \-A : Concatenates the archive files
- \-z : zip, tells tar command that creates tar file using gzip
- \-j : filter archive tar file using tbzip
- \-W : Verify a archive file
- \-r : update or add file or directory in already existed .tar file

---

### Examples

- `sudo tar -czvf /tmp/etc.tar.gz /etc`
  - `c` to create an archive
  - `z` to use [gzip](#gzip) for compression
  - `v` to make the process verbose
  - `f` to use the given filename for the generated `tarball` (the order of the option followed by the name of the file matters)
- `sudo tar -cjvf /tmp/etc.tar.bz2 /etc`
  - `j` to use [bzip2](#bzip2) for compression
- `sudo tar -czvf archive.tar.gz /etc/passwd /etc/group /var/log/dmesg /etc/ssh`
  - To compress and archive multiple files/dirs
- `tar --exclude='*.mkv --exclude='.config' --exclude='.cache' -czvf myHome.tar.gz ~`
  - To exclude any files from archival
- `tar -xzvf etc.tar.gz`
  - To extract (`x`) an archive
- `tar -xjvf etc.tar.baz2 -C /path-to-dir/`
  - `-C` followed by path, to extract to a specific dir
- `tar -tf etc.tar.bz2 | grep sshd_config`
  - To search if a specific file is part of an archive
- `sudo tar -cjvf etc-$(date + %F).tar.bz2 /etc`
  - To dynamically add current date to the filename using substitution([date](#date) +%f)
- `tar -xvf coreutils.tar.xz`
  - Files with `.xz` extension are compressed with [LZMA](#LZMA)
  - `tar` will autodetect the compression type and extract the file if you don't pass any compression type options (`z` or `j`)

### Misc Notes

- `tar` works recursively by default
- [bzip2](#bzip2) does better compression
- [gzip](#gzip) and [bzip2](#bzip2) are incompatiable with each other
- Do not pass any option(`z` or `j` ) to have `tar` autodetect the type of compression and uncompress accordingly.

See also: [gunzip](#gunzip), [gzip](#gzip), [bzip2](#bzip2), [bunzip2](#bunzip2)
