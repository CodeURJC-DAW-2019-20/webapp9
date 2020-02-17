package com.practica.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


import com.practica.demo.data.Games;
import com.practica.demo.data.User;
import com.practica.demo.data.rol;

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
	
	rol rol1 ;
	@RequestMapping("/")
	public String index(Model model) {
		return "index"; //es necesario poner el .html
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
	public String singIn(Model model) {
		Games games = new Games();
		model.addAttribute("games",games.getArray());
		return "singIn"; 
	}
	
	@RequestMapping("/register")
	public String register(Model model) {
		Games games = new Games();
		model.addAttribute("games",games.getArray());
		
		rol1 = repository.findById(1).get();
		
		User user2 = repositoruUser.findByusername("Jorge");
				
		
		return "register"; 
	}
	
	@PostMapping("/register/new")
	public String nuevoAnuncio(Model model, User user) {

		//isValid? Email
		//isValid?Contraseña
		
		//user.getName();
		
		//Si todo fuese correcto, grabar en BBDD
		
		user.setRol(rol1);
		
		repositoruUser.save(user);
		
		

		return "/register";

	}
	
}
