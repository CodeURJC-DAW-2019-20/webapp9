package com.practica.demo.data.player;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerRestController {
	@Autowired
	private PlayerService playerService;
	@Autowired
	private PlayerRepository playerRepository;
	
	@RequestMapping(value = "/api/player/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getPlayer(@PathVariable int id){
		Optional <Player> aux = playerRepository.findById(id);
		//aux = playerService.getPlayer(id);
		
		if (aux.isPresent()) {
			return new ResponseEntity<>(aux.get(), HttpStatus.OK);
		}else {
			return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
