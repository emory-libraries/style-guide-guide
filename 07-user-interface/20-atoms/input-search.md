---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-search

title: Input - Search
id: 20-atoms-forms-07-input-search
plid: atoms-input-search
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Inputs are used to collect data from users. Search inputs are especially useful for allowing users to search for information within our site.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-search
```


### Description

The input search atom can be used to insert a search field into a form or page. Use search inputs to collect user queries in order to perform a site-wide or database-level search.


### Best Practices

- Always use the most appropriate input field for the job
- Use clear and consise placeholders to identity the purpose of the search field


| Name        | Type      | Description                                           | Value(s)            | Default   |
|-------------|-----------|-------------------------------------------------------|---------------------|-----------|
| id          | `String`  | A unique ID for the field.                            |                     |           |
| placeholder | `String`  | Some placeholder text to be displayed.                |                     |           |
| focus       | `Boolean` | Whether the field state is **focused**.               | `true` or `false`   | `false`   |
| disabled    | `Boolean` | Whether the field state is **disabled**.              | `true` or `false`   | `false`   |
| valid       | `Boolean` | Indicates that the field was **passed** validation.   | `true` or `false`   | `false`   |
| invalid     | `Boolean` | Indicates that the field was **failed** validation.   | `true` or `false`   | `false`   |


## Classes

### Variations

| Class           | Description                                 |
|-----------------|---------------------------------------------|
| `-big`          | Uses a big version of the search field.     |
| `-small`        | Uses a small version of the search field.   |

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-focused`      | Indicates that the field is being **focused**.                        |
| `is-disabled`     | Indicates that the field is **disabled**.                             |
| `is-valid`        | Indicates that the field has **passed** validation.                   |
| `is-invalid`      | Indicates that the field has **failed** validation.                   |

