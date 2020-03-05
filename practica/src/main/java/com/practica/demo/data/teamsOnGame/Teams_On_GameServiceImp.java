package com.practica.demo.data.teamsOnGame;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practica.demo.EloCalculator;
import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;

@Service
public class Teams_On_GameServiceImp implements Teams_On_GameService{
	
	@Autowired
	private Teams_On_GameRepository teamsOnGameRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Override
	public List<Teams_On_Game> getTeamsOnGame() {
		return teamsOnGameRepository.findAll();
	}

	@Override
	public List<Teams_On_Game> getTeamsOnGameByGameId(int id) {
		return teamsOnGameRepository.findGameIdGame(id);
	}

	@Override
	public boolean createTeamOnGame(Teams_On_Game teamOnGame) {
		try {
			teamsOnGameRepository.save(teamOnGame);
			return true;
		}catch(Exception e) {
			return false;
		}
	}

	@Override
	public boolean updateTeamOnGame(int idTeam1, int idTeam2, Teams_On_Game [] teams) {
		
		EloCalculator calculateElo = new EloCalculator(teamRepository);
		
		Teams_On_Game auxTeam1 = teamsOnGameRepository.findByteam_Id_Team(idTeam1);
		Teams_On_Game auxTeam2 = teamsOnGameRepository.findByteam_Id_Team(idTeam2);
		
		if(auxTeam1 != null && auxTeam2 != null) {
			
			auxTeam1.setResult(teams[0].getResult());
			auxTeam1.setWinner(teams[0].getWinner());
			
			auxTeam2.setResult(teams[1].getResult());
			auxTeam2.setWinner(teams[1].getWinner());
			
			if(auxTeam1.getWinner()) {
				calculateElo.updateElo(auxTeam1.getTeam_Id_Team(), auxTeam2.getTeam_Id_Team(), 1);
			}else {
				calculateElo.updateElo(auxTeam1.getTeam_Id_Team(), auxTeam2.getTeam_Id_Team(), 0);
			}
			
			teamsOnGameRepository.save(auxTeam1);
			teamsOnGameRepository.save(auxTeam2);
			
			return true;
		}else {
			return false;
		}
	}

}
