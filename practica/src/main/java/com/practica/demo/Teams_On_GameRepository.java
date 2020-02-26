package com.practica.demo;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Teams_On_Game;

public interface Teams_On_GameRepository extends JpaRepository<Teams_On_Game, Integer>{
	
	List<Teams_On_Game> findByteamIdTeam();
}
