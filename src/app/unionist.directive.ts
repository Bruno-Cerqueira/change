import { Directive } from '@angular/core';
import { TodoUnionistService } from './todo-unionist.service';
import { TodoServiceToken } from './todo.service';

@Directive({
  selector: '[appUnionist]',
  providers:  [
    { provide: TodoServiceToken, useExisting: TodoUnionistService }
  ]
})
export class UnionistDirective {

  constructor() { }

}
