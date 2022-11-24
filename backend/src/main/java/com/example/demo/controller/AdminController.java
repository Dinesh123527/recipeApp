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

import com.example.demo.exceptions.AdminException;
import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;

@RestController
@Validated
public class AdminController {
	
	@Autowired 
	private AdminService adminService;
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@PostMapping(value="/adminUsers")
	public ResponseEntity<Void> addAdminUser(@Valid @RequestBody Admin admin) throws AdminException{
		adminService.addAdminUser(admin);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@GetMapping(value = "/adminUsers/{adminUserName}")
	public ResponseEntity<Admin> getAdminUser(@Valid @PathVariable("adminUserName") String adminUserName) throws AdminException{
		Admin admin = adminService.getAdminUser(adminUserName);
		return new ResponseEntity<Admin>(admin, HttpStatus.OK);
	}
	
	

}
