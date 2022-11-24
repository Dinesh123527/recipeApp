package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;


import com.example.demo.exceptions.ResourceException;
import com.example.demo.model.Resource;
import com.example.demo.repository.ResourceRepository;

@Service
public class ResourceServiceImpl implements ResourceService{
	
	@Autowired
	ResourceRepository resourceRepository;
	
	/*
	 getAllResources() will creates a new List and we are Iterating Each Item through the
	 List and Adding the Item to the List and Return the List.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */
	
	@Override
	public List<Resource> getAllResources() throws ResourceException{
		List<Resource> resourceList = new ArrayList<Resource>();
		try {
	          resourceList = resourceRepository.findAll().stream().collect(Collectors.toList());
		}
		catch(DataAccessException e){
			throw new ResourceException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new ResourceException("Unable to Fetch Resources");
		} 
		return resourceList;
	}
	
}
