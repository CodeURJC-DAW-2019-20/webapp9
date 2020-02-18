package com.practica.demo;

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
	
	@RequestMapping("/tournaments")
	public String goTournaments(Model model) {
		return "rocketLeague";
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
	
	@RequestMapping("/")
	public String index(Model model) {
		return "index";
	}
	
	@GetMapping("/load")
	public String load(Model model) {
			return null;	
	}
	
	/**
	 * Controller for lunching SingIn page
	 * @param model
	 * @return singIn.html
	 */
	@RequestMapping("/singIn")
	public String singInPage(Model model) {
		Games games = new Games();
		model.addAttribute("games",games.getArray());
		return "singIn"; 
	}
	
	
	
	
	@RequestMapping("/register")
	public String register(Model model) {
		Games games = new Games();
		model.addAttribute("games",games.getArray());

		User user2 = repositoruUser.findByusername("Jorge");
						
		return "register"; 
	}
	
	@PostMapping("/register/new")
	public String newUser(Model model, User user) {

		//isValid? Email
		//isValid?Contraseña
		
		//Si todo fuese correcto, grabar en BBDD
	
		generateUser(user);
	
		return "/register";

	}
	
	private void generateUser(User user) {
		user.setRol(repository.findById(2).get());
		repositoruUser.save(user);
	}
	
}
