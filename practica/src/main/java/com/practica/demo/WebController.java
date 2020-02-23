package com.practica.demo;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.practica.demo.data.Games;
import com.practica.demo.data.user.UserRepository;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

import com.practica.demo.data.Team;
import com.practica.demo.data.Tournament;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

import com.practica.demo.TeamRestController;

@EnableAutoConfiguration
@Controller
public class WebController {

	public WebController() {
	}
	@Autowired
	private GameRepository gameRepository;

	@Autowired
	private UserRepository userRepository;


	private TeamRepository repositoryTeam;

	@Autowired
	private UserComponent userComponent;

	PageRequest firstPageWithTwoElements = PageRequest.of(0, 2, Sort.by("elo").descending());

	@RequestMapping("/")
	public String index(Model model) {

		model.addAttribute("noloaded", !userComponent.isLoggedUser());

		return "index";
	}

	@RequestMapping("/index")
	public String goIndex(Model model) {
		return "index";
	}

	@RequestMapping("/tournaments")
	public String goTournaments(Model model) {
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
	 * @param model
	 * @return singIn.html
	 */
	@RequestMapping("/singIn")
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
		Games games = new Games();
		model.addAttribute("games",games.getArray());
		//model.addAttribute("wrongemail","Insert your email");
		return "register";
	}

	@PostMapping("/register/new")
	public String newUser(Model model, User user) {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
	    Set<ConstraintViolation<User>> violations = validator.validate(user);

	    if(violations.isEmpty()) {
	    	return generateUser(user);
	    }
	    else {

	    	for (ConstraintViolation<User> violation : violations) {
	    	    model.addAttribute("wrong"+violation.getPropertyPath(), true);
	    	    model.addAttribute(violation.getPropertyPath().toString(), violation.getMessage());
	    	}
	    	return "/register";
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


	@RequestMapping("/editProfile")
	public String tournaments(Model model) {

	return "userConfig";
	}

	private String generateUser(User user) {
		user.setRol(gameRepository.findById(2).get());
		try {
			userRepository.save(user);
	    	userComponent.setLoggedUser(user);
	    	return "/";
		}
		catch(Exception e) {

			System.out.println(e);

			return "error";


		}
	}

}
