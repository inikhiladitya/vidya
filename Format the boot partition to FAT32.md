---
created: 20211101191427820
modified: 20211101191527893
tags:
  - tidbits
title: Format the boot partition to FAT32
---

- `areas:` [[Linux]]

---

`sudo mkfs.vfat -F32 /dev/sdb1` make sure to change `/dev/sdb1` to the appropriate disk name

> —via [How to Format USB Drives and SD Cards on Linux](#%20Linuxize%7Chttps%3A%2F%2Flinuxize.com%2Fpost%2Fhow-to-format-usb-sd-card-linux%2F)
