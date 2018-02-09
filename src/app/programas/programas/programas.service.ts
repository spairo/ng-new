import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProgramasService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = './assets/mocks-api/programas.json';
  }

/*public getJSON(): Observable<any> {
    return this._http.get('./assets/mocks-api/programas.json')
  }*/


  // getPrueba() { return 'Hola mundo desde el servicio.'; }


  getPrograms() {
    return this._http.get(this.url).map(res => res);
  }



}
