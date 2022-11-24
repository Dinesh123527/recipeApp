package com.example.demo.service;


import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.exceptions.RecipeException;
import com.example.demo.model.Recipe;

@Component
public interface RecipeService {
	List<Recipe> getAllRecipes() throws RecipeException;
	Recipe getById(int id) throws RecipeException;
	void addRecipe(Recipe recipe) throws RecipeException;
	List<Recipe> deleteRecipe(int id) throws RecipeException;
	void updateRecipe(Recipe recipe) throws RecipeException;
	List<Recipe> getByCalories(int calories) throws RecipeException;

}
