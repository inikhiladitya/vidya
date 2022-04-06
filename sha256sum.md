---
created: 20211023105342825
modified: 20211031193144840
title: sha256sum
---

- `areas:` [[Linux]]

---

The `sha256sum` command displays or checks [SHA256](#SHA256) (256-bit) checksums. With no FILE, or when FILE is - (a dash), it reads the digest from standard input.

- \-b, –binary Read in binary mode.
- \-c, –check Read SHA256 sums from the FILEs and check them.
- –tag Create a BSD-style checksum.
- \-t, –text Read in text mode (default).
- –quiet Don't print OK for each successfully verified file.
- –status Don't output anything, status code shows success.
- –strict Exit non-zero for improperly formatted checksum lines.
- \-w, –warn Warn about improperly formatted checksum lines.

Example:

- `cp /usr/bin/ls .` - copying the [ls](#ls) binary to current working dir
  - `sha256sum /usr/bin/ls ./ls` - if the hashes are same, it means both the files are identical
- Modifying the [ls](#ls) binary that was previously copied: `echo "a" > ls`
  - check again `sha256sum /usr/bin/ls ./ls` and the hashes return will be different

See also: [cmp](#cmp), [diff](#diff)
