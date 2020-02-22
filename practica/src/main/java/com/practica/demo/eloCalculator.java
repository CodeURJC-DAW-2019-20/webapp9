package com.practica.demo;

import java.lang.Math;

public class eloCalculator {

private void updateElo(int teamID1,int teamID2,int result) {
	int k1,k2;
	//Get elo of each team from database
	int team1Elo;
	int team2Elo;
	k1 = kValue(team1Elo);
	k2 = kValue(team2Elo);
		
	double e1;
	double e2;
		
	e1 = eCalc(team1Elo,team2Elo);
	e2 = eCalc(team2Elo,team1Elo);	
	
	team1Elo = newElo(team1Elo,e1,k1,result);
	team2Elo = newElo(team2Elo,e1,k1,1-result);	
	
	//Update elos in database
	
	}

	private int kValue(int teamsElo) {
		int value;
		if (teamsElo < 2100) {
			value = 32;
		} else if (teamsElo < 2400) {
			value = 24;
		} else {
			value = 16;
		}
		return value;
	}

	private double eCalc(int ownElo, int enemyElo) {
		double value;
		double aux; 
		aux = ((enemyElo - ownElo) / 400);
		aux = Math.pow(10,aux);
		value =  1 / aux;
		return value;
	}
	
	private int newElo(int oldElo, double estimatedScore, int kValue, int result) {
		int value;
		value = (int) ( oldElo + (kValue * (result - estimatedScore) ));
		return value;
	}
}
