package com.practica.demo.data.tournament;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TournamentRestController {
	
	@Autowired
	private TournamentService tournamentService;
	
	@RequestMapping(value = "/api/tournaments", method = RequestMethod.GET)
	public ResponseEntity<Object>getTournaments(){
		return new ResponseEntity<>(tournamentService.getTournaments(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/tournaments", method = RequestMethod.POST)
	public ResponseEntity<Object>crerateTournament(@RequestBody Tournament tournament){
		if(tournamentService.createTournament(tournament)){
			return new ResponseEntity<>("Tournament was succesfully created", HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>("Tournament wasnt created", HttpStatus.CONFLICT);
		}
	}
	
}
