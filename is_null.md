---
created: 20211105172925502
modified: 20211105173224058

title: IS NULL
---

- `areas:` [[SQL]]

The `IS NULL` operator is used to test for empty values ([NULL](#NULL) values).

    SELECT *
    FROM customers
    WHERE phone IS NULL

using with NOT operator

    SELECT *
    FROM customers
    WHERE phone IS NOT NULL
