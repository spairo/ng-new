import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import {  PortafoliosService } from './portafolios.service'

import * as _ from 'lodash';

import { environment as env } from '@env/environment';
import { build$ } from 'protractor/built/element';


@Component({
  selector: 'new-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.styl'],
  providers: [PortafoliosService]
})
export class PortafoliosComponent implements OnInit {

  public subyacenteTab: string;
  public briefcases: any;
  public tabs: any;
  public subjacents: any;
  public activeTab: any;
  public boxes: any;
  public prices: any;

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions:any = {
    responsive: false
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(
    private _briefcases: PortafoliosService
  ) { }

  ngOnInit() {
    this.subyacenteTab = 'TODO';
    this.activeTab = '000';

    this._briefcases.getBriefcases('ResponseGetPortFolio').subscribe(data => {

      this.briefcases = data;

      this.buildTabs(this.briefcases.productTabs);
      this.buildsubjacents(this.briefcases.underlyingAssets);
      this.buildBriefcases(this.briefcases.structuredProductInformation);
      this.buildCharts(this.briefcases.structuredProductInformation);
    });
  }


  buildTabs(tabs) {
    this.tabs = tabs;
  }

  buildsubjacents(subjacents) {
    this.subjacents = subjacents;
  }

  buildBriefcases(briefcases) {
    this.boxes = briefcases;
  }
  buildCharts(prices) {

    this.prices = prices;

    var foo = _.map(this.prices, 'prices');

    console.log(foo);

    var arr = _.map(foo, 'price');
    console.log(arr);

  }

  detail(id, serie) {

        alert('go to detail' + id + ' ' + serie);
  }

}
