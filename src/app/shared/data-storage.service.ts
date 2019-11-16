import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    private readonly URL = `https://ng-burpees.firebaseio.com/posts.json`;

    constructor(private http: HttpClient) {

    }

    public postCard(cardData) {
        this.http.post(this.URL,
            cardData).subscribe(
                responseData => console.log(responseData)
        );
    }

    public fetchCards(): Observable<any> {
        return this.http.get(
            this.URL
        )
            .pipe(
                (map(responseData => {
                    const postArray = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postArray.push({...responseData[key], id: key});
                        }
                    }
                    return postArray;
                }))
            );
    }
}
