package com.practica.demo.data.player;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.practica.demo.data.user.User;

public interface PlayerRepository extends CrudRepository<Player, Integer> {

	Player findByuser(User user);

	@Transactional
	@Modifying
	@Query(value = "update player p set p.description = ?1 where p.id_player = ?2", nativeQuery = true)
	int updateUser(String username, int idUser);

}
