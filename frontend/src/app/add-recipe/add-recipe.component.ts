import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  categories: any;
  calories: any;
  resources: Resource[] = [];
  addRecipeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, private router: Router, private resourceService: ResourceService) { }

  ngOnInit() {
    this.addRecipeForm = this.formBuilder.group({
      recipeName: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3), Validators.maxLength(25)]],
      recipeIngredients: ['', [Validators.required, Validators.minLength(4)]],
      recipeCategory: ['', Validators.required],
      recipeCalories: ['', Validators.required],
      recipePrepTime: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      recipeNote: ['', [Validators.required, Validators.minLength(10)]]
    })
    this.resourceService.getAllReSources().subscribe((response:any) => {this.resources = response;
      const calories = this.resources.filter(resource => resource.resourceCode==='calories');
      const result= calories.map( calories => calories.resourceDetail);
      this.calories = result;
      const categories = this.resources.filter(resources => resources.resourceCode==='categories');
      const final= categories.map(categories => categories.resourceDetail);
     this.categories = final;
    });
  }


  addRecipe(){
    const id = 0;
    const recipeName = this.addRecipeForm.controls['recipeName'].value;
    const recipeIngredients = this.addRecipeForm.controls['recipeIngredients'].value;
    const recipeCategory = this.addRecipeForm.controls['recipeCategory'].value;
    const recipeCalories = this.addRecipeForm.controls['recipeCalories'].value;
    const recipePrepTime = this.addRecipeForm.controls['recipePrepTime'].value;
    const recipeNote = this.addRecipeForm.controls['recipeNote'].value;
    const body: Recipe = {id: id, recipeName: recipeName, ingredients: recipeIngredients, category: recipeCategory, calories: recipeCalories, prepTime: recipePrepTime, recipeNote: recipeNote};
    this.recipeService.addRecipe(body).subscribe((data:any)=>{this.router.navigate(['home/all-recipe'])});
  }
}

