package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Resource;

@Repository
public interface ResourceRepository extends CrudRepository<Resource, String>{
	
	@Override
	List<Resource> findAll();

}
