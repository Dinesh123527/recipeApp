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
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthenticationService } from '../authenticatiion.service';
import { RecipeService } from '../recipe.service';
import { UpdateRecipeComponent } from './update-recipe.component';

class StubRecipeService{
  getAllRecipes(){
    return of([{
      "id": 23,
      "recipeName": " Medu Vada",
      "ingredients": "Urad dal, Salt, Water, Green Chillies, Rice Flour,  Ginger",
      "category": "South Indian",
      "calories": 120,
      "prepTime": 180,
      "recipeNote": "1. Wash and soak dal in about 3 cups of water for about 2-3 hours. 2. Drain all the water from soaked dal. grind urad dal and channa dal together to smooth paste using very little water. 3. The batter should be thick and use very little water. 4. The right consistency is very important or otherwise, you will not be able to get the vada shape. 5. Add coriander, green chilli, ginger and chopped dry coconut to the batter. mix it very well. 6. Add 2-3 tsp of rice flour. rice flour is added to make it crispy. 7. Add pinch of hing to make it more digestible. 8. Heat the oil in a frying pan in medium flame. wet your palms and take a lemon size batter. 9. Make hole in the center and slide it into the hot oil. 10. The vada should float on top of oil. 11. Make sure your oil is not too hot. otherwise the vadas would not cook evenly. 12. Fry on both sides till it becomes golden brown in colour. 13. Serve medu vada immediately with chutney collections or sambar collections."
  },
  {
      "id": 35,
      "recipeName": "Poori",
      "ingredients": "Wheat Flour, Sugar, Salt, Water, Oil, Rava/suji",
      "category": "South Indian",
      "calories": 160,
      "prepTime": 45,
      "recipeNote": "1. firstly, in a large bowl take 2 cup wheat flour, 1 tbsp rava, ½ tsp sugar, ½ tsp salt and 2 tsp oil. 2. crumble and mix well making sure the flour is moist. 3. now add water and knead the dough, knead the dough tight adding water as required. 4. now pinch a large ball size dough and roll to form a log. 5. cut into pieces and roll them to small balls. 6.place the balls into a small bowl and 1 tsp oil. grease the ball to prevent from drying. 7. now take a ball and roll using a rolling pin. 8. roll to slightly thick thickness, drop the rolled dough into the hot oil. 9. press until the puri puffs up and splash oil to puff up fully. 10. flip over and fry until it turns golden brown. 11. finally, drain off the poori and is ready to enjoy with aloo bhaji."
  },
  {
      "id": 36,
      "recipeName": "POHA IDLI",
      "ingredients": "Poha/Aval/Atukulu, Curd, Rice Rava/Idly Rava, Salt, Water, Eno/Fruit Salt.",
      "category": "South Indian",
      "calories": 60,
      "prepTime": 50,
      "recipeNote": "1. firstly, in a small mixi grind 1 cup poha to a coarse powder.i have used thick variety poha, if you are using thin then increase the quantity of poha. 2. add 1 cup curd and mix well. make sure to poha absorbs curd. 3. further, add 1½ cup rice rava and mix well. you can alternatively, use upma rava and mix well. 4. now add ¾ tsp salt and 1 cup water. 5. mix well making sure everything is well combined adding water as required. 6. cover and rest for 30 minutes or until the rava and poha absorb water. 7. after 30 minutes, mix gently, making sure the rava has absorbed water. 8. now add ½ cup water and mix well adjusting the consistency. 9. just before steaming, add ¾ tsp eno and mix gently until the batter turns frothy. 10. now pour the batter into greased idli plate. 11. steam the idli for 15 minutes or until the idli is cooked well. 12. finally, enjoy poha idli with coriander mint chutney."
  }])
}

  deleteRecipe(){
    return of([{
      "id": 23,
      "recipeName": " Medu Vada",
      "ingredients": "Urad dal, Salt, Water, Green Chillies, Rice Flour,  Ginger",
      "category": "South Indian",
      "calories": 120,
      "prepTime": 180,
      "recipeNote": "1. Wash and soak dal in about 3 cups of water for about 2-3 hours. 2. Drain all the water from soaked dal. grind urad dal and channa dal together to smooth paste using very little water. 3. The batter should be thick and use very little water. 4. The right consistency is very important or otherwise, you will not be able to get the vada shape. 5. Add coriander, green chilli, ginger and chopped dry coconut to the batter. mix it very well. 6. Add 2-3 tsp of rice flour. rice flour is added to make it crispy. 7. Add pinch of hing to make it more digestible. 8. Heat the oil in a frying pan in medium flame. wet your palms and take a lemon size batter. 9. Make hole in the center and slide it into the hot oil. 10. The vada should float on top of oil. 11. Make sure your oil is not too hot. otherwise the vadas would not cook evenly. 12. Fry on both sides till it becomes golden brown in colour. 13. Serve medu vada immediately with chutney collections or sambar collections."
  },
  {
      "id": 35,
      "recipeName": "Poori",
      "ingredients": "Wheat Flour, Sugar, Salt, Water, Oil, Rava/suji",
      "category": "South Indian",
      "calories": 160,
      "prepTime": 45,
      "recipeNote": "1. firstly, in a large bowl take 2 cup wheat flour, 1 tbsp rava, ½ tsp sugar, ½ tsp salt and 2 tsp oil. 2. crumble and mix well making sure the flour is moist. 3. now add water and knead the dough, knead the dough tight adding water as required. 4. now pinch a large ball size dough and roll to form a log. 5. cut into pieces and roll them to small balls. 6.place the balls into a small bowl and 1 tsp oil. grease the ball to prevent from drying. 7. now take a ball and roll using a rolling pin. 8. roll to slightly thick thickness, drop the rolled dough into the hot oil. 9. press until the puri puffs up and splash oil to puff up fully. 10. flip over and fry until it turns golden brown. 11. finally, drain off the poori and is ready to enjoy with aloo bhaji."
   }])
 }

