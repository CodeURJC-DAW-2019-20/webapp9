package com.practica.demo.data;


import javax.persistence.Entity;
import javax.persistence.*;

@Entity
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_team;

	@Column
	private String name;

	@Column
	private int elo;

	public Team() {

	}

	public Team(int id, String name, int elo) {
		this.id_team = id;
		this.name = name;
		this.elo = elo;
	}

	public int getId() {
		return id_team;
	}

	public void setId(int id) {
		this.id_team = id;
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