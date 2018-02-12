import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }


  getApi(type) { return type + ' Hola mundo desde api.'; }

}
