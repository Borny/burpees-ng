import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../../shared/models/card/card.model';

@Component({
  selector: 'molecule-cards',
  templateUrl: './molecule-cards.component.html',
  styleUrls: ['./molecule-cards.component.scss'],
})
export class MoleculeCardsComponent {
  @Input() card: Card;
  @Input() index: number;
  @Input() isLast: boolean;

  @Output() deleteCard$: EventEmitter<void> = new EventEmitter();
  @Output() editCard$: EventEmitter<void> = new EventEmitter();

  public manageButtonContent: string;

  public onManageCard() {
    this.deleteCard$.emit();
  }

  public onEditCard() {
    this.editCard$.emit();
  }

  public setButtonManageContent() {
    return this.manageButtonContent = this.isLast
      ? 'Delete'
      : 'Clear';
  }
}
