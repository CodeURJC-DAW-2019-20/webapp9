package com.practica.demo;

import java.awt.print.Pageable;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.practica.demo.data.Team;

import antlr.collections.List;

public interface RepositoryTeam extends JpaRepository<Team, Integer> {
	
}
