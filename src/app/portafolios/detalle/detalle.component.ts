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
  public serie: string;
  public id: string;
  public showInvisible: boolean;
  public banquero: boolean;
  public showYields: any;
  public showCoupons: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _push: PushNotificationsService,
  ) {
    this.serie = this.route.snapshot.params.serie;
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.banquero = true;
    this.showInvisible = false;
    this._push.requestPermission();
  }

  foo() {
    this._push.create('New', {
      body: 'Rendimientos',
      icon: '/assets/icons/info.png',
    }).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
