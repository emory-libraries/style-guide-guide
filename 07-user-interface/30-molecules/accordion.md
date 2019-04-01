---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-accordion

title: Accordion
id: 30-molecules-modules-accordion
plid: molecules-accordion
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Accordion panels make up an individual piece of our [`compounds-accordion`][compounds-accordion] component.

###### EXPORT VIA GRUNT

```
grunt export:molecules-accordion
```


### Description

The accordion molecule can be used to include a single panel within a [`compounds-accordion`][compounds-accordion] component.


### Best Practices

- Only display content for one item per panel


## Schema

| Name              | Type      | Description                                                                   | Value(s)                      | Default   |
|-------------------|-----------|-------------------------------------------------------------------------------|-------------------------------|-----------|
| title             | `String`  | The title of the listing content to be displayed.                             |                               |           |
| content           | `String`  | The panel's content to be displayed, optionally rendered as `markdown`.       |                               |           |
| markdown          | `Boolean` | Indicates whether the panel's `content` is written in [Markdown][Markdown].   | `true` or `false`             | `false`   |
| state             | `Boolean` | Indicates the panel's default state.                                          | `open` or `closed`            | `closed`  |
| id                | `String`  | An optional panel ID to help distinguish it from other panels.   | `open` or `closed`     | *Uses a version of `title`.*  |
| buttons           | `Array`   | An optional set of buttons to be displayed.                                   |                               |           |
| buttons.`n`       | `Object`  | Some button data using the [`atoms-button-link`][atoms-button-link] schema.   |                               |           |


[Markdown]: https://daringfireball.net/projects/markdown/
[atoms-button-link]: /patterns/20-atoms-buttons-01-button-link/20-atoms-buttons-01-button-link.html
[compounds-accordion]: /patterns/40-compounds-modules-accordion/40-compounds-modules-accordion.html
