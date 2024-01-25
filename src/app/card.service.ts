import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from './card';

const ANONYMOUS_CARD: Card[] = [{
  title: 'Junior',
  description: 'Calzone'
}];

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards!: Card[];
  private subject = new BehaviorSubject<Card[]>(ANONYMOUS_CARD);

  cards$: Observable<Card[]> = this.subject.asObservable();

  loadCard(card:Card) {
    this.cards$.subscribe(cardsElemetns => {
      this.cards = cardsElemetns;
    });
    this.cards.push(card)
    this.subject.next(this.cards);
  }
}
