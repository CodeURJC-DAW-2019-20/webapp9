package com.practica.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Team;
import com.practica.demo.data.teamsOnGame;

public interface TeamRepository extends JpaRepository<Team, Integer>{
	
	Team findByidTeam(int id);
	
}
