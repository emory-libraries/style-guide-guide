---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-subnav-button-utility

title: Subnav Button - Utility
id: 20-atoms-buttons-22-subnav-button-utility
plid: atoms-subnav-button-utility
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Subnavigation buttons help users logically move through our site and find the information they need. Utility subnavigation buttons are used to allow users to navigate through the site's utility content.

###### EXPORT VIA GRUNT

```
grunt export:atoms-subnav-button-utility
```


### Description

The utility subnavigation button atom can be used to include a button within our site's utility subnavigation menus, which can be accessed from our site's header. Our utility subnavigation buttons serve as direct links to other pages within our site, which allow users to further explore our site's content.


### Best Practices

- Only use this button for linking to another internal page
- Use JavaScript only to enhance the button's functionality


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default                 |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-------------------------|
| label           | `String`  | The text to be displayed on the button.                   |                                         |                         |
| alias           | `String`  | Some additional text to be displayed on the button.       |                                         |                         |
| active          | `Boolean` | Whether the button state is **active**.                   | `true` or `false`                       | `false`                 |
| hover           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`                 |
| focus           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`                 |
| disabled        | `Boolean` | Whether the button state is **disabled**.                 | `true` or `false`                       | `false`                 |


## Classes

### Variations

| Class           | Description                                     |
|-----------------|-------------------------------------------------|
| `-utility`      | Applies the utility style to the button.        |
| `-resource`     | Applies the resource style to the button.       |
| `-viewall`      | Applies the viewall style to the button.        |
| `-back`         | Applies the back style to the button.           |
| `-toggle`       | Applies the toggle style to the button.         |

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-active`       | Indicates that the button is **active**.                              |
| `is-hover`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-focus`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-disabled`     | Indicates that the button is **disabled**.                            |
