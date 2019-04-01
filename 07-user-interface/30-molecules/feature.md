---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-feature

title: Feature
id: 30-molecules-boxes-feature
plid: molecules-feature
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Feature boxes are a good way to callout some content within the site or feature a news article or upcoming event.

###### EXPORT VIA GRUNT

```
grunt export:molecules-feature
```


### Description

The feature molecule allows you to include a feature box within another pattern. Feature boxes require that an image in portrait orientation be used.


### Best Practices

- Adhere to art direction guidelines when selecting imagery
- Limit action buttons to a maximum of 2


## Schema

| Name        | Type      | Description                                                                                               | Value(s)  | Default   |
|-------------|-----------|-----------------------------------------------------------------------------------------------------------|-----------|-----------|
| context     | `String`  | A short text excerpt providing some context or, alternatively, a formatted date wherever applicable.      |           |           |
| heading     | `String`  | A heading to be displayed, limited to `150` characters.                                                   |           |           |
| description | `String`  | An short, optional description to be displayed, limited to `200` characters.                              |           |           |
| image         | `Object`  | Some image data using the [`atoms-image`][atoms-image] schema.                      |                               |           |
| image.align   | `Object`  | Optionally configures how the image should be aligned.                              |                               |           |
| image.align.x | `String`  | Configures the image's horizontal (`x`-axis) alignment.                             | `left`, `right`, or `center`  | `center`  |
| image.align.y | `String`  | Configures the image's vertical (`y`-axis) alignment.                               | `top`, `bottom`, or `center`  | `center`  |
| buttons     | `Array`   | A set of button links to be displayed.                                                                    |           |           |
| buttons.`n` | `Object`  | Some data for a button link using [`atoms-button-link`][atoms-button-link] schema.                        |           |           |
| theme       | `String`  | Optionally indicates which feature theme to use.                                                  | `light` or `dark` | `light  ` |


## Classes

### Variations

| Class               | Description                                                   |
|---------------------|---------------------------------------------------------------|
| `-light`            | Uses a light theme.                                           |
| `-dark`             | Uses a dark theme.                                            |
| `-align-x-left`     | Left-aligns the feature image within its container.           |
| `-align-x-right`    | Right-aligns the feature image within its container.          |
| `-align-x-center`   | Horizontally centers the feature image within its container.  |
| `-align-y-top`      | Top-aligns the feature image within its container.            |
| `-align-y-bottom`   | Bottom-aligns the feature image within its container.         |
| `-align-y-center`   | Vertically centers the feature image within its container.    |

### State

| Class             |                                                                 |
|-------------------|-----------------------------------------------------------------|
| `has-description` | Indicates that the feature box includes a description.          |


[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
[atoms-button-link]: /patterns/20-atoms-buttons-01-button-link/20-atoms-buttons-01-button-link.html
