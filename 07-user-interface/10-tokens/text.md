---

layout: pattern-detail
group: user-interface
subgroup: tokens
permalink: /user-interface/tokens/tokens-text

title: Text
id: 10-tokens-10-globals-text
plid: tokens-text
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Text is the main type of content that our pages use to convey information. It's also the most adaptable and can be used in a variety of different ways.

###### EXPORT VIA GRUNT

```
grunt export:tokens-text
```


### Description

The text token allows you to include a block of text within another pattern. This text content can either be written in a plain text format or using [Markdown][Markdown]. All text blocks are rendered using the `.text` class. Refer to our typography guide to preview our [Text Styles][tokens-text].


### Best Practices

- Use a separate `tokens-text` for each new paragraph of text
  - Improves accessibility and semantics by ensuring that each paragraph has its own `<p>` tag
- Avoid inserting explicit line breaks (`<br>`) into or between paragraphs


## Schema


| Name  | Type      | Description        | Value(s)  | Default   |
|-------|-----------|--------------------|-----------|-----------|
| type  | `String`  | The type of text.  | `body`, `lead`, `blockquote`, `listing`, `accent`, `button`, `badge`, `label`, or `data` | `body`     |
| text  | `String`  | The text content to be displayed, either as plain text or Markdown. |           |           |
| alternate | `Boolean` | Whather to use the alternate text style, for text of type `body`. | `true` or `false` | `false` |
| markdown | `Boolean` | Whether to render the text as Markdown | `true` or `false` | `false` |


[Markdown]: https://daringfireball.net/projects/markdown/
[tokens-text]: /patterns/00-meta-30-typography-text/00-meta-30-typography-text.html
