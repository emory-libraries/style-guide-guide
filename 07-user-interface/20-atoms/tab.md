---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-tab

title: Tab
id: 20-atoms-tabs-01-tab
plid: atoms-tab
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Tabs help indicate to the user that some additional content is available but not immediately shown. When used correctly, tabs can be a useful tool for revealing content on demand.

###### EXPORT VIA GRUNT

```
grunt export:atoms-tab
```


### Description

The tab atom allows you to include a single tab within a tab menu. This tab is a [Vue.js][Vue.js] component, so it requires JavaScript to be enabled in the browser. Use this tab trigger some on-page action(s).


### Best Practices

- Always label tabs with a clear message that indicates its purpose
- Avoid lengthy labels by using short, concise ones instead
- Be cautious when using this tab as it requires JavaScript
  - Whenever possible, provide a `<noscript>` fallback for when the tab fails


## Schema

| Name            | Type      | Description                                               | Value(s)                                | Default   |
|-----------------|-----------|-----------------------------------------------------------|-----------------------------------------|-----------|
| label           | `String`  | The text to be displayed on the tab.                      |                                         |           |
| active          | `Boolean` | Whether the tab state is **active**.                      | `true` or `false`                       | `false`   |
| hover           | `Boolean` | Whether the tab state is **hovered** or **focused**.      | `true` or `false`                       | `false`   |
| focus           | `Boolean` | Whether the tab state is **hovered** or **focused**.      | `true` or `false`                       | `false`   |
| disabled        | `Boolean` | Whether the tab state is **disabled**.                    | `true` or `false`                       | `false`   |

## Classes

Optionally, build a table to identify any pattern classes that are pertinent for developers to be aware of. For clarity, it could be useful to group classes into different tables based on their purpose, such as *Style Variations* or *State Changes*. Some sample class tables are given below.

### Variations

### States

| Class             | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `is-active`       | Indicates that the tab is **active**.                                 |
| `is-hover`        | Indicates that the tab is being **hovered** or **focused**.           |
| `is-focus`        | Indicates that the tab is being **hovered** or **focused**.           |
| `is-disabled`     | Indicates that the tab is **disabled**.                               |


[Vue.js]: https://vuejs.org
