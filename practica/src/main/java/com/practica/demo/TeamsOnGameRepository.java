package com.practica.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.teamsOnGame;

public interface TeamsOnGameRepository extends JpaRepository<teamsOnGame, Integer>{
	List <teamsOnGame> findBydate(String date);
}
