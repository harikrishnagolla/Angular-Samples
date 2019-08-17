import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { ApiResponse } from '../model/api-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
      this.httpClient = httpClient;
  }
  
  baseUrl:string = 'http://localhost:8080';
  

  logout(): Observable<any>{
    let url = this.baseUrl + "/user/logout";
  
  let headers = new HttpHeaders ({
    'x-auth-token' : localStorage.getItem('xAuthToken')
  });
   sessionStorage.removeItem('xAuthToken');
  return this.httpClient.get(url,{headers:headers});
  }

  getLoginToken(username:string ,password:string): Observable<any> {
    let encodedCredentials=btoa(username+":"+password);
    let baseHeader="Basic "+encodedCredentials;
    let headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization' : baseHeader
    });
    return this.httpClient.get(this.baseUrl+"/token",{headers:headers});
  }
  
checkSession(): Observable<any> {
  let url = this.baseUrl + "/checkSession";
 
      let headers = new HttpHeaders ({
        'x-auth-token' : sessionStorage.getItem('xAuthToken')
      });
      return this.httpClient.get(url,{headers:headers});  
    

}
isUserLoggedIn(){
  let user = sessionStorage.getItem('xAuthToken');
  return !(user == null);
}



}
