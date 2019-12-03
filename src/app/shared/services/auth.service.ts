import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthResponseData } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    private API_KEY = 'AIzaSyBhuh-jZUZdNa3Wi2XDQhLEBUg7D--bZwM';

    constructor(private http: HttpClient) { }

  public signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
        catchError(this.handleError)
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
          catchError(this.handleError)
      );
  }

  private handleError( errorRes: HttpErrorResponse) {
      let errorMessage = 'An unknown error occurred';
      if (!errorRes.error || !errorRes.error.error ) {
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
