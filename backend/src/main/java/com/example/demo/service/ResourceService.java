package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.exceptions.ResourceException;
import com.example.demo.model.Resource;

@Component
public interface ResourceService {
	List<Resource> getAllResources() throws ResourceException;
}
