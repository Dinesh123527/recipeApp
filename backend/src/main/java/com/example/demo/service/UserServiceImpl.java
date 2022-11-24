package com.example.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.example.demo.exceptions.UserException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	/*
	 addUser() will creates a new user in the User Database.
	 @Param User is the Model class where to add fields.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */
	
	@Override
	public void addUser(User user) throws UserException{
		try {
		     userRepository.save(user);
		}
		catch(DataAccessException e) {
			throw new UserException("Database Failed to Load");
		}
		catch(Exception e) {
			throw new UserException("Unable to Add a User");
		}
	}
	
	/*
	 getByUser() will return the Particular User object Associated with UserName.
	 @Param name is the UserName of the User.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */
	
	@Override
	public User getByUser(String name) throws UserException{
		User user;
		try {
		user = userRepository.findByuserName(name);	
	  }
	  catch(DataAccessException e) {
		  throw new UserException("Database Failed to Load");
	  }
	  catch(Exception e) {
		  throw new UserException("Failed to Fetch the User");
	  }
	  return user;
  }

}
