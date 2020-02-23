package com.practica.demo.data;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.practica.demo.data.user.User;

@Entity
public class Player implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_player;
	
	private String player_name;
	
	@OneToOne //(cascade=CascadeType.ALL)
	private User user;

	public Player(String player_name, User user) {
		this.player_name = player_name;
		this.user = user;
	}

	public int getId_player() {
		return id_player;
	}

	public void setId_player(int id_player) {
		this.id_player = id_player;
	}

	public String getPlayer_name() {
		return player_name;
	}

	public void setPlayer_name(String player_name) {
		this.player_name = player_name;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
