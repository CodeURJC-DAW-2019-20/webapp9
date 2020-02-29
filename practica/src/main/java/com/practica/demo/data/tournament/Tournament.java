package com.practica.demo.data.tournament;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity	
public class Tournament {
	@Id
	private int idTournament;
	
	private int numTeams;
	private String name;
	private String description;
	private String img;
	
	public int getIdTournament() {
		return idTournament;
	}
	public void setIdTournament(int idTournament) {
		this.idTournament = idTournament;
	}
	public int getNumTeams() {
		return numTeams;
	}
	public void setNumTeams(int numTeams) {
		this.numTeams = numTeams;
	}
	public String getName(){
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
