package com.practica.demo.data.player;

import com.practica.demo.data.teams.Team;
import com.practica.demo.data.user.User;

public interface PlayerService {
	public abstract boolean updateTeam(int idPlayer, Team team);
	public abstract Player getPlayerByUser(int user);
}
