import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import {  PortafoliosService } from './portafolios.service'

import { environment as env } from '@env/environment';

@Component({
  selector: 'new-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.scss'],
  providers: [PortafoliosService]
})
export class PortafoliosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      alert('portafolios');
  }

}
