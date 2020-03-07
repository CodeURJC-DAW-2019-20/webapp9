package com.practica.demo.data.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/api/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getUser(@PathVariable int id){
		User user = userService.getUser(id);
		if(user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("The user doesnt exist", HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@RequestMapping(value = "/api/user", method = RequestMethod.POST)
	public ResponseEntity<Object> createUser(@RequestBody User user){
		if(userService.createUser(user)) {
			return new ResponseEntity<>("User successfully created", HttpStatus.CREATED);
		}else {
			return new ResponseEntity<>("Failed to create user", HttpStatus.CONFLICT);
		}
	}
	
	@RequestMapping(value = "/api/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateTeam(@PathVariable int id ,@RequestBody UserPlayerWrapper userPlayer){
		if(userService.updateUser(id, userPlayer)){
			return new ResponseEntity<>("User was succesfully updated", HttpStatus.OK);
		}else{
			return new ResponseEntity<>("The user wasnt updated", HttpStatus.NOT_FOUND);
		}
	}
	
}
