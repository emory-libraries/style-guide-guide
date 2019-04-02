---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-date

title: Input - Date
id: 20-atoms-forms-02-input-date
plid: atoms-input-date
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Inputs are used to collect data from users. Date inputs are especially useful for gathering date information.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-date
```


### Description

The input date atom can be used to insert a date field into a form. Use date inputs to collect user data in the form of `mm-dd-yyyy` dates.


### Best Practices

- Always use the most appropriate input field for the job
- Use clear and consise labels to identity the purpose of an input field


## Schema

| Name        | Type      | Description                                           | Value(s)            | Default   |
|-------------|-----------|-------------------------------------------------------|---------------------|-----------|
| id          | `String`  | A unique ID for the field.                            |                     |           |
| label       | `String`  | Some text used to identify the purpose of the field.  |                     |           |
| focus       | `Boolean` | Whether the field state is **focused**.               | `true` or `false`   | `false`   |
| disabled    | `Boolean` | Whether the field state is **disabled**.              | `true` or `false`   | `false`   |
| valid       | `Boolean` | Indicates that the field was **passed** validation.   | `true` or `false`   | `false`   |
| invalid     | `Boolean` | Indicates that the field was **failed** validation.   | `true` or `false`   | `false`   |


## Classes

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-focused`      | Indicates that the field is being **focused**.                        |
| `is-disabled`     | Indicates that the field is **disabled**.                             |
| `is-valid`        | Indicates that the field has **passed** validation.                   |
| `is-invalid`      | Indicates that the field has **failed** validation.                   |
