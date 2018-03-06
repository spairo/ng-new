import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '@env/environment';

@Injectable()
export class ApibuilderService {

  public apiURL:string;

  constructor(private _http: HttpClient) {}


  //https://150.250.140.226:8700/structuredProduct/V01/users/XMZ4160/portfolio?portfolioId=000&queryType=1&contractNumber=1012568&underlyingType=EQD 

  buildURL(service){
    if(!env.production){
      return this.apiURL = env.hostname + env.dynPath + service + '.json';
    }
  }

}
