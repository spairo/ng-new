import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment as env } from '@env/environment';

@Injectable()
export class ApibuilderService {

  public config: any = {};

  constructor(
    private _http: HttpClient
  ) {}

  Build(service : any) {
    if (env.production){
      service.url = env.hostname + '/' + env.platform + '/' + env.apiVersion + '/' + service.module;
      return this.BuildRequest(service);
    } else {
      service.url = env.hostname + env.dynPath + env.platform + '/' + env.apiVersion + '/' + service.module + '.json';
      return this.BuildRequest(service);
    }
  }
  BuildRequest(service) {
    if (service.method.match(/^(get)$/)) {
      return this._http[service.method](service.url, { params: service.params }, this.config);
    } else {
      this.config = { };
      return this._http[service.method](service.url, service.params, this.config);
    }
  }
}
