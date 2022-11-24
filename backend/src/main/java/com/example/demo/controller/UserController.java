package com.example.demo.controller;



import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptions.UserException;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@Validated
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@PostMapping(value="/users")
	public ResponseEntity<Void>addUser(@Valid @RequestBody User user) throws UserException{
		userService.addUser(user);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@GetMapping(value = "/users/{userName}")
	public ResponseEntity<User> getByUser(@Valid @PathVariable("userName") String userName) throws UserException{
		User user = userService.getByUser(userName);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

}
