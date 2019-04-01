---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-link-popular

title: Link - Popular
id: 20-atoms-globals-link-popular
plid: atoms-link-popular
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Links, or hyperlinks, are the standard way of linking to some other content within the same page or another page within our site. Popular links can be used to help users access popular pages directly from our site's home page.

###### EXPORT VIA GRUNT

```
grunt export:atoms-link-popular
```


### Description

The popular link atom allows you to include a popular link within our site's home page. Use popular links to redirect users to popular content within our site.


### Best Practices

- Always label links with a clear call-to-action or description
  - Never use labels like *Click Here*
  - Avoid using URLs as labels
- Use analytics and user research to determine the site's most popular pages


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default   |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-----------|
| label           | `String`  | The text to be displayed on the link.                     |                                         |           |
| href            | `String`  | A path or URL to link to.                                 |                                         |           |
| active          | `Boolean` | Whether the button state is **active**.                   | `true` or `false`                       | `false`   |
| hover           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`   |
| focus           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`   |


## Classes

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-active`       | Indicates that the button is **active**.                              |
| `is-hover`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-focus`        | Indicates that the button is being **hovered** or **focused**.        |
