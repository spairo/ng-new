import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {  ApiService as api } from '../api/api.service';

@Injectable()
export class ProgramasService {



  export class ChildService extends ParentService{
    constructor (private http:Http, private customService:CustomService){
      super(http, customService);
    }
  }

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'programas.json';
  }

  /*
  public getJSON(): Observable<any> {
    return this._http.get('programas.json')
  }*/

  // getPrueba() { return 'Hola mundo desde el servicio.'; }


  getPrograms() {
    return this._http.get(this.url).map(res => res);
  }



}
