import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { ApibuilderService } from '@app/core';


@Injectable()
export class ProgramasService {

  public method: string;

  constructor(
    private _apibuilder: ApibuilderService
  ) {}

  getPrograms(service : any) {
    return this._apibuilder.buildURL(service);
  }

  getPrueba() { return 'Hola mundo desde el servicio'; }

}
