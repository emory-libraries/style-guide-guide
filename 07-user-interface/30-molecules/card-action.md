---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-card-action

title: Card - Action
id: 30-molecules-cards-card-action
plid: molecules-card-action
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Cards can be used to callout some relevant information and visually group similar content. Action cards are especially useful for inserting calls-to-action within the context of another page.

###### EXPORT VIA GRUNT

```
grunt export:molecules-card-action
```


### Description

The card action molecule can be used to include a library aid card within another pattern. Action cards can be used to emphasize some action that you wish for users to perform.


### Best Practices

- Only include one call-to-action per card


## Schema

| Name      | Type      | Description                                                                   | Value(s)                            | Default     |
|-----------|-----------|-------------------------------------------------------------------------------|-------------------------------------|-------------|
| text      | `String`  | Some text to be displayed on the action card to help prompt the user to act.  |                                     |             |
| image     | `Object`  | Some image data using the [`atoms-image`][atoms-image] schema.                |                                     |             |
| button    | `Object`  | Some button data, using the schema for [`atoms-button-link`][atoms-button-link] with a `button.type` of `link`, [`atoms-button-action`][atoms-button-action] with a `button.type` of `action`, or [`atoms-button-toggle`][atoms-button-toggle] with a `button.type` of `toggle`.  |  |  |
| button.type | `String`  | Indicates the type of action button to use.  | `link`, `action`, or `toggle`  | `link`  |


[atoms-image]: /patterns/20-atoms-mediam-imagek/20-atoms-media-image.html
[atoms-button-link]: /patterns/20-atoms-buttons-01-button-link/20-atoms-buttons-01-button-link.html
[atoms-button-action]: /patterns/20-atoms-buttons-02-button-action/20-atoms-buttons-02-button-action.html
[atoms-button-toggle]: /patterns/20-atoms-buttons-04-button-toggle/20-atoms-buttons-04-button-toggle.html
