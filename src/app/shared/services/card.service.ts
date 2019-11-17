import { Injectable } from '@angular/core';

import { Card } from '../models/card/card.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardService {
  private card: Card;
  private cards: Card[] = [];
  // private cards: Card[] = [
  //   new Card(
  //     'one',
  //     '6min',
  //     '5x5',
  //   ),
  //   new Card(
  //     'one',
  //     '6min',
  //     '5x5',
  //   ),
  //   new Card(
  //     'one',
  //     '6min',
  //     '5x5',
  //   ),
  //   new Card(
  //     'one',
  //     '6min',
  //     '5x5',
  //   ),
  // ];

  public cardsListChanged$ = new BehaviorSubject(this.cards);
  public openEditForm$ = new Subject();

  public addCard(card: Card): void {
    this.cards.push(card);
    this.cardsListChanged$.next(this.cards.slice());
  }

  public getCards(): Card[] {
    return this.cards.slice();
  }

  public getCard(index: number): Card {
    return this.cards[index];
  }

  public editCard(value, index: number) {
    this.cards[index] = value;
  }

  public clearCard(index: number) {
    this.cards[index].day = '';
    this.cards[index].time = '';
    this.cards[index].set = '';
  }

  public deleteCard(index: number) {
    this.cards.splice(index, 1);
    this.cardsListChanged$.next(this.cards.slice());
  }

  public deleteCards() {
    this.cards.splice(0, this.cards.length);
    this.cardsListChanged$.next(this.cards.slice());
  }
}
