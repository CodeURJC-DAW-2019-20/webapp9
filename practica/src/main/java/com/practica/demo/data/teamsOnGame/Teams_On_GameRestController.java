package com.practica.demo.data.teamsOnGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Teams_On_GameRestController {
	
	@Autowired
	private Teams_On_GameService teamsOnGameService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/teamsOnGame/{id1}+{id2}+{idGame}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateTeam(@PathVariable int id1,@PathVariable int id2, @PathVariable int idGame ,@RequestBody Teams_On_Game[] teams){
		if(teamsOnGameService.updateTeamOnGame(id1, id2, idGame, teams)){
			return new ResponseEntity<>("Teams results were succesfully updated", HttpStatus.OK);
		}else{
			return new ResponseEntity<>("The team results werent updated", HttpStatus.NOT_FOUND);
		}
	}
	
}
