import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { PortafoliosService } from './portafolios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

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

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  public subyacenteTab: string;
  public briefcases: any;
  public tabs: any;
  public subjacents: any;
  public activeTab: any;
  public boxes: any;
  public prices: any;
  public banquero: boolean;
  public tabCode: string;
  public contracts: Array<string>;

  // lineChart
  public lineChartData: Array<any> = [
    {data: ['97.9964', '97.5857', '96.873', '95.5325', '95.209', '94.6646', '95.148'], label: 'Series A'}
  ];

  public lineChartLabels: Array<any> = ['02-07-2019', '02-08-2019', '02-09-2019', '02-10-2019', '02-11-2019', '02-12-2019', '02-13-2019'];

  public lineChartOptions: any = {
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

  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';

  constructor(
    private _briefcases: PortafoliosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.banquero = true;
    this.subyacenteTab = 'TODO';
    this.activeTab = 'banquero';
    this.tabCode = 'B000';

    this._briefcases.getBriefcases('ResponseGetPortFolio').subscribe(data => {
      this.briefcases = data;
      this.buildTabs(this.briefcases.productTabs);
      this.buildContracts(this.briefcases.relatedContracts);
      this.buildsubjacents(this.briefcases.underlyingAssets);
      this.buildBriefcases(this.briefcases.structuredProductInformation);
      this.buildCharts(this.briefcases.structuredProductInformation);
    });

  }


  buildTabs(tabs) {
    this.tabs = tabs;
  }

  buildContracts(relatedContracts) {
    this.contracts = relatedContracts;
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
    // console.log(foo);
    var arr = _.map(foo, 'price');
  }

  detail(serie: string, id: number) {
    this.router.navigate(['portafolios/detalle', serie, id]);
  }

}
