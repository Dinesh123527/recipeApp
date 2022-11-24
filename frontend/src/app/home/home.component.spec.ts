import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
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
import { AdminService } from '../admin.service';
import { AuthenticationService } from '../authenticatiion.service';
import { NotificationService } from '../notification.service';
import { UserService } from '../user.service';

import { HomeComponent } from './home.component';

class StubAdminUserService{
  getAdminUser(){
    return of([{
                 "id": 1,
                 "adminFirstName": "susan",
                 "adminLastName": "lara",
                 "adminUserName": "admin",
                 "adminPassword": "admin123",
                 "adminContactNo": "9100659045"}])
  }
}

class StubUsersService{
  getByUser(){
    return of([{
                 "id": 1,
                 "userFirstName": "Indugu",
                 "userLastName": "Jagan",
                 "userName": "Jaggu345",
                 "userPassword": "jagan4567",
                 "userContactNo": "9848022385"}])
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        CommonModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        AuthenticationService,
        NotificationService,
        {
          provide: AdminService,
          useClass: StubAdminUserService

        },
        {
          provide: UserService,
          useClass: StubUsersService

        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call LogInUser', () => {
    const testLogin = {
      email: 'admin',
      password: 'admin123',
      login: ['User', 'Admin']
    }
    component.loginForm.controls['email'].setValue(testLogin.email);
    component.loginForm.controls['password'].setValue(testLogin.password);
    component.loginForm.controls['login'].setValue(testLogin.login);
    component.logInUser();
    expect(component.loginForm.value).toEqual(testLogin);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
