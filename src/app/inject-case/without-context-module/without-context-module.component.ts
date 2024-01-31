import { Component, Inject, inject } from '@angular/core';
import { TodoCompanyService } from 'src/app/todo-company.service';
import { TodoUnionistService } from 'src/app/todo-unionist.service';
import { TodoServiceToken } from 'src/app/todo.service';

@Component({
  selector: 'app-without-context-module',
  template: `
    <button (click)="test()">
      without-context-module works!
    </button>
  `,
  styles: ``,
})
export class WithoutContextModuleComponent {
  to = inject(TodoServiceToken);

  test = () => {
    console.log(this.to.getTodo());
  }
}
