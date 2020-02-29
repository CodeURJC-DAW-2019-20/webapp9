package com.practica.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.tournament.Tournament;
import com.practica.demo.data.tournament.TournamentRepository;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/tournaments/loadCoordenates")
public class GoogleMapRestController {
	
	@Autowired
	private TournamentRepository repositoryTournament;
	
	@RequestMapping(method = RequestMethod.GET)
	public Optional<Tournament> findLocation() {
		return  repositoryTournament.findById(1);
	}

}