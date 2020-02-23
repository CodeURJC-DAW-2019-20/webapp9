package com.practica.demo.data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Players_On_Team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_team;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_player;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Team team;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Player player;
	
}
