package com.practica.demo.data.teams;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamServiceImp implements TeamService{
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Override
	public void createTeam(Team team) {
		teamRepository.save(team);
	}

	@Override
	public List<Team> getTeams() {
		return teamRepository.findAll();
	}

}
