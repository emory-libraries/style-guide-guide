---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-badge

title: Badge
id: 20-atoms-badges-01-badge
plid: atoms-badge
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Badges help indicate to end users the type of content they are viewing. Badges are a low-level notification system to communicate to users either the status of some content or the type of content that is being displayed.

###### EXPORT VIA GRUNT

```
grunt export:atoms-badge
```


### Description

The badge atom allows you to include a badge notification within another pattern. Use this badge to help users identity content type and/or content status.

### Best Practices

- Always try to use single-word labels when creating badges
- Use the appropriate badge style for your given context


## Schema

Optionally, build a table to identify any pattern schematics that are pertinent for developers to be aware of. A sample schema table is given below.

| Name    | Type      | Description                                     | Value(s)          | Default   |
|---------|-----------|-------------------------------------------------|-------------------|-----------|
| label   | `String`  | The text to be displayed on the badge.          |                   |           |
| round   | `Boolean` | Whether the button should use its round style.  | `true` or `false` | `false`   |
| square  | `Boolean` | Whether the button should use its square style. | `true` or `false` | `false`   |
| white   | `Boolean` | Whether the button should use its white theme.  | `true` or `false` | `false`   |


## Classes

### Variations

| Class           | Description                                 |
|-----------------|---------------------------------------------|
| `-round`        | Uses a rounded-edge version of the badge.   |
| `-square`       | Uses a squared-edge version of the badge.   |
| `-white`        | Uses a white-themed version of the badge.   |
