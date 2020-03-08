package com.practica.demo.data.player;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.user.User;

@RestController
public class PlayerRestController {
	
	
	@Autowired
	private PlayerService playerService;
	
	@RequestMapping(value = "/api/player/{idPlayer}/team", method = RequestMethod.PUT)
	public ResponseEntity<Object> addPlayerTeam(@PathVariable int idPlayer, @RequestBody int idTeam){
		if(playerService.updateTeam(idPlayer,idTeam)){
			return new ResponseEntity<>("Team was succesfully updated", HttpStatus.OK);
		}else{
			return new ResponseEntity<>("Player or team not found", HttpStatus.NOT_FOUND);
		}
	}
	
}
