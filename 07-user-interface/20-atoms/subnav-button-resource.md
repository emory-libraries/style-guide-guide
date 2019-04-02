---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-subnav-button-resource

title: Subnav Button - Resource
id: 20-atoms-buttons-24-subnav-button-resource
plid: atoms-subnav-button-resource
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Subnavigation buttons help users logically move through our site and find the information they need. Resource subnavigation buttons are used to allow users to either navigate through the site's main content or directly accesss a related external resource from our subnavigation menu.

###### EXPORT VIA GRUNT

```
grunt export:atoms-subnav-button-resource
```


### Description

The resource subnavigation button atom can be used to include a button within our site's main subnavigation menus, which can be accessed from our site's header. Our resource subnavigation buttons allow users to either directly access other pages within our site or a relevant external resource related to some content within our site.


### Best Practices

- Only use this button if an internal page has a related resource
- Use JavaScript only to enhance the button's functionality


## Schema

| Name                          | Type      | Description                                                     | Value(s)                                | Default     |
|-------------------------------|-----------|-----------------------------------------------------------------|-----------------------------------------|-------------|
| label                         | `String`  | The text to be displayed on the button.                         |                                         |             |
| alias                         | `String`  | Some additional text to be displayed on the button.             |                                         |             |
| active                        | `Boolean` | Whether the button state is **active**.                         | `true` or `false`                       | `false`     |
| hover                         | `Boolean` | Whether the button state is **hovered** or **focused**.         | `true` or `false`                       | `false`     |
| focus                         | `Boolean` | Whether the button state is **hovered** or **focused**.         | `true` or `false`                       | `false`     |
| disabled                      | `Boolean` | Whether the button state is **disabled**.                       | `true` or `false`                       | `false`     |
| options                       | `Array`   | A set of subnavigation options that the button should provide.  |                                         |             |
| options.[`n`]                 | `Object`  | A subnavigation option to be displayed as a link.               |                                         |             |
| options.[`n`].href            | `String`  | A path or URL that the option links to.                         |                                         |             |
| options.[`n`].target          | `String`  | Indicates where the option's link should be opened.             | `_self`, `_blank`, `_parent`, or `_top` | `_self`     |
| options.[`n`].icon            | `Object`  | Optional data about an icon to be used.                         |                                         |             |
| options.[`n`].icon.id         | `String`  | The ID of the icon to be displayed.                             |                                         |             |
| options.[`n`].icon.position   | `String`  | Where to display the icon relative to the button's text.        | `left` or `right`                       | `left`      |


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
