import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getAllRecipes(){
    const baseUrl = 'http://localhost:8080/recipes';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*'
      })
    }
    return this.http.get(baseUrl, options);
  }

  public deleteRecipe(id: number) {
    const baseUrl = 'http://localhost:8080/recipes';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*'
      })
    }
    return this.http.delete(baseUrl+'/'+id, options);
  }

  public getById(id: number) {
    const baseUrl = 'http://localhost:8080/recipes';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*'
      })
    }
    return this.http.get(baseUrl+'/'+id, options);
  }

  public addRecipe(data : Recipe){
    const baseUrl = 'http://localhost:8080/recipes';
    let options = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-originPatterns': '*',
       'Access-Control-Allow-Headers': '*'
    })
  }
    return this.http.post(baseUrl,data,options);
 }

 public updateRecipe(data: Recipe){
  const baseUrl = 'http://localhost:8080/recipes';
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-originPatterns': '*',
      'Access-Control-Allow-Headers': '*'
    })
  }
  return this.http.put(baseUrl,data,options);
 }

 public getByCalories(calories: number){
  const baseUrl = 'http://localhost:8080/recipes/calories';
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-originPatterns': '*',
      'Access-Control-Allow-Headers': '*'
    })
  }
  return this.http.get(baseUrl+'/'+calories, options);
 }
}
