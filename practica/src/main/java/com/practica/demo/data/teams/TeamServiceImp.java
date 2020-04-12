package com.practica.demo.data.teams;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;

@Service
public class TeamServiceImp implements TeamService{
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Override
	public Team createTeam(Team team) {
		try {
			Team newTeam = new Team(team.getName(), 1000);
			teamRepository.save(newTeam);
			
			Team auxTeam = teamRepository.findByname(team.getName());
			
			return auxTeam;
		}catch(Exception e) {
			return null;
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

	@Override
	public boolean addPlayer(int idTeam, int idPlayer) {
		Team auxTeam = teamRepository.findByidTeam(idTeam);
		
		if(auxTeam != null) {
			
			Optional<Player> auxPlayer = playerRepository.findById(idPlayer);
			
			if(auxPlayer.isPresent()) {
				
				auxPlayer.get().setTeam(auxTeam);
				
				playerRepository.save(auxPlayer.get());
				
				return true;
			}else {
				return false;
			}

		}else {
			return false;
		}
	}
	
	public List<Team> getTeamsByElo(int page){
		Sort sort = Sort.by(
			    Sort.Order.desc("elo"),
			    Sort.Order.desc("name"));
		Pageable newPage =  PageRequest.of(page,5,sort/*Sort.by("elo").descending()*/);
		Page<Team> aux = teamRepository.findAll(newPage);
		List<Team> result = aux.getContent();
		return result;
	}

	@Override
	public Team getTeambyname(String name) {
		return teamRepository.findByname(name);
	}
	
	

}
