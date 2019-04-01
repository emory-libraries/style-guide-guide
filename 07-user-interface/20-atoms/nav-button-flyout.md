---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-nav-button-flyout

title: Nav Button - Flyout
id: 20-atoms-buttons-13-nav-button-flyout
plid: atoms-nav-button-flyout
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Navigation buttons help users logically move through our site and find the information they need. Flyout navigation buttons are used to allow users to quickly access some on-site content made available through a flyout box.

###### EXPORT VIA GRUNT

```
grunt export:atoms-nav-button-flyout
```


### Description

The flyout navigation button atom can be used to include a button within our site's utility navigation menu, which is used within our site's header. Our flyout navigation buttons act as toggles for their corresponding flyout boxes. This is why our buttons are constructed using the `<label>` tag, which allows us to natively open and close our flyout boxes using checkboxes (`<input type="checkbox">`) rather than relying on JavaScript. Optionally, an icon can be added to this button.


### Best Practices

- Only use this button to trigger a flyout box
- Refer to the button's `for` attribute when creating checkbox toggles
- Use JavaScript only to enhance the button's functionality
  - For instance, to allow toggling of a flyout on hover


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default                 |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-------------------------|
| label           | `String`  | The text to be displayed on the button.                   |                                         |                         |
| id              | `String`  | The ID of the button.                                     |                                         | `nav-button--{{label}}` |
| for             | `String`  | The ID of the target toggle that the button controls.     |                                         | `nav-menu--{{label}}`   |
| icon            | `String`  | The optional ID of an icon to be displayed.               |                                         |                         |
| active          | `Boolean` | Whether the button state is **active**.                   | `true` or `false`                       | `false`                 |
| hover           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`                 |
| focus           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`                 |
| disabled        | `Boolean` | Whether the button state is **disabled**.                 | `true` or `false`                       | `false`                 |


## Classes

### Variations

| Class           | Description                                     |
|-----------------|-------------------------------------------------|
| `-utility`      | Applies the utility style to the button.        |
| `-flyout`       | Applies the flyout style to the button.         |
| `-search`       | Applies the search style to the button.         |
| `-librarian`    | Applies the librarian style to the button.      |
| `-toggle`       | Applies the toggle style to the button.         |

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-active`       | Indicates that the button is **active**.                              |
| `is-hover`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-focus`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-disabled`     | Indicates that the button is **disabled**.                            |
