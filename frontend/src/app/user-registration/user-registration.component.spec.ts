import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { AdminregistrationService } from '../adminregistrationservice.service';
import { NotificationService } from '../notification.service';
import { UserregistrationService } from '../userregistration.service';

import { UserRegistrationComponent } from './user-registration.component';

class StubUserService{
  addUser(){
    return of([])
  }
}

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ToastrModule.forRoot(),
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: UserregistrationService, NotificationService,
          useClass: StubUserService

        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ UserRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call register', () => {
    const testUser = {
       userFirstName: 'Ganesh',
       userLastName: 'Sai',
       userName: 'Gani234',
       userPassword: 'Ganisai',
       userContactNo: '9100078907'
     };
     component.userRegisterForm.controls['userFirstName'].setValue(testUser.userFirstName);
     component.userRegisterForm.controls['userLastName'].setValue(testUser.userLastName);
     component.userRegisterForm.controls['userName'].setValue(testUser.userName);
     component.userRegisterForm.controls['userPassword'].setValue(testUser.userPassword);
     component.userRegisterForm.controls['userContactNo'].setValue(testUser.userContactNo);
     component.register();
     expect(component.userRegisterForm.value).toEqual(testUser);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
