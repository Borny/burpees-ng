import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthResponseData } from '../../shared/models/auth-response.model';
import { AuthService } from '../../shared/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'view-auth',
  templateUrl: './view-auth.component.html'
})
export class ViewAuthComponent implements OnInit {
  public isLoginMode = true;

  public authFormReactive: FormGroup;
  public isFetching = false;
  public error = null;
  public success = null;

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
    this.isFetching = true;
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.signIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
        (resData: AuthResponseData) => {
          this.success = this.isLoginMode
              ? `Yea you're logged in !!`
              : `Yea you're signed up !!`;
          console.log(resData);
          this.isFetching = false;
        },
        (errorMessage) => {
          console.log('error :', errorMessage);
          this.error = errorMessage;
          this.isFetching = false;
        });

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
