package com.practica.demo.data.player;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;


@Service
public class PlayerServiceImp implements PlayerService{
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Override
	public boolean updateTeam(int idPlayer, int idTeam) {
		
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

	
	
}
