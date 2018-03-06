import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import {  PortafoliosService } from './portafolios.service'

import { environment as env } from '@env/environment';

@Component({
  selector: 'new-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.styl'],
  providers: [PortafoliosService]
})
export class PortafoliosComponent implements OnInit {

  public briefcases;
  public activeTab;

  constructor(
    private _briefcases: PortafoliosService
  ) { }

  ngOnInit() {

    this.activeTab = '000';

    this._briefcases.getBriefcases('ResponseGetPortFolio').subscribe(data => {
      this.briefcases = data;
      console.log(this.briefcases);
    });
  }

}
