import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

import {  LateralService } from './lateral.service'
import { environment as env } from '@env/environment';


@Component({
  selector: 'new-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.styl'],
  providers: [LateralService]
})
export class LateralComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  public details: any;
  public amount: any;
  public headerNames: any;
  public showSubmenu: boolean;
  public activeTabHeader: number;
  public headerValues: any;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: false
  };

  public barChartLabels: string[] = ['Multiregion', 'Mexico', 'Europa', 'Multiregion'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Multiregion'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Mexico'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Europa'},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Multiregion'},
  ];

  constructor(
    private _detail: LateralService
  ) { }

  ngOnInit() {
    this.showSubmenu = true;
    this.activeTabHeader = 0;

    this._detail.getDetails('StructuredProduct').subscribe(data => {
      this.details = data;
      this.headerNames = this.details.headerNames;
      this.amount = this.details.portfolio.amountIssued.amount;
      this.headerValues =  this.details.headerValues;
    });
  }

  buildPiechart(label, id) {
    console.log('update lateral');
  }

  saveCustomize() {
    alert('saveCustomize');
    console.log('saveCustomize');
  }

  viewPrint() {
    console.log('print pdf');
  }
}
