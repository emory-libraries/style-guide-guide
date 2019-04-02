---

layout: pattern-detail
group: user-interface
subgroup: atoms
permalink: /user-interface/atoms/atoms-copyright

title: Copyright
id: 20-atoms-messaging-copyright
plid: atoms-copyright
description: 
status: 

meta:
- updated: April 2, 2019
  
  
  
---


## Getting Started

Copyright notices help broadcast to a site's audience that the site's design and content is subject copyright restrictions.

###### EXPORT VIA GRUNT

```
grunt export:atoms-copyright
```


### Description

The copyright atom allows you to include a copyright notice within another pattern. Copyright notices should always be placed in the site's footer.


### Best Practices

- Display the copyright notice across all pages within the site
- Always use the current year as the copyright year


## Schema

Optionally, build a table to identify any pattern schematics that are pertinent for developers to be aware of. A sample schema table is given below.

| Name            | Type     | Description                                                                                        | Value(s)  | Default                 |
|-----------------|----------|----------------------------------------------------------------------------------------------------|-----------|-------------------------|
| owner           | `String` | The name of the copyright owner.                                                                   |           | `Emory University`      |
| rights          | `String` | The rights of the copyright owner, displayed as written.                                           |           | `All Rights Reserved.`  |
| policies        | `Array`  | A set of site policies that should be linked to from the copyright line.                           |           |                         |
| policies.`n`    | `Object` | Some link data for a policy. Refer to [`atoms-link`][atoms-link] for schema.                       |           |                         |
| address         | `Object` | Some address data, where syntax may optionally vary from below schema if using `format.address`.   |           |                         |
| address.street  | `String` | All street data for the given address.                                                             |           | `201 Dowman Drive`      |
| address.city    | `String` | The city data for the given address.                                                               |           | `Atlanta`               |
| address.state   | `String` | The state data for the given address, written as the full state name.                              |           | `Georgia`               |
| address.zip     | `Number` | The zip code data for the given address, optionally can be passed as a `String` if it starts with a `0`. |           | `30322`             |
| phone           | `Number` | The phone number to be displayed within the copyright, optionally can be passed as a `String` if it starts with a `0`. |           | `4047276123`        |
| format          | `Object` | Some optional format data.                                                                         |           |                         |
| format.address  | `String` | An optional address format, written with `{key}` placeholders, where `key` is a key in the `address` object and the `{state}` placeholder can include a modifier to indicate the use of either a `long` or `short` format.  |           | `{street}, {city}, {state.long} {zip}` |
| format.phone    | `String` | An optional address format, written with `x`, `0`, or `#` placeholders.                            |           | `xxx.xxx.xxxx`          |


[atoms-link]: /patterns/20-atoms-globals-link/20-atoms-globals-link.html