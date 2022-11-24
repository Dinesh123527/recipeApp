package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.example.demo.exceptions.AdminException;
import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	/*
	 addAdminUser() will creates a new user in the Admin Database.
	 @Param Admin is the Model class where to add fields.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */
	
	@Override
	public void addAdminUser(Admin admin) throws AdminException{
		try {
		   adminRepository.save(admin);
		}
		catch(DataAccessException e) {
			throw new AdminException("DataBase Failed to Load");
		}
		catch(Exception e) {
			throw new AdminException("Failed to Add the User");
		}
	}
	
	/*
	 getAdminUser() will return the Particular User object Associated with UserName.
	 @Param name is the UserName of the AdminUser.
	 Here Exception Handling is done, if database Crashes it will Throw an Error.
	 */

	@Override
	public Admin getAdminUser(String name) throws AdminException{
		Admin admin;
		try {
			admin = adminRepository.findByadminUserName(name);
		}
		catch(DataAccessException e) {
			throw new AdminException("DataBase Failed to Load");
		}
		catch(Exception e) {
			throw new AdminException("Failed to Fetch the User");
		  }
		return admin;
	}

}
