import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { ApibuilderService } from '@app/core';

@Injectable()
export class LateralService {

  public compleURL: string;

  constructor(
    private _http: HttpClient,
    private _apibuilder: ApibuilderService
  ) { }

  getDetails(service) {

    this.compleURL = this._apibuilder.Build(service);

    //return this._http.get(this.compleURL).map(res => res);
  }

}
