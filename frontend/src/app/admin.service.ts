import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getAdminUser(adminUserName: string){
    const baseUrl = 'http://localhost:8080/adminUsers';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*'
      })
    }
      return this.http.get(baseUrl+ '/' +adminUserName, options);
  }
}
