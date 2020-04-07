package com.practica.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages={"com.practica.demo","com.practica.demo.data"})

public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
}
