import { getRtlScrollAxisType } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 public UserType = new BehaviorSubject<any>(null);

 constructor(){ }

 getType(){
   return this.UserType.asObservable();
 }
 setType(val: any){
   return this.UserType.next(val);
 }
}

