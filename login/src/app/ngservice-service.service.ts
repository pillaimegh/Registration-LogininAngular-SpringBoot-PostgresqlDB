import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { user } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgserviceServiceService {

  constructor(private _http:HttpClient) { }

  addProducttoRemote(user : user):Observable<any>
        {
          return this._http.post<any>("http://localhost:8080/registeruser", user);
        }


  addloginProducttoRemote(user: user):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/loginuser", user);
  }

}
