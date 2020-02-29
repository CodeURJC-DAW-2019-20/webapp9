package com.practica.demo.data.tournament;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TournamentRepository extends JpaRepository<Tournament, Integer> {

	Tournament findByname(String name);

}
