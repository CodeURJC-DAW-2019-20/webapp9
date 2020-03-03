package com.practica.demo.data.bracket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.practica.demo.data.user.UserComponent;


@EnableAutoConfiguration
@Controller
public class BracketController {
	
	@Autowired
	private UserComponent userComponent;
	
	@RequestMapping("/bracketCreation")
	public String goBracketCreation(Model model) {
		return "bracketCreation";
	}
	
	@RequestMapping("/bracket")
	public String goBrackets(Model model) {
		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());
		return "diamond";
	}
	
}
