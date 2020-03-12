package com.practica.demo.data.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.teams.Team;

@RestController
public class PlayerRestController {
	
	
	@Autowired
	private PlayerService playerService;
	
	@RequestMapping(value = "/api/player/{idPlayer}/team", method = RequestMethod.PUT)
	public ResponseEntity<Object> addPlayerTeam(@PathVariable int idPlayer, @RequestBody Team team){
		if(playerService.updateTeam(idPlayer,team)){
			return new ResponseEntity<>("Team was succesfully updated", HttpStatus.OK);
		}else{
			return new ResponseEntity<>("Player or team not found", HttpStatus.NOT_FOUND);
		}
	}
	
}
