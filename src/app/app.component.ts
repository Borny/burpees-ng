import { Component, OnInit, OnDestroy } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public isLogged = false;

  private onDestroy$ = new Subject<void>();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user$.pipe(
      takeUntil(this.onDestroy$)
    )
      .subscribe(user => {
        this.isLogged = !!user;
      });
    this.authService.autoLogin();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
