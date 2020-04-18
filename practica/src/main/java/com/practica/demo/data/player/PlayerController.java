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
import com.practica.demo.data.user.UserPlayerWrapper;
import com.practica.demo.data.user.UserService;

@Controller
public class PlayerController {
	
	@Autowired
	private UserService userService;

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

		Player player = playerRepository.findByuser(useraux);
		
		UserPlayerWrapper aux = new UserPlayerWrapper();
		aux.setPlayer(player);
		aux.setUser(useraux);
		userService.updateUser(useraux.getIduser(), aux);
		userService.uploadImage(imagenFile, useraux.getIduser());
		return "index";
	}

}
