package com.practica.demo.data;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.OneToOne;

import org.springframework.beans.factory.annotation.Autowired;

import com.practica.demo.data.player.Player;

@Entity
@IdClass(Players_On_Team.class)
public class Players_On_Team implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int players_on_team_id;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Team team;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Player player;
	
	public Players_On_Team() {
		super();
	}

	public Players_On_Team(Team team, Player player) {
		super();
		this.team = team;
		this.player = player;
	}

	public int getPlayers_on_team_id() {
		return players_on_team_id;
	}

	public void setPlayers_on_team_id(int players_on_team_id) {
		this.players_on_team_id = players_on_team_id;
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
