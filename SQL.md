---
created: 20211105134756444
modified: 20211108171459444
tags:
  - computer-science
  - data-engineering
title: SQL
---

### SQL stands for Structured Query Language, MySQL is a relational database, every(column, row) is related to each other.

SQL is not case sensitive but as an industry standard practice, use uppercase for SQL keywords and lowercase for all the other things when writing queries.

Order of the clauses matter

1.  [SELECT](#SELECT)
2.  [FROM](#FROM)
3.  [WHERE](#WHERE)
4.  [ORDER BY](#ORDER%20BY)

Line breaks, whitespaces, tabs are ignored when executing SQL code, each clause are written on a new line for better readability.

- Composite primary key contains more than one column

## Getting started

To get started, install:

- `sudo apt-get install mysql-server mysql-client libmysqlclient-dev`
- Also install [Mysql Workbench](https://www.mysql.com/products/workbench/)
- See [Access denied for user 'root'@'localhost'](#Access%20denied%20for%20user%20'root'%40'localhost')

## Retrieving Data From a Single Table

- [SELECT](#SELECT) clause

### Combine multiple multiple search conditions when filtering data

- The [AND, OR and NOT](#AND%20OR%20NOT) operators
- [IN](#IN) operator
- [BETWEEN](#BETWEEN) operator
- [LIKE](#LIKE) command
- [REGEXP](#REGEXP) command
- [NULL](#NULL) value
- [ORDER BY](#ORDER%20BY) clause
- [LIMIT](#LIMIT) clause

---

## Retrieving Data From Multiple Tables

- [JOIN](#JOIN) operator
- [USING](#USING) clause
- [NATURAL JOIN](#NATURAL%20JOIN) - not recommend, can produce unexpected results
- [CROSS JOIN](#CROSS%20JOIN)
- [UNION](#UNION) - combine rows from multiple tables and queries

---

## Inserting, Updating, and Deleting Data

### Column attributes

- Column name
- Datatype:
  - `INT` (whole numbers, no decimals)
  - `VARCHAR` (variable-characters used for strings, textual values, max length can be assigned inside paranthesis)
  - `DATE`
  - `CHAR` (unlike VARCHAR, max length assigned to CHAR is not variable and will be assigned indefinitely no matter the input size of the string)
- Primary Key
- [NOT NULL](#NOT%20NULL)
- `AUTO_INCREMENT` (often used with primary key columns, mysql or other engines will auto assign a value)
- Default values/Expression (can be specified in this column)

## Inserting

- [INSERT INTO](#INSERT%20INTO)

## Creating

- [CREATE TABLE](#CREATE%20TABLE)

The SELECT clause on the above query is known as a `Subquery`, another example of Subquery:

    -- right click on orders_archived table and truncate to delete all records
    INSERT INTO orders_archived
    SELECT *
    FROM orders
    WHERE order_date < '2019-01-01'

## Updating

- [UPDATE](#UPDATE)

## Deleting Rows

- [DELETE FROM](#DELETE%20FROM)

---

## Summarizing Data

- [Aggregate Functions](#Aggregate%20Functions)
- [GROUP BY](#GROUP%20BY) clause
- [HAVING](#HAVING) clause
- [ROLLUP](#ROLLUP) operator
