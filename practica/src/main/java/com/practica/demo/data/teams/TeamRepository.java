package com.practica.demo.data.teams;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TeamRepository extends JpaRepository<Team, Integer> {

	@Query(value = "select * from team where id_team = (select team_id_team from player where id_player = ?1)", nativeQuery = true)
	Team findByplayer(int player);

	Team findByname(String name);
	
	Team findByidTeam(int id);
	
	@Query(value = "select * from team where not id_team = 0 order by 3 desc", nativeQuery = true)
	List<Team> findByTeamNotNull();
}
