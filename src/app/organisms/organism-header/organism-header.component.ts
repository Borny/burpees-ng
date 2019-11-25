import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from '../../shared/services/card.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'organism-header',
  templateUrl: './organism-header.component.html',
  styleUrls: ['./organism-header.component.scss']
})

export class OrganismHeaderComponent implements OnInit, OnDestroy {
  public heading = 'Burpees Challenge';
  public cardCount = 0;

  private onDestroy$ = new Subject<void>();

  constructor(private cardService: CardService, private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.getCardCount();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public getCardCount(): void {
    // this.cardService.cardsListChanged$
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe(cardsList => this.cardCount = cardsList.length);
    this.dataStorage.cardsListChanged$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(cardsList => this.cardCount = cardsList.length);
  }

}
