---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-nav-button-search

title: Nav Button - Search
id: 20-atoms-buttons-14-nav-button-search
plid: atoms-nav-button-search
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Navigation buttons help users logically move through our site and find the information they need. Search navigation buttons are used to allow users to access a search menu, where they can quickly our site for various types of content.

###### EXPORT VIA GRUNT

```
grunt export:atoms-nav-button-search
```


### Description

The search navigation button atom can be used to include a search button within our site's main navigation menu, which is used within our site's header. Our search navigation buttons act as toggles for their corresponding search menus. This is why our buttons are constructed using the `<label>` tag, which allows us to natively open and close our subnavigation menus using checkboxes (`<input type="checkbox">`) rather than relying on JavaScript. For our search navigation buttons, an icon is required.


### Best Practices

- Only use this button to trigger a search menu
- Refer to the button's `for` attribute when creating checkbox toggles
- Use JavaScript only to enhance the button's functionality
  - For instance, to allow toggling of a search menu on hover


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default                 |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-------------------------|
| label           | `String`  | The text to be displayed on the button.                   |                                         |                         |
| id              | `String`  | The ID of the button.                                     |                                         | `nav-button--{{label}}` |
| for             | `String`  | The ID of the target toggle that the button controls.     |                                         | `nav-menu--{{label}}`   |
| icon            | `String`  | The ID of an icon to be displayed.                        |                                         |                         |
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
