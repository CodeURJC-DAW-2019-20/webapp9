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

import com.practica.demo.data.Team;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/getTeamData")
public class DataRestController {
	
	@Autowired
	private TeamRepository repositoryTeam;
	
	@RequestMapping(method = RequestMethod.GET)
	public Optional<Team> findTeams(@RequestParam (required=false) int id) {
		/*System.out.println(id);*/
		return  repositoryTeam.findById(id);
	}

}
