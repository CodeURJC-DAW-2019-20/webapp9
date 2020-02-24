package com.practica.demo.data.player;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.practica.demo.data.user.User;

@Entity
public class Player {
	
	@Id
	private int idPlayer;
	
	@OneToOne
	private User user;
	
	private String description;
	
	public Player() {
		// TODO Auto-generated constructor stub
	}
	

	public Player(int idPlayer, User user, String description) {
		super();
		this.idPlayer = idPlayer;
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
	
	
	
	
	

}
