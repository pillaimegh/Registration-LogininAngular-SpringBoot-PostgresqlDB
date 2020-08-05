package com.lti.LoginPage.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.LoginPage.model.Login;

@Repository
public interface LoginDao extends JpaRepository<Login,Integer> {

	public Login findByEmail(String email);

	public Login findByEmailAndPassword(String email, String password);

}
