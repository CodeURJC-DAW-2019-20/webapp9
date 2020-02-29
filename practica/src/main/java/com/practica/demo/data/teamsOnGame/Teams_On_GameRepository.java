package com.practica.demo.data.teamsOnGame;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Teams_On_GameRepository extends JpaRepository<Teams_On_Game, Integer> {
	List<Teams_On_Game> findAllBydate(String date);

	@Query(value = "select * from Teams_On_game where team_Id_Team = ?1", nativeQuery = true)
	Teams_On_Game findByteam_Id_Team(int id);
}
