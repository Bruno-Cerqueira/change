import { Component, DoCheck, OnInit } from '@angular/core';
import { TodoCompanyService } from '../todo-company.service';

@Component({
  selector: 'app-mini-card',
  template: `
    <p>
      mini-card works!
    </p>
    <app-without-context-standalone>
    </app-without-context-standalone>
  `,
  styles: [
  ]
})
export class MiniCardComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log('check mini card')
  }
}
