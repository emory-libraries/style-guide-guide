---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-checkbox-group

title: Input - Checkbox Group
id: 20-atoms-forms-21-input-checkbox-group
plid: atoms-input-checkbox-group
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Input groups are used to group multiple, like input fields together. Checkbox input groups can be used to indicate to end users that a given group of checkboxes are related.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-checkbox-group
```


### Description

The input checkbox group atom can be used to insert a group of checkboxes into a form. Use checkbox groups to indicate to users when a set of checkboxes are associated.


### Best Practices

- Always use the most appropriate input field for the job
- Use clear and consise labels to identity the purpose of an input field


## Schema

| Name        | Type      | Description                                           | Value(s)            | Default   |
|-------------|-----------|-------------------------------------------------------|---------------------|-----------|
| group       | `String`  | A unique group ID to idenitify the set of fields.     |                     |           |
| options     | `Array`   | A list of checkboxes to be grouped together. Refer to [`atoms-input-checkbox`][atoms-input-checkbox] for the appropriate schema. |        |       |


[atoms-input-checkbox]: /patterns/20-atoms-forms-04-input-checkbox/20-atoms-forms-04-input-checkbox.html
