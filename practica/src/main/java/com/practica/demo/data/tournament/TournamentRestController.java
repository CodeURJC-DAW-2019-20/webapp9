package com.practica.demo.data.tournament;

import java.io.File;
import java.util.List;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teamsOnGame.*;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class TournamentRestController {
	
	@Autowired
	private TournamentService tournamentService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/tournaments", method = RequestMethod.GET)
	public ResponseEntity<Object>getTournaments(){
		return new ResponseEntity<>(tournamentService.getTournaments(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/tournaments", method = RequestMethod.POST)
	public ResponseEntity<Object>crerateTournament(@RequestBody Tournament tournament){
		
		Integer result = tournamentService.createTournament(tournament);
		
		if(result != null){
			return new ResponseEntity<>("Tournament was succesfully created. ID: " + result, HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>("Tournament wasnt created", HttpStatus.CONFLICT);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/tournaments/{id}/image", method = RequestMethod.POST)
	public ResponseEntity<Object>uploadImage(@RequestBody MultipartFile image,@PathVariable int id){
		if(tournamentService.uploadImage(image,id)){
			return new ResponseEntity<>(HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>("Image couldn't be uploaded", HttpStatus.CONFLICT);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/tournaments/{id}/image", method = RequestMethod.GET)
	public ResponseEntity<Object>getImage(@PathVariable int id){
	    byte[] image = tournamentService.getImage(id);
	    if (image!=null) {
	    	return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
	    }else {
	    	return new ResponseEntity<>("Image not found", HttpStatus.NOT_FOUND);
	    }
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/tournaments/{id}/teams", method = RequestMethod.POST)
	public ResponseEntity<Object>join(@PathVariable int id, @RequestBody Team team){
		if(tournamentService.joinTournament(id, team)) {
			return new ResponseEntity<>("Your team joined the tournament",HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Error",HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/tournaments/{idTournament}/matches", method = RequestMethod.GET)
	public ResponseEntity<Object>getmatches(@PathVariable int idTournament){
		List<Teams_On_Game> aux = tournamentService.getGamesInTournament(idTournament);
		if (aux!=null) {
			return new ResponseEntity<>(tournamentService.getGamesInTournament(idTournament),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
	
	
	
}
