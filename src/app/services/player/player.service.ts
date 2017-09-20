import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/catch';

@Injectable()
export class PlayerService {
  private  URL ='assets/players.json';

  constructor(private _http:Http) { }

  getAllPalayers()
  {
    return this._http.get(this.URL)
                     .map((response: Response)=> response.json())
                     .catch(this.errorHandler)
  }
errorHandler(error:Response)
{
  return Observable.throw(error.json().error ||'server error');
}
}
