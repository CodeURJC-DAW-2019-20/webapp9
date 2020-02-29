package com.practica.demo;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/getTeamData")
public class DataRestController {
	
	@Autowired
	private TeamRepository repositoryTeam;
	private PlayerRepository repositoryPlayer;
	
	@RequestMapping(method = RequestMethod.GET)
	public Team findTeams(@RequestParam (required=false) int id) {
		///Optional<Player> aux = repositoryPlayer.findById(id);
		//System.out.println(id);
		//Team auxTeam = repositoryTeam.findByplayer(id);
		Team team =  repositoryTeam.findByplayer(id);
		return team;
	}

}
