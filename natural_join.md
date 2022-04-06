---
created: 20211106113055598
modified: 20211106113237245

title: NATURAL JOIN
---

- `areas:` [[SQL]]

We don't need to explicity define what column names to compare, the engine will look at the tables and join them based on the common columns

    SELECT
            o.order_id,
            c.first_name
    FROM orders o
    NATURAL JOIN customers c
