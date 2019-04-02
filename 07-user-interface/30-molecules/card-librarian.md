---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-card-librarian

title: Card - Librarian
id: 30-molecules-cards-card-librarian
plid: molecules-card-librarian
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Cards can be used to callout some relevant information and visually group similar content. Librarian cards are especially useful for inserting subject librarian information within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-card-librarian
```


### Description

The card librarian molecule can be used to include a subject librarian card within another pattern. Subject librarian cards require an image, preferably in the form of a square headshot, but will default to a generic placeholder image if none is given.


### Best Practices

- Provide a square headshot whenever applicable


## Schema

| Name      | Type      | Description                                                                                               | Value(s)          |Default|
|-----------|-----------|-----------------------------------------------------------------------------------------------------------|-------------------|-------|
| name      | `String`  | The name of the librarian, optionally formatted with postnominals included.                               |                   |       |
| title     | `String`  | The librarian's title or position.                                                                        |                   |       |
| library   | `String`  | The librarian's home library.                                                                             |                   |       |
| link      | `Object`  | Some link data using the [`atoms-link`][atoms-link] schema.                                               |                   |       |
| image     | `Object`  | Some image data for the librarian's headshot using the [`atoms-image`][atoms-image] schema, preferably where the image is in a square format.           |                   |       |
| gender    | `String`  | Optionally indicates the librarian's gender for identifying the appropriate placeholder avatar when `image` is not given.  | `male` or `female` | `male` |
| subjects  | `Array`   | A list of subject areas that the librarian specializes in.                                                |                   |       |
| phone     | `Number` or `String` | The librarian's phone number to be displayed.                                                  |                   |       |
| email     | `String` | The librarian's email address to be displayed.                                                             |                   |       |
| cv        | `Object` | Some link data using the [`atoms-link`][atoms-link] schema, where the link's label always uses a default.  |                   |       |
| guides    | `Object` | Some link data using the [`atoms-link`][atoms-link] schema, where the link's label always uses a default.  |                   |       |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
