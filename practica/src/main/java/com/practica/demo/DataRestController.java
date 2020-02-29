package com.practica.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
@RequestMapping("/getTeamData")
public class DataRestController {

	@Autowired
	private TeamRepository repositoryTeam;

	@RequestMapping(method = RequestMethod.GET)
	public Team findTeams(@RequestParam(required = false) int id) {

		Team team = repositoryTeam.findByplayer(id);
		return team;
	}

}
