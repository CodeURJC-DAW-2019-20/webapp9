package com.practica.demo.data.user;

import com.practica.demo.data.player.Player;

public class UserPlayerWrapper {
	private User user;

	private String description;
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
