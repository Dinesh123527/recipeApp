package com.example.demo.controller;


import java.util.List;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.exceptions.RecipeException;
import com.example.demo.model.Recipe;
import com.example.demo.service.RecipeService;


@RestController
@Validated
public class RecipeController {
	@Autowired
	RecipeService recipeService;
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@GetMapping(value="/recipes")
	public ResponseEntity<List<Recipe>> getAllRecipes() throws RecipeException{
		      List<Recipe> recipeList = recipeService.getAllRecipes();
		      return new ResponseEntity<>(recipeList, HttpStatus.OK);	      
	}
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@GetMapping(value="/recipes/{id}")
	public ResponseEntity<Recipe> getById(@PathVariable("id") int id) throws RecipeException{
			  Recipe recipe = recipeService.getById(id);
			  return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
		
	}
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@DeleteMapping(value="/recipes/{id}")
	public ResponseEntity<List<Recipe>> deleteRecipe(@PathVariable("id") int id) throws RecipeException{
			   List<Recipe> recipeList = recipeService.deleteRecipe(id);
			   return new ResponseEntity<>(recipeList, HttpStatus.ACCEPTED);	
	}
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@PostMapping(value="/recipes")
	public ResponseEntity<Void> addRecipe(@Valid @RequestBody Recipe recipe) throws RecipeException{  
		   recipeService.addRecipe(recipe);
		   return new ResponseEntity<Void>(HttpStatus.CREATED);
	}  
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@PutMapping(value="/recipes")
	public ResponseEntity<Void> updateRecipe(@RequestBody Recipe recipe) throws RecipeException{  
			recipeService.updateRecipe(recipe);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}	

	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@GetMapping(value="/recipes/calories/{calories}")
	public ResponseEntity<List<Recipe>> getByCalories(@Valid @PathVariable("calories") int calories) throws RecipeException{
			  List<Recipe> recipeList = recipeService.getByCalories(calories);
			  return new ResponseEntity<>(recipeList, HttpStatus.OK);
	}
}
