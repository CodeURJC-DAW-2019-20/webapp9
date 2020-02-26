package com.practica.demo;

import java.awt.print.Pageable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.web.server.csrf.CsrfToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.practica.demo.data.Bracket;
import com.practica.demo.data.Game;
import com.practica.demo.data.Rol;
import com.practica.demo.data.Round;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;
import com.practica.demo.security.UserRepositoryAuthProvider;
import com.practica.demo.data.Team;
import com.practica.demo.data.Tournament;
import com.practica.demo.data.Teams_On_Game;
import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

import com.practica.demo.TeamRestController;
import com.practica.demo.Imgs.ImageService;

@EnableAutoConfiguration
@Controller
public class WebController {

	public WebController() {
	}

	@Autowired
	private GameRepository gameRepository;

	@Autowired
	private RespositoryUser userRepository;

	
	@Autowired
	private Teams_On_GameRepository repositoryTeamsOnGame;


	@Autowired
	private ImageService imgService;
	
	@Autowired
	private RolRepository rolRepository;

	@Autowired
	private PlayerRepository playerRepository;

	@Autowired
	private TeamRepository repositoryTeam;

	@Autowired
	private TournamentRepository repositoryTournament;
	
	@Autowired
	private GameRepository repositoryGame;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@RequestMapping("/")
	public String index(Model model) {

		model.addAttribute("noloaded", !userComponent.isLoggedUser());
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

		List <Tournament> listatorneo = repositoryTournament.findAll();
			model.addAttribute("name",listatorneo);
			model.addAttribute("description",listatorneo);
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
	@RequestMapping("/errorPage")
	public String errorPage(Model model) {
		return "error";
	}
	*/
	@GetMapping("/tournaments/{name}")
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
		List<Teams_On_Game> listateamdate = new ArrayList<Teams_On_Game>();
		ArrayList<Bracket> listamatch = new ArrayList<Bracket>();
		ArrayList<Round> listaround = new ArrayList<Round>();
		List <Team> listateams = new ArrayList<Team>();
		listateamdate=repositoryTeamsOnGame.findAll();
		Game game = repositoryGame.findByidGame(listateamdate.get(0).getGameIdGame());
		int numTeams = game.getTournament().getNumTeams();
		for(int i=0; i<listateamdate.size();i++) {
			Team team = repositoryTeam.findByidTeam(listateamdate.get(i).getTeamIdTeam());
			listateams.add(team);
			if(i%2!=0) {
				listamatch.add(new Bracket(i, listateams));
				listateams = new ArrayList<Team>();
			}
			if(i%numTeams==0) {
				listaround.add(new Round(listateamdate.get(i).getRound(), listamatch));
			}
		}
		model.addAttribute("brackets",listamatch);
		
		for(int i=0; i<listamatch.size();i++){
			Team d1 = listamatch.get(i).getTeams().get(0);
			Team d2 = listamatch.get(i).getTeams().get(1);
			model.addAttribute("name1",d1.getName());
			model.addAttribute("elo1",d1.getElo());
			model.addAttribute("name2",d2.getName());
			model.addAttribute("elo2",d2.getElo());
		}

		model.addAttribute("round", listaround);

	return "diamond"; 
	
	}
	
	@GetMapping("/gameData")
	public String play(Model model) {

	return "play"; 
	}
	
	
	@RequestMapping("/gameUpdate")
	public String goGameUpdate(Model model, @RequestParam String team1Name, @RequestParam String team2Name, @RequestParam int puntuation1, @RequestParam int puntuation2, @RequestParam String winner) {
		
		EloCalculator calculateElo = new EloCalculator(repositoryTeam);
		
		Team team1 = repositoryTeam.findByname(team1Name);
		Team team2 = repositoryTeam.findByname(team2Name);
		
		int team1Id = team1.getId();
		int team2Id = team2.getId();
		
		calculateElo.updateElo(team1Id, team2Id, 1);
		
		if(team1Name.equals(winner)) {
			 /*
			int wins = team1.getWins() + 1;
			int losses = team2.getLosses() + 1;
			
			team1.setWins(wins);
			team2.setLosses(losses);
			
			repositoryTeam.save(team1);
			repositoryTeam.save(team2);
			 */

			calculateElo.updateElo(team1Id, team2Id, 1);
			
		}else if(team2Name.equals(winner)) {
			/*
			team2.setWins(team2.getWins() + 1);
			team1.setLosses(team1.getLosses() + 1);

			repositoryTeam.save(team1);
			repositoryTeam.save(team2);
			
			*/
			calculateElo.updateElo(team1Id, team2Id, 0);
			
		}else {
			System.out.println("The winner dont match any team");
		}
		
		return "/index";
	}

