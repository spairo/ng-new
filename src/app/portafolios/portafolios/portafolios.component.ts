import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PortafoliosService } from './portafolios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

import * as _ from 'lodash';

@Component({
  selector: 'new-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.styl'],
  providers: [PortafoliosService]
})
export class PortafoliosComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  public subyacenteTab: string;
  public briefcases: Observable <any[]>;
  public tabs: Observable <any[]>;
  public subjacents: any;
  public activeTab: any;
  public boxes: Observable <any[]>;
  public boxesgrid: any;
  public prices: any;
  public banquero: boolean;
  public userId: string ;
  public tabCode: string;
  public contracts: any;
  public listed: any;
  public showView: string;
  public Selectedcontract: string;

  constructor(
    private _briefcases: PortafoliosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subyacenteTab = 'TODO';
    this.userId = 'MB79547';
    this.banquero = true;
    this.activeTab = 'banquero';
    this.tabCode = 'B000';
    this.showView = 'mosaic';

    this._briefcases.getBriefcases({
      module : 'portfolio',
      method : 'get',
      params: {
        portfolioId: '0000',
        queryType: 1,
        contractNumber: 4564,
        underlyingType: this.subyacenteTab
      }
    }).subscribe(portfolios => {

      this.buildContracts(portfolios.relatedContracts);
      this.buildsubjacents(portfolios.underlyingAssets);
      this.buildBriefcases(portfolios.structuredProductInformation);
      this.buildCharts(portfolios.structuredProductInformation);

    });
  }

  buildContracts(relatedContracts) {
    this.contracts = relatedContracts;
  }

  buildsubjacents(subjacents) {
    this.subjacents = of(subjacents);
  }

  buildBriefcases(briefcases) {

    //this.boxes = of(briefcases);
    this.boxes = briefcases;

    //console.log(this.boxes);

    // Find item index using _.findIndex (thanks @AJ Richardson for comment)

    // var index = _.findIndex(this.boxes, {id: 1});

    // Replace item at index using native splice

    // arr.splice(index, 1, {id: 100, name: 'New object.'});

    //_.forEach(this.boxes.value, function(value, prices) {
     //console.log(prices);
    //});

    //console.log(this.boxes);

    _.forEach(this.boxes, function(value, key) {
      console.log(value);
    });

    this.boxesgrid = briefcases.length;

  }

  buildCharts(prices) {
    this.prices = prices;

    //let foo = this.boxes.value['0'].prices;
    //let bar = _.map(foo, 'price');
    //console.log(bar);
    // var foo = _.map(this.prices, 'prices');
    // var arr = _.map(foo, 'price');
  }

  // Do actions

  bankersPortfolio(){

    this._briefcases.getBriefcases({
      module : 'portfolio',
      method : 'get',
      params: {
        portfolioId: this.tabCode,
        queryType: 0,
        contractNumber: 4564,
        underlyingType: 'EQD'
      }
    }).subscribe(portfolios => {

      this.buildContracts(portfolios.relatedContracts);
      this.buildsubjacents(portfolios.underlyingAssets);
      this.buildBriefcases(portfolios.structuredProductInformation);
      this.buildCharts(portfolios.structuredProductInformation);

    });
  }

  RecentClosures(){

    this._briefcases.getBriefcases({
      module : 'portfolio',
      method : 'get',
      params: {
        portfolioId: this.tabCode,
        queryType: 1,
        contractNumber: 4564,
        underlyingType: 'EQD'
      }
    }).subscribe(portfolios => {

      this.buildContracts(portfolios.relatedContracts);
      this.buildsubjacents(portfolios.underlyingAssets);
      this.buildBriefcases(portfolios.structuredProductInformation);
      this.buildCharts(portfolios.structuredProductInformation);

    });
  }

}
