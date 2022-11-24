package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptions.ResourceException;
import com.example.demo.model.Resource;
import com.example.demo.service.ResourceService;

@RestController
public class ResourceController {
	
	@Autowired
	ResourceService resourceService;
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@GetMapping(value="/resources")
	public ResponseEntity<List<Resource>> getAllResources() throws ResourceException{
		   List<Resource> resourceList = resourceService.getAllResources();
		   return new ResponseEntity<>(resourceList, HttpStatus.OK);
	}
}
