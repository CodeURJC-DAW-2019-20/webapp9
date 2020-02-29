package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.practica.demo.data.tournament.Tournament;

@Entity
public class Game {

	@Id
	private int id_game;

	@OneToOne
	private Tournament tournament;

	public Game() {
	}
}
