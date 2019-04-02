---

layout: pattern-detail
group: user-interface
subgroup: molecules
permalink: /user-interface/molecules/molecules-notification

title: Notification
id: 30-molecules-messaging-notification
plid: molecules-notification
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Notifications are a messaging tool that can be used to notify user of important information.

###### EXPORT VIA GRUNT

```
grunt export:molecules-notification
```


### Description

The notification molecule can be used to include a notification within another pattern. Notifications are built as [Vue.js][Vue.js] components and utilize in-browser session storage to remember when users dismiss them.


### Best Practices

- Avoid making `error` level notifications dismissible
- Ensure that unique IDs (`uid`) are unique site-wide
  - This is crucial to ensure that notifications get dismissed properly without affecting other notifications throughout the site.


## Schema


| Name        | Type        | Description                                         | Value(s)                                                              | Default   |
|-------------|-------------|-----------------------------------------------------|-----------------------------------------------------------------------|-----------|
| dismissible | `Boolean`   | Indicates whether the notification should be dismissible.  | `true` or `false`                                                     | `true`    |
| type        | `String`    | Indicates the type of notification bar to use.             | `default`, `success`, `caution`, `error`, `info`, `light`, or `dark`  | `caution` |
| uid         | `String`    | A site-wide unique ID for the notification.                |                                                                       |           |
| label       | `String`    | The label of the notification to be displayed.             |                                                                       |  `Alert`  |
| message     | `String`    | The message of the notification to be displayed.           |                                                                       |           |


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
