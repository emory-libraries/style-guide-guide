---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-image

title: Image
id: 20-atoms-media-image
plid: atoms-image
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Images are used to make pages more visually interesting and can be a useful tool for breaking up text-heavy content.

###### EXPORT VIA GRUNT

```
grunt export:atoms-image
```


### Description

The image atom can be used to insert an image into another pattern. Images can be used for a variety of reasons, including to convey and/or support content or to serve as a decorative element on the page.


### Best Practices

- Use context and style guidelines when choosing images
- Always provide an `alt` text description for non-decorative images


## Schema

| Name        | Type        | Description                                                           | Value(s)          | Default   |
|-------------|-------------|-----------------------------------------------------------------------|-------------------|-----------|
| src         | `String`    | The path or URL to the source image.                                  |                   |           |
| alt         | `String`    | Alternative text describing the image, required if not `decorative`.  |                   |           |
| decorative  | `Boolean`   | Indicates whether the the image is decorative.                        | `true` or `false` | `false`   |
| width       | `String`    | An optional width that should be used to display the image.           | `auto`, `full`, `half`, `quarter`, `third`, `two-third`, or `three-quarter` |   |
| align       | `String`    | An optional alignment that should be used to display the image.       | `left`, `right`, or `center` |   |


## Classes

### Utilities

| Class               | Description                                                             |
|---------------------|-------------------------------------------------------------------------|
| `.-w-auto`          | Sets the image width to its initial (`auto`) width.                     |
| `.-w-full`          | Sets the image width to full (`100%`) width.                            |
| `.-w-half`          | Sets the image width to half (`50%`) width.                             |
| `.-w-quarter`       | Sets the image width to quarter (`25%`) width.                          |
| `.-w-third`         | Sets the image width to third (`33.333%`) width.                        |
| `.-w-two-third`     | Sets the image width to two-third (`66.667%`) width.                    |
| `.-w-three-quarter` | Sets the image width to three-quarter (`75%`) width.                    |
| `.-left`            | Left-aligns the image by floating it to the left.                       |
| `.-right`           | Right-aligns the image by floating it to the right.                     |
| `.-center`          | Center-aligns the image.                                                |
