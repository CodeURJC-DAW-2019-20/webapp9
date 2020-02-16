package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class User {
	
	// private long idUser; //Autoincrement en BBDD not nece
	
//	private String name;
//	private String email; //consulat clases emails y validadores propios de java
	@Id
	private int iduser;
	private String username;
//	private String password;
//	private String confirm;
	
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

	

	
	
	


	
	

}
