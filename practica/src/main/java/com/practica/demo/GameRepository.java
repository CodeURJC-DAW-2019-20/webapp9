package com.practica.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Game;
import com.practica.demo.data.tournament.Tournament;

public interface GameRepository extends JpaRepository<Game, Integer> {

	Game findByTournament(Tournament tournament);


	List<Game> findBytournamentIdTournament(int idTournament);


}
