package com.practica.demo.data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.practica.demo.data.user.User;

@Entity
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_player;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_User;
	
	@OneToOne(cascade=CascadeType.ALL)
	private User user;
}
