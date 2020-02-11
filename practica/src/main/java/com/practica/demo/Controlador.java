package com.practica.demo;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.practica.demo.data.Games;

@EnableAutoConfiguration
@Controller
public class Controlador {
	@RequestMapping("/")
	public String index(Model model) {
		return "index"; //es necesario poner el .html
	}
	
	@GetMapping("/load")
	public String load(Model model) {
		
		Games games = new Games();
		model.addAttribute("games",games.getArray());
		return "singIn"; //ver como lazar la app usando el template
	}
}
