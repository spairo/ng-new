import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { environment as env } from '@env/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApibuilderService {

  public config: any = {};

  constructor(
    private _http: HttpClient,
    public snackBar: MatSnackBar
  ) {}

  Build(service : any) {
    if (env.production){
      service.url = env.hostname + '/' + env.platform + '/' + env.apiVersion + '/' + service.module;
        return this.BuildRequest(service);
      /*service.url = env.hostname + env.dynPath + env.platform + '/' + env.apiVersion + '/' + service.module + '.json';
        return this.BuildRequest(service);*/
    } else {
      service.url = env.hostname + env.dynPath + env.platform + '/' + env.apiVersion + '/' + service.module + '.json';
        return this.BuildRequest(service);
    }
  }
  BuildRequest(service) {
    if (service.method.match(/^(get)$/)) {
      return this._http[service.method](service.url, { params: service.params }, this.config)
      .catch((e: any) => Observable.throw(this.ErrorHandler(e)));
    } else {
      return this._http[service.method](service.url, service.params, this.config);
    }
  }
  ErrorHandler(error: any): void {
    let snackBarRef = this.snackBar.open('Error ' + error.status + ' -  ' + error.message, 'Cerrar');
  }
}
