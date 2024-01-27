import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  template: `
    <p>
      mini-card works!
    </p>
    <app-modal>
      <form method="dialog">
        <button>OK</button>
      </form>
    </app-modal>
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
