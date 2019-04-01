---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-card-contact

title: Card - Contact
id: 30-molecules-cards-card-contact
plid: molecules-card-contact
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Cards can be used to callout some relevant information and visually group similar content. Contact cards are especially useful for inserting contact information within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-card-contact
```


### Description

The card contact molecule can be used to include a contact card within another pattern. Contact cards require an image, preferably in the form of a square headshot, but will default to a generic placeholder image if none is given.


### Best Practices

- Provide a square headshot whenever applicable


## Schema

| Name    | Type      | Description                                                                                 | Value(s)  | Default   |
|---------|-----------|---------------------------------------------------------------------------------------------|-----------|-----------|
| name    | `String`  | The name of the contact, optionally formatted with postnominals included.                   |           |           |
| title   | `String`  | The contact's title or position, optionally including their division separated by a comma.  |           |           |
| email   | `String`  | The contact's email address.                                                                |           |           |
| link    | `Object`  | Some link data using the [`atoms-link`][atoms-link] schema, where the link's label will equal `name`. | |           |
| image   | `Object`  | Some image data for the contact's headshot using the [`atoms-image`][atoms-image] schema, preferably where the image is in a square format. |            |            |
| gender  | `String`  | Optionally indicates the contact's gender for identifying the appropriate placeholder avatar when `image` is not given.  | `male` or `female` | `male`    |

[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
[atoms-image]: /patterns/20-atoms-media-image/20-atoms-media-image.html
