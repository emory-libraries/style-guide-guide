---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-alert

title: Alert
id: 30-molecules-messaging-alert
plid: molecules-alert
description: 
status: 

meta:
- updated: April 1, 2019
  
  
  
---


## Getting Started

Alerts are a messaging tool that can be used to alert user of important information.

###### EXPORT VIA GRUNT

```
grunt export:molecules-alert
```


### Description

The alert molecule can be used to include an alert within another pattern. Alerts are built as [Vue.js][Vue.js] components and utilize in-browser session storage to remember when users dismiss them.


### Best Practices

- Avoid making `error` level alerts dismissible
- Ensure that unique IDs (`uid`) are unique site-wide
  - This is crucial to ensure that alerts get dismissed properly without affecting other alerts throughout the site.


## Schema


| Name        | Type        | Description                                         | Value(s)                                                              | Default   |
|-------------|-------------|-----------------------------------------------------|-----------------------------------------------------------------------|-----------|
| dismissible | `Boolean`   | Indicates whether the alert should be dismissible.  | `true` or `false`                                                     | `true`    |
| type        | `String`    | Indicates the type of alert box to use.             | `default`, `success`, `caution`, `error`, `info`, `light`, or `dark`  | `default` |
| uid         | `String`    | A site-wide unique ID for the alert.                |                                                                       |           |
| title       | `String`    | The title of the alert to be displayed.             |                                                                       |           |
| message     | `String`    | The message of the alert to be displayed.           |                                                                       |           |


## Classes

### Variations

| Class             | Description                                     |
|-------------------|-------------------------------------------------|
| `-default`        | Uses the **default** alert style.               |
| `-success`        | Uses the **success** alert style.               |
| `-caution`        | Uses the **caution** alert style.               |
| `-error`          | Uses the **error** alert style.                 |
| `-info`           | Uses the **info** alert style.                  |
| `-light`          | Uses the **light** alert style.                 |
| `-dark`           | Uses the **dark** alert style.                  |

### State

| Class             | Description                                     |
|-------------------|-------------------------------------------------|
| `is-dismissible`  | Indicates whether the alert is dismissible.     |


[Vue.js]: https://vuejs.org/
