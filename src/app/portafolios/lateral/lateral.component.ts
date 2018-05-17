import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

import {  LateralService } from './lateral.service'

@Component({
  selector: 'new-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.styl'],
  providers: [LateralService]
})
export class LateralComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  @Input('tabcode') tabcode: string;
  @Input('contrato') contrato: string;
  @Input('subyacente') subyacente: string;


  public details: any;
  public amount: any;
  public headerNames: any;
  public showSubmenu: boolean;
  public activeTabHeader: number;
  public headerValues: any;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: false,
    layout: {
      padding: {
        left: 32,
        right: 40,
        top: 0,
        bottom: 1
      }
    }
  };

  public barChartLabels: string[] = ['Multiregión', 'Mexico', 'Europa', '_Multi_'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartColors: any[] = [{ backgroundColor: ['#89D1F3', '#009EE5', '#094fa4', '#86C82D']}];
  public barChartData:any[] = [{data: [6.67, 46.67, 26.67, 20]}];

  constructor(
    private _detail: LateralService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.showSubmenu = true;
    this.activeTabHeader = 0;

    this._detail.getLateral({
      module : 'portfolio_lat',
      method : 'get',
      params: {
        portfolioId: '0000',
        queryType: 1,
        contractNumber: 4564,
        //underlyingType: this.subyacenteTab
      }
    }).subscribe(data => {
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
    this.router.navigate(['portafolios/pdf', '0001', '456578', 'EQD']);
  }

  ngOnChanges(){
    console.log('ngOnChanges()');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()');
  }

}