	/*
	 * USER PROFILE CONTROLLER
	 *
	 */
	@GetMapping("/profile")
	public String goProfile(Model model, @RequestParam(required = false) int id) {

		Optional<User> usuario = userRepository.findById(id);

		if (userComponent.getLoggedUser().getIduser() == usuario.get().getIduser()) {
			model.addAttribute("myprofile", true);
		}
		model.addAttribute("user", userComponent.getLoggedUser());
		model.addAttribute("username", usuario.get().getUsername());
		
		
		model.addAttribute("idimagen",usuario.get().getIduser());
		Player player = playerRepository.findByuser(usuario.get());

		model.addAttribute("player", player);

		if (player.getTeam() != null) {
			model.addAttribute("team", player.getTeam().getName());
		} else {
			model.addAttribute("team", " ");
		}
		return "profile";
	}

	@RequestMapping("/editProfile")
	public String tournaments(Model model) {

		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());

		return "userConfig";
	}

	@PostMapping("/userconfig")
	public String nuevoAnuncio(Model model,User user, @RequestParam MultipartFile imagenFile, @RequestParam(required = false) String description)
			throws IOException {
		
		User useraux = userComponent.getLoggedUser();
		
		Player player = playerRepository.findByuser(useraux);
		
		if(user.getName()!=null && !user.getName().equals("")) {
			useraux.setName(user.getName());
		}
		if(user.getUsername()!=null && !user.getUsername().equals("")) {
			useraux.setUsername(user.getUsername());
		}
		if(user.getPassword()!=null && !user.getPassword().equals("")) {
			useraux.setPassword(user.getPassword());
		}
		
	//	userRepository.updateUser(useraux.getUsername(), useraux.getPassword(), useraux.getName(), useraux.getIduser());
		
   //	playerRepository.updateUser(description,player.getIdPlayer());
				
		imgService.saveImage("user", userComponent.getLoggedUser().getIduser(), imagenFile);
		return "index";
	}

	/*
	 * **************************************************** USER LOGIN CONTROLLER
	 *
	 */
	/**
	 * Controller for lunching SingIn page
	 * 
	 * @param model
	 * @return singIn.html
	 */

	@RequestMapping("/login")
	public String singInPage(Model model, @RequestParam(required = false) boolean error) {
		// Games games = new Games();
		// model.addAttribute("games",games.getArray());
		if (userComponent.isLoggedUser()) {
			return index(model);
		}

		model.addAttribute("notloaded", error);

		return "signIn";
	}

	/*
	 * *************************************************** USER REGISTRE CONTROLLER
	 * ***************************************************
	 */

	@RequestMapping("/register")
	public String register(Model model) {
		return "register";
	}

	@PostMapping("/register")
	public String newUser(Model model, User user, @RequestParam("confirm") String confirmpass) {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<User>> violations = validator.validate(user);

		if (violations.isEmpty()) {

			if (userRepository.findByemailOrusername(user.getEmail(), user.getUsername()) != null) {
				model.addAttribute("wrongemail", true);
				model.addAttribute("email", "Already exits");
				model.addAttribute("wrongusername", true);
				model.addAttribute("username", "Already exits");
				return "/register";
			}

			if (user.getPassword().contentEquals(confirmpass)) {
				return generateUser(model, user);
			}
			model.addAttribute("wrongconfirm", true);
			return "/register";
		} else {

			for (ConstraintViolation<User> violation : violations) {
				model.addAttribute("wrong" + violation.getPropertyPath(), true);
				model.addAttribute(violation.getPropertyPath().toString(), violation.getMessage());
			}
			return "/register";
		}

	}

	@RequestMapping("/success")
	private String success(Model model) {
		return "/success";
	}

	private String generateUser(Model model, User user) {
		user.setRol(rolRepository.findById(2).get());
		try {

			userRepository.save(user);
			User useraux = userRepository.findByemail(user.getEmail());

			Player player = new Player(0, useraux, " ");

			playerRepository.save(player);

			return "/success";
		} catch (Exception e) {

			System.out.println(e);

			return "error";

		}
	}

}
