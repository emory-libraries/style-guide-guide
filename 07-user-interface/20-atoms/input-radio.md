---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-radio

title: Input - Radio
id: 20-atoms-forms-05-input-radio
plid: atoms-input-radio
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Inputs are used to collect data from users. Radio inputs are especially useful for gathering choice or preference information, where users must choose a single item from a list of mutually exclusive options.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-radio
```


### Description

The input radio atom can be used to insert a radio field into a form. Use radio inputs to collect a user's choice from among a list of options.


### Best Practices

Optionally, create a bulleted list of best practices for how to properly use this pattern in production and/or integrate this pattern within other user interface components.


## Schema

| Name        | Type      | Description                                           | Value(s)            | Default   |
|-------------|-----------|-------------------------------------------------------|---------------------|-----------|
| id          | `String`  | A unique ID for the field.                            |                     |           |
| group       | `String`  | A group ID that the field belongs to.                 |                     |           |
| label       | `String`  | Some text used to identify the purpose of the field.  |                     |           |
| checked     | `Boolean` | Whether the field state is **checked**.               | `true` or `false`   | `false`   |
| focus       | `Boolean` | Whether the field state is **focused**.               | `true` or `false`   | `false`   |
| disabled    | `Boolean` | Whether the field state is **disabled**.              | `true` or `false`   | `false`   |
| valid       | `Boolean` | Indicates that the field was **passed** validation.   | `true` or `false`   | `false`   |
| invalid     | `Boolean` | Indicates that the field was **failed** validation.   | `true` or `false`   | `false`   |


## Classes

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-checked`      | Indicates that the field is **checked**.                              |
| `is-focused`      | Indicates that the field is being **focused**.                        |
| `is-disabled`     | Indicates that the field is **disabled**.                             |
| `is-valid`        | Indicates that the field has **passed** validation.                   |
| `is-invalid`      | Indicates that the field has **failed** validation.                   |
