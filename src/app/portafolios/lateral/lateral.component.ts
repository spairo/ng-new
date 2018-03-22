import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import {  LateralService } from './lateral.service'
import { environment as env } from '@env/environment';


@Component({
  selector: 'new-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.styl'],
  providers: [LateralService]
})
export class LateralComponent implements OnInit {

  public details: any;
  public amount: any;
  public headerNames: any;
  public showSubmenu: boolean;
  public activeTabHeader: number;
  public headerValues: any;

  constructor(
    private _detail: LateralService
  ) { }

  ngOnInit() {

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
    console.log('saveCustomize');
  }

  viewPrint() {
    console.log('print pdf');
  }
}