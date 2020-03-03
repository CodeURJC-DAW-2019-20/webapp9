package com.practica.demo.data.teams;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

public class TeamController {
	
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

		PageRequest firstPageWithTwoElements = PageRequest.of(0, 2, Sort.by("elo").descending());
		Page<Team> listTeams = (Page<Team>) repositoryTeam.findAll(firstPageWithTwoElements);

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

			p1.setTeam(team);
			p2.setTeam(team);
			p3.setTeam(team);

			playerRepository.save(p1);
			playerRepository.save(p2);
			playerRepository.save(p3);

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
