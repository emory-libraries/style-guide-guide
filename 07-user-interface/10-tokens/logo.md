---

layout: pattern-detail
group: user-interface
subgroup: tokens
permalink: /user-interface/tokens/tokens-logo

title: Logo
id: 10-tokens-10-globals-logo
plid: tokens-logo
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Our logos are standard brand marks that represent our university and/or unit within the university. They should never be altered and always used with care.

###### EXPORT VIA GRUNT

```
grunt export:tokens-logo
```


### Description

The logo token allows you to directly include any logo from our logo library within another pattern. All logos are included as an inline SVG and is placed inside a `.logo` block.


### Best Practices

- Header and footer logos should always hyperlink to a site's home page (`/`)


## Schema

| Name      | Type        | Description                                         | Value(s)          | Default   |
|-----------|-------------|-----------------------------------------------------|-------------------|-----------|
| id        | `String`    | The ID of a logo without our logo library.          |                   |           |
| href      | `String`    | A valid path or URL to use as the logo's hyperlink. |                   | `/`       |
| hyperlink | `Boolean`   | Whether the logo should be hyperlinked.             | `true` or `false` | `true`       |
