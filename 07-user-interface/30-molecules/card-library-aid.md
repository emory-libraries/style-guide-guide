---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-card-library-aid

title: Card - Library Aid
id: 30-molecules-cards-card-library-aid
plid: molecules-card-library-aid
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Cards can be used to callout some relevant information and visually group similar content. Library aid cards are especially useful for inserting library aid information within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-card-library-aid
```


### Description

The card library aid molecule can be used to include a library aid card within another pattern. Library aid cards can be used to link to library aids pages from other parts of our site.


### Best Practices

- Only link to one library aid per card


## Schema

| Name      | Type      | Description                                                                   | Value(s)                             | Default         |
|-----------|-----------|-------------------------------------------------------------------------------|--------------------------------------|-----------------|
| link      | `Object`  | Some link data using the [`atoms-link`][atoms-link] schema, where the link's label will equal `title`.  |            |                 |
| title     | `String`  | The title of the library aid.                                                 |                                      |                 |
| context   | `String`  | An optional short word or phrase providing some context for the library aid.  |                                      | `Library Aid`   |
| target    | `String`  | Optionally indicates where the hyperlink should be opened.                 | `_self`, `_blank`, `_parent`, or `_top` | `_self`         |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
