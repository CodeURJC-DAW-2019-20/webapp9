package com.practica.demo.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {

	@Id
	private int idRol;
	private String roldes;

	public Role() {
		// TODO Auto-generated constructor stub
	}

	public Role(int idRol, String rolDes) {
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
