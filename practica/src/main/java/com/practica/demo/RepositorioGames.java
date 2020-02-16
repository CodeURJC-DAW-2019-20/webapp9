package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.rol;

public interface RepositorioGames extends JpaRepository<rol, Integer> {
	
}
