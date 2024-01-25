import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-basic-card',
  template: `
    <p>
      Nome completo: {{ card.title }}
    </p>
    <p>
      Exame: {{ card.description }}
    </p>
    <p>
      Vidas: {{lifes}}
    </p>
    <app-mini-card></app-mini-card>
  `,
  styles: [
  ],
})
export class BasicCardComponent implements DoCheck {
  @Input() lifes : number = 0;
  @Input() card : Card = {};

  constructor() { }

  ngDoCheck(){
    console.log('check basic card')
  }
}
