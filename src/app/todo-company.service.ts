import { Injectable } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoCompanyService implements TodoService {
  todo: Todo = {
    action: 'I want money',
  };
  
  getTodo() {
    return this.todo;
  }

  changeTodo(word = "money") {
    this.todo = {action: word};
    return this.todo;
  }
}
