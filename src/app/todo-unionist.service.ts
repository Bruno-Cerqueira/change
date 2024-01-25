import { Injectable } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoUnionistService implements TodoService{

  getTodo() {
    const todo: Todo = {
      action: 'I want rights',
    };

    return todo;
  }
}
