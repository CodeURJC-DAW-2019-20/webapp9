package com.practica.demo.data.teams;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TeamRepository extends JpaRepository<Team, Integer> {

	@Query(value = "select * from team where id_team = (select team_id_team from player where id_player = ?1)", nativeQuery = true)
	Team findByplayer(int player);

	Team findByname(String name);

	Team findByidTeam(int id);
}
