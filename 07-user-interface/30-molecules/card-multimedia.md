---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-card-multimedia

title: Card - Multimedia
id: 30-molecules-cards-card-multimedia
plid: molecules-card-multimedia
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Cards can be used to callout some relevant information and visually group similar content. Multimedia cards are especially useful for inserting multimedia information within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-card-multimedia
```


### Description

The card multimedia molecule can be used to include a multimedia card within another pattern. Multimedia cards accept a multimedia `type` to indicate the appropriate icon to be used. At present, the following types can be used:

- `video`
- `audio`
- `photo` (or `image`)
- `chart` (or `diagram`)
- `presentation` (or `slideshow`)
- `activity`


### Best Practices

- Only link to one multimedia item per card
- Provide a duration for streaming multimedia formats


## Schema

| Name      | Type      | Description                                                                 | Value(s)                                    | Default   |
|-----------|-----------|-----------------------------------------------------------------------------|---------------------------------------------|-----------|
| type      | `String`  | Indicates the type of multimedia content.                                   | *See **Description** above.*                |           |
| link      | `Object`  | Some link data using the [`atoms-link`][atoms-link] schema, where the link's label will equal `title`.       |            |           |
| title     | `String`  | The title of the multimedia content.                                        |                                             |           |
| context   | `String`  | A short word or phrase providing some context for the multimedia content.   |                                             |           |
| duration  | `String`  | The multimedia content's streaming duration, requires content with `type` of `video`, `audio`, or `presentation`/`slideshow`.     | | |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
