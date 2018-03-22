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
    {data: ['97.9964', '97.5857', '96.873', '95.5325', '95.209', '94.6646', '95.148'], label: 'Series A'}
  ];

  public lineChartLabels:Array<any> = ['02-07-2019', '02-08-2019', '02-09-2019', '02-10-2019', '02-11-2019', '02-12-2019', '02-13-2019'];

  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        id: 'y-axis-1',
        type: 'linear',
        display: true,
        position: 'left',
        gridLines: {
          display: false
        }
      }]
    }
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
