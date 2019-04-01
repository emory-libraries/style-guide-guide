---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-tile-utility

title: Tile - Utility
id: 30-molecules-tiles-tile-utility
plid: molecules-tile-utility
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Tiles can be used to callout some relevant information and visually group similar content. Utility tiles are especially useful for inserting some generic information within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-tile-utility
```


### Description

The tile utility molecule can be used to include a utility tile within another pattern. Utility tiles are typically used to link to some other page within the site.


### Best Practices

- Only link to one page per card


## Schema

| Name            | Type      | Description                                                                                           | Value(s)    | Default   |
|-----------------|-----------|-------------------------------------------------------------------------------------------------------|-------------|-----------|
| title           | `String`  | The title of the tile to be displayed.                                                                |             |           |
| description     | `String`  | An optional description to be displayed, limited to a maximum of `300` characters.                    |             |           |
| link            | `Object`  | Some link data using the [`atoms-link`][atoms-link] schema, where the link's label will equal `title` |             |           |
| image           | `Object`  | Some image data using the [`atoms-image`][atoms-image] schema.                      |                               |           |
| image.align     | `Object`  | Optionally configures how the image should be aligned.                              |                               |           |
| image.align.x   | `String`  | Configures the image's horizontal (`x`-axis) alignment.                             | `left`, `right`, or `center`  | `center`  |
| image.align.y   | `String`  | Configures the image's vertical (`y`-axis) alignment.                               | `top`, `bottom`, or `center`  | `center`  |
| image.fit       | `String`  | Configures the image's fit within its container, where `contain` fixes the image's width to the width of its container, scaling it up or down accordingly, and `cover` allows the image to be scaled upward when necessary but prevents downscaling of the image below its native width. | `contain` or `cover` | `contain`  |


## Classes

### Variations

| Class             | Description                                                                                     |
|-------------------|-------------------------------------------------------------------------------------------------|
| `-align-x-left`   | Left-aligns the image within its container.                                                     |
| `-align-x-right`  | Right-aligns the image within its container.                                                    |
| `-align-x-center` | Horizontally centers the image within its container.                                            |
| `-align-y-top`    | Top-aligns the image within its container.                                                      |
| `-align-y-bottom` | Bottom-aligns the image within its container.                                                   |
| `-align-y-center` | Vertically centers the image within its container.                                              |
| `-contain`        | Indicates the image should be **contained** and, thus, fixed to its container's width.          |
| `-cover`          | Indicates the image should **cover** its container's area, thus, prevents downscaling below the image's native width but allows upscaling as needed. |

### State

| Class             |                                                                 |
|-------------------|-----------------------------------------------------------------|
| `has-description` | Indicates that the tile includes a description.                 |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
