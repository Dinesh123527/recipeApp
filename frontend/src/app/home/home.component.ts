import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { AuthenticationService } from '../authenticatiion.service';
import { NotificationService } from '../notification.service';
import { NotifyService } from '../notify.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  title="Welcome to Recipe"
  loginForm: FormGroup;
  submitted = false;
  users = ['User', 'Admin'];
  userName: string;
  currentUser: User;
  adminUser: Admin;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private notificationService: NotificationService, private adminService: AdminService, private authService: AuthenticationService, private notifyService: NotifyService) { }
  ngOnInit(){

    this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
            login: ['', Validators.required]
    });
  }

  changeUser(e: any){
    this.loginForm.controls['login'].setValue(e.target.value, {onlySelf: true});
  }



  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }

  }



  logInUser(){
     const password = this.loginForm.controls['password'].value;
     const email = this.loginForm.controls['email'].value;
     const users = this.loginForm.controls['login'].value;
     if(users === this.users[0]){
       this.userService.getByUser(email).subscribe((data:any)=> {
         this.currentUser =  data;
         this.authService.setType(this.users[0]);
        if(this.currentUser.userPassword===password){
        this.notificationService.showSuccess("Login Success","Recipe Application");
        this.router.navigate(['/home']);
       }
       else{
         this.notificationService.showError("UserName or Password is Incorrect","Recipe Application");
       }});
    }
     else if(users === this.users[1]){
      this.adminService.getAdminUser(email).subscribe((data: any)=> {
         this.adminUser = data;
         this.authService.setType(this.users[1]);
         if(this.adminUser.adminPassword===password){
          this.notifyService.showSuccess("Login Success", "Recipe Application");
          this.router.navigate(['/home'])
         }
         else{
           this.notificationService.showError("UserName or Password is Incorrect", "Recipe Application");
         }});
       }
       else{
         this.notificationService.showError("Please Try Again", "Recipe Application");
       }
    }
  }

