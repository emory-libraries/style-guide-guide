---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-map-image

title: Map - Image
id: 20-atoms-media-map-image
plid: atoms-map-image
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Maps are used to show the location of a place. Maps can be a useful tool for helping users locate buildings, offices, libraries, events, and more both on-campus and off-campus.

###### EXPORT VIA GRUNT

```
grunt export:atoms-map-image
```


### Description

The map image atom can be used to insert a still map image into another pattern. Maps images rely on a map ID that cooresponds to a given screenshot within our image library.


### Best Practices

- Only use one map per page to avoid visual clutter
- Resize maps accordingly to fit your use case


## Schema

| Name        | Type          | Description                                                                                           | Value(s)            | Default   |
|-------------|---------------|-------------------------------------------------------------------------------------------------------|---------------------|-----------|
| id          | `String`      | The ID of the map image to display.                                                                   | `business`, `health`, `law`, `music`, `oxford`, `rose`, `theology`, or `woodruff` |           |
| url         | `String`      | An optional alternative to using `id`, the URL of the map image to display.                           |                     |           |
| scale       | `Percentage`  | The map image's zoom level, where `100%` is the default.                                              | >=`100%`            | `100%`    |
| size        | `Object`      | Some optional data about the map's size.                                                              |                     |           |
| size.fixed  | `Boolean`     | Whether the map's height should be fixed instead of using a percentage of its width.                  | `true` or `false`   | `false`   |
| size.width  | `Number`      | The desired width of the map as a number with units.                                                  |                     | `100%`    |
| size.height | `Number`      | The desired height of the map, either as a percentage if not `size.fixed` or as a number with units.  |                     | `25%`     |


## Classes

### Variations

| Class       | Description                                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------|
| `-h-fixed`  | Inidicates that map's the height is fixed rather than a percentage of its width, applied to the `.map-frame`. |
| `-image`    | Inidicates that map is an image.                                                                              |