  getById(){
    return of([{
      "id": 23,
      "recipeName": " Medu Vada",
      "ingredients": "Urad dal, Salt, Water, Green Chillies, Rice Flour,  Ginger",
      "category": "South Indian",
      "calories": 120,
      "prepTime": 180,
      "recipeNote": "1. Wash and soak dal in about 3 cups of water for about 2-3 hours. 2. Drain all the water from soaked dal. grind urad dal and channa dal together to smooth paste using very little water. 3. The batter should be thick and use very little water. 4. The right consistency is very important or otherwise, you will not be able to get the vada shape. 5. Add coriander, green chilli, ginger and chopped dry coconut to the batter. mix it very well. 6. Add 2-3 tsp of rice flour. rice flour is added to make it crispy. 7. Add pinch of hing to make it more digestible. 8. Heat the oil in a frying pan in medium flame. wet your palms and take a lemon size batter. 9. Make hole in the center and slide it into the hot oil. 10. The vada should float on top of oil. 11. Make sure your oil is not too hot. otherwise the vadas would not cook evenly. 12. Fry on both sides till it becomes golden brown in colour. 13. Serve medu vada immediately with chutney collections or sambar collections."
    }])
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
      "recipeName": "POHA IDLI",
      "ingredients": "Poha/Aval/Atukulu, Curd, Rice Rava/Idly Rava, Salt, Water, Eno/Fruit Salt.",
      "category": "South Indian",
      "calories": 60,
      "prepTime": 50,
      "recipeNote": "1. firstly, in a small mixi grind 1 cup poha to a coarse powder.i have used thick variety poha, if you are using thin then increase the quantity of poha. 2. add 1 cup curd and mix well. make sure to poha absorbs curd. 3. further, add 1½ cup rice rava and mix well. you can alternatively, use upma rava and mix well. 4. now add ¾ tsp salt and 1 cup water. 5. mix well making sure everything is well combined adding water as required. 6. cover and rest for 30 minutes or until the rava and poha absorb water. 7. after 30 minutes, mix gently, making sure the rava has absorbed water. 8. now add ½ cup water and mix well adjusting the consistency. 9. just before steaming, add ¾ tsp eno and mix gently until the batter turns frothy. 10. now pour the batter into greased idli plate. 11. steam the idli for 15 minutes or until the idli is cooked well. 12. finally, enjoy poha idli with coriander mint chutney."
    }])
  }
}

describe('UpdateRecipeComponent', () => {
  let component: UpdateRecipeComponent;
  let fixture: ComponentFixture<UpdateRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
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
      declarations: [ UpdateRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call updateRecipe', () => {
    const testUpdateRecipe = {
      recipeName: " Medu Vada",
      recipeIngredients: "Urad dal, Salt, Water, Green Chillies, Rice Flour,  Ginger",
      recipeCategory: "South Indian",
      recipeCalories: 120,
      recipePrepTime: 180,
      recipeNote: "1. Wash and soak dal in about 3 cups of water for about 2-3 hours. 2. Drain all the water from soaked dal. grind urad dal and channa dal together to smooth paste using very little water. 3. The batter should be thick and use very little water. 4. The right consistency is very important or otherwise, you will not be able to get the vada shape. 5. Add coriander, green chilli, ginger and chopped dry coconut to the batter. mix it very well. 6. Add 2-3 tsp of rice flour. rice flour is added to make it crispy. 7. Add pinch of hing to make it more digestible. 8. Heat the oil in a frying pan in medium flame. wet your palms and take a lemon size batter. 9. Make hole in the center and slide it into the hot oil. 10. The vada should float on top of oil. 11. Make sure your oil is not too hot. otherwise the vadas would not cook evenly. 12. Fry on both sides till it becomes golden brown in colour. 13. Serve medu vada immediately with chutney collections or sambar collections."
    };
     component.updateRecipeForm.controls['recipeName'].setValue(testUpdateRecipe.recipeName);
     component.updateRecipeForm.controls['recipeIngredients'].setValue(testUpdateRecipe.recipeIngredients);
     component.updateRecipeForm.controls['recipeCategory'].setValue(testUpdateRecipe.recipeCategory);
     component.updateRecipeForm.controls['recipeCalories'].setValue(testUpdateRecipe.recipeCalories);
     component.updateRecipeForm.controls['recipePrepTime'].setValue(testUpdateRecipe.recipePrepTime);
     component.updateRecipeForm.controls['recipeNote'].setValue(testUpdateRecipe.recipeNote);
     component.updateRecipe();
     expect(component.updateRecipeForm.value).toEqual(testUpdateRecipe);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


