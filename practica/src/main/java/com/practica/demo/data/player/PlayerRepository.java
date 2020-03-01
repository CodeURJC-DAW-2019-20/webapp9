package com.practica.demo.data.player;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.practica.demo.data.user.User;

public interface PlayerRepository extends CrudRepository<Player, Integer> {

	Player findByuser(User user);

	@Modifying
	@Query(value = "update player set description = ?1 where id_player = ?2", nativeQuery = true)
	int updateUser(String username, int idUser);

}
