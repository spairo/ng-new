import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';

import { BreadCrumb } from './breadcrumb';

@Component({
    selector: 'new-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: [ './breadcrumb.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs$: any;
  public foo: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    debugger;

    console.log(this.activatedRoute.root);
    this.foo = this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(event => this.buildBreadCrumb(this.activatedRoute.root));
    console.log(this.foo);


    this.breadcrumbs$ = this.router.events.filter(event => event instanceof NavigationEnd)
      // .pipe(distinctUntilChanged())
      .map(event => this.buildBreadCrumb(this.activatedRoute.root));
      // Build your breadcrumb starting with the root route of your current activated route

    console.log(this.breadcrumbs$);
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
      breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
      // If no routeConfig is avalailable we are on the root path

      const label = route.routeConfig ? route.routeConfig.data[ 'breadcrumb' ] : 'about';

      const path = route.routeConfig ? route.routeConfig.path : '';

      // In the routeConfig the complete path is not available,
      // so we rebuild it each time
      const nextUrl = `${url}${path}/`;

      const breadcrumb = {
        label: label,
        url: nextUrl
      };

      const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];

      if (route.firstChild) {
        // If we are not on our current path yet,
        // there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
      }

      return newBreadcrumbs;
  }

}
