package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.practica.demo.data.Team;

public interface Player_On_TeamRepository extends JpaRepository<Team, Integer> {
}