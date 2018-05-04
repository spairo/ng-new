import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { ApibuilderService } from '@app/core';

@Injectable()
export class LateralService {

  public compleURL: string;

  constructor(
    private _api: ApibuilderService
  ) { }

  getLateral(service) {
    return this._api.Build(service);
  }

}
