---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-rule

title: Rule
id: 20-atoms-globals-rule
plid: atoms-rule
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Rules are used show visible line, dividers, and/or separators between different types of content.

###### EXPORT VIA GRUNT

```
grunt export:atoms-rule
```


### Description

The rule atom allows you to include a horizontal rule within another pattern. Rules can be used as dividers and/or separators to help distinguish between different sets of content.

### Best Practices

- Use your best judgment to determine if a rule is appropriate
- Avoid using too many rule styles in any single area
- Use the same rule style when separating similar types of content


## Schema

| Name  | Type      | Description                                       | Value(s)                                                 | Default   |
|-------|-----------|---------------------------------------------------|----------------------------------------------------------|-----------|
| style | `String`  | Indicates an alternative rule style to be used.   | `light`, `dark`, `dotted`, `thick`, `heading`, or `feed` |           |


## Classes

### Variations

| Class       | Description                                                                         |
|-------------|-------------------------------------------------------------------------------------|
| `-light`    | Uses a light rule style.                                                            |
| `-dark`     | Uses a dark rule style.                                                             |
| `-dotted`   | Uses a dotted rule style.                                                           |
| `-thick`    | Uses a thick rule style.                                                            |
| `-heading`  | Uses a heading rule style, intended for use only underneath major section headings. |
| `-feed`     | Uses a feed rule style, intended for use only underneath feed headings.             |
