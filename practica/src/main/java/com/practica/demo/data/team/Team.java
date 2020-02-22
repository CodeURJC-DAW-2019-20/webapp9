package com.practica.demo.data.team;

public class Team {

	private int id;

	private String name;
	private int elo;

	public Team() {

	}

	public Team(int id, String name, int elo) {
		this.id = id;
		this.name = name;
		this.elo = elo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

}
