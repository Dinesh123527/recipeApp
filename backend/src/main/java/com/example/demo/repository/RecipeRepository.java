package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Recipe;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
	
	@Override 
	List<Recipe> findAll();

}
