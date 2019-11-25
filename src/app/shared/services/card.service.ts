import { Injectable } from '@angular/core';

import { Card } from '../models/card/card.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({ providedIn: 'root' })
export class CardService {
  private card: Card;
  private cards: Card[] = [];

  public cardsListChanged$ = new BehaviorSubject(this.cards.slice());
  public openEditForm$ = new Subject();

  constructor(private dataStorageService: DataStorageService) {

  }


  // public addCard(card: Card): void {
  //   const newCard = new Card(
  //     `${this.cards.length + 1}`,
  //     `${Object.values(card)[0]}`,
  //     `${Object.values(card)[1]}`,
  //   );

  //   // this.dataStorageService.postCard(newCard);

  //   this.cards.push(newCard);
  //   this.cardsListChanged$.next(this.cards.slice());
  // }

  public getCards(): Card[] {
    // this.dataStorageService.fetchCards()
    //   .subscribe((cards) => {
    //     this.cards = cards;
    //   });
    return this.cards.slice();
  }

  public getCard(index: number): Card {
    return this.cards[index];
  }

  // public editCard(value: Card, index: number) {
  //   const cardEdited = new Card(
  //     `${index + 1}`,
  //     `${Object.values(value)[0]}`,
  //     `${Object.values(value)[1]}`,
  //   );
  //   this.cards[index] = cardEdited;
  //   this.cardsListChanged$.next(this.cards.slice());
  // }

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
