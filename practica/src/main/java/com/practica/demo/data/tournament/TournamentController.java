package com.practica.demo.data.tournament;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.practica.demo.data.game.Game;
import com.practica.demo.data.game.GameRepository;
import com.practica.demo.data.rol.Rol;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

public class TournamentController {
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired
	private TournamentRepository repositoryTournament;
	
	@Autowired
	public GameRepository gameRepository;
	
	@RequestMapping("/tournaments")
	public String goTournaments(Model model) {
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());

		if (userComponent.isLoggedUser()) {
			User user = userComponent.getLoggedUser();

			Rol rol = user.getRol();

			if (rol.getIdRol() == 1) {
				model.addAttribute("admin", true);
				model.addAttribute("adminNO", false);
			} else {
				model.addAttribute("admin", false);
				model.addAttribute("adminNO", true);
			}

		}

		List<Tournament> tournamentsList = repositoryTournament.findAll();
		model.addAttribute("tournaments", tournamentsList);
		model.addAttribute("description", tournamentsList);
		return "rocketLeague";
	}

	@RequestMapping("/tournamentCreation")
	public String goTournamentCreation(Model model) {
		return "createTournament";
	}

	@RequestMapping("/newTournament")
	public String goNewTournament(Model model, @RequestParam String tournament_name, @RequestParam int numTeams,
			@RequestParam String description, @RequestParam int latitude, @RequestParam int longitude) {
		
		Tournament tournament = new Tournament(numTeams, tournament_name, description, latitude, longitude);
		
		repositoryTournament.save(tournament);
		
		
		Tournament gameTournament = repositoryTournament.findByname(tournament_name);
		
		Game game = new Game(gameTournament);
		
		gameRepository.save(game);
		
		return "/index";
	}
	
}
