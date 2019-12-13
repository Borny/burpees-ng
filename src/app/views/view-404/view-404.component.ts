import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'view-404',
  templateUrl: './view-404.component.html',
  styleUrls: ['./view-404.component.scss']
})

export class View404Component {

  constructor(private router: Router) {

  }

  public navigate() {
    this.router.navigate(['./home']);
  }

}
