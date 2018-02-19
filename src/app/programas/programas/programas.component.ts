import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import {  ProgramasService } from './programas.service'

import { SharedModule } from '@app/shared';
import { environment as env } from '@env/environment';

@Component({
  selector: 'new-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.styl'],
  providers: [ProgramasService]
})
export class ProgramasComponent implements OnInit {

  public programs;

  constructor(
    private _programs: ProgramasService,
  ) {}

  ngOnInit() {

    this._programs.getPrograms('programas').subscribe(data => {
      this.programs = data;
      console.log(this.programs);
    });

  }

}

