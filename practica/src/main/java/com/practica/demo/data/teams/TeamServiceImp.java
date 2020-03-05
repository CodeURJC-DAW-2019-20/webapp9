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
	public boolean updateTeam(Team team) {
		
		Optional<Team> auxTeam = teamRepository.findById(team.getId());
		
		if(auxTeam.isPresent()) {
			teamRepository.save(team);
			return true;
		}else {
			return false;
		}
		
	}

}
