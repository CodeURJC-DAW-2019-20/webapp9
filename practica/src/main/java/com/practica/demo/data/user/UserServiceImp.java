package com.practica.demo.data.user;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.practica.demo.Imgs.ImageService;
import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.tournament.Tournament;

@Service
public class UserServiceImp implements UserService{
	
	@Autowired
	private RespositoryUser userRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private ImageService imgService;
	
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
	
	@Override
	public boolean uploadImage(MultipartFile imageFile, int id) {
		try {
			Optional<User> updated = userRepository.findById(id);
			if (updated.isPresent()) {
				Path imgPath = imgService.saveImagePath("tournament", id, imageFile);
				User updatedUser = updated.get();
				updatedUser.setImg(imgPath.toString());
				userRepository.save(updatedUser);
				return true;
			} else {
				return false;
			}
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@Override
	public byte[] getImage(int id) {
		Optional<User> aux = userRepository.findById(id);
		if (aux.isPresent()) {
			User user = aux.get();
			if (user.getImg() != null) {
				Path path = Paths.get(user.getImg());
				// path.resolve(tournament.getImg());
				//File file = path.toFile();
				try {
					return IOUtils.toByteArray( Files.newInputStream(path));
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					return null;
				}
				
			} else {
				return null;
			}
		} else {
			return null;
		}
	}
	
}
