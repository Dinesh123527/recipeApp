import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authenticatiion.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {
  id: number;
  currentRecipe: Recipe;
  dataAdmin:any ={}
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router, private service: AuthenticationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id= +params['id']);
    this.recipeService.getById(this.id).subscribe((resp: any) => this.currentRecipe = resp);
    this.service.getType().subscribe((val3: any) => this.dataAdmin = val3);
  }
  deleteRecipe(id: number){
    this.recipeService.deleteRecipe(id).subscribe((res: any) => this.router.navigate(['home/all-recipe']));
  }

  updateRecipe(id: number){
    this.router.navigate(['home/update-recipe/'+ id]);
  }

  cancel(){
    this.router.navigate(['home/all-recipe']);
   }
 }

