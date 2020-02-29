package com.practica.demo.data.player;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.practica.demo.Imgs.ImageService;
import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

@Controller
public class PlayerController {

	@Autowired
	private RespositoryUser userRepository;

	@Autowired
	private UserComponent userComponent;

	@Autowired
	private PlayerRepository playerRepository;

	@Autowired
	private ImageService imgService;

	@GetMapping("/profile")
	public String goProfile(Model model, @RequestParam(required = false) int id) {

		Optional<User> usuario = userRepository.findById(id);

		if (userComponent.getLoggedUser().getIduser() == usuario.get().getIduser()) {
			model.addAttribute("myprofile", true);
		}
		model.addAttribute("user", userComponent.getLoggedUser());
		model.addAttribute("username", usuario.get().getUsername());

		model.addAttribute("idimagen", usuario.get().getIduser());
		Player player = playerRepository.findByuser(usuario.get());

		model.addAttribute("player", player);

		if (player.getTeam() != null) {
			model.addAttribute("team", player.getTeam().getName());
		} else {
			model.addAttribute("team", " ");
		}
		return "profile";
	}

	@RequestMapping("/editProfile")
	public String tournaments(Model model) {

		model.addAttribute("noloaded", !userComponent.isLoggedUser());
		model.addAttribute("user", userComponent.getLoggedUser());

		return "userConfig";
	}

	@PostMapping("/userconfig")
	public String nuevoAnuncio(Model model, User user, @RequestParam MultipartFile imagenFile,
			@RequestParam(required = false) String description) throws IOException {

		User useraux = userComponent.getLoggedUser();

		playerRepository.findByuser(useraux);

		if (user.getName() != null && !user.getName().equals("")) {
			useraux.setName(user.getName());
		}
		if (user.getUsername() != null && !user.getUsername().equals("")) {
			useraux.setUsername(user.getUsername());
		}
		if (user.getPassword() != null && !user.getPassword().equals("")) {
			useraux.setPassword(user.getPassword());
		}

		// userRepository.updateUser(useraux.getUsername(), useraux.getPassword(),
		// useraux.getName(), useraux.getIduser());

		// playerRepository.updateUser(description,player.getIdPlayer());

		imgService.saveImage("user", userComponent.getLoggedUser().getIduser(), imagenFile);
		return "index";
	}

}
