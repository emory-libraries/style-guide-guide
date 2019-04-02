---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-subnav-button-viewall

title: Subnav Button - Viewall
id: 20-atoms-buttons-23-subnav-button-viewall
plid: atoms-subnav-button-viewall
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Subnavigation buttons help users logically move through our site and find the information they need. Viewall subnavigation buttons are used to make subnavigation menus easier for users skim by enabling some subnavigation items to be hidden elsewhere by default and accessed only when the user interacts with the button.

###### EXPORT VIA GRUNT

```
grunt export:atoms-subnav-button-viewall
```


### Description

The viewall subnavigation button atom can be used to include a *View All* button within any of our site's subnavigation menus. Our viewall subnavigation buttons can either serve as a direct link to another page, which would likely contain an expanded list of all subnavigation items that wouldn't readily fit within the context of the subnavigation menu, or it can be used to reveal a full list of subnavigation items that was initially truncated due to limited space within the subnavigation menu and/or in an attempt to make the subnavigation menu easier for end users to consume. When used in the latter manner to toggle some hidden content, the button is constructed using a `<label>` tag, which can be combined with a checkbox toggle, and is rendered as a [Vue.js][Vue.js] component.


### Best Practices

- Only use this button for linking to another internal page
- Always display this button at the bottom of a subnavigation menu
  - For desktop navigation, displayed it at full-width of the subnavigation menu
  - For mobile navigation, place it as the last item within the subnavigation menu's list
- Use JavaScript only to enhance the button's functionality


## Schema

| Name            | Type      | Description                                                                                                     | Value(s)                                | Default                 |
|-----------------|-----------|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------------------|
| label           | `String`  | The text to be displayed on the button.                                                                         |                                         |                         |
| href            | `String`  | A path or URL that the button links to, required when not using `overflow`.                                     |                                         |                         |
| overflow        | `String`  | The optional ID of an overflow container to be expanded.                                                        |                                         |                         |
| active          | `Boolean` | Whether the button state is **active**.                                                                         | `true` or `false`                       | `false`                 |
| hover           | `Boolean` | Whether the button state is **hovered** or **focused**.                                                         | `true` or `false`                       | `false`                 |
| focus           | `Boolean` | Whether the button state is **hovered** or **focused**.                                                         | `true` or `false`                       | `false`                 |
| disabled        | `Boolean` | Whether the button state is **disabled**.                                                                       | `true` or `false`                       | `false`                 |
| dismissable     | `Boolean` | Only valid when using `overflow`, whether the button should be **dismissed** after expanding overflow content.  | `true` or `false`                       | `false`                 |


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
| `has-overflow`    | Indicates that the button is associated with an overflow container.   |


[Vue.js]: https://vuejs.org
