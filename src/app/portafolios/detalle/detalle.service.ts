import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { ApibuilderService as api } from '@app/apibuilder'

@Injectable()
export class DetalleService {

  public compleURL: string;

  constructor(
    private _http: HttpClient,
    private _apibuilder: api
  ) { }

  getDetails(service) {

    this.compleURL = this._apibuilder.buildURL(service);

    return this._http.get(this.compleURL).map(res => res);
  }

}
