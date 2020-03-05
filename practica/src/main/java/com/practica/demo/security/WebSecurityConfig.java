package com.practica.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.authorizeRequests().antMatchers("/core/**").permitAll();
		http.authorizeRequests().antMatchers("/imgs/**").permitAll();
		http.authorizeRequests().antMatchers("/css/**").permitAll();
		http.authorizeRequests().antMatchers("/js/**").permitAll();

		// Public pages
		
		//http.csrf().disable();
		
		//http.authorizeRequests().antMatchers("/api/**").permitAll();
		
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/index").permitAll();
		http.authorizeRequests().antMatchers("/login").permitAll();
		http.authorizeRequests().antMatchers("/success").permitAll();
		http.authorizeRequests().antMatchers("/loginerror").permitAll();
		http.authorizeRequests().antMatchers("/register").permitAll();
		http.authorizeRequests().antMatchers("/register/new").permitAll();
		http.authorizeRequests().antMatchers("/tournaments").permitAll();

		// Private pages (all other pages)
		// http.authorizeRequests().antMatchers("/newbook").hasAnyRole("USER"); //a la
		// espera de una pagina decente

		http.authorizeRequests().anyRequest().authenticated();

		// http.authorizeRequests().antMatchers("/profile").hasAnyRole("User");
		// http.authorizeRequests().antMatchers("/profile").hasAnyRole("Admin");

		// Login form
		http.formLogin().loginPage("/login");
		http.formLogin().usernameParameter("email");
		http.formLogin().passwordParameter("password");
		http.formLogin().defaultSuccessUrl("/index");
		http.formLogin().failureUrl("/login?error=true");

		http.logout().logoutUrl("/logout");
		http.logout().logoutSuccessUrl("/");

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);

	}
}
