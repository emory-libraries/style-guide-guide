---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-button-form

title: Button - Form
id: 20-atoms-buttons-03-button-form
plid: atoms-button-form
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Buttons help indicate to the user that some action should be taken. When used correctly, form buttons can be a useful tool for helping end users navigate, clear, and/or submit forms.

###### EXPORT VIA GRUNT

```
grunt export:atoms-button-form
```


### Description

The button form atom allows you to include an input button within another pattern. Use this button inside of a form to interface with the server when resetting, submitting, and/or otherwise processing a form. Unlike other button patterns, form buttons cannot include an icon.


### Best Practices

- Always label buttons with a clear call-to-action
- Avoid lengthy button labels by using short, concise ones instead
- Only ever use this button for forms that use server-side processing
  - Use [`atoms-button-action`][atoms-button-action] instead for forms using client-side processing


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default   |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-----------|
| label           | `String`  | The text to be displayed on the button.                   |                                         |           |
| type            | `String`  | Inidicates the type of input button.                      | `submit`, `reset`, or `button`          | `button`  |
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


[atoms-button-action]: /patterns/20-atoms-buttons-02-button-action/20-atoms-buttons-02-button-action.html
