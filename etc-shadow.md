---
created: 20211026071356868
modified: 20211031193139722
title: /etc/shadow
---

- `areas:` [[Linux]]

---

- Stores passwords on behalf of [/etc/passwd](#%2Fetc%2Fpasswd) in an encrypted format
- Hash of the password and other attributes such as a password's expiration date
- It is only readable by the root account
- Contains 9 comma separated fields

<!-- end list -->

1.  Username - it is how the corresponding line is connected to [/etc/passwd](#%2Fetc%2Fpasswd)
2.  The password, the entire string between the colons

<!-- end list -->

- The other seven fields related to password expiration, last password change, minimum maximum password age, so on.
- If the password field contains an `*` or `!`, it means the user cannot login using the password, other login methods, like key based authentication or switching users is still allowed.
- Password format is set to `$type$salt$hash`
  - $type:
    - `1` [MD5](#MD5)
    - `2a` [Blowfish](#Blowfish)
    - `2y` [Eksblowfish](#Eksblowfish)
    - `5` [SHA256](#SHA256)
    - `6` [SHA512](#SHA512)
  - $salt: A salt combined with the password is added to the hashing process to enforce the uniqueness of hash generated. $salt is random but not secret. It helps mitigate attacks such as [Rainbow table](#Rainbow%20table)s.
- Never edit the shadow file manually, use a command line tool designed for doing so.

Check [Man Pages](#Man%20Pages) `man shadow`
