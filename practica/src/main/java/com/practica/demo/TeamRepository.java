package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.practica.demo.data.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {
	
}
