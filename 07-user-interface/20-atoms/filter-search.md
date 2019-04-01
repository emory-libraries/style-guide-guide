---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-filter-search

title: Filter - Search
id: 20-atoms-filters-filter-search
plid: atoms-filter-search
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Filters are used to help users easily sift through information or content in order to pinpoint something they're looking for. Search filters enable users to filter information and content using words and phrases.

###### EXPORT VIA GRUNT

```
grunt export:atoms-filter-search
```


### Description

The filter search atom allows you to include a search filter within another pattern. The search filter accepts some index data, which may or may not map to some on-page content, and filters through the data based on a user-provided query. This search filter is as a [Vue.js][Vue.js] component and, therefore, requires that JavaScript be enabled.

### Best Practices

- Only use search filters as a way to enhance a page or some content
  - This requires JavaScript and will not work otherwise unless a `<noscript>` fallback is given.


## Schema

| Name                      | Type      | Description                                                                                                                         | Value(s)                | Default     |
|---------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| index                     | `Array`   | A set of index items to be used when filtering, ideally mapping to on-page elements that can be shown and/or hidden automagically.  |                         |             |
| config                    | `Object`  | An optional set of configurations used to customize the way the filtering utility should work.                                      |                         |             |
| keys                      | `Array`   | An optional set of keys that can be found within the index that should be used to limit the fields that are filtering.              |                         |             |
| mode                      | `String`  | Optionally indicates the search box's size mode.                                                                                    | `big` or `small`        |             |
| layout                    | `String`  | Optionally indicates the search box and search button's layout arrangement.                                                         | `contained`             |             |
| autocomplete              | `Boolean` | Indicates whether autocomplete should be enabled for the search box.                                                                | `true` or `false`       | `false`     |
| disabled                  | `Boolean` | Sets the search box's state to **disabled**.                                                                                        | `true` or `false`       | `false`     |
| hover                     | `Boolean` | Sets the search box's state to **hovered**.                                                                                         | `true` or `false`       | `false`     |
| focus                     | `Boolean` | Sets the search box's state to **focused**.                                                                                         | `true` or `false`       | `false`     |
| button                    | `Object`  | Some search button settings.                                                                                                        |                         |             |
| button.label              | `String`  | The label to be displayed on the search button, only applicable when `layout` is not set to `contained`.                            |                         |             |
| button.icon               | `String`  | An optional icon ID to be displayed on the search button, only applicable when `layout` is not set to `contained`.                  |                         |             |
| button.disabled           | `Boolean` | Sets the search button's state to **disabled**.                                                                                     | `true` or `false`       | `false`     |
| button.active             | `Boolean` | Sets the search button's state to **active**.                                                                                       | `true` or `false`       | `false`     |
| button.hover              | `Boolean` | Sets the search button's state to **hovered**.                                                                                      | `true` or `false`       | `false`     |
| button.focus              | `Boolean` | Sets the search button's state to **focused**.                                                                                      | `true` or `false`       | `false`     |
| passthroughs                | `Object`  | An optional set of data transformations to be applied to each `index` item, where *keys* indicate the key that the transformed value will be assigned to within the `index` item and *values* consists of a set of tranformations to be applied.      |                         |             |
| passthroughs.`key`          | `Object`  | Some transformations that should be applied to some target data within each `index` item, where *keys* indicate the Handlebars helper method to be used during transformation and *values* consists of a set of arguments to be passed to the helper. |                         |             |
| passthroughs.`key`.`helper` | `Array`   | Some arguments to be passed to the Handlebars helper method, where keys from each `index` item can be bound as an argument using the syntax `:key`, i.e. arguments for a `date` transformation may look like `[':date', 'YYYY']`.                     |                         |             |


## Classes

### Variations

| Class         | Description                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| `-contained`  | Indicates that the search button should be inside the search box and uses an icon by default instead of a label.  |
| `-big`        | Indicates that the search box should use a big layout.                                                            |
| `-small`      | Indicates that the search box should use a small layout.                                                          |

### State

| Class         |                                                                                                                             |
|---------------|-----------------------------------------------------------------------------------------------------------------------------|
| `is-disabled` | Indicates that a search box (`search-box`) and/or search button (`search-button`) is **disabled**.                          |
| `is-hover`    | Indicates that a search box (`search-box`) and/or search button (`search-button`) is **hovered**.                           |
| `is-focus`    | Indicates that a search box (`search-box`) and/or search button (`search-button`) is **focused**.                           |
| `is-active`   | Indicates that a search button (`search-button`) is **active**.                                                             |


[Vue.js]: https://vuejs.org
