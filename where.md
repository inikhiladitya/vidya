---
created: 20211105145341977
modified: 20211105150346626
title: WHERE
---

- `areas:` [[SQL]]

WHERE returns only true conditions, it is used to filter data, query execution engine iterates and checks(evaluates) the condition and returns if true.

```sql
SELECT *
    FROM customers
    WHERE points > 3000`
```

We can use [Relational operators](#Relational%20operators) for comparison

- `==` - Is Equal To
- `=` - Assignment
- `!=` - Not Equal To
- `>` - Greater Than
- `<` - Less Than
- `>=` - Greater Than Or Equal To
- `<=` - Less Than Or Equal To

`<>` is also a "not equals to" operator

Enclose your string values inside single or double quotes:

`WHERE state = 'VA'` - it is not case sensitive

`WHERE birth_date > '1990-01-01' that is YYYY-MM-DD, dates are treated as strings in [[SQL]]`
