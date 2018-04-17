import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { ApibuilderService } from '@core/ApibuilderService'

@Injectable()
export class ProgramasService {

  public method: string;
  constructor(
    private _http: HttpClient,
    private _apibuilder: ApibuilderService
  ) {}

  getPrograms(service : any) {
    return this._apibuilder.buildURL(service);
  }

  getPrueba() { return 'Hola mundo desde el servicio'; }

}
