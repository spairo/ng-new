import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProgramasService } from './programas.service';

@Component({
  selector: 'new-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.styl'],
  providers: [ProgramasService]
})
export class ProgramasComponent implements OnInit {

  public programs: Observable<any[]>;

  constructor(
    private _programs: ProgramasService,
  ) {}

  ngOnInit() {

    this._programs.getPrograms({
      module : 'programas',
      method : 'get',
      params: {
				idEstrategia: '1234'
			}
    }).subscribe(programs => {
      this.programs = of(programs)
    });

  }

}
