package com.practica.demo.data.bracket;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

public class BracketController {
	
	@RequestMapping("/bracketCreation")
	public String goBracketCreation(Model model) {
		return "bracketCreation";
	}
	
}
