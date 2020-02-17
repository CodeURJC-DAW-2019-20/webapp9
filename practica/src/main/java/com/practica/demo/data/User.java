package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;

@Entity
public class User {
	
	// private long idUser; //Autoincrement en BBDD not nece
	

	@Id
	private int iduser;
    private String name;
	private String username;
	@Email
    private String email; //consulat clases emails y validadores propios de java
    private String password;
	
	@OneToOne
	private rol rol;
	
	//private UserData userData;
	
	public User() {
		
	}
	
	//GETTERS AND SETTERS

	public int getIduser() {
		return iduser;
	}

	public void setIduser(int iduser) {
		this.iduser = iduser;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public rol getRol() {
		return rol;
	}

	public void setRol(rol rol) {
		this.rol = rol;

	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	

	
	
	


	
	

}
