package com.example.demo.service;



import org.springframework.stereotype.Component;

import com.example.demo.exceptions.UserException;
import com.example.demo.model.User;

@Component
public interface UserService {
	void addUser(User user) throws UserException;
	User getByUser(String name) throws UserException;
}
