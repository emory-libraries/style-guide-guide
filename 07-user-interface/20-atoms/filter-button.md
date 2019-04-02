---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-filter-button

title: Filter - Button
id: 20-atoms-filters-filter-button
plid: atoms-filter-button
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Filters are used to help users easily sift through information or content in order to pinpoint something they're looking for. Button filters enable users to filter information and content by selecting from a set of buttons.

###### EXPORT VIA GRUNT

```
grunt export:atoms-filter-button
```


### Description

The filter button atom allows you to include a button filter within another pattern. The button filter accepts some index data, which may or may not map to some on-page content, and a set of buttons and filters through the data based on which button the user selects. This button filter is as a [Vue.js][Vue.js] component and, therefore, requires that JavaScript be enabled.


### Best Practices

- Only use button filters as a way to enhance a page or some content
  - This requires JavaScript and will not work otherwise unless a `<noscript>` fallback is given.


## Schema

| Name                      | Type      | Description                                                                                                                         | Value(s)                | Default     |
|---------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| heading                   | `String` or `Object`  | An optional heading to be displayed above the buttons, or a set of heading configurations.                              |                         |             |
| heading.level             | `Number`  | The desired heading level to be used for displaying the heading, requires that `heading` be in `Object` form.                       |                         | `3`         |
| heading.heading           | `String`  | The heading text to be displayed, requires that `heading` be in `Object` form.                                                      |                         |             |
| index                     | `Array`   | A set of index items to be used when filtering, ideally mapping to on-page elements that can be shown and/or hidden automagically.  |                         |             |
| config                    | `Object`  | An optional set of configurations used to customize the way the filtering utility should work.                                      |                         |             |
| buttons                   | `Array`   | A set of buttons to be displayed that control filtering on the `index` data.                                                        |                         |             |
| buttons.`n`               | `Object`  | Some configurations for the given button.                                                                                           |                         |             |
| buttons.`n`.label         | `String`  | A label to be displayed on the button.                                                                                              |                         |             |
| buttons.`n`.filter        | `Object`  | A set of filter criteria that is applied when the button is selected, where *keys* indicate the key within each `index` item to use and *values* represents the value to be matched. |                         |             |
| buttons.`n`.selected      | `Boolean` | Indicates whether the button should be selected by default.                                                                         | `true` or `false`       | `false`     |
| buttons.`n`.disabled      | `Boolean` | Sets the button's state to **disabled**.                                                                                            | `true` or `false`       | `false`     |
| buttons.`n`.focus         | `Boolean` | Sets the button's state to **focused**.                                                                                             | `true` or `false`       | `false`     |
| buttons.`n`.hover         | `Boolean` | Sets the button's state to **hovered**.                                                                                             | `true` or `false`       | `false`     |
| buttons.`n`.active        | `Boolean` | Sets the button's state to **active**.                                                                                              | `true` or `false`       | `false`     |
| passthroughs                | `Object`  | An optional set of data transformations to be applied to each `index` item, where *keys* indicate the key that the transformed value will be assigned to within the `index` item and *values* consists of a set of tranformations to be applied.      |                         |             |
| passthroughs.`key`          | `Object`  | Some transformations that should be applied to some target data within each `index` item, where *keys* indicate the Handlebars helper method to be used during transformation and *values* consists of a set of arguments to be passed to the helper. |                         |             |
| passthroughs.`key`.`helper` | `Array`   | Some arguments to be passed to the Handlebars helper method, where keys from each `index` item can be bound as an argument using the syntax `:key`, i.e. arguments for a `date` transformation may look like `[':date', 'YYYY']`.                     |                         |             |


## Classes

### State

| Class         |                                                                       |
|---------------|-----------------------------------------------------------------------|
| `is-disabled` | Indicates that a button is **disabled**.                              |
| `is-focus`    | Indicates that a button is **focused**.                               |
| `is-hover`    | Indicates that a button is **hovered**.                               |
| `is-active`   | Indicates that a button is **active**.                                |


[Vue.js]: https://vuejs.org
