import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../card';
import { CardService } from '../card.service';
import { TodoService, TodoServiceToken } from '../todo.service';

@Component({
  selector: 'app-card-list',
  template: `
    <button (click)="addCard()">Adiconar card</button>
    <button (click)="getAction()">Get action</button>
    <div class="list-card">
      <app-wrap-card [card]="card" *ngFor="let card of cards$ | async"></app-wrap-card>
    </div>
  `,
  styles: [
  ]
})
export class CardListComponent implements OnChanges {

  constructor(private cardService: CardService, @Inject(TodoServiceToken) private todoService: TodoService) { }


  cards$: Observable<Card[]> = this.cardService.cards$;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('card list');
    console.log(changes);
  }

  addCard() {
    console.log('s')
  }

  getAction() {
    console.log(this.todoService.getTodo())
  }
}
