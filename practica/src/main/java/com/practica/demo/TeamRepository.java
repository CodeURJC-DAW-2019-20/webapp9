package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.practica.demo.data.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {
	@Query(
            value = "select * from team where id_team = (select team_id_team from players_on_team where player_id_player = ?1)",
            nativeQuery = true)
    Team findByplayer(int player);
}
