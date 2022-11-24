import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(){

  }

  getRecipeForDiabetic(){
    this.recipeService.getByCalories(120).subscribe((resp: any) => this.recipes = resp)
  }

  getRecipeForCardiac(){
    this.recipeService.getByCalories(60).subscribe((resp: any) => this.recipes = resp)
  }

  getRecipeForCancer(){
    this.recipeService.getByCalories(180).subscribe((resp: any) => this.recipes = resp)
  }

}
