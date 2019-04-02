---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-textarea

title: Input - Textarea
id: 20-atoms-forms-06-input-textarea
plid: atoms-input-textarea
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Inputs are used to collect data from users. Time inputs are especially useful for gathering long-form, open-ended information.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-textarea
```


### Description

The input text atom can be used to insert a text field into a form. Use text inputs to collect user data in the form of long, open-ended responses.


### Best Practices

- Always use the most appropriate input field for the job
- Use clear and consise labels to identity the purpose of an input field
- Utilize placeholders to hint at the type of data that is desired


## Schema

| Name        | Type      | Description                                           | Value(s)            | Default   |
|-------------|-----------|-------------------------------------------------------|---------------------|-----------|
| id          | `String`  | A unique ID for the field.                            |                     |           |
| label       | `String`  | Some text used to identify the purpose of the field.  |                     |           |
| value       | `String`  | Some optional text used as the field's initial value. |                     |           |
| placeholder | `String`  | Some placeholder text to be displayed.                |                     |           |
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
