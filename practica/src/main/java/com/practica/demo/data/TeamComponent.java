package com.practica.demo.data;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

@Component
@SessionScope
public class TeamComponent {
	
	private Team team;
	
}
