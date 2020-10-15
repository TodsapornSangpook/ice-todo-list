import { Component, Prop, State, h, Host, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoListComponent {
  @Event() changeList: EventEmitter<Array<{ todo: string }>>;
  @Prop() initTodoList: Array<{
    todo: string;
  }> = [];

  @State() todoList: Array<{
    todo: string;
  }> = this.initTodoList;

  @Watch('todoList')
  watchHandler(newValue: Array<{ todo: string }>) {
    this.changeList.emit(newValue);
  }

  handleAddTodo = () => {
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
            <todo-item index={index} todo={item.todo} onChangeTodo={this.handleChangeTodo}></todo-item>
          ))}
        </div>

        <div>
          <button onClick={this.handleAddTodo}>add todo</button>
        </div>
      </Host>
    );
  }
}
