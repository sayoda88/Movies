import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HttpClient:HttpClient) { }

  signUp(data:any):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup' , data)
  }
}
