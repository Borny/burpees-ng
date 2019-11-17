import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataStorageService } from '../../shared/services/data-storage.service';
import { Card } from '../../shared/models/card/card.model';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'organism-cards',
  templateUrl: './organism-cards.component.html',
  styleUrls: ['./organism-cards.component.scss']
})

export class OrganismCardsComponent implements OnInit, OnDestroy {
  public cards: Card[] = [];
  public fetching = false;

  private subscription: Subscription;

  constructor(private dataStorageService: DataStorageService, private cardService: CardService) {
  }

  ngOnInit(): void {
    this.onGetCards();
    this.subscription = this.cardService.cardsListChanged$
      .subscribe((cardList: Card[]) => this.cards = cardList);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onGetCards(): void {
    // TODO: add trackBy to *ngFor
    // this.fetching = true;
    // this.dataStorageService.fetchCards()
    //   .subscribe((cards: Card[]) => {
    //     this.cards = cards;
    //     this.fetching = false;
    //   });

    this.cards = this.cardService.getCards();
  }

  public editCard(index: number): void {
    // TODO: Can only edit the time and set.
    // TODO: clicking on the card opens the form
    this.cardService.openEditForm$.next(index);
  }

  public onDeleteCards(): void { // TODO: delete when finished with the app
    // this.dataStorageService.deleteCards();
    this.cardService.deleteCards();
  }

  public deleteCard(index: number, isLast: boolean): void {
    // TODO: if last card then delete entirely
    // if any other card then delete the data but keeps its space in the grid (blank space), then on click opens the form and updates the card
    isLast ? this.cardService.deleteCard(index) : this.cardService.clearCard(index);
  }

}
