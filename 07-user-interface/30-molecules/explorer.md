---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-explorer

title: Explorer
id: 30-molecules-boxes-explorer
plid: molecules-explorer
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Explorer boxes are a good way to callout related pages within the site. Explorers help users quickly find and navigate to information within the site that they may be looking for.

###### EXPORT VIA GRUNT

```
grunt export:molecules-explorer
```


### Description

The explorer molecule allows you to include an explorer box within another pattern. Explorer boxes are mainly intended to provide a list of quick links that users may find of interest.


### Best Practices

- Always use a minimum of 3-4 links
- Never exceed a maximum of 8 links


## Schema


| Name      | Type      | Description                                                               | Value(s)  | Default   |
|-----------|-----------|---------------------------------------------------------------------------|-----------|-----------|
| context   | `String`  | An optional, contextual word or phrase displayed at the top of the box.   |           | `Explore` |
| heading   | `String`  | A heading to be displayed.                                                |           |           |
| links     | `Array`   | A set of links to be displayed.                                           |           |           |
| links.`n` | `Object`  | Some link data using [`atoms-link`][atoms-link] schema.                   |           |           |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
