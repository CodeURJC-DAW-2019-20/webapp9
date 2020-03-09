package com.practica.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Order(1)
public class RestSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.antMatcher("/api/**");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/logIn").authenticated();
		
		// URLs that need authentication to access to it
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/teams/").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/teams/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/teams/**").hasRole("ADMIN");		
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/teamsOnGame/").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/teamsOnGame/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/teamsOnGame/**").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/user/**").hasRole("USER");
		
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/player/**").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/tournaments/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/tournaments").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/tournaments/**").hasRole("USER");
		
		
		// Other URLs can be accessed without authentication
		http.authorizeRequests().anyRequest().permitAll();

		// Disable CSRF protection (it is difficult to implement in REST APIs)
		http.csrf().disable();

		// Use Http Basic Authentication
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> {	});
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);
	}
}