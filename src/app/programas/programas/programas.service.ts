import {Injectable} from '@angular/core';
import { ApibuilderService } from '@app/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProgramasService {

  constructor(
    private _api: ApibuilderService
  ) {}

  getPrueba() {
    return 'lorem ipsum dol sit amet';
  }

  getPrograms(service : any): Observable<any> {
    return this._api.Build(service);
  }
}
