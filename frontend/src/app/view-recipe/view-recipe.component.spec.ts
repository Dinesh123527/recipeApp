import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthenticationService } from '../authenticatiion.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

import { ViewRecipeComponent } from './view-recipe.component';

class StubRecipeService{
  getAllRecipes(){
    return of([{
                "id": 23,
                "recipeName": " Medu Vada",
                "ingredients": "Urad dal, Salt, Water, Green Chillies, Rice Flour,  Ginger",
                "category": "South Indian",
                "calories": 120},
                {
                  "id": 33,
                  "recipeName": "Idly",
                  "ingredients": "Idly Ravva, Urad Dal, Salt, Water.",
                  "category": "South Indian",
                  "calories": 60
                }])
  }

  deleteRecipe(){
    return of([ {
                  "id": 23,
                  "recipeName": " Medu Vada",
                  "ingredients": "Urad dal, Salt, Water, Green Chillies, Rice Flour,  Ginger",
                  "category": "South Indian",
                  "calories": 120},
                {
                  "id": 35,
                  "recipeName": "Poori",
                  "ingredients": "Wheat Flour, Turmeric Powder, Oil, Butter, Salt, Water",
                  "category": "South Indian",
                  "calories": 160
                }])
    }

  getById(){
    return of([{
                "id": 23,
                "recipeName": " Medu Vada",
                "ingredients": "Urad dal, Salt, Water, Green Chillies, Rice Flour,  Ginger",
                "category": "South Indian",
                "calories": 120}])
  }

  addRecipe(){
    return of([])
  }

  updateRecipe(){
    return of([])
  }

  getByCalories(){
    return of([{
                 "id": 36,
                 "recipeName": "IDLI",
                 "ingredients": "Urad Dal, Salt, Water, Idli Ravva",
                 "category": "South Indian",
                 "calories": 60
               }])
  }
}

const response = [{
        id: 36,
        recipeName: "IDLI",
        ingredients: "Urad Dal, Salt, Water, Idli Ravva",
        category: "South Indian",
        calories: 60
}];
describe('ViewRecipeComponent', () => {
  let component: ViewRecipeComponent;
  let fixture: ComponentFixture<ViewRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
        MatCardModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        AuthenticationService,
        {
          provide: RecipeService,
          useClass: StubRecipeService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 1})
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ViewRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call ngOnInit', () => {
     component.id= 36;
     expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
