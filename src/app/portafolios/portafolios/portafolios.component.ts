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
  public boxesgrid: any;
  public prices: any;
  public banquero: boolean;
  public tabCode: string;
  public contracts: Array<string>;
  public listed: any;

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
    this.boxesgrid = briefcases;
  }

  buildCharts(prices) {
    this.prices = prices;
    // var foo = _.map(this.prices, 'prices');
    // console.log(foo);
    // var arr = _.map(foo, 'price');
  }

}
