---
created: 20211107114041660
modified: 20211107114302323

title: DELETE FROM
---

- `areas:` [[SQL]]

We use `DELETE FROM` statement to delete records from a table

    DELETE FROM invoices
    -- WHERE can be optionally used to search and filter out results to delete
    WHERE client_id =
    -- using subquery
    (SELECT *
    FROM clients
    WHERE name = 'Myworks')
