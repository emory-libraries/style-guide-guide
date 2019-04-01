---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-map

title: Map
id: 20-atoms-media-map
plid: atoms-map
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Maps are used to show the location of a place. Maps can be a useful tool for helping users locate buildings, offices, libraries, events, and more both on-campus and off-campus.

###### EXPORT VIA GRUNT

```
grunt export:atoms-map
```


### Description

The map atom can be used to insert a map into another pattern. Maps can be rendered by either dynamically loading a map using [OpenStreetMap][OSM] (OSM) data or embedded using [Google Maps][Google Maps]. By default, OSM rendering is used and will fallback to an embedded Google Map if JavaScript is not available. However, Google Maps can be used as the preferred renderer by changing the `source` parameter as described below.


### Best Practices

- Only use one map per page to avoid visual clutter
- Resize maps accordingly to fit your use case


## Schema

| Name        | Type          | Description                                                                                           | Value(s)            | Default   |
|-------------|---------------|-------------------------------------------------------------------------------------------------------|---------------------|-----------|
| mapId       | `String`      | An optional ID of a place found within `map.json`.                                                    |                     |           |
| name        | `String`      | The name of the place to show on the map, required if not using `mapId`.                              |                     |           |
| coordinates | `String`      | The coordinates of the place to show on the map, required if not using `mapId`.                       |                     |           |
| zoom        | `Number`      | The map's default zoom level, where `1` is a world view.                                              | `1` - `19`          | `18`      |
| source      | `String`      | The map's preferred data source and rendering method.                                                 | `OSM` or `Google`   | `OSM`     |
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


[OSM]: https://www.openstreetmap.org/
[Google Maps]: https://www.google.com/maps
