---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-feed-item

title: Feed Item
id: 30-molecules-feeds-feed-item
plid: molecules-feed-item
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Feed items represent a single entry within a feed.

###### EXPORT VIA GRUNT

```
grunt export:molecules-feed-item
```


### Description

The feed item molecule can be used to include an individual feed item within a larger feed.


### Best Practices

- Only use one feed item per feed entry


## Schema

| Name    | Type      | Description                                                                                             | Value(s)  | Default   |
|---------|-----------|---------------------------------------------------------------------------------------------------------|-----------|-----------|
| date    | `String`  | A formatted date or datetime to be displayed.                                                           |           |           |
| title   | `String`  | The title of the feed item to be displayed.                                                             |           |           |
| link    | `Object`  | Some link data using the [`atoms-link`][atoms-link] schema, where `title` is used as the link's label.  |           |           |
| button  | `Object`  | Some optional button data using the [`atoms-button-link`][atoms-button-link] schema.                    |           |           |


## Classes

### State

| Class         |                                                               |
|---------------|---------------------------------------------------------------|
| `has-action`  | Indicates that the feed item has some call-to-action button.  |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
[atoms-button-link]: /patterns/20-atoms-buttons-01-button-link/20-atoms-buttons-01-button-link.html
