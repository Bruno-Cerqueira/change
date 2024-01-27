import { InjectionToken } from '@angular/core';

export interface Todo {
  action: string;
}

export interface TodoService {
  /**
   * Returns a of all of the current user's todos.
   */
   getTodo: () => Todo;
   changeTodo: (word: string) => Todo;
}

export const TodoServiceToken = new InjectionToken<TodoService>('TodoService');