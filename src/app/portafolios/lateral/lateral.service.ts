import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { ApibuilderService as api } from '@app/apibuilder'

@Injectable()
export class LateralService {

  public compleURL: string;

  constructor(
    private _http: HttpClient,
    private _apibuilder: api
  ) { }

  getBriefcases(service) {

    this.compleURL = this._apibuilder.buildURL(service);

    return this._http.get(this.compleURL).map(res => res);
  }

  //https://150.250.140.226:8700/structuredProduct/V01/users/MB23972/portfolioGraphicData?fieldCode=NU_NEGOCIO&portfolioId=0000&contractNumber=7160593&underlyingType=CURR&queryType=1

}
