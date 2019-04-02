---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-list-related-topics

title: List - Related Topics
id: 20-atoms-lists-12-list-related-topics
plid: atoms-list-related-topics
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Lists are the perfect tool for grouping a set of related items in a way that's easy for end users to consume. Topic lists are especially useful for listing a set of related tags, keywords, or topics, that may optionally provide users with a link to a filtered set of content within our site.

###### EXPORT VIA GRUNT

```
grunt export:atoms-list-related-topics
```


### Description

Use the related topic list atom to include a list of related topics within another pattern.


### Best Practices

- Try to keep labels short and concise
  - Use keywords and/or tags instead of descriptions
- Use page context to make sure you're linking to related, relevant content


## Schema

| Name                    | Type                  | Description                                                                             | Value(s)                  | Default     |
|-------------------------|-----------------------|-----------------------------------------------------------------------------------------|---------------------------|-------------|
| items                   | `Array`               | A set of items to be included in the list.                                              |                           |             |
| items.[`n`]             | `Object`              | Some data about the item.                                                               |                           |             |
| items.[`n`].data        | `String`              | Some text to be displayed for the list item.                                            |                           |             |
| items.[`n`].href        | `String`              | An optional path or URL that the item links to. Refer to [`atoms-link`][atoms-link] for additional schema. |  | |


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
