package com.practica.demo.data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.practica.demo.data.user.User;

@Entity
public class Rol {

	@Id
	private int idRol;
	private String roldes;

	public Rol() {

		// TODO Auto-generated constructor stub
	}

	public Rol(int idRol, String rolDes) {
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
