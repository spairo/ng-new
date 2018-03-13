import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import {  LateralService } from './lateral.service'
import { environment as env } from '@env/environment';


@Component({
  selector: 'new-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.scss'],
  providers: [LateralService]
})
export class LateralComponent implements OnInit {

  constructor(
    private _briefcases: LateralService
  ) { }

  ngOnInit() {

  }

}
