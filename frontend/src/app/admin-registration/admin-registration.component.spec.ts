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
import { AdminregistrationService } from '../adminregistrationservice.service';
import { NotificationService } from '../notification.service';

import { AdminRegistrationComponent } from './admin-registration.component';

class StubAdminService{
  addAdminUser(){
    return of ([])
  }
}
describe('AdminRegistrationComponent', () => {
  let component: AdminRegistrationComponent;
  let fixture: ComponentFixture<AdminRegistrationComponent>;

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
          provide: AdminregistrationService, NotificationService,
          useClass: StubAdminService

        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ AdminRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call register', () => {
    const testAdminUser = {
         adminFirstName: 'Narasimha',
         adminLastName: 'Raju',
         adminUserName: 'Narasi456',
         adminPassword: 'Dinesh123',
         adminContactNo: '9100659045'
      };
      component.adminRegisterForm.controls['adminFirstName'].setValue(testAdminUser.adminFirstName);
      component.adminRegisterForm.controls['adminLastName'].setValue(testAdminUser.adminLastName);
      component.adminRegisterForm.controls['adminUserName'].setValue(testAdminUser.adminUserName);
      component.adminRegisterForm.controls['adminPassword'].setValue(testAdminUser.adminPassword);
      component.adminRegisterForm.controls['adminContactNo'].setValue(testAdminUser.adminContactNo);
      component.register();
      expect(component.adminRegisterForm.value).toEqual(testAdminUser);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
