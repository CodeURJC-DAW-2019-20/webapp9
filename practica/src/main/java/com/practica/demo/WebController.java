package com.practica.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.practica.demo.data.game.GameRepository;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;
import com.practica.demo.security.UserRepositoryAuthProvider;
import com.practica.demo.data.rol.Rol;


@EnableAutoConfiguration
@Controller
public class WebController {

	@Autowired
	private UserComponent userComponent;

	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@Autowired
	public GameRepository gameRepository;

	@RequestMapping("/")
	public String index(Model model) {

		model.addAttribute("noloaded", !(userComponent.isLoggedUser()));
		model.addAttribute("user", userComponent.getLoggedUser());

		if (userComponent.isLoggedUser()) {
			User user = userComponent.getLoggedUser();

			Rol rol = user.getRol();

			if (rol.getIdRol() == 1) {
				model.addAttribute("admin", true);
			} else {
				model.addAttribute("admin", false);
			}

		}

		return "index";
	}

	@RequestMapping("/index")
	public String index2(Model model) {

		model.addAttribute("noloaded", !(userComponent.isLoggedUser()));
		model.addAttribute("user", userComponent.getLoggedUser());

		if (userComponent.isLoggedUser()) {
			User user = userComponent.getLoggedUser();

			Rol rol = user.getRol();

			if (rol.getIdRol() == 1) {
				model.addAttribute("admin", true);
				model.addAttribute("adminNO", false);
			} else {
				model.addAttribute("admin", false);
				model.addAttribute("adminNO", true);
			}

		}

		return "index";
	}
	
}
