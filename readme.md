## Getting Started

run npm i ice-todo-list --save

## API

| prop         | description                     | type                                   |
| ------------ | ------------------------------- | -------------------------------------- |
| initTodoList | for initial value               | Array<{todo: string}>                  |
| changeTodo   | call back when todo list change | (value: Array<{todo: string}>) => void |
