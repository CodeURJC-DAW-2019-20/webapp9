package com.practica.demo.data.user;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.practica.demo.data.rol.Rol;

@Entity
public class User {

	// private long idUser; //Autoincrement en BBDD not nece
	@Id
	private int iduser;

	public int getIduser() {
		return iduser;
	}

	private String name;
	private String username;
	private String email;
	@JsonIgnore
	private String password;
	private String img;

	@OneToOne
	private com.practica.demo.data.rol.Rol rol;

	// private UserData userData;

	public User() {

	}
	
	

	public User(String name, String username, String email, String password, Rol rol) {
		super();
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.rol = rol;
	}



	// GETTERS AND SETTERS

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Rol getRol() {
		return rol;
	}

	public void setRol(Rol rol) {
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

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

}
