---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-callout

title: Callout
id: 20-atoms-messaging-callout
plid: atoms-callout
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Callouts are a messaging tool that helps to draw users' attention to some important information. Callouts can be used to highlight some content within the context of other page content.

###### EXPORT VIA GRUNT

```
grunt export:atoms-callout
```


### Description

The callout atom can be used to include a callout within another pattern. While callouts can be used with a variety of content, their content is most effective when limited to text and used to communicate information in a few short sentences or a single paragraphs.


### Best Practices

- Avoid using images, videos, and other media within callouts
- Try to limit callout content to a few sentences or one paragraph


## Schema

| Name      | Type        | Description                                                 | Value(s)          | Default   |
|-----------|-------------|-------------------------------------------------------------|-------------------|-----------|
| text      | `String`    | Some text content to be displayed.                          |                   |           |
| markdown  | `Boolean`   | Indicates whether the `text` should be parsed as Markdown.  | `true` or `false` | `false`   |
