package com.practica.demo.data.teamsOnGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.practica.demo.EloCalculator;
import com.practica.demo.data.game.GameRepository;
import com.practica.demo.data.rol.Rol;
import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;



@Controller
public class Teams_On_GameController {
	@Autowired
	private Teams_On_GameService teamsOnGameService;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired
	public GameRepository gameRepository;
	
	@Autowired
	private TeamRepository repositoryTeam;
	
	@Autowired
	private Teams_On_GameRepository repositoryTeamsOnGame;
	
	@GetMapping("/gameData")
	public String goPlay(Model model, @RequestParam String name1, @RequestParam String elo1, @RequestParam String name2,
			@RequestParam String elo2) {

		model.addAttribute("name1", name1);
		model.addAttribute("elo1", elo1);

		model.addAttribute("name2", name2);
		model.addAttribute("elo2", elo2);

		if (userComponent.isLoggedUser()) {
			User user = userComponent.getLoggedUser();

			Rol rol = user.getRol();

			if (rol.getIdRol() == 1) {
				model.addAttribute("admin", true);
			} else {
				model.addAttribute("admin", false);
			}

		}

		return "play";
	}

	@RequestMapping("/gameUpdate")
	public String goGameUpdate(Model model, @RequestParam String team1Name, @RequestParam String team2Name,
			@RequestParam int puntuation1, @RequestParam int puntuation2, @RequestParam String winner) {

		EloCalculator calculateElo = new EloCalculator(repositoryTeam);

		Team team1 = repositoryTeam.findByname(team1Name);
		Team team2 = repositoryTeam.findByname(team2Name);
	
		Teams_On_Game teamOnGame1 = repositoryTeamsOnGame.findByteam_Id_Team(team1.getId());
		Teams_On_Game teamOnGame2 = repositoryTeamsOnGame.findByteam_Id_Team(team2.getId());
		teamOnGame1.setResult(puntuation1);
		teamOnGame2.setResult(puntuation2);


		int team1Id = team1.getId();
		int team2Id = team2.getId();

		if (team1Name.equals(winner)) {

			teamOnGame1.setWinner(true);
			teamOnGame2.setWinner(false);

			calculateElo.updateElo(team1Id, team2Id, 1);

		} else if (team2Name.equals(winner)) {

			teamOnGame1.setWinner(false);
			teamOnGame2.setWinner(true);

			calculateElo.updateElo(team1Id, team2Id, 0);

		} else {
			System.out.println("The winner dont match any team");
		}

		repositoryTeamsOnGame.save(teamOnGame1);
		repositoryTeamsOnGame.save(teamOnGame2);
		return "/index";
	}
}
