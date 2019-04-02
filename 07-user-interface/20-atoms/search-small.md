---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-search-small

title: Search - Small
id: 20-atoms-forms-32-search-small
plid: atoms-search-small
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Search boxes are used to help users quickly locate some information or content within our site or one of our site's related resources. Search boxes enable users to search for a given query or term and retrieve a list of relevant results. Our smalll search boxes are especially useful when needing to place search fields in more discrete places.

###### EXPORT VIA GRUNT

```
grunt export:atoms-search-nav
```


### Description

The search small atom allows you to include a search box within another pattern. This small search pattern accepts a set of services used to indicate the service where the search will be performed once a user interacts with the search box. By default, this search box is built as a [Vue.js][Vue.js] component but also includes a `<noscript>` fallback to a simple HTML form for instances where JavaScript is disabled. Small searches are usually good candidates for use inside menus, sidebars, and footers. Small searches use the `small` mode setting by default.


### Best Practices

- Always position search boxes in a clear and easy-to-find place on the page


## Schema

| Name                      | Type      | Description                                                                                                                   | Value(s)                                | Default     |
|---------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| form                      | `Boolean` | Indicates whether to use the HTML form structure by default instead of the default [Vue.js][Vue.js] component structure.      | `true` or `false`                       | `false`     |
| id                        | `String`  | A unique ID for the search box to help distinguish it from other searches that may be on the same page.                       |                                         |             |
| param                     | `String`  | The replacement parameter used in service URLs (`services.n.src`) to bind the search query.                                   |                                         | `:query`    |
| mode                      | `String`  | Optionally indicates the search box's size mode.                                                                              | `big` or `small`                        |             |
| layout                    | `String`  | Optionally indicates the search box and search button's layout arrangement.                                                   | `contained`                             |             |
| autocomplete              | `Boolean` | Indicated whether autocomplete should be enabled for the search box.                                                          | `true` or `false`                       | `false`     |
| target                    | `String`  | Identifies the window in which the search results should be opened, only applicable when JavaScript is enabled.               | `_self`, `_blank`, `_parent`, or `_top` | `_self`     |
| processor                 | `String`  | A path or URL to a server processing script to handle search form submissions with a `GET` method.                            |                                         |             |
| services                  | `Array`   | A set of one or more services to search.                                                                                      |                                         |             |
| services.`n`              | `Object`  | Some search settings for a service.                                                                                           |                                         |             |
| services.`n`.label        | `String`  | Some label, usually a name or title, for the service.                                                                         |                                         |             |
| services.`n`.placeholder  | `String`  | The search box's placeholder text for the service.                                                                            |                                         |             |
| services.`n`.id           | `String`  | A unique ID for the service.                                                                                                  |                                         |             |
| services.`n`.src          | `String`  | A path or URL to the service's search endpoint, where `param` is used to indicate where the search query should be inserted.  |                                         |             |
| services.`n`.default      | `Boolean` | Indicates which service should be used by default when searching.                                                             | `true` or `false`                       | `false`     |
| disabled                  | `Boolean` | Sets the search box's state to **disabled**.                                                                                  | `true` or `false`                       | `false`     |
| hover                     | `Boolean` | Sets the search box's state to **hovered**.                                                                                   | `true` or `false`                       | `false`     |
| focus                     | `Boolean` | Sets the search box's state to **focused**.                                                                                   | `true` or `false`                       | `false`     |
| button                    | `Object`  | Some search button settings.                                                                                                  |                                         |             |
| button.label              | `String`  | The label to be displayed on the search button, only applicable when `layout` is not set to `contained`.                      |                                         |             |
| button.icon               | `String`  | An optional icon ID to be displayed on the search button, only applicable when `layout` is not set to `contained`.            |                                         |             |
| button.disabled           | `Boolean` | Sets the search button's state to **disabled**.                                                                               | `true` or `false`                       | `false`     |
| button.active             | `Boolean` | Sets the search button's state to **active**.                                                                                 | `true` or `false`                       | `false`     |
| button.hover              | `Boolean` | Sets the search button's state to **hovered**.                                                                                | `true` or `false`                       | `false`     |
| button.focus              | `Boolean` | Sets the search button's state to **focused**.                                                                                | `true` or `false`                       | `false`     |


## Classes

### Variations

| Class         | Description                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| `-contained`  | Indicates that the search button should be inside the search box and uses an icon by default instead of a label.  |
| `-form`       | Indicates that the search should be structured as an HTML form instead of a [Vue.js][Vue.js] component.           |
| `-big`        | Indicates that the search box should use a big layout.                                                            |
| `-small`      | Indicates that the search box should use a small layout.                                                          |

### State

| Class         |                                                                                                                             |
|---------------|-----------------------------------------------------------------------------------------------------------------------------|
| `is-default`  | Used only when `-form` is set, indicates which search form should be used by default, must be placed on `search-form`.      |
| `is-disabled` | Indicates that a search box (`search-box`) and/or search button (`search-button`) is **disabled**.                          |
| `is-hover`    | Indicates that a search box (`search-box`) and/or search button (`search-button`) is **hovered**.                           |
| `is-focus`    | Indicates that a search box (`search-box`) and/or search button (`search-button`) is **focused**.                           |
| `is-active`   | Indicates that a search button (`search-button`) is **active**.                                                             |


[Vue.js]: https://vuejs.org
