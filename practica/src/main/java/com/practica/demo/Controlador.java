package com.practica.demo;


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
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.Bracket;
import com.practica.demo.data.Games;
import com.practica.demo.data.Team;
import com.practica.demo.data.Tournament;
import com.practica.demo.data.teamsOnGame;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;


@Controller
@AutoConfigureOrder
public class Controlador {

	@Autowired
	private RepositorioGames repository;

	@Autowired
	private RespositoryUser repositoruUser;

	@Autowired
	private TournamentRepository repositoryTournament;
	
	@Autowired
	private TeamRepository repositoryTeam;
	
	@Autowired
	private TeamsOnGameRepository repositoryTeamsOnGame;
	
	@Autowired
	private UserComponent userComponent;

	private ArrayList<Team> teams = new ArrayList<>();

	public Controlador() {
		teams.add(new Team(1, "X1", 500));
		teams.add(new Team(2, "X2", 300));
		teams.add(new Team(3, "X3", 200));
		teams.add(new Team(4, "X4", 600));
		teams.add(new Team(5, "X5", 100));
		teams.add(new Team(6, "X6", 700));

		Collections.sort(teams, new Comparator<Team>() {
			public int compare(Team t1, Team t2) {
				if (t1.getElo() < t2.getElo()) {
					return +1;
				}
				if (t1.getElo() > t2.getElo()) {
					return -1;
				}
				return 0;
			}
		});

	}

	@RequestMapping("/")
	public String index(Model model) {

		model.addAttribute("noloaded", !userComponent.isLoggedUser());

		return "index"; // es necesario poner el .html
	}

	@RequestMapping("/index")
	public String goIndex(Model model) {
		return "index";
	}

	@RequestMapping("/tournaments")
	public String goTournaments(Model model) {

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
		model.addAttribute("teams", teams);

		return "leaderBoard";
	}

	@RequestMapping("/profile")
	public String goProfile(Model model) {
		return "profile";
	}

	@RequestMapping("/teamCreation")
	public String goTeamCreation(Model model) {
		return "teamCreation";
	}

	@RequestMapping("/signIn")
	public String goSigIn(Model model) {
		return "signIn";
	}

	@RequestMapping("/team")
	public String goTeam(Model model) {
		return "team";
	}

	@RequestMapping("/info")
	public String goInfo(Model model) {
		return "infoPage";
	}

	/**
	 * Controller for lunching SingIn page
	 * 
	 * @param model
	 * @return singIn.html
	 */
	@RequestMapping("/login")
	public String singInPage(Model model) {
		//Games games = new Games();
		//model.addAttribute("games",games.getArray());
		if(userComponent.isLoggedUser()) {	
			return index(model);		
		}

		return "signIn";
	}

	@RequestMapping("/register")
	public String register(Model model) {
		
		model.addAttribute("wrongconfirm",true);
		//model.addAttribute("wrongemail","Insert your email");    	
		if(userComponent.isLoggedUser()) {	
			return index(model);		
		}
						
		return "register"; 
	}
	
	
	@PostMapping("/register")
	public String newUser(Model model, User user, @RequestParam("confirm") String confirmpass) {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
	    Set<ConstraintViolation<User>> violations = validator.validate(user);
	    
	    if(violations.isEmpty()) {	
	    	if(user.getPassword().contentEquals(confirmpass)) {
	    		return generateUser(user);
	    	}
	    	model.addAttribute("wrongconfirm",true);
	    	return "redirect:/register";
	    }
	    else {
	    	
	    	for (ConstraintViolation<User> violation : violations) {	    		
	    	    model.addAttribute("wrong"+violation.getPropertyPath(), true);    	    
	    	    model.addAttribute(violation.getPropertyPath().toString(), violation.getMessage());
	    	} 	
	    	return "redirect:/register";
	    }
	    	
		

	}
	
	@GetMapping("/tournaments/{name}")
	public String tournaments(Model model, @PathVariable String name) {
		model.addAttribute("name", name);
		
		List<teamsOnGame> listateamdate = repositoryTeamsOnGame.findAllBydate("March 16");
		ArrayList<Bracket> listamatch = new ArrayList<Bracket>();
		
		List <Team> listateams = new ArrayList<Team>();
		
		for(int i =0; i<listateamdate.size();i++) {
			Team team = repositoryTeam.findByidTeam(listateamdate.get(i).getTeamIdTeam());
			listateams.add(team);
			if(i%2!=0) {
				listamatch.add(new Bracket(i, listateams));
				listateams = new ArrayList<Team>(); 		
			}
		}		
		model.addAttribute("brackets",listamatch);
		
		
	return "diamond"; 
	
	}
	
	@GetMapping("/tournaments/play")
	public String play(Model model, @RequestParam(required = false) int[] equipo, @RequestParam(required = false) String fecha ) {
		int d1 =equipo[0];
		int d2 =equipo[1];
		Team team = repositoryTeam.findByidTeam(d1);
		model.addAttribute("name1",team.getName());
		model.addAttribute("elo1",team.getElo());
		Team team2 = repositoryTeam.findByidTeam(d2);
		model.addAttribute("name2",team2.getName());
		model.addAttribute("elo2",team2.getElo());
		
	return "play"; 
	}
	
	private String generateUser(User user) {
		user.setRol(repository.findById(2).get());
		try {
			repositoruUser.save(user);
			userComponent.setLoggedUser(user);
			return "redirect:/";
		} catch (Exception e) {

			System.out.println(e);

			return "/error";

		}
	}

}
