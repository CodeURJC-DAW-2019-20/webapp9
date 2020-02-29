package com.practica.demo.data;

public class Play {
	private String round;
	private String name1;
	private int elo1;
	private String name2;
	private int elo2;
	private String date;
	private String nameWinner;

	public Play() {
		super();
	}

	public Play(String round, String name1, int elo1, String name2, int elo2, String date, String nameWinner) {
		super();
		this.round = round;
		this.name1 = name1;
		this.elo1 = elo1;
		this.name2 = name2;
		this.elo2 = elo2;
		this.date = date;
		this.nameWinner = nameWinner;
	}

	public String getRound() {
		return round;
	}

	public void setRound(String round) {
		this.round = round;
	}

	public String getName1() {
		return name1;
	}

	public void setName1(String name1) {
		this.name1 = name1;
	}

	public int getElo1() {
		return elo1;
	}

	public void setElo1(int elo1) {
		this.elo1 = elo1;
	}

	public String getName2() {
		return name2;
	}

	public void setName2(String name2) {
		this.name2 = name2;
	}

	public int getElo2() {
		return elo2;
	}

	public void setElo2(int elo2) {
		this.elo2 = elo2;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getNameWinner() {
		return nameWinner;
	}

	public void setNameWinner(String nameWinner) {
		this.nameWinner = nameWinner;
	}

}
