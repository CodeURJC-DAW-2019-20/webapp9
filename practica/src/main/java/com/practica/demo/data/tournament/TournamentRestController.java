package com.practica.demo.data.tournament;

import java.io.File;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
	
	@RequestMapping(value = "/api/tournaments/{id}/image", method = RequestMethod.POST)
	public ResponseEntity<Object>uploadImage(@RequestBody MultipartFile image,@PathVariable int id){
		if(tournamentService.uploadImage(image,id)){
			return new ResponseEntity<>(HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>("Image couldn't be uploaded", HttpStatus.CONFLICT);
		}
	}
	
	@RequestMapping(value = "/api/tournaments/{id}/image", method = RequestMethod.GET)
	public ResponseEntity<Object>getImage(@PathVariable int id){
	    byte[] image = tournamentService.getImage(id);
	    if (image!=null) {
	    	return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
	    }else {
	    	return new ResponseEntity<>("Image not found", HttpStatus.NOT_FOUND);
	    }
	}
	
	@RequestMapping(value = "/api/tournaments/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object>join(@PathVariable int id){
		if(tournamentService.joinTournament(id)) {
			return new ResponseEntity<>("Your team joined the tournament",HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Error",HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	
	
}
