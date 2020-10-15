/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TodoItem {
        "index": number;
        "todo": string;
    }
    interface TodoList {
        "initTodoList": Array<{
    todo: string;
  }>;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {
    }
    var HTMLTodoItemElement: {
        prototype: HTMLTodoItemElement;
        new (): HTMLTodoItemElement;
    };
    interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {
    }
    var HTMLTodoListElement: {
        prototype: HTMLTodoListElement;
        new (): HTMLTodoListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "todo-item": HTMLTodoItemElement;
        "todo-list": HTMLTodoListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TodoItem {
        "index"?: number;
        "onChangeTodo"?: (event: CustomEvent<{ index: number; value: string }>) => void;
        "todo"?: string;
    }
    interface TodoList {
        "initTodoList"?: Array<{
    todo: string;
  }>;
        "onChangeList"?: (event: CustomEvent<Array<{ todo: string }>>) => void;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "todo-item": TodoItem;
        "todo-list": TodoList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "todo-item": LocalJSX.TodoItem & JSXBase.HTMLAttributes<HTMLTodoItemElement>;
            "todo-list": LocalJSX.TodoList & JSXBase.HTMLAttributes<HTMLTodoListElement>;
        }
    }
}
