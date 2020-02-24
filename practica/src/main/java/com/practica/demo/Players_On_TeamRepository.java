package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practica.demo.data.Players_On_Team;
import com.practica.demo.data.Team;

public interface Players_On_TeamRepository extends JpaRepository<Players_On_Team, Integer>{

}
