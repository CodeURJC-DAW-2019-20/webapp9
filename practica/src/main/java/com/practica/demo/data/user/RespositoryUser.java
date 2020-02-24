package com.practica.demo.data.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RespositoryUser extends CrudRepository<User, Integer> {

	User findByusername(String username);

	User findByemail(String email);
	
	@Query(
			 value = "select * from user where email = ?1 or UserName = ?2",
			 nativeQuery = true)
	User findByemailOrusername(String email, String username);

}
