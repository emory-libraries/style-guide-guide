---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-button-action

title: Button - Action
id: 20-atoms-buttons-02-button-action
plid: atoms-button-action
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Buttons help indicate to the user that some action should be taken. When used correctly, action buttons can be a useful tool for intiaiting some chain of events when the end user interacts with the button.

###### EXPORT VIA GRUNT

```
grunt export:atoms-button-action
```


### Description

The button action atom allows you to include an interactive button within another pattern. This button is a [Vue.js][Vue.js] component, so it requires JavaScript to be enabled in the browser. Use this button to trigger some on-page action(s). Optionally, action buttons can include an icon.


### Best Practices

- Always label buttons with a clear call-to-action
- Avoid lengthy button labels by using short, concise ones instead
- Be cautious when using this button as it requires JavaScript
  - Whenever possible, provide a `<noscript>` fallback for when the button fails

## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default   |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-----------|
| label           | `String`  | The text to be displayed on the button.                   |                                         |           |
| icon            | `Object`  | Optional data about an icon to be used.                   |                                         |           |
| icon.id         | `String`  | The ID of the icon to be displayed.                       |                                         |           |
| icon.position   | `String`  | Where to display the icon relative to the button's text.  | `left` or `right`                       | `left`    |
| hollow          | `Boolean` | Whether the button should use its hollow style.           | `true` or `false`                       | `false`   |
| pill            | `Boolean` | Whether the button should use its pill style.             | `true` or `false`                       | `false`   |
| uncapitalize    | `Boolean` | Whether the button `label` should use its default casing. | `true` or `false`                       | `false`                 |
| active          | `Boolean` | Whether the button state is **active**.                   | `true` or `false`                       | `false`   |
| hover           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`   |
| focus           | `Boolean` | Whether the button state is **hovered** or **focused**.   | `true` or `false`                       | `false`   |
| disabled        | `Boolean` | Whether the button state is **disabled**.                 | `true` or `false`                       | `false`   |


## Classes

### Variations

| Class           | Description                                 |
|-----------------|---------------------------------------------|
| `-hollow`       | Uses a hollow version of the button.        |
| `-pill`         | Uses a pill version of the button.          |

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-active`       | Indicates that the button is **active**.                              |
| `is-hover`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-focus`        | Indicates that the button is being **hovered** or **focused**.        |
| `is-disabled`     | Indicates that the button is **disabled**.                            |


[Vue.js]: https://vuejs.org
