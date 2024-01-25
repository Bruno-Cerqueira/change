import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-wrap-card',
  template: `
    <div>
      <div class="top">
      <button (click)="editCard()">Change!</button>
      <button (click)="saveHuman('safe!')">Safe your self morron!</button>
      <app-card-action (killEvent)="killResult($event)">
      </app-card-action>
      </div>
      <app-basic-card [card]="card">
      </app-basic-card>
    </div>
  `,
  styleUrls: ['./wrap-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapCardComponent implements OnInit {
  lifes = 0;
  @Input() card : Card = {};

  constructor() { }

  ngOnInit(): void {
  }

  editCard(){
    this.card = {title: "Changed", description: "Changed mama"} as Card
  }

  killResult(data: unknown) {
    console.log(data);
    this.lifes = this.lifes - 1;
  }

  saveHuman(data: unknown) {
    console.log(data);
    this.lifes = this.lifes + 1;
  }
}
