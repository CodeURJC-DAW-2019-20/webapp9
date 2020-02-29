package com.practica.demo.data;

import java.util.List;

import com.practica.demo.data.teams.Team;

public class Bracket {

	private int idBracket;

	private List<Team> teams;

	public Bracket(int idBracket, List<Team> teams) {
		super();
		this.idBracket = idBracket;
		this.teams = teams;
	}

	public int getIdBracket() {
		return idBracket;
	}

	public void setIdBracket(int idBracket) {
		this.idBracket = idBracket;
	}

	public List<Team> getTeams() {
		return teams;
	}

	public void setTeams(List<Team> teams) {
		this.teams = teams;
	}

}
