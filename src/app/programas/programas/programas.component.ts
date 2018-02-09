import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import {  ProgramasService } from './programas.service'

import { environment as env } from '@env/environment';


import * as myGlobals from 'globals';


@Component({
  selector: 'new-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
  providers: [ProgramasService]
})
export class ProgramasComponent implements OnInit {

  public articulo;

  constructor(
    private _programs: ProgramasService
  ) {}

  ngOnInit() {

    console.log(env);
    // console.log(this._programs.getPrueba());

   // this._programs.getJSON().subscribe(data => {
     // console.log(data);
   // });

    /*
    this._programs.getPrograms().subscribe(
      result => {
				//this.articulos = result;

        console.log(result);


			},error => {
        var errorMessage = < any > error;
        console.warn(this.errorMessage);
      }
    );*/
  }
}

