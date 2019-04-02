---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-card-listing

title: Card - Listing
id: 30-molecules-cards-card-listing
plid: molecules-card-listing
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Cards can be used to callout some relevant information and visually group similar content. Listing cards are especially useful for inserting some listing information within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-card-listing
```


### Description

The card listing molecule can be used to include a listing card within another pattern. Listing cards are typically used to display some listing information sourced from one of our various feeds, such as news, events, exhibitions, and/or blogs.


### Best Practices

- Only link to one listing item per card


## Schema

| Name              | Type      | Description                                                                   | Value(s)                      | Default   |
|-------------------|-----------|-------------------------------------------------------------------------------|-------------------------------|-----------|
| title             | `String`  | The title of the listing content to be displayed.                             |                               |           |
| badge             | `String`  | An optional badge to be displayed.                                            |                               |           |
| description       | `String`  | An optional description to be displayed, limited to a maximum of `150` characters.  |                         |           |
| date              | `String`  | A formatted date or datetime string to be displayed.                          |                               |           |
| theme             | `String`  | Optionally indicates the theme to use.                                        | `light` or `dark`             | `light`   |
| vertical          | `Boolean` | Optionally indicates whether the listing should be confined to its vertical layout. | `true` or `false`       | `false`   |
| image             | `Object`  | Some image data using the [`atoms-image`][atoms-image] schema.                |                               |           |
| image.orientation | `String`  | Optionally indicates the image's orientation to better optimize scaling.      | `portrait` or `landscape`     |           |
| image.align       | `Object`  | Optionally configures how the image should be aligned.                        |                               |           |
| image.align.x     | `String`  | Configures the image's horizontal (`x`-axis) alignment.                       | `left`, `right`, or `center`  | `center`  |
| image.align.y     | `String`  | Configures the image's vertical (`y`-axis) alignment.                         | `top`, `bottom`, or `center`  | `center`  |
| buttons           | `Array`   | A set of buttons to be displayed.                                             |                               |           |
| buttons.`n`       | `Object`  | Some button data using the [`atoms-button-link`][atoms-button-link] schema.   |                               |           |


## Classes

### Variations

| Class               | Description                                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------|
| `-light`            | Uses the **light** theme.                                                                     |
| `-dark`             | Uses the **dark** theme.                                                                      |
| `-vertical`         | Indicates the listing uses a **vertical** layout.                                             |
| `-portrait`         | Indicates the image is in **portrait** orientation, must be applied to `card-listing-image`.  |
| `-landscape`        | Indicates the image is in **landscape** orientation, must be applied to `card-listing-image`. |
| `-align-x-left`     | Left-aligns the image within its container.                                                   |
| `-align-x-right`    | Right-aligns the image within its container.                                                  |
| `-align-x-center`   | Horizontally centers the image within its container.                                          |
| `-align-y-top`      | Top-aligns the image within its container.                                                    |
| `-align-y-bottom`   | Bottom-aligns the image within its container.                                                 |
| `-align-y-center`   | Vertically centers the image within its container.                                            |

### State

| Class             |                                                                 |
|-------------------|-----------------------------------------------------------------|
| `has-description` | Indicates that the listing includes a description.              |
| `has-badge`       | Indicates that the listing includes a badge.                    |


[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
[atoms-button-link]: /patterns/20-atoms-buttons-01-button-link/20-atoms-buttons-01-button-link.html
