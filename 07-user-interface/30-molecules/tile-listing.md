---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-tile-listing

title: Tile - Listing
id: 30-molecules-tiles-tile-listing
plid: molecules-tile-listing
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Tiles can be used to callout some relevant information and visually group similar content. Listing tiles are especially useful for inserting some listing information within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-tile-listing
```


### Description

The tile listing molecule can be used to include a listing tile within another pattern. Listing tiles are typically used to display some listing information sourced from one of our various feeds, such as news, events, exhibitions, and/or blogs.


### Best Practices

- Only link to one listing item per card


## Schema

| Name            | Type      | Description                                                                       | Value(s)                    | Default   |
|-------------|-----------|-------------------------------------------------------------------------------------|-------------------------------|-----------|
| title       | `String`  | The title of the listing content to be displayed.                                   |                               |           |
| badge       | `String`  | An optional badge to be displayed.                                                  |                               |           |
| description | `String`  | An optional description to be displayed, limited to a maximum of `150` characters.  |                               |           |
| date        | `String`  | A formatted date or datetime string to be displayed.                                |                               |           |
| link        | `Object`  | Some link data using the [`atoms-link`][atoms-link] schema, where `label` is optional but displayed as a call-to-action when given. | | |
| image             | `Object`  | Some image data using the [`atoms-image`][atoms-image] schema.                |                               |           |
| image.align       | `Object`  | Optionally configures how the image should be aligned.                        |                               |           |
| image.align.x     | `String`  | Configures the image's horizontal (`x`-axis) alignment.                       | `left`, `right`, or `center`  | `center`  |
| image.align.y     | `String`  | Configures the image's vertical (`y`-axis) alignment.                         | `top`, `bottom`, or `center`  | `center`  |
| image.fit         | `String`  | Configures the image's fit within its container, where `contain` fixes the image's width to the width of its container, scaling it up or down accordingly, and `cover` allows the image to be scaled upward when necessary but prevents downscaling of the image below its native width. | `contain` or `cover` | `contain`  |


## Classes

### Variations

| Class               | Description                                                                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------|
| `-align-x-left`     | Left-aligns the listing image within its container.                                                     |
| `-align-x-right`    | Right-aligns the listing image within its container.                                                    |
| `-align-x-center`   | Horizontally centers the listing image within its container.                                            |
| `-align-y-top`      | Top-aligns the listing image within its container.                                                      |
| `-align-y-bottom`   | Bottom-aligns the listing image within its container.                                                   |
| `-align-y-center`   | Vertically centers the listing image within its container.                                              |
| `-contain`          | Indicates the listing's image should be **contained** and, thus, fixed to its container's width.        |
| `-cover`            | Indicates the listing's image should **cover** its container's area, thus, preventing downscaling below the image's native width but allowing upscaling as needed. |

### State

| Class             |                                                                 |
|-------------------|-----------------------------------------------------------------|
| `has-description` | Indicates that the listing includes a description.              |
| `has-badge`       | Indicates that the listing includes a badge.                    |
| `has-action`      | Indicates that the listing includes a call-to-action link.      |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
