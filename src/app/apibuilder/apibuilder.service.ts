import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '@env/environment';

@Injectable()
export class ApibuilderService {

  public apiURL:string;

  constructor(private _http: HttpClient) {}


  buildURL(service){
    if(!env.production){
      return this.apiURL = env.hostname + env.dynPath + service + '.json';
    }
  }

}
