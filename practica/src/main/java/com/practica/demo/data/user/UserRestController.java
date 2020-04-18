package com.practica.demo.data.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*")
public class UserRestController {
	
	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getUser(@PathVariable int id){
		User user = userService.getUser(id);
		if(user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("The user doesnt exist", HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/user/name={userName}", method = RequestMethod.GET)
	public ResponseEntity<Object> getUserName(@PathVariable String userName){
		User user = userService.getUserByUserName(userName);
		if(user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("The user doesnt exist", HttpStatus.BAD_REQUEST);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/user", method = RequestMethod.POST)
	public ResponseEntity<Object> createUser(@RequestBody User user){
		
		User result = userService.createUser(user);
		
		if(result != null) {
			return new ResponseEntity<>(result, HttpStatus.CREATED);
		}else {
			return new ResponseEntity<>("Failed to create user", HttpStatus.CONFLICT);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateTeam(@PathVariable int id ,@RequestBody UserPlayerWrapper userPlayer){
		if(userService.updateUser(id, userPlayer)){
			return new ResponseEntity<>("User was succesfully updated", HttpStatus.OK);
		}else{
			return new ResponseEntity<>("The user wasnt updated", HttpStatus.NOT_FOUND);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/user/{id}/image", method = RequestMethod.POST)
	public ResponseEntity<Object>uploadImage(@RequestBody MultipartFile image,@PathVariable int id){
		if(userService.uploadImage(image,id)){
			return new ResponseEntity<>(HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>("Image couldn't be uploaded", HttpStatus.CONFLICT);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/user/{id}/image", method = RequestMethod.GET)
	public ResponseEntity<Object>getImage(@PathVariable int id){
	    byte[] image = userService.getImage(id);
	    if (image!=null) {
	    	return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
	    }else {
	    	return new ResponseEntity<>("Image not found", HttpStatus.NOT_FOUND);
	    }
	}
	
	
	
}
