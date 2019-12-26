import { Injectable } from '@angular/core';

import { Card, ICard } from '../models/card/card.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({ providedIn: 'root' })
export class CardService {
  private card: ICard;
  private cards: ICard[] = [];

  public cardsServiceListChanged$ = new BehaviorSubject(this.cards.slice());
  public openEditForm$: Subject<number> = new Subject();

  constructor(private dataStorageService: DataStorageService) { }

  public addCard(card: ICard): void {
    const newCard = new Card(
      `${this.cards.length + 1}`,
      `${Object.values(card)[0]}`,
      `${Object.values(card)[1]}`,
      `${Object.values(card)[2]}`,
    );

    // this.dataStorageService.postCard(newCard);

    // this.cards.push(newCard);
    // this.dataStorageService.cardsListChanged$.next(this.cards.slice());
    this.dataStorageService.postCard(card);
  }

  public getCards(): ICard[] {
    // this.dataStorageService.fetchCards()
    //   .subscribe((cards) => {
    //     this.cards = cards;
    //   });
    return this.cards.slice();
  }

  // public getCard(index: number): Card {
  //   return this.cards[index];
  // }

  // public editCard(value: Card, index: number) {
  //   const cardEdited = new Card(
  //     `${index + 1}`,
  //     `${Object.values(value)[0]}`,
  //     `${Object.values(value)[1]}`,
  //   );
  //   this.cards[index] = cardEdited;
  //   this.cardsListChanged$.next(this.cards.slice());
  // }

  // public clearCard(index: number) {
  //   this.cards[index].day = '';
  //   this.cards[index].time = '';
  //   this.cards[index].set = '';
  // }

  // public deleteCard(index: number) {
  //   this.cards.splice(index, 1);
  //   this.cardsServiceListChanged$.next(this.cards.slice());
  // }

  // public deleteCards() {
  //   this.cards.splice(0, this.cards.length);
  //   this.cardsServiceListChanged$.next(this.cards.slice());
  // }
}
