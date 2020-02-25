package com.practica.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.practica.demo.data.user.*;
import org.springframework.http.HttpStatus;


@RestController
//@RequestMapping("/??")
public class GoogleRestController {
	private RespositoryUser userRepository;
	
	
	@PostMapping("/registerGoogle")
	@ResponseStatus(HttpStatus.CREATED)
	public googleSession loadSession(@RequestBody googleSession session){
		User user = new User();
		user.setEmail(session.email);
		user.setUsername(session.name);
		user.setName(session.name);
		user.setPassword("123");
		userRepository.save(user);
		
		
		return session;
	}
}
