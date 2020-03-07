package com.practica.demo.data.player;

import java.util.Optional;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.springframework.stereotype.Service;

import com.practica.demo.data.rol.RolRepository;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;

@Service
public class PlayerServiceImp implements PlayerService{
	/*

	private PlayerRepository playerRepository;
	private RespositoryUser userRepository;
	private RolRepository rolRepository;
	
	@Override
	public boolean createPlayer(User user) {
		return newUser(user);
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
	
	public boolean newUser(User user) {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<User>> violations = validator.validate(user);

		if (violations.isEmpty()) {

			if (userRepository.findByemailOrusername(user.getEmail(), user.getUsername()) != null) {
				return false;
			}else {
				return generateUser( user);
			}
		}else {
			return false;
		}

	}


	private boolean generateUser(User user) {
		user.setRol(rolRepository.findById(2).get());
		try {

			userRepository.save(user);
			User useraux = userRepository.findByemail(user.getEmail());

			Player player = new Player(0, useraux, " ");

			playerRepository.save(player);

			return true;
		} catch (Exception e) {

			return false;

		}
	}
	*/
	
}
