import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { environment as env } from '@env/environment';

@Injectable()
export class ApibuilderService {

  public apiURL: string;
  public config: any;
  constructor(private _http: HttpClient) {}

  buildURL(service : any){
    if(env.production){
        this.apiURL = env.hostname + '/' + env.platform + '/' + env.apiVersion + '/' + service.module;
        return this.BuildRequest(service, this.apiURL, service.method);
    }else{
      return this.apiURL = env.hostname + env.dynPath + service.module + '.json';
    }
  }
  BuildRequest(service, url, method){
    if (method.match(/^(get|post)$/)) {
			this.config = { };
      return this._http[method](url, {params: service.params}).map(res => res);
    }
  }
}
