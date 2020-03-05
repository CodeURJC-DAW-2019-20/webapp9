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
			
			//auxTeam.setId(team.getId());
			auxTeam.setElo(team.getElo());
			auxTeam.setName(team.getName());
			auxTeam.setWins(team.getWins());
			auxTeam.setLosses(team.getLosses());
			
			teamRepository.save(auxTeam);
			
			return true;
			
		}else {
			return false;
		}
		
	}

}
