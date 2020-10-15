# todo-list



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type                  | Default |
| -------------- | --------- | ----------- | --------------------- | ------- |
| `initTodoList` | --        |             | `{ todo: string; }[]` | `[]`    |


## Events

| Event        | Description | Type                               |
| ------------ | ----------- | ---------------------------------- |
| `changeList` |             | `CustomEvent<{ todo: string; }[]>` |


## Dependencies

### Depends on

- [todo-item](.)

### Graph
```mermaid
graph TD;
  todo-list --> todo-item
  style todo-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
