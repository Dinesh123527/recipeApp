package com.example.demo.tests;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.example.demo.exceptions.AdminException;
import com.example.demo.exceptions.RecipeException;
import com.example.demo.exceptions.ResourceException;
import com.example.demo.exceptions.UserException;
import com.example.demo.model.Admin;
import com.example.demo.model.Recipe;
import com.example.demo.model.Resource;
import com.example.demo.model.User;

import org.powermock.modules.junit4.PowerMockRunner;


import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.repository.ResourceRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.AdminServiceImpl;
import com.example.demo.service.RecipeServiceImpl;
import com.example.demo.service.ResourceServiceImpl;
import com.example.demo.service.UserServiceImpl;
@RunWith(PowerMockRunner.class)
//@AutoConfigureMockMvc
public class RecipeServiceImplTest {
	
	@InjectMocks
	RecipeServiceImpl recipeServiceImpl;
	
	@InjectMocks
	UserServiceImpl userServiceImpl;
	
	@InjectMocks
	AdminServiceImpl adminServiceImpl;
	
	@InjectMocks
	ResourceServiceImpl resourceServiceImpl;
	
	@Mock
	RecipeRepository recipeRepository;
	
	@Mock
	UserRepository userRepository;
	
	@Mock
	AdminRepository adminRepository;
	
	@Mock
	ResourceRepository resourceRepository;

	 
	 @Test
	 public void testGetAllRecipes() throws RecipeException {
		 List<Recipe> recipeList = new ArrayList<Recipe>();
		 Recipe recipeOne = new Recipe();
		 recipeOne.setId(1);
		 recipeOne.setRecipeName("Dosa");
		 recipeOne.setIngredients("Urad Dal, Rava, Water, Salt");
		 recipeOne.setCategory("South Indian");
		 recipeOne.setCalories(120);
		 recipeList.add(recipeOne);
		 Recipe recipeTwo = new Recipe();
		 recipeTwo.setId(2);
		 recipeTwo.setRecipeName("Egg Bhurji");
		 recipeTwo.setIngredients("Eggs, Salt, Spices, Oil");
		 recipeTwo.setCategory("South Indian");
		 recipeTwo.setCalories(160);
		 recipeList.add(recipeTwo);
		 Recipe recipeThree = new Recipe();
		 recipeThree.setId(3);
		 recipeThree.setRecipeName("Medu Vada");
		 recipeThree.setIngredients("Urad Dal, Idli Rava, Salt, Water, Onion");
		 recipeThree.setCategory("South Indian");
		 recipeThree.setCalories(180);
		 recipeList.add(recipeThree);
		 Mockito.when(recipeRepository.findAll()).thenReturn(recipeList);
		 List<Recipe> rList = recipeServiceImpl.getAllRecipes();
		 assertEquals(3,rList.size());
	 }
	 
	 @Test
	 public void testGetRecipeById() throws RecipeException {
		 Recipe recipe = new Recipe();
		 recipe.setId(1);
		 recipe.setRecipeName("Chettinadu Fish Curry");
		 recipe.setIngredients("Fish, Salt, Spices, Water");
		 recipe.setCategory("South Indian");
		 recipe.setCalories(180);
		 Mockito.when(recipeRepository.findById(1)).thenReturn(Optional.of(recipe));
		 Optional<Recipe> Recipe = Optional.ofNullable(recipeServiceImpl.getById(1));
		 assertTrue(Recipe.isPresent());
		 assertSame(Recipe.get(),recipe);
	 }
	 
	 @Test 
	 public void testDeleteRecipe() throws RecipeException {
		 List<Recipe> recipeList = new ArrayList<Recipe>();
		 Recipe recipeFour = new Recipe();
		 recipeFour.setId(4);
		 recipeFour.setRecipeName("Upma");
		 recipeFour.setIngredients("Bombay Rava, Salt, Spices, Water");
		 recipeFour.setCategory("South Indian");
		 recipeFour.setCalories(160);
		 recipeList.add(recipeFour);
		 Mockito.doNothing().when(recipeRepository).deleteById(Mockito.any(Integer.class));
		 List<Recipe> rList = recipeServiceImpl.deleteRecipe(4);
		 assertEquals(0,rList.size());
	 }
	  
	 @Test 
	  public void testAddRecipe() throws RecipeException {
		  Recipe recipe = new Recipe();
		  recipe.setId(5);
		  recipe.setRecipeName("Madugula Halwa");
		  recipe.setIngredients("Wheat Milk, Cashew, ghee, Badam, sugar");
		  recipe.setCategory("South Indian");
		  recipe.setCalories(180);
		  Mockito.when(recipeRepository.save(Mockito.any(Recipe.class))).thenReturn(recipe);
		  assertEquals(recipe,recipeRepository.save(recipe));		  
	  }
	 
	 @Test
	 public void testUpdateRecipe() throws RecipeException {
		 Recipe recipe = new Recipe();
		 recipe.setId(1);
		 recipe.setCategory("Bonda");
		 recipe.setIngredients("Besan Powder, Maida Powder, Salt, Water");
		 Mockito.when(recipeRepository.save(Mockito.any(Recipe.class))).thenReturn(recipe);
		 assertEquals(recipe,recipeRepository.save(recipe));
	 }
	 
