package com.practica.demo.data.teamsOnGame;

import java.io.Serializable;

public class TeamsOnGameIds implements Serializable {
	
	int team_Id_Team;
	int game_Id_Game;
	
	public TeamsOnGameIds() {
	}
	
	public TeamsOnGameIds(int team_Id_Team, int game_Id_Game) {
		super();
		this.team_Id_Team = team_Id_Team;
		this.game_Id_Game = game_Id_Game;
	}
	
	public int getTeam_Id_Team() {
		return team_Id_Team;
	}
	public void setTeam_Id_Team(int team_Id_Team) {
		this.team_Id_Team = team_Id_Team;
	}
	public int getGame_Id_Game() {
		return game_Id_Game;
	}
	public void setGame_Id_Game(int game_Id_Game) {
		this.game_Id_Game = game_Id_Game;
	}
	
	
	
}
