import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthResponseData } from '../../shared/models/auth-response.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'view-auth',
  templateUrl: './view-auth.component.html',
  styleUrls: ['./view-auth.component.scss']
})
export class ViewAuthComponent {

  @ViewChild('inputEmail', { static: true }) emailInput: ElementRef;

  public isLoginMode = true;

  public isFetching = false;
  public error = null;
  public success = null;
  public logginIn = 'Loggin In...';
  public signingUp = 'Signing Up...';

  constructor(private authService: AuthService, private router: Router) {
  }

  public onSubmitTemplate(form: NgForm) {
    this.error = null;
    this.success = null;

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
          ? `Log in successful!!`
          : `Sign up successful!!`;
        this.isFetching = false;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isFetching = false;
      });

    form.reset();
  }

  public onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
