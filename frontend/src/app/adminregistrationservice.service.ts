import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminregistrationService {

  constructor(private http: HttpClient) { }

  public addAdminUser(data: Admin){
    const baseUrl = 'http://localhost:8080/adminUsers';
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
