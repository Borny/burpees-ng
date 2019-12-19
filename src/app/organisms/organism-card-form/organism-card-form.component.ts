import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Card } from '../../shared/models/card/card.model';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { CardService } from '../../shared/services/card.service';
import { FormMode } from '../../shared/models/formMode/form-mode.model';

@Component({
  selector: 'organism-card-form',
  templateUrl: './organism-card-form.component.html',
  styleUrls: ['./organism-card-form.component.scss']
})

export class OrganismCardFormComponent implements OnInit, OnDestroy {
  @ViewChild('inputTime', { static: true }) inputTime: ElementRef;

  // @Input() mode: FormMode = FormMode.CREATE;
  @Input() isEditMode = false;
  @Input() cardToEditIndex: number;
  @Input() title: string;
  @Input() cta: string;

  // @Output() editButtonEvent$ = new EventEmitter<boolean>();
  @Output() cancelButtonEvent$ = new EventEmitter<void>();


  // private subscription: Subscription;
  // destroy = new Subject();

  public cardForm: FormGroup;

  public readonly CREATE_MODE = FormMode.CREATE;
  public readonly EDIT_MODE = FormMode.EDIT;
  public readonly EDIT = 'Edit day';
  public readonly CREATE = 'Create';

  @HostListener('window:keyup', ['$event']) closeModal(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.cancel();
    }
  }

  constructor(
    private dataStorageService: DataStorageService,
    private cardService: CardService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    // this.destroy.next();
    // this.destroy.complete();
    // // this.subscription.unsubscribe();
  }

  public onSubmit(): void {
    // if (this.isEditMode) {
    // this.cardService.editCard(this.cardForm.value, this.cardToEditIndex);

    // this.dataStorageService.editCard(this.cardForm.value);
    // this.cardForm.reset();
    // this.editButtonEvent$.emit();
    // } else {
    this.addCard(this.cardForm.value);
    // }
    this.inputTime.nativeElement.focus();
  }

  public cancel(): void {
    this.cancelButtonEvent$.emit();
  }

  private initForm(): void {
    this.cardForm = new FormGroup({
      // day: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      set: new FormControl('', Validators.required)
    });
    this.inputTime.nativeElement.focus();
  }

  private addCard(card: Card): void {
    this.dataStorageService.postCard(card);
    // this.cardService.addCard(card);
    this.cardForm.reset();
  }

}
