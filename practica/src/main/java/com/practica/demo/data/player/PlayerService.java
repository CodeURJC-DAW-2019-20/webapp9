package com.practica.demo.data.player;

import java.util.Optional;

import com.practica.demo.data.user.User;


public interface PlayerService {
	
	public abstract boolean updateTeam(int idPlayer, int idTeam);
}
