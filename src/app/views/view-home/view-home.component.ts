import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormMode } from '../../shared/models/formMode/form-mode.model';
import { CardService } from '../../shared/services/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
})

export class ViewHomeComponent implements OnInit, OnDestroy {

  public displayCardForm: boolean;
  // public mode: FormMode;
  public isEditMode = false;
  public cardToEditIndex: number;

  private subscription: Subscription;

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.subscription = this.cardService.openEditForm$
      .subscribe(
        (index: number) => {
          this.isEditMode = true;
          this.cardToEditIndex = index;
          this.displayCardForm = true;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onDisplayCardForm() {
    this.displayCardForm = !this.displayCardForm;
    this.isEditMode = false;
  }

}
