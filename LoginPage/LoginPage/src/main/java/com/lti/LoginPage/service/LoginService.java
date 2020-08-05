package com.lti.LoginPage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.lti.LoginPage.dao.LoginDao;
import com.lti.LoginPage.model.Login;



@Service
public class LoginService {

		@Autowired
		private LoginDao dao;
	
		public Login fetchUserByEmail(String email){
			return dao.findByEmail(email);
		}
		
		public Login fetchUserByEmailAndPassword(String email, String password) {
			return dao.findByEmailAndPassword(email,password);
		}
	
}
