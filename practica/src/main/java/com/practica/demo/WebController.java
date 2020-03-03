package com.practica.demo;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.api.services.people.v1.model.Date;
import com.practica.demo.data.bracket.Bracket;
import com.practica.demo.data.game.Game;
import com.practica.demo.data.game.GameRepository;
import com.practica.demo.data.play.Play;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;
import com.practica.demo.security.UserRepositoryAuthProvider;
import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.rol.Rol;
import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;
import com.practica.demo.data.teamsOnGame.TeamsOnGameIds;
import com.practica.demo.data.teamsOnGame.Teams_On_Game;
import com.practica.demo.data.teamsOnGame.Teams_On_GameRepository;
import com.practica.demo.data.tournament.Tournament;
import com.practica.demo.data.tournament.TournamentRepository;

@EnableAutoConfiguration
@Controller
public class WebController {

	public WebController() {
	}

	@Autowired
	private RespositoryUser userRepository;

	@Autowired
	private Teams_On_GameRepository repositoryTeamsOnGame;

	@Autowired
	private PlayerRepository playerRepository;

	@Autowired
	private TeamRepository repositoryTeam;

	@Autowired
	private TournamentRepository repositoryTournament;

	@Autowired
	private UserComponent userComponent;

	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@Autowired
	public GameRepository gameRepository;

	@RequestMapping("/")
	public String index(Model model) {

		model.addAttribute("noloaded", !(userComponent.isLoggedUser()));
		model.addAttribute("user", userComponent.getLoggedUser());

		if (userComponent.isLoggedUser()) {
			User user = userComponent.getLoggedUser();

			Rol rol = user.getRol();

			if (rol.getIdRol() == 1) {
				model.addAttribute("admin", true);
			} else {
				model.addAttribute("admin", false);
			}

		}

		return "index";
	}

	@RequestMapping("/index")
	public String index2(Model model) {

		model.addAttribute("noloaded", !(userComponent.isLoggedUser()));
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

		return "index";
	}
	
	/*
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

	*/
	
	/*
	
	@RequestMapping("/bracketCreation")
	public String goBracketCreation(Model model) {
		return "bracketCreation";
	}
	
	*/
	
	/*
	
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
	
	*/
	
	@RequestMapping("/info")
	public String goInfo(Model model) {
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());
		return "infoPage";
	}

	@RequestMapping("/bracket")
	public String goBrackets(Model model) {
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());
		return "diamond";
	}

	/*
	 * @RequestMapping("/errorPage") public String errorPage(Model model) { return
	 * "error"; }
	 */
	@GetMapping("/{name}")
	public String tournaments(Model model, @PathVariable String name) {
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

		// find tornament
		Tournament auxTour = repositoryTournament.findByname(name);
		Game auxGame = (Game) gameRepository.findByTournament(auxTour);

		model.addAttribute("name", name);
		List<Teams_On_Game> listaTeamDate = new ArrayList<>();
		listaTeamDate = repositoryTeamsOnGame.findGameIdGame(auxGame.getId_game());
		ArrayList<Bracket> listamatch = new ArrayList<Bracket>();
		List<Team> listateams = new ArrayList<Team>();
		ArrayList<Play> listaplays = new ArrayList<Play>();
		for (int i = 0; i < listaTeamDate.size(); i++) {
			Team team = repositoryTeam.findByidTeam(listaTeamDate.get(i).getTeamIdTeam());
			listateams.add(team);
			if (i % 2 != 0) {
				listamatch.add(new Bracket(i, listateams));
				listateams = new ArrayList<Team>();
			}
		}
		// si la lista es impar se añade el suelto.
		if (listaTeamDate.size() % 2 != 0) {

			Teams_On_Game teamEmpty = new Teams_On_Game(0, listaTeamDate.get(0).getGameIdGame(), 0, false, "", "");
			listaTeamDate.add(teamEmpty);
			Team team = repositoryTeam.findByidTeam(0);
			listateams.add(team);
			listamatch.add(new Bracket(listaTeamDate.size() - 1, listateams));

		}
		model.addAttribute("brackets", listamatch);
		for (int i = 0; i < listamatch.size(); i++) {
			listaplays.add(new Play());
			listaplays.get(i).setRound(listaTeamDate.get(i * 2).getRound());
			listaplays.get(i).setName1(listamatch.get(i).getTeams().get(0).getName());
			listaplays.get(i).setElo1(listamatch.get(i).getTeams().get(0).getElo());
			listaplays.get(i).setName2(listamatch.get(i).getTeams().get(1).getName());
			listaplays.get(i).setElo2(listamatch.get(i).getTeams().get(1).getElo());
			listaplays.get(i).setDate(listaTeamDate.get(i * 2).getDate());
			if (listaTeamDate.get(i * 2).isWinner()) {
				listaplays.get(i).setNameWinner(listamatch.get(i).getTeams().get(0).getName());
			} else {
				listaplays.get(i).setNameWinner(listamatch.get(i).getTeams().get(1).getName());
			}

		}

		model.addAttribute("plays", listaplays);

		return "diamond";

	}

	@GetMapping("/jointournament")
	public String join(Model model, @RequestParam(required = false) String torunament) {

		User userJoin = userComponent.getLoggedUser();
		Player playerJoin = playerRepository.findByuser(userJoin);

		if (!playerJoin.getTeam().getName().equals("")) {
			

			Tournament auxTour = repositoryTournament.findByname(torunament);
			Game auxGame = gameRepository.findByTournament(auxTour);
			List<Game> numGames = gameRepository.findBytournamentIdTournament(auxTour.getIdTournament());
			
			if(auxTour.getNumTeams()>numGames.size()) {
				java.util.Date fecha = new java.util.Date();

				Team teamPlayer = repositoryTeam.findByname(playerJoin.getTeam().getName());
				
				
				Teams_On_Game teamOnGame = new Teams_On_Game(teamPlayer.getId(), auxGame.getId_game(), 0, false, "1",
					String.valueOf(fecha));
					
				TeamsOnGameIds teamOnGameId = new TeamsOnGameIds();
				
				teamOnGameId.setGame_Id_Game(auxGame.getId_game());
				teamOnGameId.setTeam_Id_Team(teamPlayer.getId());
				
				/*
				Teams_On_Game teamOnGame = new Teams_On_Game();
				
				
				teamOnGame.setGameIdGame(auxGame.get().getId_game());
				teamOnGame.setTeamIdTeam(teamPlayer.getId());
				teamOnGame.setDate(String.valueOf(fecha));
				teamOnGame.setWinner(false);
				teamOnGame.setResult(0);
				teamOnGame.setRound("1");
				*/
				
				repositoryTeamsOnGame.save(teamOnGame);
			}
		}

		return "index";
	}

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
