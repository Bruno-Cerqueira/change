import { Component, inject } from '@angular/core';
import { TodoCompanyService } from 'src/app/todo-company.service';

@Component({
  selector: 'app-without-context-module',
  template: `
    <button (click)="test()">
      without-context-module works!
    </button>
  `,
  styles: ``,
  providers: []
})
export class WithoutContextModuleComponent {
  to = inject(TodoCompanyService);

  test = () => {
    console.log(this.to.getTodo());
  }
}
