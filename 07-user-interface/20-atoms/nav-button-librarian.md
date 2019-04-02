---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-nav-button-librarian

title: Nav Button - Librarian
id: 20-atoms-buttons-15-nav-button-librarian
plid: atoms-nav-button-librarian
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Navigation buttons help users logically move through our site and find the information they need. Librarian navigation buttons are used solely for directing users to contact a librarian.

###### EXPORT VIA GRUNT

```
grunt export:atoms-nav-button-librarian
```


### Description

The librarian navigation button atom can be used to include an *Ask the Librarian* button within our site's utility navigation menu, which is used within our site's header. Our librarian navigation buttons act as quick links to contact forms, where users can easily get in touch with librarians who can answer their questions. Unlike our other navigation buttons, these buttons are simple links. Optionally, an icon can be added to this button.


### Best Practices

- Only use this button for *Ask a Librarian* links


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default                 |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-------------------------|
| label           | `String`  | The text to be displayed on the button.                   |                                         |                         |
| id              | `String`  | The ID of the button.                                     |                                         | `nav-button--{{label}}` |
| for             | `String`  | The ID of the target toggle that the button controls.     |                                         | `nav-menu--{{label}}`   |
| href            | `String`  | A path or URL that the button links to.                   |                                         |                         |
| target          | `String`  | Indicates where the hyperlink should be opened.           | `_self`, `_blank`, `_parent`, or `_top` | `_self`                 |
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
