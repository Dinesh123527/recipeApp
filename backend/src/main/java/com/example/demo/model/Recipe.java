package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Table(name="recipe")
public class Recipe {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column
	@NotNull
	@Pattern(regexp = "[A-Za-z]")
	private String recipeName;
	@NotNull
	@Column
	private String ingredients;
	@Column
	@NotNull
	private String category;
	@Column
	@NotNull
	@Pattern(regexp = "^[0-9]*$")
	private int calories;
	@Column
	@NotNull
	@Pattern(regexp = "^[0-9]*$")
	private int prepTime;
	@Lob
	@Column
	@NotNull
	private String recipeNote;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRecipeName() {
		return recipeName;
	}
	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}
	public String getIngredients() {
		return ingredients;
	}
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getCalories() {
		return calories;
	}
	public void setCalories(int calories) {
		this.calories = calories;
	}
	public int getPrepTime() {
		return prepTime;
	}
	public void setPrepTime(int prepTime) {
		this.prepTime = prepTime;
	}
	public String getRecipeNote() {
		return recipeNote;
	}
	public void setRecipeNote(String recipeNote) {
		this.recipeNote = recipeNote;
	}
}
