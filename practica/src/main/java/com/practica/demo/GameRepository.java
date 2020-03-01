package com.practica.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {

	List<Game> findBytournamentIdTournament(int idTournament);

}
