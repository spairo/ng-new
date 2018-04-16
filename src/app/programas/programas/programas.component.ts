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

  public programs: any;
  public st: string;
  public sd: 'fo';

  constructor(
    private _programs: ProgramasService,
  ) {}

  ngOnInit() {

    this.st = 'XMZ4160';

    this._programs.getPrograms({
      module : 'programas',
      method : 'get',
      params: {
        userId: 'MB79547'
      }
    }).subscribe(data => {
      this.programs = data;
    });

  }

}
