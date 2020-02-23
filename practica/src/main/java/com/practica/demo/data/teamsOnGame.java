package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity @IdClass(TeamsOnGameIds.class)
public class teamsOnGame {
	@Id
	private int teamIdTeam;
	@Id
	private int gameIdGame;
	
	private int result;
	private boolean winner;
	private String date;
	
	public teamsOnGame() {

	}
	
	public teamsOnGame(int teamIdTeam, int gameIdGame, int result, boolean winner, String date) {
		super();
		this.teamIdTeam = teamIdTeam;
		this.gameIdGame = gameIdGame;
		this.result = result;
		this.winner = winner;
		this.date = date;
	}
	public int getTeamIdTeam() {
		return teamIdTeam;
	}
	public void setTeamIdTeam(int teamIdTeam) {
		this.teamIdTeam = teamIdTeam;
	}
	public int getGameIdGame() {
		return gameIdGame;
	}
	public void setGameIdGame(int gameIdGame) {
		this.gameIdGame = gameIdGame;
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
