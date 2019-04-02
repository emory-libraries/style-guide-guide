---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-select

title: Input - Select
id: 20-atoms-forms-06-input-select
plid: atoms-input-select
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Inputs are used to collect data from users. Select inputs are especially useful for gathering choice or preference information, where users must choose a single item from a list of predefined options.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-select
```


### Description

The input select atom can be used to insert a select field into a form. Use radio inputs to collect a user's choice from among a dropdown list of options.


### Best Practices

- Always use the most appropriate input field for the job
- Use clear and consise labels to identity the purpose of an input field


## Schema

| Name                    | Type                    | Description                                                           | Value(s)            | Default   |
|-------------------------|-------------------------|-----------------------------------------------------------------------|---------------------|-----------|
| id                      | `String`                | A unique ID for the field.                                            |                     |           |
| label                   | `String`                | Some text used to identify the purpose of the field.                  |                     |           |
| multiple                | `Boolean`               | Whether the field allows for multiple selections.                     | `true` or `false`   | `false`   |
| focus                   | `Boolean`               | When `multiple` is enabled, whether the field state is **focused**.   | `true` or `false`   | `false`   |
| blur                    | `Boolean`               | When `multiple` is enabled, whether the field state is **blurred**.   | `true` or `false`   | `false`   |
| open                    | `Boolean`               | When `multiple` is disabled, whether the field state is **opened**.   | `true` or `false`   | `false`   |
| close                   | `Boolean`               | When `multiple` is disabled, whether the field state is **closed**.   | `true` or `false`   | `false`   |
| disabled                | `Boolean`               | Whether the field state is **disabled**.                              | `true` or `false`   | `false`   |
| options                 | `Array`                 | A list of options to be displayed.                                    | `true` or `false`   | `false`   |
| options.[`n`]           | `Object` or `String`    | Some data about option `n`, or its value and label as a string.       | `true` or `false`   | `false`   |
| options.[`n`].value     | `Object`                | An optional value to assign to option `n`, requires `Object` format.  |                     |           |
| options.[`n`].label     | `Object`                | The text to be displayed for option `n`, requires `Object` format.    |                     |           |
| options.[`n`].selected  | `Object`                | Whether option `n` is **selected**, requires `Object` format.         | `true` or `false`   | `false`   |
| options.[`n`].disabled  | `Object`                | Whether option `n` is **disabled**, requires `Object` format.         | `true` or `false`   | `false`   |


## Classes

### States

| Class             | Description                                                                                                   |
|-------------------|---------------------------------------------------------------------------------------------------------------|
| `is-focused`      | When `multiple` is enabled, indicates that the field is **focused**.                                          |
| `is-blurred`      | When `multiple` is enabled, indicates that the field is **blurred**.                                          |
| `is-open`         | When `multiple` is disabled, indicates that the field is **open**.                                            |
| `is-closed`       | When `multiple` is disabled, indicates that the field is **closed**.                                          |
| `is-disabled`     | Indicates that the field is **disabled**. When used on an option, indicates that the option is **disabled**.  |
| `is-selected`     | Used only for options, indicates that the option is **selected**.                                             |
