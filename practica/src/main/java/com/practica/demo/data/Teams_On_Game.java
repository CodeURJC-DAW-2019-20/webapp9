package com.practica.demo.data;

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
	private int teamidteam;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int game_Id_Game;
	
	private int result;
	private boolean winner;
	private String date;
	
	public Teams_On_Game() {

	}

	public Teams_On_Game(int teamIdTeam, int gameIdGame, int result, boolean winner, String date) {
		super();
		this.teamidteam = teamIdTeam;
		this.game_Id_Game = gameIdGame;
		this.result = result;
		this.winner = winner;
		this.date = date;
	}

	public int getTeamIdTeam() {
		return teamidteam;
	}

	public void setTeamIdTeam(int teamIdTeam) {
		this.teamidteam = teamIdTeam;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
	
}
