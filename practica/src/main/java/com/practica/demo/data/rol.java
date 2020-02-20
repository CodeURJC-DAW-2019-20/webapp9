package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class rol {

	@Id
	private int idRol;
	private String roldes;

	public rol() {
		// TODO Auto-generated constructor stub
	}

	public rol(int idRol, String rolDes) {
		super();
		this.idRol = idRol;
		this.roldes = rolDes;
	}

	// getters and setters.
	public int getIdRol() {
		return idRol;
	}

	public void setIdRol(int idRol) {
		this.idRol = idRol;
	}

	public String getRolDes() {
		return roldes;
	}

	public void setRolDes(String rolDes) {
		roldes = rolDes;
	}

}
