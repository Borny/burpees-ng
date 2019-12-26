import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { DataStorageService } from '../../shared/services/data-storage.service';
import { ICard } from '../../shared/models/card/card.model';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'organism-cards',
  templateUrl: './organism-cards.component.html',
  styleUrls: ['./organism-cards.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})

export class OrganismCardsComponent implements OnInit, OnDestroy {

  public cards: ICard[] = [];
  public fetching = false;
  public error: string = null;

  private subscription: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private cardService: CardService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.onGetCards();
    // this.subscription = this.cardService.cardsListChanged$
    //   .subscribe((cardList: Card[]) => this.cards = cardList);
    this.subscription = this.dataStorageService.cardsListChanged$
      .subscribe((cardList: ICard[]) => this.cards = cardList);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onGetCards(): void {
    this.fetching = true;

    // Data Storage Service
    this.subscription = this.dataStorageService.fetchCards()
      .subscribe(
        (cards: ICard[]) => {
          this.cards = cards;

          this.cards.map((card, index) => card.day = (index + 1).toString());

          this.dataStorageService.cardsListChanged$.next(this.cards.slice());
          this.fetching = false;
        },
        errorMessage => {
          this.error = errorMessage;
          this.fetching = false;
        }
      );

    // Card Service
    // this.cards = this.cardService.getCards();
  }

  // public editCard(index: number): void {
  //   this.cardService.openEditForm$.next(index);
  // }

  // public deleteCard(index: number, isLast: boolean): void {
  //   isLast ? this.cardService.deleteCard(index) : this.cardService.clearCard(index);
  // }

  public trackByFn(index: number, item: ICard) {
    return item.id;
  }

  public navigate(card: ICard) {
    console.log(card.id);
    this.route.navigate([`./${card.id}`]);
  }

}
