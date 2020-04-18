package com.practica.demo.data.game;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.practica.demo.data.tournament.Tournament;

public interface GameRepository extends JpaRepository<Game, Integer> {

	Game findByTournament(Tournament tournament);

	/*@Query(value = "SELECT * FROM game n WHERE n.tournament_id_tournament = ?1",
            nativeQuery = true)*/
	List<Game> findBytournamentIdTournament(int idTournament);


}
