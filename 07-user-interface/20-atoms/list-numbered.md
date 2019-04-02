---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-list-numbered

title: List - Numbered
id: 20-atoms-lists-02-list-numbered
plid: atoms-list-numbered
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Lists are the perfect tool for grouping a set of related items in a way that's easy for end users to consume. Numbered lists are especially useful for listing things that tend to adhere to a particular order.

###### EXPORT VIA GRUNT

```
grunt export:atoms-list-numbered
```


### Description

Use the numbered list atom to include an ordered list within another pattern.


### Best Practices

- Avoid nesting lists more than 3 levels deep


## Schema

| Name                    | Type                  | Description                                                                             | Value(s)                  | Default     |
|-------------------------|-----------------------|-----------------------------------------------------------------------------------------|---------------------------|-------------|
| items                   | `Array`               | A set of items to be included in the list.                                              |                           |             |
| items.[`n`]             | `String` or `Object`  | The item's text to be displayed (`String`), or some data about the item (`Object`).     |                           |             |
| items.[`n`].data        | `String`              | Some text to be displayed for the list item, requires `Object` form.                    |                           |             |
| items.[`n`].markdown    | `String`              | Whether the list `data` should be parsed as Markdown, requires `Object` form.           | `true` or `false`         | `false`     |
| items.[`n`].href        | `String`              | An optional path or URL that the item links to, requires `Object` form. Refer to [`atoms-link`][atoms-link] for additional schema.     |           |           |
| items.[`n`].items       | `Array`               | A set of items to be included within a sublist, requires `Object` form.                 |                           |             |
| items.[`n`].sublist     | `String`              | Indicates the type of sublist to be included, requires `Object` form.                   | `bulleted` or `numbered`  | `numbered`  |


## Classes

### Variations

| Class         | Description                                                         |
|---------------|---------------------------------------------------------------------|
| `-bulleted`   | Uses a version of a list made up of bulleted, or unordered, items.  |
| `-numbered`   | Uses a version of a list made up of numbered, or ordered, items.    |
| `-links`      | Uses a version of a list made up of lists.                          |
| `-topics`     | Uses a version of a list made up of topic, tags, or keywords.       |
| `-files`      | Uses a version of a list made up of file links.                     |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
