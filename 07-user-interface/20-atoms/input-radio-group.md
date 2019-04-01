---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-radio-group

title: Input - Radio Group
id: 20-atoms-forms-22-input-radio-group
plid: atoms-input-radio-group
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Input groups are used to group multiple, like input fields together. Radio input groups can be used to indicate to end users that a given group of radios are related.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-radio-group
```


### Description

The input radio group atom can be used to insert a group of radios into a form. Use radio groups to indicate to users when a set of radios are associated.


### Best Practices

- Always use the most appropriate input field for the job
- Use clear and consise labels to identity the purpose of an input field


## Schema

| Name        | Type      | Description                                           | Value(s)            | Default   |
|-------------|-----------|-------------------------------------------------------|---------------------|-----------|
| group       | `String`  | A unique group ID to idenitify the set of fields.     |                     |           |
| options     | `Array`   | A list of radios to be grouped together. Refer to [`atoms-input-radio`][atoms-input-radio] for the appropriate schema. |        |       |


[atoms-input-radio]: /patterns/20-atoms-forms-05-input-radio/20-atoms-forms-05-input-radio.html
