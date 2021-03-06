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
  public contractNumber: string = null;
  public queryType: number = 1;
  public subyacenteTab: string = 'ALL';
  public subyacente: string =  'ALL';

  constructor(
    private _briefcases: PortafoliosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.userId = 'MB79547';
    this.banquero = true;
    this.activeTab = 'banquero';
    this.tabCode = 'B000';
    this.showView = 'mosaic';

    this._briefcases.getBriefcases({
      module : 'portfolio',
      method : 'get',
      params: {
        portfolioId: this.tabCode,
        queryType: this.queryType,
        contractNumber: this.contractNumber,
        underlyingType: this.subyacente
      }
    }).subscribe(portfolios => {

      _.forEach(portfolios.structuredProductInformation, function(value) {
        let precios = _.map(value.prices, 'price');
        let fechas = _.map(value.prices, 'date');
        value.prices.precios = [{ data: precios, label: 'Precio'}];
        value.prices.fechas = fechas;
      });
      this.buildContracts(portfolios.relatedContracts);
      this.buildsubjacents(portfolios.underlyingAssets);
      this.buildBriefcases(portfolios.structuredProductInformation);

    });
  }

  buildContracts(relatedContracts) {
    this.contracts = relatedContracts;
  }

  buildsubjacents(subjacents) {
    this.subjacents = of(subjacents);
  }

  buildBriefcases(briefcases) {
    this.boxes = of(briefcases);
    this.boxesgrid = briefcases.length;
  }


  bankersPortfolio(): void{

    this._briefcases.getBriefcases({
      module : 'portfolio',
      method : 'get',
      params: {
        portfolioId: this.tabCode,
        queryType: this.queryType,
        contractNumber: this.contractNumber,
        underlyingType: this.subyacente
      }
    }).subscribe(portfolios => {

      _.forEach(portfolios.structuredProductInformation, function(value) {
        let precios = _.map(value.prices, 'price');
        let fechas = _.map(value.prices, 'date');
        value.prices.precios = [{ data: precios, label: 'Precio'}];
        value.prices.fechas = fechas;
      });
      this.buildContracts(portfolios.relatedContracts);
      this.buildsubjacents(portfolios.underlyingAssets);
      this.buildBriefcases(portfolios.structuredProductInformation);

    });
  }

  RecentClosures(): void{

    this._briefcases.getBriefcases({
      module : 'portfolio',
      method : 'get',
      params: {
        portfolioId: this.tabCode,
        queryType: this.queryType,
        contractNumber: this.contractNumber,
        underlyingType: this.subyacente
      }
    }).subscribe(portfolios => {

      _.forEach(portfolios.structuredProductInformation, function(value) {
        let precios = _.map(value.prices, 'price');
        let fechas = _.map(value.prices, 'date');
        value.prices.precios = [{ data: precios, label: 'Precio'}];
        value.prices.fechas = fechas;
      });
      this.buildContracts(portfolios.relatedContracts);
      this.buildsubjacents(portfolios.underlyingAssets);
      this.buildBriefcases(portfolios.structuredProductInformation);

    });
  }

  getContract(event){
    this.contractNumber = event.modelo;
  }

  ngOnChanges(){
    console.log('ngOnChanges()');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()');
  }

}
