package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Game {
	
	@Id
	private int id_game;
	
	@OneToOne
	private Tournament tournament;

	public Game() {
	}
}
