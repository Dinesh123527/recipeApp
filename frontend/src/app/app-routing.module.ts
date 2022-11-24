import { RecommendationComponent } from './recommendation/recommendation.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
    { path: 'home', component: DashboardComponent ,
     children: [
    { path: 'all-recipe', component: AllRecipeComponent },
    { path: 'add-recipe', component: AddRecipeComponent },
    { path: 'view-recipe/:id', component: ViewRecipeComponent },
    { path: 'update-recipe/:id', component: UpdateRecipeComponent },
    { path: 'admin-registration', component: AdminRegistrationComponent },
    { path: 'recommendation', component: RecommendationComponent },
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
