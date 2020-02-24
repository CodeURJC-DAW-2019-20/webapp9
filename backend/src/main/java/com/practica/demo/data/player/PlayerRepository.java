package com.practica.demo.data.player;

import org.springframework.data.repository.CrudRepository;

import com.practica.demo.data.user.User;


public interface PlayerRepository extends CrudRepository<Player, Integer> {
	
	Player findByuser(User user);

}
