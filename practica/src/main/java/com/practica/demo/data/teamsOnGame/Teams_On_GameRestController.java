package com.practica.demo.data.teamsOnGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Teams_On_GameRestController {
	
	@Autowired
	private Teams_On_GameService teamsOnGameService;
	
	@RequestMapping(value = "/api/teamsOnGame", method = RequestMethod.GET)
	public ResponseEntity<Object> getTeamsOnGame(){
		return new ResponseEntity<>(teamsOnGameService.getTeamsOnGame(), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/api/teamsOnGame/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getTeamsOnGameByGameId(@PathVariable int id){
		return new ResponseEntity<>(teamsOnGameService.getTeamsOnGameByGameId(id), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/api/teamsOnGame", method = RequestMethod.POST)
	public ResponseEntity<Object> createTeamsOnGame(@RequestBody Teams_On_Game teamOnGame){
		if(teamsOnGameService.createTeamOnGame(teamOnGame)) {
			return new ResponseEntity<>("Team on game created successfully", HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Team on game wasnt created", HttpStatus.CONFLICT);
		}
	}
	
	@RequestMapping(value = "/api/teamsOnGame/{id1}+{id2}+{idGame}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateTeam(@PathVariable int id1,@PathVariable int id2, @PathVariable int idGame ,@RequestBody Teams_On_Game[] teams){
		if(teamsOnGameService.updateTeamOnGame(id1, id2, idGame, teams)){
			return new ResponseEntity<>("Teams results were succesfully updated", HttpStatus.OK);
		}else{
			return new ResponseEntity<>("The team results werent updated", HttpStatus.NOT_FOUND);
		}
	}
	
}
