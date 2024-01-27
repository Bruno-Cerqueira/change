import { Component } from '@angular/core';
import { TodoCompanyService } from 'src/app/todo-company.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  providers: [
    TodoCompanyService
  ],
  template: `
  <button (click)="openDialog($event)">Abrir</button>
    <dialog id="dialog">
      <ng-content></ng-content>
    </dialog>
    <button (click)="test()">Get todo</button>
    <button (click)="change()">Change todo</button>
  `,
  styles: ``
})
export class ModalComponent {
  constructor(private todoService: TodoCompanyService){}
  openDialog(event: any): void {
    (document.getElementById("dialog") as HTMLDialogElement).showModal()
  }

  test() {
    console.log(this.todoService.getTodo())
  }

  change() {
    console.log(this.todoService.changeTodo("Change!"))
  }
}
