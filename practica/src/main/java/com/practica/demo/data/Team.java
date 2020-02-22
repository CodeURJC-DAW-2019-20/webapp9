package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity	
public class Team {
		@Id
		private int idTeam;
		
		public Team() {

		}
		
		public Team(int idTeam, String name, int elo) {
			super();
			this.idTeam = idTeam;
			this.name = name;
			this.elo = elo;
		}
		private String name;
		private int elo;
		
		public int getIdTeam() {
			return idTeam;
		}
		public void setIdTeam(int idTeam) {
			this.idTeam = idTeam;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public int getElo() {
			return elo;
		}
		public void setElo(int elo) {
			this.elo = elo;
		}
}
