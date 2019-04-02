---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-video-youtube

title: Video - Youtube
id: 20-atoms-media-video-youtube
plid: atoms-video-youtube
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Videos are used to make pages more visually interesting and offer a different form of content. YouTube videos can be embedded within a page to provide users with direct access to some video content without them having to leave our site.

###### EXPORT VIA GRUNT

```
grunt export:atoms-video-youtube
```


### Description

The youtube video atom can be used to insert a YouTube video into another pattern. YouTube videos can be used for a variety of reasons, such as to reinforce content with an informational or educational video or to provide instructions or tutorials in video form.


### Best Practices

- Use context and style guidelines when choosing YouTube videos


## Schema

| Name        | Type        | Description                                                           | Value(s)          | Default   |
|-------------|-------------|-----------------------------------------------------------------------|-------------------|-----------|
| id          | `String`    | The ID of the YouTube video to be displayed.                          |                   |           |
| width       | `String`    | An optional width that should be used to display the video.           | `full`, `half`, `quarter`, `third`, `two-third`, or `three-quarter` |   |
| align       | `String`    | An optional alignment that should be used to display the video.       | `left`, `right`, or `center` |   |
| aspect      | `String`    | An optional aspect ratio to be used to display the video.             | `standard`, `hd`, `wide`, `golden`, `square`, `academy`, `imax`, `4k`, `silver`, or `ultrawide` | `hd` |


## Classes

### Utilities

| Class               | Description                                                             |
|---------------------|-------------------------------------------------------------------------|
| `.-ar-standard`     | Sets the video aspect ratio to standard (`4:3`) mode.                   |
| `.-ar-hd`           | Sets the video aspect ratio to HD (`16:9`) mode.                        |
| `.-ar-wide`         | Sets the video aspect ratio to widescreen (`1.85:1`) mode.              |
| `.-ar-golden`       | Sets the video aspect ratio to golden ratio (`1.6180:1`) mode.          |
| `.-ar-square`       | Sets the video aspect ratio to square (`1:1`) mode.                     |
| `.-ar-academy`      | Sets the video aspect ratio to academy (`11:8`) mode.                   |
| `.-ar-imax`         | Sets the video aspect ratio to IMAX (`1.43:1`) mode.                    |
| `.-ar-4k`           | Sets the video aspect ratio to 4K (`1.9:1`) mode.                       |
| `.-ar-silver`       | Sets the video aspect ratio to silver ratio (`2.414:1`) mode.           |
| `.-ar-ultrawide`    | Sets the video aspect ratio to ultra-widescreen (`3.6:1`) mode.         |
| `.-w-full`          | Sets the video width to full (`100%`) width.                            |
| `.-w-half`          | Sets the video width to half (`50%`) width.                             |
| `.-w-quarter`       | Sets the video width to quarter (`25%`) width.                          |
| `.-w-third`         | Sets the video width to third (`33.333%`) width.                        |
| `.-w-two-third`     | Sets the video width to two-third (`66.667%`) width.                    |
| `.-w-three-quarter` | Sets the video width to three-quarter (`75%`) width.                    |
| `.-left`            | Left-aligns the video by floating it to the left.                       |
| `.-right`           | Right-aligns the video by floating it to the right.                     |
| `.-center`          | Center-aligns the video.                                                |
