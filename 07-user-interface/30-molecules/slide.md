---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-slide

title: Slide
id: 30-molecules-modules-slide
plid: molecules-slide
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Slides make up an individual piece of our [`compounds-slider`][compounds-slider] component.

###### EXPORT VIA GRUNT

```
grunt export:molecules-slide
```


### Description

The slide molecule can be used to include a single slide within a [`compounds-slider`][compounds-slider] component.


### Best Practices

- Only display content for one item per slide


## Schema

| Name              | Type      | Description                                                                   | Value(s)                      | Default   |
|-------------------|-----------|-------------------------------------------------------------------------------|-------------------------------|-----------|
| title             | `String`  | The title of the slide content to be displayed.                               |                               |           |
| image             | `Object`  | Some image data using the [`atoms-image`][atoms-image] schema.                |                               |           |
| image.orientation | `String`  | Optionally indicates the image's orientation to better optimize scaling.      | `portrait` or `landscape`     |           |
| image.align       | `Object`  | Optionally configures how the image should be aligned.                        |                               |           |
| image.align.x     | `String`  | Configures the image's horizontal (`x`-axis) alignment.                       | `left`, `right`, or `center`  | `center`  |
| image.align.y     | `String`  | Configures the image's vertical (`y`-axis) alignment.                         | `top`, `bottom`, or `center`  | `center`  |
| buttons           | `Array`   | A set of buttons to be displayed.                                             |                               |           |
| buttons.`n`       | `Object`  | Some button data using the [`atoms-button-link`][atoms-button-link] schema.   |                               |           |


## Classes

### Variations

| Class               | Description                                                                             |
|---------------------|-----------------------------------------------------------------------------------------|
| `-portrait`         | Indicates the image is in **portrait** orientation, must be applied to `slide-image`.   |
| `-landscape`        | Indicates the image is in **landscape** orientation, must be applied to `slide-image`.  |
| `-align-x-left`     | Left-aligns the image within its container.                                             |
| `-align-x-right`    | Right-aligns the image within its container.                                            |
| `-align-x-center`   | Horizontally centers the image within its container.                                    |
| `-align-y-top`      | Top-aligns the image within its container.                                              |
| `-align-y-bottom`   | Bottom-aligns the image within its container.                                           |
| `-align-y-center`   | Vertically centers the image within its container.                                      |


[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
[atoms-button-link]: /patterns/20-atoms-buttons-01-button-link/20-atoms-buttons-01-button-link.html
[compounds-slider]: /patterns/40-compounds-modules-slider/40-compounds-modules-slider.html
