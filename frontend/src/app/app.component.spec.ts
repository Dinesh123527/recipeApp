import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authenticatiion.service';

class StubAuthService{
  getType(){
    return of([])
  }

  setType(){
    return of([])
  }
}

const userResponse = ['Admin'];

describe('AppComponent', () => {
  let component: AppComponent;
  let authenticationService: AuthenticationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
  RouterTestingModule,
        MatToolbarModule,
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule
      ],
      providers:[
            {
              provide: AuthenticationService,
              useClass: StubAuthService,
            }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

 // it('should call ngOnInit', () => {
   //  component.ngOnInit();
    // expect(component.dataAdmin).toEqual(userResponse);
  //});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'recipeApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('recipeApp');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('.content').textContent).toContain('');
  });*/
});
