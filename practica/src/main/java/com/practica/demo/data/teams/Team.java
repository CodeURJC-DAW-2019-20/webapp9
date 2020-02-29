package com.practica.demo.data.teams;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idTeam;

	private String name;

	private int elo;

	private int wins;

	private int losses;

	public Team() {

	}

	public Team(String name, int elo) {
		this.name = name;
		this.elo = elo;
	}

	public int getId() {
		return idTeam;
	}

	public void setId(int id) {
		this.idTeam = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getElo() {
		return elo;
	}

	public void setElo(int elo) {
		this.elo = elo;
	}

	public void addWin() {
		this.setWins(this.getWins() + 1);
	}

	public void addLoss() {
		this.setLosses(this.getLosses() + 1);
	}

	public int getWins() {
		return wins;
	}

	public void setWins(int wins) {
		this.wins = wins;
	}

	public int getLosses() {
		return losses;
	}

	public void setLosses(int losses) {
		this.losses = losses;
	}

}