	 @Test
	 public void testGetByCalories() throws RecipeException {
		 List<Recipe> recipeList = new ArrayList<Recipe>();
		 Recipe recipeOne = new Recipe();
		 recipeOne.setId(1);
		 recipeOne.setRecipeName("Appam");
		 recipeOne.setIngredients("Rice, Active Yeast, Jeera, Sugar, Salt, Water" );
		 recipeOne.setCategory("South Indian");
		 recipeOne.setCalories(120);
		 Recipe recipeTwo = new Recipe();
		 recipeTwo.setId(2);
		 recipeTwo.setRecipeName("Lemon Rice");
		 recipeTwo.setIngredients("Lemon, Tamrind, Salt, Jeera, Mustard Seeds, Jaggery, Pepper, Ghee, Cashew, Chillies, Groundnut, Astepodia Powder");
		 recipeTwo.setCategory("South Indian");
		 recipeTwo.setCalories(180);
		 Recipe recipeThree = new Recipe();
		 recipeThree.setId(3);
		 recipeThree.setRecipeName("Aviyal");
		 recipeThree.setIngredients("Cumin Seeds, Spices, Coconut, Vegetables, Salt, Yogurt");
		 recipeThree.setCategory("South Indian");
		 recipeThree.setCalories(120);
		 recipeList.add(recipeOne);
		 recipeList.add(recipeTwo);
		 recipeList.add(recipeThree);
		 List<Recipe> expectedList = new ArrayList<Recipe>();
		 expectedList.add(recipeOne);
		 expectedList.add(recipeThree);
		 Mockito.when(recipeRepository.findAll()).thenReturn(recipeList);
		 List<Recipe> rList = recipeServiceImpl.getByCalories(120);
		 assertEquals(expectedList,rList);
	 } 
	 
	 @Test 
	  public void testAddUser() throws UserException {
		  User user = new User();
		  user.setId(2);
		  user.setUserFirstName("Sunil");
		  user.setUserFirstName("Denka");
		  user.setUserName("Sunil1234");
		  user.setUserPassword("Denka@345");
		  user.setUserContactNo("9834567890");
		  Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(user);
		  assertEquals(user,userRepository.save(user));		  
	  }
	 
	 @Test
	 public void testGetByUser() throws UserException {
		 User user = new User();
		 user.setId(1);
		 user.setUserFirstName("Indugu");
		 user.setUserLastName("Jagan");
		 user.setUserName("Jaggu345");
		 user.setUserPassword("jagan4567");
		 user.setUserContactNo("9848022385");
		 Mockito.when(userRepository.findByuserName("Jaggu345")).thenReturn(user);
		 Optional<User> User = Optional.ofNullable(userServiceImpl.getByUser("Jaggu345"));
		 assertTrue(User.isPresent());
		 assertSame(User.get(),user);
	 }
	 
	 @Test 
	  public void testAddAdminUser() throws AdminException {
		  Admin admin = new Admin();
		 admin.setId(3);
		 admin.setAdminFirstName("Michael");
		 admin.setAdminLastName("Santa");
		 admin.setAdminUserName("Admin");
		 admin.setAdminPassword("admin123");
		 admin.setAdminContactNo("9087908765");
		  Mockito.when(adminRepository.save(Mockito.any(Admin.class))).thenReturn(admin);
		  assertEquals(admin,adminRepository.save(admin));		  
	  }
	 
	 @Test
	 public void testGetAdminUser() throws AdminException {
		 Admin admin = new Admin();
		 admin.setId(7);
		 admin.setAdminFirstName("Narasimha");
		 admin.setAdminFirstName("Raju");
		 admin.setAdminUserName("Narasi304");
		 admin.setAdminPassword("Bubby@456");
		 admin.setAdminContactNo("6300878479");
		 Mockito.when(adminRepository.findByadminUserName("Narasi304")).thenReturn(admin);
		 Optional<Admin> Admin = Optional.ofNullable(adminServiceImpl.getAdminUser("Narasi304"));
		 assertTrue(Admin.isPresent());
		 assertSame(Admin.get(),admin);
	 }
	 
	 @Test
	 public void testGetAllResouces() throws ResourceException {
		 List<Resource> resourceList = new ArrayList<Resource>();
		 Resource resourceOne = new Resource();
		 resourceOne.setResourceCode("calories");
		 resourceOne.setResourceDetail("60");
		 resourceList.add(resourceOne);
		 Resource resourceTwo = new Resource();
		 resourceTwo.setResourceCode("calories");
		 resourceTwo.setResourceDetail("120");
		 resourceList.add(resourceTwo);
		 Resource resourceThree = new Resource();
		 resourceThree.setResourceCode("calories");
		 resourceThree.setResourceDetail("180");
		 resourceList.add(resourceThree);
		 Resource resourceFour = new Resource();
		 resourceFour.setResourceCode("calories");
		 resourceFour.setResourceDetail("200");
		 resourceList.add(resourceFour);
		 Resource resourceFive = new Resource();
		 resourceFive.setResourceCode("categories");
		 resourceFive.setResourceDetail("South Indian");
		 resourceList.add(resourceFive);
		 Resource resourceSix = new Resource();
		 resourceSix.setResourceCode("categories");
		 resourceSix.setResourceDetail("North Indian");
		 resourceList.add(resourceSix);
		 Resource resourceSeven = new Resource();
		 resourceSeven.setResourceCode("categories");
		 resourceSeven.setResourceDetail("Continental");
		 resourceList.add(resourceSeven);
		 
		 Mockito.when(resourceRepository.findAll()).thenReturn(resourceList);
		 List<Resource> reList = resourceServiceImpl.getAllResources();
		 assertEquals(7,reList.size());
	 }
	 	 
}

