import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  template: `
    <p>
      mini-card works!
    </p>
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
