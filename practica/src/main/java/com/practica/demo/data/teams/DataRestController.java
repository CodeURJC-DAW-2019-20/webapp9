package com.practica.demo.data.teams;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
