package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {

	Game findByidGame(int gameIdGame);
	
	
}
