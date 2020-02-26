package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Game {
	
	@Id
	private int idGame;
	
	@OneToOne
	private Tournament tournament;

	public Game() {
	}

	public Game(int idGame, Tournament tournament) {
		super();
		this.idGame = idGame;
		this.tournament = tournament;
	}



	public int getIdGame() {
		return idGame;
	}

	public void setId_game(int idGame) {
		this.idGame = idGame;
	}

	public Tournament getTournament() {
		return tournament;
	}

	public void setTournament(Tournament tournament) {
		this.tournament = tournament;
	}
	
}
