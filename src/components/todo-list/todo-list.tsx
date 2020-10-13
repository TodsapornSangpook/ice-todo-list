import { Component, Prop, State, h, Host } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoListComponent {
  @Prop() initTodoList: Array<{
    todo: string;
  }> = [
    {
      todo: 'todo1',
    },
    {
      todo: 'todo2',
    },
    {
      todo: 'todo3',
    },
  ];

  @State() todoList: Array<{
    todo: string;
  }> = this.initTodoList;

  addTodo = () => {
    this.todoList = [
      ...this.todoList,
      {
        todo: '',
      },
    ];
  };

  handleChangeTodo = (event: CustomEvent<{ index: number; value: string }>) => {
    const cloneTodoList = [...this.todoList];
    cloneTodoList[event.detail.index].todo = event.detail.value;
    this.todoList = cloneTodoList;
  };

  render() {
    return (
      <Host>
        <div>TODO ITEMS</div>

        <div>
          {this.todoList.map((item, index: number) => (
            <todo-item index={index} todo={item.todo} onChange={this.handleChangeTodo}></todo-item>
          ))}
        </div>

        <div>
          <button onClick={this.addTodo}>add todo</button>
        </div>
      </Host>
    );
  }
}
