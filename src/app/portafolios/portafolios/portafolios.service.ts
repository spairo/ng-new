import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApibuilderService } from '@app/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PortafoliosService {

  constructor(
    private _http: HttpClient,
    private _api: ApibuilderService
  ) { }

  getBriefcases(service) {
    return this._api.Build(service);
  }

}
