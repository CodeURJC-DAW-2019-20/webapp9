package com.practica.demo.data.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.user.User;

@RestController
@CrossOrigin(origins = "*")
public class PlayerRestController {
	
	
	@Autowired
	private PlayerService playerService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/player/{idPlayer}/team", method = RequestMethod.PUT)
	public ResponseEntity<Object> addPlayerTeam(@PathVariable int idPlayer, @RequestBody Team team){
		if(playerService.updateTeam(idPlayer,team)){
			return new ResponseEntity<>(HttpStatus.OK);
		}else{
			return new ResponseEntity<>("Player or team not found", HttpStatus.NOT_FOUND);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/player/{idUser}", method = RequestMethod.GET)
	public ResponseEntity<Object> getPlayer(@PathVariable int idUser){
		
		Player playerResult = playerService.getPlayerByUser(idUser);
		
		if(playerResult != null) {
			return new ResponseEntity<>(playerResult, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Player not found", HttpStatus.NOT_FOUND);
		}
	}
	
}
