import {Component, OnInit} from '@angular/core';

import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'organism-cards',
  templateUrl: './organism-cards.component.html',
  styleUrls: ['./organism-cards.component.scss']
})

export class OrganismCardsComponent implements OnInit{
  public cards: any[] = [];

  constructor(private dataStorageService: DataStorageService){
  }

  ngOnInit(): void {
    // this._getCards()
  }

  public

  public getCards() {
    this.dataStorageService.fetchCards()
        .subscribe(cards => this.cards = cards);
  }

}
