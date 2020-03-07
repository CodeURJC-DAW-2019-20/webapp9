package com.practica.demo.data.user;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface RespositoryUser extends CrudRepository<User, Integer> {
	
	User findByiduser(int id);
	
	User findByusername(String username);

	User findByemail(String email);

	@Transactional
	@Modifying
	@Query(value ="update user u set u.UserName = ?1, u.password = ?2, u.name = ?3 where u.idUser = ?4",nativeQuery = true)
	int updateUser(String username, String password, String name, int idUser);

	@Query(value = "select * from user where email = ?1 or UserName = ?2", nativeQuery = true)
	User findByemailOrusername(String email, String username);

}
