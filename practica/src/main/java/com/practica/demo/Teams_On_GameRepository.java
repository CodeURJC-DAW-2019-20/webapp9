package com.practica.demo;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.practica.demo.data.Teams_On_Game;

public interface Teams_On_GameRepository extends JpaRepository<Teams_On_Game, Integer>{
	List <Teams_On_Game> findAllBydate(String date);
	@Query(value = "select * from Teams_On_game where team_Id_Team = ?1", nativeQuery = true)
	Teams_On_Game findByteam_Id_Team(int id);
}
