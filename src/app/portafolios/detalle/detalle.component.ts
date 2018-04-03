import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { PushNotificationsService } from 'ng-push';

import * as _ from 'lodash';

import { environment as env } from '@env/environment';

@Component({
  selector: 'new-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.styl']
})
export class DetalleComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _push: PushNotificationsService
  ) {}

  ngOnInit() {
    this._push.requestPermission()
  }
  foo() {
    this._push.create('Test', {body: 'something'}).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
