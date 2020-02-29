package com.practica.demo.data.teamsOnGame;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.OneToOne;

@Entity
@IdClass(TeamsOnGameIds.class)
public class Teams_On_Game implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int team_Id_Team;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int game_Id_Game;
	
	private int result;
	private boolean winner;
	private String round;
	private String date;
	
	public Teams_On_Game() {

	}

	public Teams_On_Game(int team_Id_Team, int gameIdGame, int result, boolean winner, String round, String date) {
		super();
		this.team_Id_Team = team_Id_Team;
		this.game_Id_Game = gameIdGame;
		this.result = result;
		this.winner = winner;
		this.round = round;
		this.date = date;
	}

	public int getTeamIdTeam() {
		return team_Id_Team;
	}

	public void setTeamIdTeam(int teamIdTeam) {
		this.team_Id_Team = teamIdTeam;
	}

	public int getGameIdGame() {
		return game_Id_Game;
	}

	public void setGameIdGame(int gameIdGame) {
		this.game_Id_Game = gameIdGame;
	}

	public int getResult() {
		return result;
	}

	public void setResult(int result) {
		this.result = result;
	}

	public boolean isWinner() {
		return winner;
	}

	public void setWinner(boolean winner) {
		this.winner = winner;
	}
	
	public String getRound() {
		return round;
	}

	public void setRound(String round) {
		this.round = round;
	}
	
	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
	
}
