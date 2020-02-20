package com.practica.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.practica.demo.data.team.Team;

@SpringBootApplication
public class PracticaApplication {
	
	@Bean
	public Team team(){
		return new Team();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(PracticaApplication.class, args);
	}

}
