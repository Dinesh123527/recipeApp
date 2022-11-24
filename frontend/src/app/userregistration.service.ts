import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {

  constructor(private http: HttpClient) { }

  public addUser(data: User){
    const baseUrl = 'http://localhost:8080/users';
    let options = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-originPatterns': '*',
       'Access-Control-Allow-Headers': '*'
    })
  }
    return this.http.post(baseUrl,data,options);
}
}
