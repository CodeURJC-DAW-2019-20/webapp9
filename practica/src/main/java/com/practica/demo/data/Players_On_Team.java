package com.practica.demo.data;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.OneToOne;

@Entity
@IdClass(Players_On_Team.class)
public class Players_On_Team implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@OneToOne(cascade=CascadeType.ALL)
	private Team team;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@OneToOne(cascade=CascadeType.ALL)
	private Player player;

	public Players_On_Team(Team team, Player player) {
		super();
		this.team = team;
		this.player = player;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	public Player getPlayer() {
		return player;
	}

	public void setPlayer(Player player) {
		this.player = player;
	}
	
	
	
}
