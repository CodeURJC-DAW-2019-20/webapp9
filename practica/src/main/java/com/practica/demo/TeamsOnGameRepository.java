package com.practica.demo;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.teamsOnGame;

public interface TeamsOnGameRepository extends JpaRepository<teamsOnGame, Integer>{
	List <teamsOnGame> findAllBydate(String date);
}
