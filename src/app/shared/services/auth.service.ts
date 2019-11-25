import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponseData } from '../models/auth-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhuh-jZUZdNa3Wi2XDQhLEBUg7D--bZwM',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
