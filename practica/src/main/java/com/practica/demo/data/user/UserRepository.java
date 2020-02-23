package com.practica.demo.data.user;

import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, String> {


	User findByusername(String username);

	User findByemail(String email);

}
