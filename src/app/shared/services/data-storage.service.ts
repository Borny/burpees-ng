import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError, take, exhaustMap } from 'rxjs/operators';

import { Card } from '../models/card/card.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  private cards: Card[] = [];
  public cardsListChanged$: BehaviorSubject<Card[]> = new BehaviorSubject(this.cards.slice());

  private readonly URL = `https://ng-burpees.firebaseio.com/cards.json`;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public postCard(cardData: Card) {
    this.http.post(
      this.URL,
      cardData
    )
      .subscribe(
        responseData => {
          console.log(responseData);
        }
      );
  }

  public editCard(cardData: Card) {
    this.http.put(
      this.URL,
      cardData
    )
      .subscribe(
        responseData => {
          console.log(responseData);
        }
      );
  }

  public fetchCards(): Observable<any[]> {
    return this.authService.user$.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get(
          this.URL,
          {
            params: new HttpParams().set('auth', user.token)
          }
        );
      }),
      map((responseData: Card[]) => {
        const postArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'oups! something went wrong';
        if (error.error.error === 'Permission denied') {
          errorMessage = `${error.error.error}... c'est balo!!!`;
          return throwError(errorMessage);
        }
        return throwError(errorMessage);
      }),
    );
  }

  public deleteCards(): void {
    this.http.delete(this.URL)
      .subscribe(() => {
        this.cardsListChanged$.next(this.cards.slice());
      });
  }
}
