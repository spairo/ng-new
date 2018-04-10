import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { PushNotificationsService } from 'ng-push';

@Component({
  selector: 'new-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.styl']
})
export class DetalleComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  public param1: string;
  public param2: string;
  public showInvisible: boolean;
  public animal: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _push: PushNotificationsService,
  ) {
    this.route.queryParams.subscribe(params => {
        this.param1 = params['serie'];
        this.param2 = params['id'];
    });
  }

  ngOnInit() {
    this.animal = 'cebolla';
    this.showInvisible = false;
    this._push.requestPermission();
  }

  foo() {
    this._push.create('New - Test', {
      body: 'Do you like my body?',
      icon: '/assets/icons/info.png',
    }).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
