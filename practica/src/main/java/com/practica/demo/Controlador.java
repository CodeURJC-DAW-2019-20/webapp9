package com.practica.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Controlador {
	@RequestMapping("/")
	public String index(Model model) {
		return "index.html"; //es necesario poner el .html
	}
	
	@GetMapping("/load")
	public String load(Model model) {
		return "singIn.html"; //ver como lazar la app usando el template
	}
}
