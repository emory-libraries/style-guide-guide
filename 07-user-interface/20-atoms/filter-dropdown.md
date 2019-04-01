---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-filter-dropdown

title: Filter - Dropdown
id: 20-atoms-filters-filter-dropdown
plid: atoms-filter-dropdown
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Filters are used to help users easily sift through information or content in order to pinpoint something they're looking for. Dropdown filters enable users to filter information and content by selecting from a predefined set of options.

###### EXPORT VIA GRUNT

```
grunt export:atoms-filter-dropdown
```


### Description

The filter dropdown atom allows you to include a dropdown filter within another pattern. The dropdown filter accepts some index data, which may or may not map to some on-page content, and filters through the data based on a user-provided query. This dropdown filter is as a [Vue.js][Vue.js] component and, therefore, requires that JavaScript be enabled.


### Best Practices

- Only use dropdown filters as a way to enhance a page or some content
  - This requires JavaScript and will not work otherwise unless a `<noscript>` fallback is given.


## Schema

| Name                      | Type      | Description                                                                                                                         | Value(s)                | Default     |
|---------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| index                     | `Array`   | A set of index items to be used when filtering, ideally mapping to on-page elements that can be shown and/or hidden automagically.  |                         |             |
| config                    | `Object`  | An optional set of configurations used to customize the way the filtering utility should work.                                      |                         |             |
| key                       | `String`  | The key to be should be used for populating the dropdown menu options and on which the `index` items will be filtered.              |                         |             |
| disabled                  | `Boolean` | Sets the search box's state to **disabled**.                                                                                        | `true` or `false`       | `false`     |
| focus                     | `Boolean` | Sets the search box's state to **focused**.                                                                                         | `true` or `false`       | `false`     |
| inline                    | `Boolean` | Indicates that the dropdown menu should use its inline style.                                                                       | `true` or `false`       | `false`     |
| selected                  | `Mixed`   | An optional value that is selected by default from the dropdowm menu options.                                                       |                         |             |
| viewall                   | `Boolean` | Indicates whether a *View All* option should be given in the list of dropdown menu options.                                         | `true` or `false`       | `true`      |
| label                     | `String`  | The default label for the *View All* option within the dropdowm menu, requires `viewall` is set to `true`.                          |                         | `View All`  |
| passthroughs                | `Object`  | An optional set of data transformations to be applied to each `index` item, where *keys* indicate the key that the transformed value will be assigned to within the `index` item and *values* consists of a set of tranformations to be applied.      |                         |             |
| passthroughs.`key`          | `Object`  | Some transformations that should be applied to some target data within each `index` item, where *keys* indicate the Handlebars helper method to be used during transformation and *values* consists of a set of arguments to be passed to the helper. |                         |             |
| passthroughs.`key`.`helper` | `Array`   | Some arguments to be passed to the Handlebars helper method, where keys from each `index` item can be bound as an argument using the syntax `:key`, i.e. arguments for a `date` transformation may look like `[':date', 'YYYY']`.                     |                         |             |


## Classes

### Variations

| Class         | Description                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| `-inline`     | Indicates that the dropdown should use its inline style.                                                          |

### State

| Class         |                                                                       |
|---------------|-----------------------------------------------------------------------|
| `is-disabled` | Indicates that the dropdown is **disabled**.                          |
| `is-focused`  | Indicates that the dropdown is **focused**.                           |
| `is-blurred`  | Indicates that the dropdown is **blurred**.                           |


[Vue.js]: https://vuejs.org
