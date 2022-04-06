---
created: 20211027125030938
modified: 20211031193140338
title: Combining Find and Chmod Commands Together
---

- `areas:` [[Linux]]

---

To recursively set permissions for all files to a specific value, you should exclude the directories in the path otherwise the directories will have same permissions as the files, see: [[The Effect of Permissions on Directories]]

To mitigate this, we can combine [[find]] and [[chmod]] commands together

Example

- `find ~ -type f -exec chmod 640 {} \;` for all files
- `find ~ -type d -exec chmod 750 {} \;` for all directories
