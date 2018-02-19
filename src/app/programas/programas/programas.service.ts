import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { ApibuilderService } from '@app/apibuilder'

@Injectable()
export class ProgramasService {

  public compleURL: string;

  constructor(
    private _http: HttpClient,
    private _apibuilder: ApibuilderService
  ) {}


  const service = {
    clonePortfolio: {
        method: 'post',
        url: '/portafolio/clonar'
    },
  };


  getPrograms(service) {

    this.compleURL = this._apibuilder.buildURL(service);

    return this._http.get(this.compleURL).map(res => res);
  }

  getPrueba() { return 'Hola mundo desde el servicio.'; }










  /*
  addProducto(producto: Producto): Observable<any>{
    let json = JSON.stringify(producto);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post(this.url+'productos', params, {headers: headers});
  }
  */

  /*

  buildApi(options, name) {

    if (options.method === 'mock' || serverConfig.forceMocks) {
      options.method = 'get';
      options.url += '.json';
    }

    options.url = serverConfig.dynPath + options.url;

    api[name] = function callToApi(data, config) {
      if (options.method.match(/^(post|patch|put|multipart)$/)) {
        config = config || { }; config.apiBuilder = true;
      } else {
        data = data || { }; data.apiBuilder = true;
      }

      return $http[options.method](options.url, data, config);
    };
  }
  */

  /*
  public getJSON(): Observable<any> {
    return this._http.get('programas.json')
  }*/

  // getPrueba() { return 'Hola mundo desde el servicio.'; }


  /*
  getPrograms() {
    return this._http.get(this.url).map(res => res);
  }
  */


}
