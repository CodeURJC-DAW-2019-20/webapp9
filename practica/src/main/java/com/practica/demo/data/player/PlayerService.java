package com.practica.demo.data.player;

import com.practica.demo.data.teams.Team;

public interface PlayerService {
	
	public abstract boolean updateTeam(int idPlayer, Team team);
}
