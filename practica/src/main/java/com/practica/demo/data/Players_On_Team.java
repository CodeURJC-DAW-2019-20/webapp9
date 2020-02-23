package com.practica.demo.data;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Players_On_Team implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int team_id_team;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int player_id_player;
	
	
	@OneToOne(cascade=CascadeType.ALL)
	private Team team;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Player player;
	
	
	
	
	public Players_On_Team(int team_id_team, int player_id_player, Team team, Player player) {
		super();
		this.team_id_team = team_id_team;
		this.player_id_player = player_id_player;
		this.team = team;
		this.player = player;
	}

	public int getTeam_id_team() {
		return team_id_team;
	}

	public void setTeam_id_team(int team_id_team) {
		this.team_id_team = team_id_team;
	}

	public int getPlayer_id_player() {
		return player_id_player;
	}

	public void setPlayer_id_player(int player_id_player) {
		this.player_id_player = player_id_player;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	public Player getPlayer() {
		return player;
	}

	public void setPlayer(Player player) {
		this.player = player;
	}
	
	
	
}
