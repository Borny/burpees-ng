import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthResponseData } from '../../shared/models/auth-response.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'view-auth',
  templateUrl: './view-auth.component.html'
})
export class ViewAuthComponent implements OnInit {
  public isLoginMode = true;

  public authFormReactive: FormGroup;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this._initForm();
  }

  // public onSubmitReactive() {
  //   console.log(this.authFormReactive.value);
  // }

  public onSubmitTemplate(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signUp(email, password).subscribe(
        (resData: AuthResponseData) => { console.log(resData); },
        (error) => { console.log(error); }
      );
    }

    form.reset();
  }

  public onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  private _initForm() {
    this.authFormReactive = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required]))
    });
  }

}
