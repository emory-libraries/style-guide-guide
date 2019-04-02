---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-sidebar-list-item

title: Sidebar List Item
id: 30-molecules-lists-sidebar-list-item
plid: molecules-sidebar-list-item
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Sidebar list items represent a single entry within a sidebar list.

###### EXPORT VIA GRUNT

```
grunt export:molecules-sidebar-list-item
```


### Description

The sidebar list item molecule can be used to include a single sidebar list item within a sidebar list. Sidebar list items use block placeholders and, thus, can be extended with a variety of content.


### Best Practices

- Use a separate sidebar list item for each sidebar list entry


## Schema

| Name    | Type      | Description                                             | Value(s)  | Default   |
|---------|-----------|---------------------------------------------------------|-----------|-----------|
| icon    | `String`  | An optional ID of an icon to be displayed.              |           |           |
| context | `String`  | Some contextual text to help identify the list item.    |           |           |
| content | `String`  | The text content to be displayed. Alternatively, the `sidebar-list-item-content` block can be extended instead. |           |           |


## Classes

### State

| Class       |                                                 |
|-------------|-------------------------------------------------|
| `has-icon`  | Indicates that list item has an icon.           |
