import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from '../authenticatiion.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  query: string;
  dataAdmin:any = {};
  constructor(private recipeService: RecipeService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getAllRecipes();
    this.authService.getType().subscribe((val2: any) => {this.dataAdmin = val2;});
  }

  getAllRecipes(){
    this.recipeService.getAllRecipes().subscribe((response:any) => this.recipes = response);
  }

  viewRecipe(id: number){
    this.router.navigate(['home/view-recipe/'+ id]);
  }

  deleteRecipe(id: number){
    this.recipeService.deleteRecipe(id).subscribe((res: any) => this.recipes = res);
  }

  updateRecipe(id: number){
    this.router.navigate(['home/update-recipe/'+ id]);
  }
}
