---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-utility-list-item

title: Utility List Item
id: 30-molecules-lists-utility-list-item
plid: molecules-utility-list-item
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Utility list items represent a single entry within a utility list.

###### EXPORT VIA GRUNT

```
grunt export:molecules-utility-list-item
```


### Description

The utility list item molecule can be used to include a single utility list item within a utility list.


### Best Practices

- Use a separate utility list item for each utility list entry


## Schema

| Name              | Type      | Description                                                                                           | Value(s)  | Default   |
|-------------------|-----------|-------------------------------------------------------------------------------------------------------|-----------|-----------|
| context | `String`  | An optional context to be applied to the list item, which takes precedence over list-level `context` if given.  |           |           |
| title   | `String`  | The title of the given list item.                                                                               |           |           |
| image   | `Object`  | Some optional image data for the given item using the [`atoms-image`][atom-image] schema.                       |           |           |
| link    | `Object`  | Some optional link data for the given item using the [`atoms-link`][atoms-link] schema, where the link's label equals `title`. |           |           |


## Classes

### State

| Class         |                                                       |
|---------------|-------------------------------------------------------|
| `has-image`   | Indicates that that a list item has an image.         |
| `has-context` | Indicates that that a list item has a context label.  |


[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
