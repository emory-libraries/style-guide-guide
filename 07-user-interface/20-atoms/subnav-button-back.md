---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-subnav-button-back

title: Subnav Button - Back
id: 20-atoms-buttons-25-subnav-button-back
plid: atoms-subnav-button-back
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Subnavigation buttons help users logically move through our site and find the information they need. Back subnavigation buttons are used to allow users to smoothly backtrack through the site's mobile subnavigation menus.

###### EXPORT VIA GRUNT

```
grunt export:atoms-subnav-button-back
```


### Description

The back subnavigation button atom can be used to include a back button within our site's mobile subnavigation menus. Our back subnavigation buttons allow users to back pedal through previous mobile subnavigation menus in a logical manner.


### Best Practices

- Only use this button for mobile subnavigation
- Use JavaScript only to enhance the button's functionality


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default                 |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-------------------------|
| label           | `String`  | The text to be displayed on the button.                   |                                         |                         |
| for             | `String`  | The ID of the target toggle that the button controls.     |                                         |                         |
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

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-active`       | Indicates that the button is **active**.                              |
| `is-hover`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-focus`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-disabled`     | Indicates that the button is **disabled**.                            |
