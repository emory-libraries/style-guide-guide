---

layout: pattern-detail
group: user-interface
subgroup: tokens
permalink: /user-interface/tokens/tokens-heading

title: Heading
id: 10-tokens-10-globals-heading
plid: tokens-heading
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Headings help define the hierarchy and structure of content within a page by visually breaking text into sections and subsections. Headings also help identify content in terms of level of importance and groups content by overarching topics or themes. Proper usage of headings is especially crucial for accessibility.

###### EXPORT VIA GRUNT

```
grunt export:tokens-heading
```


### Description

The heading token allows you to include a heading within another pattern. All headings are rendered using the `.heading` class. Refer to our typography guide to preview our [Heading Styles][tokens-heading].


### Best Practices

- A page should only ever contain a single level one heading
- Heading levels should always decend hierarchically down the page


## Schema

Optionally, build a table to identify any pattern schematics that are pertinent for developers to be aware of. A sample schema table is given below.

| Name        | Type        | Description                                         | Value(s)            | Default   |
|-------------|-------------|-----------------------------------------------------|---------------------|-----------|
| level       | `Number`    | The level of the heading.                           | `1`-`6`             |           |
| heading     | `String`    | The heading text to be displayed.                   |                     |           |
| alternate   | `Boolean`   | Whether to use the alternate heading style, for heading levels `1` or `5`.  | `true` or `false` | `false`    |


[tokens-heading]: /patterns/00-meta-30-typography-headings/00-meta-30-typography-headings.html
