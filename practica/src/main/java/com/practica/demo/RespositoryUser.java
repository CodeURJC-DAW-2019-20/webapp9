package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.User;

public interface RespositoryUser extends JpaRepository<User, Integer> {
	
	User findByusername(String username);
	
	User findByemailAndPassword(String email,String password);
	
}
