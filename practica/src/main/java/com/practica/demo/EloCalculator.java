package com.practica.demo;

import java.lang.Math;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;

public class EloCalculator {

	private TeamRepository teamRepository;

	public EloCalculator(TeamRepository teamRepository) {
		this.teamRepository = teamRepository;
	}

	public void updateElo(int teamID1, int teamID2, int result) {
		int k1, k2;
		// Get elo of each team from database
		Team team1 = teamRepository.getOne(teamID1);
		Team team2 = teamRepository.getOne(teamID2);

		int team1Elo = team1.getElo();
		int team2Elo = team2.getElo();
		k1 = kValue(team1Elo);
		k2 = kValue(team2Elo);

		double e1;
		double e2;

		e1 = eCalc(team1Elo, team2Elo);
		e2 = eCalc(team2Elo, team1Elo);

		team1Elo = newElo(team1Elo, e1, k1, result);
		team2Elo = newElo(team2Elo, e2, k2, 1 - result);

		team1.setElo(team1Elo);
		team2.setElo(team2Elo);

		if (result == 0) {
			team1.addLoss();
			team2.addWin();
		} else {
			team1.addWin();
			team2.addLoss();
		}

		teamRepository.save(team1);
		teamRepository.save(team2);
		// Update elos in database

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
		aux = Math.pow(10, aux);
		value = 1 / aux;
		return value;
	}

	private int newElo(int oldElo, double estimatedScore, int kValue, int result) {
		int value;
		value = (int) (oldElo + (kValue * (result - estimatedScore)));
		return value;
	}
}
