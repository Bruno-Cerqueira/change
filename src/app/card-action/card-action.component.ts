import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TodoService, TodoServiceToken } from '../todo.service';
import { TodoCompanyService } from '../todo-company.service';

@Component({
  selector: 'app-card-action',
  template: `
    <button (click)="test()">{{ buttonText }}</button>
    <button (click)="change()">{{ buttonText2 }}</button>
  `,
  styles: [
  ]
})
export class CardActionComponent implements OnInit {
  @Input() buttonText = "Get todo";
  @Output() killEvent = new EventEmitter();

  buttonText2 = "Change todo";
  constructor(private todoService: TodoCompanyService) { }

  ngOnInit(): void {
  }
  test() {
    this.killEvent.emit('kill');
    console.log(this.todoService.getTodo())
  }

  change() {
    console.log(this.todoService.changeTodo("Change!"))
  }
}
