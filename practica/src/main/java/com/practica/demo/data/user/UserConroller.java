package com.practica.demo.data.user;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.practica.demo.WebController;
import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.rol.RolRepository;

@Controller
public class UserConroller {

	@Autowired
	private RespositoryUser userRepository;

	@Autowired
	private UserComponent userComponent;

	@Autowired
	private RolRepository rolRepository;

	@Autowired
	private PlayerRepository playerRepository;

	@RequestMapping("/login")
	public String singInPage(Model model, @RequestParam(required = false) boolean error) {
		// Games games = new Games();
		// model.addAttribute("games",games.getArray());
		if (userComponent.isLoggedUser()) {
			WebController web = new WebController();
			return web.index(model);
		}

		model.addAttribute("notloaded", error);

		return "signIn";
	}

	@RequestMapping("/register")
	public String register(Model model) {
		return "register";
	}

	@PostMapping("/register")
	public String newUser(Model model, User user, @RequestParam("confirm") String confirmpass) {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<User>> violations = validator.validate(user);

		if (violations.isEmpty()) {

			if (userRepository.findByemailOrusername(user.getEmail(), user.getUsername()) != null) {
				model.addAttribute("wrongemail", true);
				model.addAttribute("email", "Already exits");
				model.addAttribute("wrongusername", true);
				model.addAttribute("username", "Already exits");
				return "/register";
			}

			if (user.getPassword().contentEquals(confirmpass)) {
				return generateUser(model, user);
			}
			model.addAttribute("wrongconfirm", true);
			return "/register";
		} else {

			for (ConstraintViolation<User> violation : violations) {
				model.addAttribute("wrong" + violation.getPropertyPath(), true);
				model.addAttribute(violation.getPropertyPath().toString(), violation.getMessage());
			}
			return "/register";
		}

	}

	@RequestMapping("/success")
	private String success(Model model) {
		return "/success";
	}

	private String generateUser(Model model, User user) {
		user.setRol(rolRepository.findById(2).get());
		try {

			userRepository.save(user);
			User useraux = userRepository.findByemail(user.getEmail());

			Player player = new Player(0, useraux, " ");

			playerRepository.save(player);

			return "/success";
		} catch (Exception e) {

			System.out.println(e);

			return "error";

		}
	}

}
