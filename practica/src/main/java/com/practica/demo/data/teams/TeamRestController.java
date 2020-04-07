package com.practica.demo.data.teams;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamRestController {

	@Autowired
	private TeamRepository repositoryTeam;
	
	@Autowired
	private TeamService teamService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/leaderBoardLoaded", method = RequestMethod.GET)
	public List<Team> findTeams() {
		return repositoryTeam.findByTeamNotNull();
	}
	
	/*@RequestMapping(value = "/api/teams", method = RequestMethod.GET)
	public ResponseEntity<Object> getTeams(){
		return new ResponseEntity<>(teamService.getTeams(), HttpStatus.OK);
	}*/
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/teams", method = RequestMethod.POST)
	public ResponseEntity<Object> createTeam(@RequestBody Team team){
		
		Team teamResult = teamService.createTeam(team);
		
		if(teamResult != null){
			return new ResponseEntity<>(repositoryTeam.findByname(teamResult.getName()), HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>("Team wasnt created", HttpStatus.CONFLICT);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/teams/page={pageNum}", method = RequestMethod.GET)
	public ResponseEntity<Object> getTeamsByElo(@PathVariable int pageNum){
		if(!teamService.getTeamsByElo(pageNum).isEmpty()) {
			return new ResponseEntity<>(teamService.getTeamsByElo(pageNum), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/teams/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateTeam(@PathVariable int id ,@RequestBody Team team){
		if(teamService.updateTeam(id, team)){
			return new ResponseEntity<>("Team was succesfully updated", HttpStatus.OK);
		}else{
			return new ResponseEntity<>("The team wasnt updated", HttpStatus.NOT_FOUND);
		}
	}
	

	
}
