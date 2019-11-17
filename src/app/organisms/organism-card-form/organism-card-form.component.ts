import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Card } from '../../shared/models/card/card.model';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { CardService } from '../../shared/services/card.service';
import { FormMode } from '../../shared/models/formMode/form-mode.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'organism-card-form',
  templateUrl: './organism-card-form.component.html',
  styleUrls: ['./organism-card-form.component.scss']
})

export class OrganismCardFormComponent implements OnInit, OnDestroy {
  // @Input() mode: FormMode = FormMode.CREATE;
  @Input() isEditMode = false;
  @Input() cardToEditIndex: number;

  public cardForm: FormGroup;
  public title: string;
  public cta: string;

  private subscription: Subscription;

  // public readonly CREATE_MODE = FormMode.CREATE;
  // public readonly EDIT_MODE = 'Create mode';
  // public readonly EDIT = 'Edit';
  // public readonly CREATE = 'Create';



  constructor(
    private dataStorageService: DataStorageService,
    private cardService: CardService) {
  }

  ngOnInit() {
    this.initForm();
    this.setMode();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    console.log('submit');
    console.log(this.cardForm.value);
    if (this.isEditMode) {
      this.cardService.editCard(this.cardForm.value, this.cardToEditIndex);
      this.subscription = this.cardService.cardsListChanged$
        .subscribe()
    } else {
      this.addCard(this.cardForm.value);

    }
  }

  private initForm() {
    this.cardForm = new FormGroup({
      // day: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      set: new FormControl('', Validators.required)
    });
  }

  private addCard(card: Card) { // TODO: add the card day number somehow...need to get the card list length : cardService ?
    // this.dataStorageService.postCard(card);
    this.cardService.addCard(card);

    this.cardForm.reset();
  }

  public setMode() {
    // this.mode = this.isEditMode ? this.EDIT_MODE : this.CREATE_MODE;
    // this.cta = this.isEditMode ? this.EDIT : this.CREATE;
    this.title = this.isEditMode ? 'Edit mode' : 'Create mode';
    this.cta = this.isEditMode ? 'Edit' : 'Create';
  }
}
