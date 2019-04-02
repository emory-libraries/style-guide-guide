---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-block

title: Block
id: 30-molecules-blocks-block
plid: molecules-block
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Blocks are used to highlight some content within our site or call extra attention to some action that should be taken. Blocks are especially useful for drawing the end user's attention to some important information or desired call-to-action.

###### EXPORT VIA GRUNT

```
grunt export:molecules-block
```


### Description

The block molecule can be used to include a block within another pattern. Blocks are typically composed of a text excerpt, call-to-action, and image, where the block's content is positioned on the left side of the block and the image is positioned on the right side, by default.


### Best Practices

- Use blocks selectively and only where appropriate
- Alternate block colors when using multiple, consecutive blocks


## Schema

| Name        | Type      | Description                                                                                              | Value(s)     | Default   |
|-------------|-----------|----------------------------------------------------------------------------------------------------------|--------------|-----------|
| heading     | `String`  | A heading to be displayed.                                                                               |              |           |
| text        | `String`  | A short text excerpt to be displayed.                                                                    |              |           |
| buttons     | `Array`   | A set of button links to be displayed.                                                                   |              |           |
| buttons.`n` | `Object`  | Some data for a button link using [`atoms-button-link`][atoms-button-link] schema.                       |              |           |
| image       | `Object`  | Some data for an image using [`atoms-image`][atoms-image] schema.                                        |              |           |
| image.overhang    | `String`  | Optionally indicates where the image should hang over the block.                    | `top`, `bottom`, or `both`  |           |
| image.stretch     | `String`  | Optionally indicates where the image should stretch to touch the end of the block.  | `top`, `bottom`, or `both`  |           |
| shadow      | `String`  | Optionally indicates where an inner shadow should be applied.                  | `top`, `bottom`, `left`, or `right`    |           |
| flipped     | `Boolean` | Optionally indicates that the block's content and image should be flipped.                         | `true` or `false`  | `false`   |
| markdown    | `Boolean` | Optionally indicates that the `text` should be rendered as [Markdown][Markdown].                   | `true` or `false`  | `false`   |
| theme       | `String`  | Optionally indicates which block theme to use.                                                     | `light` or `dark`  | `dark`    |


## Classes

### Variations

| Class               | Description                                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `-light`            | Uses a light theme.                                                                                                                   |
| `-dark`             | Uses a dark theme.                                                                                                                    |
| `-flipped`          | Flips the block's content and image positions.                                                                                        |
| `-overhang-top`     | Indicates that the block's image should hang over the **top** of the block.                                                           |
| `-overhang-bottom`  | Indicates that the block's image should hang over the **bottom** of the block.                                                        |
| `-overhang-both`    | Indicates that the block's image should hang over **both** the top and bottom of the block.                                           |
| `-stretch-top`      | Indicates that the block's image should stretch to touch the **top** of the block, overriding `overhang-top` if set.                  |
| `-stretch-bottom`   | Indicates that the block's image should stretch to touch the **bottom** of the block, overriding `overhang-bottom` if set.            |
| `-stretch-both`     | Indicates that the block's image should stretch to touch **both** the top and bottom of the block, overriding any `overhang` if set.  |
| `-shadow-top`       | Indicates that the block should have an inner shadow along the **top** edge of the block, overriding any other `shadow` if set.       |
| `-shadow-bottom`    | Indicates that the block should have an inner shadow along the **bottom** edge of the block, overriding any other `shadow` if set.    |
| `-shadow-left`      | Indicates that the block should have an inner shadow along the **left** edge of the block, overriding any other `shadow` if set.      |
| `-shadow-right`     | Indicates that the block should have an inner shadow along the **right** edge of the block, overriding any other `shadow` if set.     |


[Markdown]: https://daringfireball.net/projects/markdown/
[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
[atoms-button-link]: /patterns/20-atoms-buttons-01-button-link/20-atoms-buttons-01-button-link.html
