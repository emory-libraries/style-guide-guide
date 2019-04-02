---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-input-toggle

title: Input - Toggle
id: 20-atoms-forms-11-input-toggle
plid: atoms-input-toggle
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Toggles are used to control the visibility or state of other elements without the need of JavaScript. When used correctly, toggles can enable users to access additional information within context menus, flyout windows, modal boxes, and more that is not made readily available on page load.

###### EXPORT VIA GRUNT

```
grunt export:atoms-input-toggle
```


### Description

The input toggle atom can be used to include a toggle within aother pattern. Use toggle inputs in combination with [`atoms-button-toggle`][atoms-button-toggle], or any navigation buttons, to build toggleable menus, flyouts, modals, and more.


### Best Practices

- Use toggles when appropriate to do so
- Only use JavaScript to enhance the toggle's functionality


## Schema

| Name        | Type      | Description                                           | Value(s)            | Default   |
|-------------|-----------|-------------------------------------------------------|---------------------|-----------|
| id          | `String`  | A unique ID for the field.                            |                     |           |
| checked     | `Boolean` | Whether the field state is **checked**.               | `true` or `false`   | `false`   |


[atoms-button-toggle]: /patterns/20-atoms-buttons-04-button-toggle/20-atoms-buttons-04-button-toggle.html
