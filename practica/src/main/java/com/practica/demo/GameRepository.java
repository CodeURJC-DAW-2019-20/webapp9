package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Role;

public interface GameRepository extends JpaRepository<Role, Integer> {
}
