package com.practica.demo.data;

public class User {
	
	// private long idUser; //Autoincrement en BBDD not nece
	
	private String name;
	private String email; //consulat clases emails y validadores propios de java
	private String username;
	private String password;
	private String confirm;
	
	//private Rol rolUser;
	
	//private UserData userData;
	
	public User() {
		
	}

	public User(String name, String email, String username, String password, String confirm) {
		super();
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.confirm = confirm;
	}

	
	
	
//GETTERS AND SETTERS
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirm() {
		return confirm;
	}

	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}
	
	

}
