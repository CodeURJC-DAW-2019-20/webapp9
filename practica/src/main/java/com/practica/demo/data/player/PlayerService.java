package com.practica.demo.data.player;

import java.util.Optional;

import com.practica.demo.data.user.User;


public interface PlayerService {
	public abstract boolean createPlayer(User user);
	public abstract Optional <Player> getPlayer(int idPlayer);
	public abstract boolean updatePlayer(Player player);
}
