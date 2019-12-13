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


  public title: string;
  public cta: string;

  // private subscription: Subscription;
  // destroy = new Subject();

  public readonly CREATE_MODE = FormMode.CREATE;
  public readonly EDIT_MODE = FormMode.EDIT;
  public readonly EDIT = 'Edit day';
  public readonly CREATE = 'Create';

  public displayCardForm: boolean;
  // public mode: FormMode;
  public isEditMode = false;
  public cardToEditIndex: number;

  private subscription: Subscription;

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.setMode();

    this.subscription = this.cardService.openEditForm$
      .subscribe(
        (index: number) => {
          this.isEditMode = true;
          this.displayCardForm = true;
          this.cardToEditIndex = index;
          this.setMode();
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onToggleCardForm() {
    this.displayCardForm = !this.displayCardForm;
    this.isEditMode = false;
  }

  public editButtonEvent(): void {
    this.displayCardForm = false;
    this.isEditMode = false;
    this.setMode();
  }

  public setMode(): void {
    this.title = this.isEditMode ? `${this.EDIT_MODE} ${this.cardToEditIndex + 1}` : this.CREATE_MODE;
    this.cta = this.isEditMode ? this.EDIT : this.CREATE;
    // this.title = this.isEditMode ? `Edit day ${this.cardToEditIndex + 1}` : 'Create mode';
    // this.cta = this.isEditMode ? 'Edit' : 'Create';
  }

}
