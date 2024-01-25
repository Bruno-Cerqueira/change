import { Injectable } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoCompanyService implements TodoService {

  getTodo() {
    const todo: Todo = {
      action: 'I want money',
    };

    return todo;
  }
}
