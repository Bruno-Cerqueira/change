import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TodoService, TodoServiceToken } from '../todo.service';

@Component({
  selector: 'app-card-action',
  template: `
    <button (click)="test()">{{ buttonText }}</button>
  `,
  styles: [
  ]
})
export class CardActionComponent implements OnInit {
  @Input() buttonText = "Ação";
  @Output() killEvent = new EventEmitter();

  constructor(@Inject(TodoServiceToken) private todoService: TodoService) { }

  ngOnInit(): void {
  }
  test() {
    console.log('test');
    this.killEvent.emit('kill');
    console.log(this.todoService.getTodo())
  }
}
