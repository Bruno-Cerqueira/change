import { Injectable } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoUnionistService implements TodoService{
  todo: Todo = {
    action: 'I want rights',
  };

  getTodo() {
    return this.todo;
  }

  changeTodo(word = "money") {
    this.todo = {action: word};
    return this.todo;
  }
}
