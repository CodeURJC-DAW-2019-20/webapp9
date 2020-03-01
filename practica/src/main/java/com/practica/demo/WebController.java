package com.practica.demo;

import java.util.ArrayList;
import java.util.List;
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
import com.practica.demo.data.Bracket;
import com.practica.demo.data.Play;
import com.practica.demo.data.Rol;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;
import com.practica.demo.security.UserRepositoryAuthProvider;
import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;
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

		List<Tournament> listatorneo = repositoryTournament.findAll();
		model.addAttribute("name", listatorneo);
		model.addAttribute("description", listatorneo);
		return "rocketLeague";
	}

	@RequestMapping("/bracketCreation")
	public String goBracketCreation(Model model) {
		return "bracketCreation";
	}

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

			return "/";
		}
	}

	@RequestMapping("/team")
	public String goTeam(Model model) {
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());
		return "team";
	}

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

		model.addAttribute("name", name);
		List<Teams_On_Game> listateamdate = repositoryTeamsOnGame.findAll();
		ArrayList<Bracket> listamatch = new ArrayList<Bracket>();
		List<Team> listateams = new ArrayList<Team>();
		ArrayList<Play> listaplays = new ArrayList<Play>();
		for (int i = 0; i < listateamdate.size(); i++) {
			Team team = repositoryTeam.findByidTeam(listateamdate.get(i).getTeamIdTeam());
			listateams.add(team);
			if (i % 2 != 0) {
				listamatch.add(new Bracket(i, listateams));
				listateams = new ArrayList<Team>();
			}
		}
		//si la lista es impar se añade el suelto.
		if(listateamdate.size() % 2 != 0) {
			Team team = new Team(); //empty team
			listateams.add(team);			
			listamatch.add(new Bracket(listateamdate.size()-1, listateams));
			listateams = new ArrayList<Team>();
		}
		model.addAttribute("brackets", listamatch);
		//i=i+2 take by pairs
		for (int i = 0; i <= listamatch.size(); i=i+2) {
			listaplays.add(new Play());
			listaplays.get(i).setRound(listateamdate.get(i + 1).getRound());
			listaplays.get(i).setName1(listamatch.get(i).getTeams().get(0).getName());
			listaplays.get(i).setElo1(listamatch.get(i).getTeams().get(0).getElo());
			listaplays.get(i).setName2(listamatch.get(i).getTeams().get(1).getName());
			listaplays.get(i).setElo2(listamatch.get(i).getTeams().get(1).getElo());
			listaplays.get(i).setDate(listateamdate.get(i + 1).getDate());
			
			if (listateamdate.get(i + 1).isWinner()) {
				listaplays.get(i).setNameWinner(listamatch.get(i).getTeams().get(0).getName());
			} else {
				listaplays.get(i).setNameWinner(listamatch.get(i).getTeams().get(1).getName());
			}

		}

		model.addAttribute("plays", listaplays);

		return "diamond";

	}
	
	/*@PostMapping("/jointournament")
	public String join(Model model, @RequestParam String name){
		List <Teams_On_Game> arrayteamsongame = repositoryTeamsOnGame.findAll();
		if(arrayteamsongame.size()%2!=0) {
			
		}
		repositoryTeamsOnGame.save();
		return "diamond";
	}*/

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
