package com.practica.demo.data.player;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.user.User;

@Entity
public class Player {
	
	@Id
	private int idPlayer;
	
	@OneToOne
	private User user;
	

	private String description;
	
	@OneToOne
	private Team team;
	public Player() {
		
	}
	
	public Player(int id,User user, String description) {
		super();
		this.idPlayer = id;
		this.user = user;
		this.description = description;
	}

	
	public int getIdPlayer() {
		return idPlayer;
	}

	public void setIdPlayer(int idPlayer) {
		this.idPlayer = idPlayer;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}
	

	

}
