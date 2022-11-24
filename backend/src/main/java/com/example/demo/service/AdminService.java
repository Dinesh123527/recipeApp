package com.example.demo.service;

import com.example.demo.exceptions.AdminException;
import com.example.demo.model.Admin;

public interface AdminService {
	
	void addAdminUser(Admin admin) throws AdminException;
	Admin getAdminUser(String name) throws AdminException;

}
