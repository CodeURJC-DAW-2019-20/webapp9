package com.practica.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Controlador {
	@RequestMapping("/")
	public String index(Model model) {
		return "index";
	}
}
