package com.practica.demo.data.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;

@Service
public class UserServiceImp implements UserService{
	
	@Autowired
	private RespositoryUser userRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Override
	public User getUser(int id) {
		try {
			return userRepository.findByiduser(id);
		}catch(Exception e){
			return null;
		}
		
	}

	@Override
	public boolean createUser(User user) {
		try {
			userRepository.save(user);
			
			if(user.getRol().getRolDes().equals("USER")) {
				Player newPlayer = new Player();
				
				newPlayer.setUser(user);
				
				playerRepository.save(newPlayer);
			}
			
			return true;
		}catch(Exception e) {
			return false;
		}
	}

	@Override
	public boolean updateUser(int id, UserPlayerWrapper userPlayer) {
		User auxUser = userRepository.findByiduser(id);
		
		
		if(auxUser != null) {
			
			Player auxPlayer = playerRepository.findByuser(auxUser);
			if(userPlayer.getUser().getName() != null) {
				auxUser.setName(userPlayer.getUser().getName());
			}
			if((userPlayer.getUser().getUsername() != null)) {
				auxUser.setUsername(userPlayer.getUser().getUsername());
			}
			if(userPlayer.getUser().getPassword() != null) {
				auxUser.setPassword(userPlayer.getUser().getPassword());
			}
			if(userPlayer.getUser().getImg() != null) {
				auxUser.setImg(userPlayer.getUser().getImg());
			}
			
			if(userPlayer.getPlayer().getDescription() != null) {
				auxPlayer.setDescription(userPlayer.getPlayer().getDescription());
			}
			if(userPlayer.getPlayer().getTeam() != null) {
				auxPlayer.setTeam(userPlayer.getPlayer().getTeam());
			}
			
			
			userRepository.save(auxUser);
			playerRepository.save(auxPlayer);
			
			return true;
		}else {
			return false;
		}
	}

}
