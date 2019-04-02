---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-figure

title: Figure
id: 30-molecules-media-figure
plid: molecules-figure
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Figures are self-contained images with a caption that can be inserted within a page or article.

###### EXPORT VIA GRUNT

```
grunt export:molecules-figure
```


### Description

The figure molecule can be used to insert a figure within another pattern. Figures include a caption that allows you to describe the image in detail. Captions should differ from `alt` text in that captions are typically more descriptive, offering some contextual information, whereas alternate text should merely provide an accurate description of the visual in question.


### Best Practices

- Provide a short, concise caption that describeds the image
  - Whenever possible, also provide `alt` image text that differs from the `caption`.


## Schema

| Name    | Type      | Description                                                                                                       | Value(s)  | Default   |
|---------|-----------|-------------------------------------------------------------------------------------------------------------------|-----------|-----------|
| image   | `Object`  | Some image data using the [`atoms-image`][atoms-image] schema, where `caption` is used for `alt` if none given.   |           |           |
| caption | `String`  | A caption that describes the image.                                                                               |           |           |


[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
