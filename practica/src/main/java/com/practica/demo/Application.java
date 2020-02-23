package com.practica.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import php.java.bridge.http.JavaBridgeRunner;

@SpringBootApplication

public class Application {

	@Bean
	public Team team() {
		return new Team();
	}

}
