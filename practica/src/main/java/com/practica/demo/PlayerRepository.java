package com.practica.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.practica.demo.data.Player;
import com.practica.demo.data.Team;

public interface PlayerRepository extends JpaRepository<Player, Integer> {
	@Query("select t from Player t where t.player_name = ?1")
	List<Team> findByName(String name);
}