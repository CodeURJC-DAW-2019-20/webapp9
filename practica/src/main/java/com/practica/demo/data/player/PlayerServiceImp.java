package com.practica.demo.data.player;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;


@Service
public class PlayerServiceImp implements PlayerService{
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private RespositoryUser userRepository;
	
	@Override
	public boolean updateTeam(int idPlayer, Team team) {
		
		Team auxTeam = teamRepository.findByname(team.getName());
		
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

	@Override
	public Player getPlayerByUser(int idUser) {
		
		User user = userRepository.findByiduser(idUser);
		
		try {
			return playerRepository.findByuser(user);
		}catch (Exception e) {
			return null;
		}
	}

}
