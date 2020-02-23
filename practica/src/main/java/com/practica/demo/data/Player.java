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
	
	private int user_iduser;
	
	/*
	@OneToOne(cascade=CascadeType.ALL)
	private User user;
	*/
	
	public int getId_player() {
		return id_player;
	}

	public void setId_player(int id_player) {
		this.id_player = id_player;
	}

	public int getUser_idUser() {
		return user_iduser;
	}

	public void setUser_idUser(int user_idUser) {
		this.user_iduser = user_idUser;
	}
	/*
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	*/
}
