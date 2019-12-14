import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthResponseData } from '../models/auth-response.model';
import { User } from '../../shared/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // public user$: Subject<User> = new Subject();
  public user$ = new BehaviorSubject<User>(null);

  private API_KEY = 'AIzaSyBhuh-jZUZdNa3Wi2XDQhLEBUg7D--bZwM';
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData =>
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn))
    );
  }

  public signIn(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData =>
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn))
    );
  }

  public autoLogin(): void {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user$.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration)
    }
  }

  public logOut() {
    this.user$.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem('userData');
  }

  public autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration);
  }

  // Handling the authentication
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user$.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  // Handling the error coming from the backend
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'The email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is not correct';
        break;
    }
    return throwError(errorMessage);
  }
}
