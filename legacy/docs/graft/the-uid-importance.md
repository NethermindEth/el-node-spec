---
title: "The UID importance"
---

The `uid` property is a unique `string` identifier inside the Grafana database. The good usage of this property is important because all the relations between objects (folder ↔ panel ↔ dashboard ↔ datasource) uses this property. The user has the power to define these properties while initializing any of the objects. Take in mind that the `uid` is a value that will present in the backup files that the end user will import on its Grafana instance, so a good name pattern is useful to avoid collisions between multiple AVS collections, we propose to use this name pattern:

```
el-[avs]-[type]-[name]
```

- `avs` is the AVS Node project name, e.g.: `eigenDA`
- `type` is the type of the object: `folder`,   `datasource`, `dashboard`, `panel`
