package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Tournament;
import com.practica.demo.data.user.User;

public interface TournamentRepository extends JpaRepository<Tournament, Integer>{
	
	Tournament findByname(String name);

	
}
