import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import * as _ from 'lodash';

import { environment as env } from '@env/environment';

@Component({
  selector: 'new-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.styl']
})
export class DetalleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('detalle');
  }

}
