---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-list-related-links

title: List - Related Links
id: 20-atoms-lists-11-list-related-links
plid: atoms-list-related-links
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Lists are the perfect tool for grouping a set of related items in a way that's easy for end users to consume. Link lists are especially useful for listing a set of related links.

###### EXPORT VIA GRUNT

```
grunt export:atoms-list-related-links
```


### Description

Use the related link list atom to include an list of related links within another pattern.


### Best Practices

- Always label links with a clear call-to-action or description
  - Never use labels like *Click Here*
  - Avoid using URLs as labels
- Use page context to make sure you're linking to related, relevant content


## Schema

| Name                    | Type                  | Description                                                                             | Value(s)                  | Default     |
|-------------------------|-----------------------|-----------------------------------------------------------------------------------------|---------------------------|-------------|
| items                   | `Array`               | A set of items to be included in the list.                                              |                           |             |
| items.[`n`]             | `Object`              | Some data about the item.                                                               |                           |             |
| items.[`n`].data        | `String`              | Some text to be displayed for the list item.                                            |                           |             |
| items.[`n`].href        | `String`              | An path or URL that the item links to. Refer to [`atoms-link`][atoms-link] for additional schema. |  | |


## Classes

### Variations

| Class         | Description                                                         |
|---------------|---------------------------------------------------------------------|
| `-bulleted`   | Uses a version of a list made up of bulleted, or unordered, items.  |
| `-numbered`   | Uses a version of a list made up of numbered, or ordered, items.    |
| `-links`      | Uses a version of a list made up of lists.                          |
| `-topics`     | Uses a version of a list made up of topic, tags, or keywords.       |
| `-files`      | Uses a version of a list made up of file links.                     |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html
