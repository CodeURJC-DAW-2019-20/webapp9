package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Rol;

public interface GameRepository extends JpaRepository<Rol, Integer> {
}
