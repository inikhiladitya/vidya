---
created: 20211027181819556
modified: 20211031193141349
title: File Attributes
---

- `areas:` [[Linux]]

---

### File Attributes

- A part from permissions Linux also has advance access control features such as [ACL](#ACL)s and attributes.
- The attributes define the properties of the files, they depend on the underlying file system such as [ext4](#ext4) where the attribute data must be stored along with other control structures.
- Each file attribute can have one of the two states: `set` or `clear`
- Attributes is separate from other metadata such as file system permissions, owners, groups, timestamps and so on.
- [ls](#ls) doesn't display the file attributes, use [lsattr](#lsattr) for that and to change attributes use [chattr](#chattr)
