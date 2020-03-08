package com.practica.demo.data.teams;

import java.util.List;

public interface TeamService {
	public abstract boolean createTeam(Team team);
	public abstract List<Team> getTeams();
	public abstract boolean updateTeam(int id, Team team);
	public abstract boolean addPlayer(int idTeam, int idPlayer);
}
