package com.practica.demo.data.teamsOnGame;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Teams_On_GameRepository extends JpaRepository<Teams_On_Game, Integer> {
	List<Teams_On_Game> findAllBydate(String date);
	
	@Query(value = "select * from Teams_On_game where game_id_game = ?1", nativeQuery = true)
	List<Teams_On_Game> findGameIdGame(int game);

	@Query(value = "select * from Teams_On_game where team_Id_Team = ?1", nativeQuery = true)
	Teams_On_Game findByteam_Id_Team(int id);
	
	@Query(value = "select * from Teams_On_game where team_Id_Team = :idTeam AND game_Id_Game = :idGame", nativeQuery = true)
	Teams_On_Game findByteam_Id_TeamAndGameIdGame(@Param("idTeam") int idTeam, @Param("idGame") int idGame);
}
