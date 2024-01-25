import { Directive } from '@angular/core';
import { TodoCompanyService } from './todo-company.service';
import { TodoServiceToken } from './todo.service';

@Directive({
  selector: '[appCompany]',
  providers:  [
    { provide: TodoServiceToken, useExisting: TodoCompanyService }
  ]
})
export class CompanyDirective {

  constructor() { }

}
