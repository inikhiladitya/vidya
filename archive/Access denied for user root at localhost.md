---
created: 20211104223035711
modified: 20211119030214796
tags:
  - tidbits
title: Access denied for user 'root'@'localhost'
---

- `areas:` [[SQL]]

`sudo mysql`

or

Add switch -p for password based login:

`mysql -u root -p`

`SELECT user,authentication_string,plugin,host FROM mysql.user;`

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Current-Root-Password';FLUSH PRIVILEGES;`

## OR

`INSERT INTO mysql.user (Host, User, Password) VALUES ('%', 'root', password('YOURPASSWORD')); GRANT ALL ON *.* TO 'root'@'%' WITH GRANT OPTION;`

`sudo mysql -u root -p`
