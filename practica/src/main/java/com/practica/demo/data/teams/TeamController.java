package com.practica.demo.data.teams;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.player.PlayerService;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

@Controller
public class TeamController {
	@Autowired
	private TeamService teamService;
	
	@Autowired
	private PlayerService playerService;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired
	private TeamRepository repositoryTeam;
	
	@Autowired
	private RespositoryUser userRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@RequestMapping("/leaderBoard")
	public String goLeaderBoard(Model model) {
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());
		
		List<Team> auxListTeams = repositoryTeam.findByTeamNotNull();
		
		List<Team> listTeams = new ArrayList<>();
		
		listTeams.add(auxListTeams.get(0));
		listTeams.add(auxListTeams.get(1));
		
		model.addAttribute("teams", listTeams);

		return "leaderBoard";
	}

	@RequestMapping("/teamCreation")
	public String goTeamCreation(Model model) {
		return "teamCreation";
	}

	@RequestMapping("/newTeam")
	public String goNewTeam(Model model, @RequestParam String team_name, @RequestParam String player1,
			@RequestParam String player2, @RequestParam String player3) {
		model.addAttribute("team", team_name);
		model.addAttribute("p1", player1);
		model.addAttribute("p2", player2);
		model.addAttribute("p3", player3);

		User user1 = userRepository.findByusername(player1);
		User user2 = userRepository.findByusername(player2);
		User user3 = userRepository.findByusername(player3);

		if (user1 == null || user2 == null || user3 == null) {
			return "teamError";
		} else {
			
			Player p1 = playerRepository.findByuser(user1);
			Player p2 = playerRepository.findByuser(user2);
			Player p3 = playerRepository.findByuser(user3);
			
			Team team = new Team(team_name, 1000);
			
			repositoryTeam.save(team);
			
			Team teamaux = repositoryTeam.findByname(team_name);
			
			playerService.updateTeam(p1.getIdPlayer(), teamaux);
			playerService.updateTeam(p2.getIdPlayer(), teamaux);
			playerService.updateTeam(p3.getIdPlayer(), teamaux);

			return "index";
		}
	}

	@RequestMapping("/team")
	public String goTeam(Model model) {
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());
		return "team";
	}

	
}
