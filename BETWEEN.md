---
created: 20211105154723420
modified: 20211105155759657
title: BETWEEN
---

- `areas:` [[SQL]]

---

The BETWEEN command is used to select values within a given range. The values can be numbers, text, or dates.

The BETWEEN command is inclusive: begin and end values are included.

    SELECT *
    FROM customers
    WHERE points >= 1000 AND points <= 3000

Can instead be written as

    SELECT *
    FROM customers
    WHERE points BETWEEN 1000 AND 3000

### Example

    SELECT *
    FROM customers
    WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01'
