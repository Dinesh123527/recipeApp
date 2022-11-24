import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.scss']
})
export class UpdateRecipeComponent implements OnInit {

  categories : any;
  calories: any;
  resources: Resource[] = [];
  updateRecipeForm: FormGroup;
  id: number;
  recipe: Recipe;
  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private resourceService: ResourceService) { }

  ngOnInit(){
    this.updateRecipeForm = this.formBuilder.group({
      recipeName: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3), Validators.maxLength(25)]],
      recipeIngredients: ['', [Validators.required, Validators.minLength(4)]],
      recipeCategory: ['', Validators.required],
      recipeCalories: ['', Validators.required],
      recipePrepTime: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      recipeNote: ['', [Validators.required, Validators.minLength(10)]]
    })
    this.resourceService.getAllReSources().subscribe((response: any) => {this.resources = response;
      const calories = this.resources.filter(resource => resource.resourceCode==='calories');
      const result = calories.map(calories => calories.resourceDetail);
      const resultSet = result.map((i) => Number(i));
      this.calories = resultSet;
      const categories = this.resources.filter(resources => resources.resourceCode==='categories');
      const final = categories.map(categories => categories.resourceDetail);
      this.categories = final;
     });

    this.route.params.subscribe(params => this.id= +params['id']);
    this.recipeService.getById(this.id).subscribe((resp: any) => {
      this.recipe = resp;
      this.updateRecipeForm.controls['recipeName'].setValue(resp.recipeName);
      this.updateRecipeForm.controls['recipeIngredients'].setValue(resp.ingredients);
      this.updateRecipeForm.controls['recipeCategory'].setValue(resp.category);
      this.updateRecipeForm.controls['recipeCalories'].setValue(resp.calories);
      this.updateRecipeForm.controls['recipePrepTime'].setValue(resp.prepTime);
      this.updateRecipeForm.controls['recipeNote'].setValue(resp.recipeNote);
    });

  }

  updateRecipe(){
    const id = this.recipe.id;
    const recipeName = this.updateRecipeForm.controls['recipeName'].value;
    const recipeIngredients = this.updateRecipeForm.controls['recipeIngredients'].value;
    const recipeCategory = this.updateRecipeForm.controls['recipeCategory'].value;
    const recipeCalories = this.updateRecipeForm.controls['recipeCalories'].value;
    const recipePrepTime = this.updateRecipeForm.controls['recipePrepTime'].value;
    const recipeNote = this.updateRecipeForm.controls['recipeNote'].value;
    const body: Recipe = {id: id, recipeName: recipeName, ingredients: recipeIngredients, category: recipeCategory, calories: recipeCalories, prepTime: recipePrepTime, recipeNote: recipeNote};
    this.recipeService.updateRecipe(body)
    .subscribe((data:any)=>{
      this.router.navigate(['home/all-recipe']);
    });
  }

  cancel(){
    this.router.navigate(['home/all-recipe']);
  }

}
