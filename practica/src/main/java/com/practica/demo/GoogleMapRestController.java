package com.practica.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.tournament.Tournament;
import com.practica.demo.data.tournament.TournamentRepository;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
@RequestMapping("/api/loadCoordenates")
public class GoogleMapRestController {

	@Autowired
	private TournamentRepository repositoryTournament;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.GET)
	public Tournament findLocation(@RequestParam String name) {
		return repositoryTournament.findByname(name);
	}

}