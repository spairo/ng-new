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
  public tabw: Observable <any[]>;
  public subjacents: any;
  public activeTab: any;
  public boxes: Observable <any[]>;
  public boxesgrid: any;
  public prices: any;
  public banquero: boolean;
  public userId: string ;
  public tabCode: string;
  public contracts: Observable <any[]>;
  public listed: any;
  public showView: string;
  public Selectedcontract: string;

  constructor(
    private _briefcases: PortafoliosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.userId = 'MB79547';
    this.banquero = true;
    this.subyacenteTab = 'TODO';
    this.activeTab = 'banquero';
    this.tabCode = 'B000';
    this.showView = 'mosaic';

    // ?portfolioId=000&queryType=1&contractNumber=1012568&underlyingType=EQD

    this._briefcases.getBriefcases({
      module : 'portfolio',
      method : 'get',
      params: {
        portfolioId: '0000',
        queryType: 1,
        contractNumber: 4564,
        underlyingType: 'EQD',
        idEstrategia: '1234'
      }
    }).subscribe(portfolios => {

      this.buildTabs(portfolios.productTabs);
      this.buildContracts(portfolios.relatedContracts);
      this.buildsubjacents(portfolios.underlyingAssets);
      this.buildBriefcases(portfolios.structuredProductInformation);
      this.buildCharts(portfolios.structuredProductInformation);

    });
  }

  buildTabs(tabs) {
    this.tabs = of(tabs);
    this.tabw = of(tabs);

  }

  buildContracts(relatedContracts) {
    this.contracts = of(relatedContracts);
  }

  buildsubjacents(subjacents) {
    this.subjacents = of(subjacents);
  }

  buildBriefcases(briefcases) {
    this.boxes = of(briefcases);
    this.boxesgrid = briefcases;
  }

  buildCharts(prices) {
    this.prices = prices;
    // var foo = _.map(this.prices, 'prices');
    // var arr = _.map(foo, 'price');
  }


  // Do actions

  bankersPortfolio(){
    alert(this.tabCode + '/' +  this.Selectedcontract);
  }

  RecentClosures(){
    alert(this.tabCode);
  }

  PortfolioTab(code){
    alert(code + this.tabCode);
  }
}
