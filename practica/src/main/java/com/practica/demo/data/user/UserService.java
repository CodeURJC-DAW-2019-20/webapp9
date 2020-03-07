package com.practica.demo.data.user;

public interface UserService {
	public abstract User getUser(int id);
	public abstract boolean createUser(User user);
	public abstract boolean updateUser(int id, UserPlayerWrapper userPlayer);
}
