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
    	
    	// Public pages
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/logIn").permitAll();
        http.authorizeRequests().antMatchers("/loginerror").permitAll();
        http.authorizeRequests().antMatchers("/register").permitAll();

        // Private pages (all other pages)
       // http.authorizeRequests().antMatchers("/newbook").hasAnyRole("USER"); //a la espera de una pagina decente
       

        // Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("email");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/");
        http.formLogin().failureUrl("/loginerror");

        
        
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        // Database authentication provider
        auth.authenticationProvider(userRepoAuthProvider);
    }
}
