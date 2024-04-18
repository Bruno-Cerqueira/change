import { Component, Self, inject } from '@angular/core';
import { TodoCompanyService } from 'src/app/todo-company.service';

@Component({
  selector: 'app-without-context-standalone',
  standalone: true,
  imports: [],
  template: `
    <button (click)="test()">
      without-context-module works!
    </button>
  `,
  providers: [TodoCompanyService],
  styles: ``
})
export class WithoutContextStandaloneComponent {
  to = inject(TodoCompanyService);

  test = () => {
    console.log(this.to.getTodo());
  }
}
