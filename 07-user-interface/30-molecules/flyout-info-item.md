---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-flyout-info-item

title: Flyout Info Item
id: 30-molecules-flyouts-flyout-info-item
plid: molecules-flyout-info-item
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Info items convey a single snippet of data within the context of a larger data set. Flyout info items are particularly useful for helping to delivery small amounts of data to users directly from flyout menus typically found in our site's header.

###### EXPORT VIA GRUNT

```
grunt export:molecules-flyout-info-item
```


### Description

The flyout info item molecule can be used to include a single info item within a larger list of info items. Flyout info items are specifically designed for use within our site's flyout navigation menus.


### Best Practices

- Use meaningful yet clear and concise labels
- Only convey one tibdit of data per flyout info item


## Schema

| Name  | Type      | Description                                         | Value(s)          | Default   |
|-------|-----------|-----------------------------------------------------|-------------------|-----------|
| label | `String`  | A label used to describe the data.                  |                   |           |
| data  | `String`  | Some data to be displayed.                          |                   |           |
| faded | `Boolean` | Indicates whether the data should appear **faded.** | `true` or `false` | `false`   |


## Classes

### Variations

| Class     | Description                                                                                                                   |
|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| `-faded`  | Indicates that the data should appear **faded**, used as a means to deemphasize something or lower its level of importance.   |
