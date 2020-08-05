package com.lti.LoginPage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.LoginPage.dao.LoginDao;
import com.lti.LoginPage.model.Login;
import com.lti.LoginPage.service.LoginService;

@RestController
public class LoginController {

	@Autowired
	LoginService service;
	
	@Autowired
	LoginDao dao;
	
//	@RequestMapping("/")
//	public String home() {
//		return "home.jsp";
//	}

	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public Login logindetails(@RequestBody Login login) throws Exception{
		
		String tempemailid= login.getEmail();
		if(tempemailid!=null && !"".equals(tempemailid)) {
			
			Login loginobj= service.fetchUserByEmail(tempemailid);
			if(loginobj != null) {
				throw new Exception("User with "+tempemailid+"already in use ");
			}
		}
		Login loginobj=null;
		
		loginobj= dao.save(login);
		return loginobj;
		
	}
	
	@PostMapping("/loginuser")
	@CrossOrigin(origins="http://localhost:4200")
	public Login loginUser(@RequestBody Login login) throws Exception {
		String tempId = login.getEmail();
		String tempPwd=login.getPassword();
		Login loginObj=null;
		
		if(tempId !=null && tempPwd!=null ) {
			loginObj= service.fetchUserByEmailAndPassword(tempId, tempPwd);
			if(loginObj == null) {
				throw new Exception("Please register yourself first ");
			}
		}
		
		return loginObj;
	}
	
	
}
