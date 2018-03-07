import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import {  PortafoliosService } from './portafolios.service'

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

  detail(id, serie){
    alert('go to detail' + id + ' ' + serie);
  }

}
