import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Card } from '../models/card/card.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  private cards: Card[] = [];
  public cardsListChanged$: BehaviorSubject<Card[]> = new BehaviorSubject(this.cards.slice());

  private readonly URL = `https://ng-burpees.firebaseio.com/cards.json`;

  constructor(private http: HttpClient) {
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

  public fetchCards(): Observable<Card[]> {
    return this.http.get(this.URL)
      .pipe(
        (map(responseData => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }))
      );
  }

  public deleteCards(): void {
    this.http.delete(this.URL)
      .subscribe(() => {
        this.cardsListChanged$.next(this.cards.slice());
      });
  }
}
