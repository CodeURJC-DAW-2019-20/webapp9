package com.practica.demo.data.player;

import java.util.Optional;


public interface PlayerService {
	public abstract boolean createPlayer(Player player);
	public abstract Optional <Player> getPlayer(int idPlayer);
	public abstract boolean updatePlayer(Player player);
}
