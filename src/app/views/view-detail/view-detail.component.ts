import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { exhaustMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { DataStorageService } from '../../shared/services/data-storage.service';
import { ICard } from '../../shared/models/card/card.model';

@Component(
  {
    selector: 'view-detail',
    templateUrl: './view-detail.component.html',
    styleUrls: ['./view-detail.component.scss'],
  }
)
export class ViewDetailComponent implements OnInit, OnDestroy {
  public time: string;
  public day: string;
  public set: string;
  public description: string;
  public card: ICard;
  public fetching = false;

  private onDestroy$ = new Subject<void>();

  constructor(
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.onGetCard();
    this.getDayNumber();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private getDayNumber() {
    this.day = this.route.snapshot.queryParamMap.get('index');
  }

  private onGetCard() {
    this.fetching = true;
    this.route.params.pipe(
      takeUntil(this.onDestroy$),
      exhaustMap((value: Params) => {
        const id = value.id.toString();
        return this.dataStorageService.fetchCard(id);
      })
    )
      .subscribe((card: ICard) => {
        console.log(card);
        this.card = card;
        this.set = card.set;
        this.description = card.description;
        this.time = card.time;
        this.fetching = false;
      });
  }


}
