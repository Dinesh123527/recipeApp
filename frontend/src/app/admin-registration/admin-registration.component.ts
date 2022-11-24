import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminregistrationService } from '../adminregistrationservice.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit {

  adminRegisterForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminregistrationService, private notifyService: NotificationService) { }

  ngOnInit(){
    this.adminRegisterForm = this.formBuilder.group({
          adminFirstName: ['',[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(4), Validators.maxLength(20)]],
          adminLastName: ['',[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3), Validators.maxLength(15)]],
          adminUserName: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
          adminPassword: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
          adminContactNo: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  get f() { return this.adminRegisterForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.adminRegisterForm.invalid) {
        return;
    }
  }

  register(){
    const id = 0;
    const adminFirstName = this.adminRegisterForm.controls['adminFirstName'].value;
    const adminLastName = this.adminRegisterForm.controls['adminLastName'].value;
    const adminUserName = this.adminRegisterForm.controls['adminUserName'].value;
    const adminPassword = this.adminRegisterForm.controls['adminPassword'].value;
    const adminContactNo = this.adminRegisterForm.controls['adminContactNo'].value;
    const body: Admin = {id: id, adminFirstName: adminFirstName, adminLastName: adminLastName, adminUserName: adminUserName, adminPassword: adminPassword, adminContactNo: adminContactNo}
    this.adminService.addAdminUser(body).subscribe((data: any) => {
         this.notifyService.showSuccess("Admin User added Successful", "Recipe Application");
         this.router.navigate(['/home']);
    });

  }

  cancel(){
    this.router.navigate(['/home']);
  }

}
