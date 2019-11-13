import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'organism-card-form',
  templateUrl: './organism-card-form.component.html',
  styleUrls: ['./organism-card-form.component.scss']
})

export class OrganismCardFormComponent implements OnInit {
  public cardForm: FormGroup;

constructor(){
  
}

  ngOnInit() {
    this.initForm();
  }

  public onSubmit() {
    console.log('submit');
    console.log(this.cardForm.value);
  }

  private initForm() {
    this.cardForm = new FormGroup({
      day: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      set: new FormControl('', Validators.required)
    });
  }
}

