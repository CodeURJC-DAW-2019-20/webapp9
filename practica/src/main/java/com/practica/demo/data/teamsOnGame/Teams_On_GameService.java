package com.practica.demo.data.teamsOnGame;

import java.util.List;

public interface Teams_On_GameService {
	public abstract List<Teams_On_Game> getTeamsOnGame();
	public abstract List<Teams_On_Game> getTeamsOnGameByGameId(int id);
	public abstract boolean createTeamOnGame(Teams_On_Game teamOnGame);
	public abstract boolean updateTeamOnGame(int idTeam1, int idTeam2, Teams_On_Game [] teams);
}
