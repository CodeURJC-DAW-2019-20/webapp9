package com.practica.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.practica.demo.data.Team;

public interface RepositoryTeam extends JpaRepository<Team, Integer> {
}
