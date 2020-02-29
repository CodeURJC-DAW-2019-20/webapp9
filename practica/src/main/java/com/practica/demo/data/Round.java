package com.practica.demo.data;

import java.util.List;

public class Round {
	private String nameRound;
	private List<Bracket> brackets;

	public Round(String nameRound, List<Bracket> brackets) {
		super();
		this.nameRound = nameRound;
		this.brackets = brackets;
	}

	public String getNameRound() {
		return nameRound;
	}

	public void setNameRound(String nameRound) {
		this.nameRound = nameRound;
	}

	public List<Bracket> getBrackets() {
		return brackets;
	}

	public void setBrackets(List<Bracket> brackets) {
		this.brackets = brackets;
	}
}
