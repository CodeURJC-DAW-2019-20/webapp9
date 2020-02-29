package com.practica.demo.data;
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
	private float latitude;
	private float longitude;
	
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
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public float getLatitude() {
		return latitude;
	}
	public void setLatitude(long latitude) {
		this.latitude = latitude;
	}
	public float getLongitude() {
		return longitude;
	}
	public void setLongitude(long longitude) {
		this.longitude = longitude;
	}
	
	
	
}
