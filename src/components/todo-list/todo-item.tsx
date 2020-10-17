import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import { EventChangeTodoInterface } from './todo-list.interface';

@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true,
})
export class TodoItemComponent {
  @Prop() index: number;
  @Prop() todo: string;
  @State() mode: 'view' | 'edit' = 'view';
  @Event() changeTodo: EventEmitter<EventChangeTodoInterface>;

  handleChangeTodo = (evt: Event) => {
    const target = evt.target as HTMLTextAreaElement;
    const value: string = target.value;
    this.changeTodo.emit({ index: this.index, value: value });
  };

  handleClickView = () => {
    this.mode = 'view';
  };

  handleClickEdit = () => {
    this.mode = 'edit';
  };

  render() {
    return (
      <div class="root">
        {this.mode === 'view' && (
          <div class="flex-container">
            <label>{this.todo}</label>
            <button onClick={this.handleClickEdit}>edit</button>
          </div>
        )}

        {this.mode === 'edit' && (
          <div class="flex-container">
            <input value={this.todo} onChange={this.handleChangeTodo}></input>
            <button onClick={this.handleClickView}>view</button>
          </div>
        )}
      </div>
    );
  }
}
2;
