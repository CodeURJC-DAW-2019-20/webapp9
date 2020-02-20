package com.practica.demo;


import java.util.Set;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.practica.demo.data.Games;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;


@EnableAutoConfiguration
@Controller
public class Controlador {
	
	public Controlador() {
		//hay alguna forma de encapsular la barra para generarla de manera auto?
	}
	@Autowired
	private RepositorioGames repository;
	
	@Autowired
	private RespositoryUser repositoruUser;
	
	@Autowired
	private UserComponent userComponent;
	
	@RequestMapping("/")
	public String index(Model model) {
		
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		
		return "index"; //es necesario poner el .html
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
		User user2 = repositoruUser.findByusername("Jorge");
						
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
	
	private String generateUser(User user) {
		user.setRol(repository.findById(2).get());
		try {
			repositoruUser.save(user);
	    	userComponent.setLoggedUser(user);
	    	return "/";	  
		}
		catch(Exception e) {
			
			System.out.println(e);
			
			return "/error";
			
		}
	}
	

	
}
