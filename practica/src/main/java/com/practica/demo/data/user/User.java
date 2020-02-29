package com.practica.demo.data.user;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


import com.practica.demo.data.Rol;

@Entity
public class User {

	// private long idUser; //Autoincrement en BBDD not nece
	@Id
	private int iduser;
	
	public int getIduser() {
		return iduser;
	}

	@NotNull
	@NotEmpty
	private String name;

	@NotNull
	@NotEmpty
	private String username;

	@Email
	@NotEmpty
	private String email;

	@NotNull
	@NotEmpty
	private String password;
	
	private String img;

	@OneToOne
	private com.practica.demo.data.Rol rol;

	// private UserData userData;

	public User() {

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
