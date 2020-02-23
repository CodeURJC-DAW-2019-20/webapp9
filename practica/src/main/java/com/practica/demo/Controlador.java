package com.practica.demo;


import java.awt.print.Pageable;
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
import org.springframework.web.bind.annotation.RestController;

import com.practica.demo.data.Games;
import com.practica.demo.data.Team;
import com.practica.demo.data.Tournament;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

import com.practica.demo.TeamRestController;

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
	private RepositoryTeam repositoryTeam;
	
	@Autowired
	private UserComponent userComponent;
	
	PageRequest firstPageWithTwoElements = PageRequest.of(0, 2, Sort.by("elo").descending());
	
	public Controlador() {

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
		//metodo para encontrar solo el nombre??
		List <Tournament> listatorneo = repositoryTournament.findAll();
		
		ArrayList<String> listaMostrar = new ArrayList<String>();
		
		//for
		listaMostrar.add(listatorneo.get(1).getName());
		//
		
		model.addAttribute("torneos",listatorneo);
		return "rocketLeague";
	}

	@RequestMapping("/bracketCreation")
	public String goBracketCreation(Model model) {
		return "bracketCreation";
	}

	@RequestMapping("/leaderBoard")
	public String goLeaderBoard(Model model) {
		Page<Team> listTeams = (Page<Team>) repositoryTeam.findAll(firstPageWithTwoElements);
		
		//Team teamAdd = new Team();
		//teamAdd = repositoryTeam.findTeamByid_team(2);
		
		model.addAttribute("teams", listTeams);
		
		//TeamRestController controlator = new TeamRestController();
		
		//controlator.addTeam(teamAdd);
		
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

	@RequestMapping("/bracket")
	public String goBrackets(Model model) {
		return "diamond";
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
	
	@RequestMapping("/errorPage")
	public String errorPage(Model model) {			
		return "error"; 
	}
	
	@RequestMapping("/tournaments/{tournamentname}")
	public String tournaments(Model model, @PathVariable String name) {
		
	return "diamond"; 
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
