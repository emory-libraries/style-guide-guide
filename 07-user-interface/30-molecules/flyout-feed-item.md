---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-flyout-feed-item

title: Flyout Feed Item
id: 30-molecules-flyouts-flyout-feed-item
plid: molecules-flyout-feed-item
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Feed items represent a single entry within an external content feed and highlights that entry by providing a small excerpt of information about it. Flyout feed items are particularly useful for helping to delivery feed-based content to users directly from flyout menus typically found in our site's header.

###### EXPORT VIA GRUNT

```
grunt export:molecules-flyout-feed-item
```


### Description

The flyout feed item molecule can be used to include a single feed item within a larger list of feed entries. Flyout feed items are specifically designed for use within our site's flyout navigation menus.


### Best Practices

- Use a thumbnail image whenever possible


## Schema

| Name          | Type      | Description                                                                                   | Value(s)  | Default   |
|---------------|-----------|-----------------------------------------------------------------------------------------------|-----------|-----------|
| link          | `Objrvy`  | Some link data using the [`atoms-link`][atom-link] schema, where the link's label is ignored. |           |           |
| link.label    | `String`  | An optional link label to be displayed.                                                       |           |           |
| image         | `Object`  | Some optional data for a thumbnail using the [`atoms-image`][atoms-image] schema.             |           |           |
| date          | `String`  | A formatted date string to be displayed.                                                      |           |           |
| heading       | `String`  | A heading to be displayed for the feed item.                                                  |           |           |
| description   | `String`  | An optional description to be displayed for the feed item, limited to `150` characters.       |           |           |


## Classes

### State

| Class           |                                                   |
|-----------------|---------------------------------------------------|
| `has-thumbnail` | Indicates that feed item has a thumbnail image.   |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
