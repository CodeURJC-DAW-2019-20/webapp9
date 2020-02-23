package com.practica.demo.data.user;

import org.springframework.data.repository.CrudRepository;

public interface RespositoryUser extends CrudRepository<User, Integer> {

	User findByusername(String username);

	User findByemail(String email);

}
