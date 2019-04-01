---

layout: pattern-detail
group: user-interface
subgroup: compounds
permalink: /user-interface/compounds/compounds-utility-list

title: Utility List
id: 40-compounds-lists-utility-list
plid: compounds-utility-list
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Utility lists are a flexible tool for calling out and grouping content within a styled list format.

###### EXPORT VIA GRUNT

```
grunt export:compounds-utility-list
```


### Description

The utility list compound can be used to include a utility list within another pattern. Unlike normal lists, utility lists differ in that they are more stylized to help callout content and grab the user's attention.


### Best Practices

- Use utility lists sparingly within page content


## Schema

| Name              | Type      | Description                                                                                           | Value(s)  | Default   |
|-------------------|-----------|-------------------------------------------------------------------------------------------------------|-----------|-----------|
| icon              | `String`  | An optional ID of an icon to be displayed.                                                            |           |           |
| title             | `String`  | The title of the utility list.                                                                        |           |           |
| context           | `String`  | An optional context to be applied to all list items.                                                  |           |           |
| items             | `Array`   | A set of list items to be included in the list.                                                       |           |           |
| items.`n`         | `Object`  | Some list item data using the [`molecules-utility-list-item`][molecules-utility-list-item] schema.    |           |           |


[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
[molecules-utility-list-item]: /patterns/30-molecules-lists-utility-list-item/30-molecules-lists-utility-list-item.html
