package com.example.demo.service;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.example.demo.exceptions.RecipeException;
import com.example.demo.model.Recipe;
import com.example.demo.repository.RecipeRepository;

@Service
public class RecipeServiceImpl implements RecipeService{
	
	@Autowired
	RecipeRepository recipeRepository;
	/**
	 getAllRecipes() will creates a new List and we are Iterating Each Item through the
	 List and Adding the Item to the List and Return the List.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 **/
	@Override
	public List<Recipe> getAllRecipes() throws RecipeException{
		List<Recipe> recipeList = new ArrayList<Recipe>();
		try {
		      recipeList = recipeRepository.findAll().stream().collect(Collectors.toList());
		}
		catch(DataAccessException e) {
			throw new RecipeException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new RecipeException("Unable to Fetch Recipes");
		} 
		return recipeList;
	}
	
	/*
	 getById() will Return the Recipe Object Associated with that Id.
	 @Param Id it is the Recipe Id No.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */
	
	@Override
	public Recipe getById(int id) throws RecipeException{
		Recipe x;
		try {
			x = recipeRepository.findById(id).get();
		}
		catch(DataAccessException e) {
			throw new RecipeException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new RecipeException("Recipe Not Found");
		}
		return x;
	}
	
	/*
	 addRecipe() will add the Recipe
	 @Param Recipe it s the model Class it will add the Recipe.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */

	@Override
	public void addRecipe(Recipe recipe) throws RecipeException {
		try {
		       recipeRepository.save(recipe);
		}
		catch(DataAccessException e) {
			throw new RecipeException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new RecipeException("Can't Add a new Recipe");
		}
	}
	
	/*
	 deleteRecipe() will delete the Recipe Associated with the Id No.
	 @Param Id the Recipe Id No.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */

	@Override
	public List<Recipe> deleteRecipe(int id) throws RecipeException{
		List<Recipe> recipeList = new ArrayList<Recipe>();
		try {
			recipeRepository.deleteById(id);
		    recipeList =  recipeRepository.findAll().stream().collect(Collectors.toList());
		}
		catch(DataAccessException e) {
			throw new RecipeException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new RecipeException("Deletion Unsucessfull");
		}
		  return recipeList;
	}
	
	/*
	 updateRecipe() will update the Recipe
	 @Param Recipe it s the model Class it will update the Recipe.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */

	@Override
	public void updateRecipe(Recipe recipe) throws RecipeException{
		try {
			recipeRepository.save(recipe);
		}
		catch(DataAccessException e) {
			throw new RecipeException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new RecipeException("Update Unsucessful");
		}
	}

	/*
	 getByCalories() will get the Recipe Object Associated with the Calories.
	 @Param Calories Recipe Calories.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */
	
	@Override
	public List<Recipe> getByCalories(int calories) throws RecipeException{
		List<Recipe> recipeList = new ArrayList<Recipe>();
		try {
			recipeList = recipeRepository.findAll().stream().filter(i -> i.getCalories()<=calories).collect(Collectors.toList());	
		}
		catch(DataAccessException e) {
			throw new RecipeException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new RecipeException("Unable to Fetch Calories of Recipe");
		}
		return recipeList;
	}
	            
}
