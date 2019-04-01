---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-table

title: Table
id: 20-atoms-tables-01-table
plid: atoms-table
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Tables help to arrange large amounts of data in a manner that's easy for end users to consume.

###### EXPORT VIA GRUNT

```
grunt export:atoms-table
```


### Description

The table atom allows you to include tabular data within another pattern. Use tables logically organize data sets into rows and columns.


### Best Practices

- Use tables selectively since they tend to not be mobile-friendly
  - Consider alternative methods of displaying your data before using a table


## Schema

| Name                      | Type      | Description                                                                 | Value(s)            | Default   |
|---------------------------|-----------|-----------------------------------------------------------------------------|---------------------|-----------|
| heading                   | `String`  | A heading for the table.                                                    |                     |           |
| caption                   | `String`  | A caption describing the table and its data.                                |                     |           |
| head                      | `Array`   | An optional set of rows within the table's header.                          |                     |           |
| head                      | `Array`   | An optional set of rows within the table's header.                          |                     |           |
| head.[`x`]                | `Array`   | An optional set of cells for the table's header row `x`.                    |                     |           |
| head.[`x`].[`y`]          | `Object`  | Some for cell `y` in the table's header row `x`.                            |                     |           |
| head.[`x`].[`y`].heading  | `String`  | Whether cell `y` in the table's header row `x` should be a heading.         | `true` or `false`   | `true`    |
| head.[`x`].[`y`].data     | `String`  | The contents to be displayed within cell `y` in the table's header row `x`. |                     |           |
| body                      | `Array`   | An optional set of rows within the table's body.                            |                     |           |
| body.[`x`]                | `Array`   | An optional set of cells for the table's body row `x`.                      |                     |           |
| body.[`x`].[`y`]          | `Object`  | Some for cell `y` in the table's body row `x`.                              |                     |           |
| body.[`x`].[`y`].heading  | `String`  | Whether cell `y` in the table's body row `x` should be a heading.           | `true` or `false`   | `false`   |
| body.[`x`].[`y`].data     | `String`  | The contents to be displayed within cell `y` in the table's body row `x`.   |                     |           |
| foot                      | `Array`   | An optional set of rows within the table's footer.                          |                     |           |
| foot.[`x`]                | `Array`   | An optional set of cells for the table's footer row `x`.                    |                     |           |
| foot.[`x`].[`y`]          | `Object`  | Some for cell `y` in the table's footer row `x`.                            |                     |           |
| foot.[`x`].[`y`].heading  | `String`  | Whether cell `y` in the table's footer row `x` should be a heading.         | `true` or `false`   | `false`   |
| foot.[`x`].[`y`].data     | `String`  | The contents to be displayed within cell `y` in the table's footer row `x`. |                     |           |


## Classes

### Variations

Classes used to indicate style variations are always prefixed with `-`. These classes tend to change the way the pattern appears.

| Class       | Description                                     |
|-------------|-------------------------------------------------|
| `-heading`  | Displays a table cell as a heading.             |
