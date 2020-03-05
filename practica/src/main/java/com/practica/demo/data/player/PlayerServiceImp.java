package com.practica.demo.data.player;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.practica.demo.data.user.RespositoryUser;

@Service
public class PlayerServiceImp implements PlayerService{
	

	private PlayerRepository playerRepository;
	private RespositoryUser userRepository;
	
	@Override
	public boolean createPlayer(Player player) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public Optional <Player> getPlayer(int idPlayer) {
			return playerRepository.findById(idPlayer);
	}
		
	@Override
	public boolean updatePlayer(Player player) {
		// TODO Auto-generated method stub
		return false;
	}
	
	
	
}
