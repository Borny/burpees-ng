import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from '../../shared/services/card.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DataStorageService } from '../../shared/services/data-storage.service';
import { AuthService } from '../../shared/services/auth.service';
import { Card } from '../../shared/models/card/card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'organism-header',
  templateUrl: './organism-header.component.html',
  styleUrls: ['./organism-header.component.scss']
})

export class OrganismHeaderComponent implements OnInit, OnDestroy {
  public heading = 'Burpees Challenge';
  public cardCount = 0;
  public isAuthenticated = false;
  public userName = 'Not signed in...';
  public cards: Card[] = [];
  public hasCard = false;
  public navigateBack = false;

  private onDestroy$ = new Subject<void>();

  constructor(
    // private cardService: CardService,
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    public router: Router) {
  }

  ngOnInit(): void {
    this.getCardCount();
    this.getUser();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public getCardCount(): void {
    // this.cardService.cardsListChanged$
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe(cardsList => this.cardCount = cardsList.length);
    this.dataStorageService.cardsListChanged$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(cardsList => {
        this.cardCount = cardsList.length;
        this.hasCard = !!cardsList.length;
      });
  }

  public onLogOut() {
    this.authService.logOut();
  }

  public onDeleteCards(): void {
    // TODO: delete when finished with the app
    this.dataStorageService.deleteCards();
    // this.cardService.deleteCards();
  }

  public onGetCards(): void {
    this.dataStorageService.fetchCards()
      .subscribe((cards: Card[]) => {
        this.cards = cards;
        this.cards.map((card, index) => card.day = (index + 1).toString());
        this.dataStorageService.cardsListChanged$.next(this.cards.slice());
      }
      );

    // this.cards = this.cardService.getCards();
  }

  private getUser() {
    this.authService.user$.pipe(
      takeUntil(this.onDestroy$)
    )
      .subscribe(
        user => {
          this.isAuthenticated = !!user;
          if (user) { this.userName = user.email; }
        }
      );
  }

}
