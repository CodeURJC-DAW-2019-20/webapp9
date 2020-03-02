package com.practica.demo.data.teams;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
@RequestMapping("/leaderBoardLoaded")
public class TeamRestController {

	@Autowired
	private TeamRepository repositoryTeam;

	@RequestMapping(method = RequestMethod.GET)
	public List<Team> findTeams() {
		return repositoryTeam.findByTeamNotNull();
	}

}
