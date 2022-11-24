import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { User } from '../user';
import { UserregistrationService } from '../userregistration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  userRegisterForm: FormGroup;
  submitted = false;
  userName: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserregistrationService, private notifyService: NotificationService) { }
  ngOnInit(){
    this.userRegisterForm = this.formBuilder.group({
          userFirstName: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(4), Validators.maxLength(20)]],
          userLastName: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+"), Validators.minLength(3), Validators.maxLength(20)]],
          userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
          userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
          userContactNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  get f() { return this.userRegisterForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.userRegisterForm.invalid) {
        return;
    }
  }

  register(){
    const id =0;
    const userFirstName = this.userRegisterForm.controls['userFirstName'].value;
    const userLastName = this.userRegisterForm.controls['userLastName'].value;
    const userName = this.userRegisterForm.controls['userName'].value;
    const userPassword = this.userRegisterForm.controls['userPassword'].value;
    const userContactNo = this.userRegisterForm.controls['userContactNo'].value;
    const body: User = {id: id, userFirstName: userFirstName, userLastName: userLastName, userName: userName, userPassword: userPassword, userContactNo: userContactNo};
    this.userService.addUser(body).subscribe((data: any)=> {
        this.notifyService.showSuccess("Registration Successful","Recipe Application")
        this.router.navigate(['']);
  });
  }
  cancel(){
    this.router.navigate(['']);
  }


}
