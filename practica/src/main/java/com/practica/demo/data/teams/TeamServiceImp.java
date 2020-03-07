package com.practica.demo.data.teams;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamServiceImp implements TeamService{
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Override
	public boolean createTeam(Team team) {
		try {
			teamRepository.save(team);
			return true;
		}catch(Exception e) {
			return false;
		}
		
	}

	@Override
	public List<Team> getTeams() {
		return teamRepository.findAll();
	}

	@Override
	public boolean updateTeam(int id, Team team) {
		
		Team auxTeam = teamRepository.findByidTeam(id);
		
		if(auxTeam != null) {
			
			if(team.getElo() != 0) {
				auxTeam.setElo(team.getElo());
			}
			if(team.getName() != null) {
				auxTeam.setName(team.getName());
			}
			if(team.getWins() != 0) {
				auxTeam.setWins(team.getWins());
			}
			if(team.getLosses() != 0) {
				auxTeam.setLosses(team.getLosses());
			}
			
			teamRepository.save(auxTeam);
			
			return true;
			
		}else {
			return false;
		}
		
	}

}
