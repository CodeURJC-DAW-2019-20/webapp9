package com.practica.demo.data.user;

import org.springframework.web.multipart.MultipartFile;

public interface UserService {
	public abstract User getUser(int id);
	public abstract boolean createUser(User user);
	public abstract boolean updateUser(int id, UserPlayerWrapper userPlayer);
	public abstract boolean uploadImage(MultipartFile imageFile,int id);
	public abstract byte[] getImage(int id);
}
