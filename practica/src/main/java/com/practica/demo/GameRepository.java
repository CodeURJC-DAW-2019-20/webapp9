package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Game;
import com.practica.demo.data.tournament.Tournament;

public interface GameRepository extends JpaRepository<Game, Integer> {
	Game findByTournament(Tournament tournament);
}
