package com.practica.demo.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.startup.ClassLoaderFactory.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


import com.practica.demo.GameRepository;
import com.practica.demo.data.user.UserRepository;

import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;


@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    public UserRepositoryAuthProvider userRepoAuthProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	@EnableWebMvc class WebConfig extends WebMvcConfigurerAdapter {

    	    @Override
    	    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    	        registry.addResourceHandler(
    	                "/core/**",
    	                "/imgs/**",
    	                "/css/**",
    	                "/js/**")
    	                .addResourceLocations(
    	                        "classpath:/static/imgs/",
    	                        "classpath:/static/css/",
    	                        "classpath:/static/core/",
    	                		"classpath:/static/js/");
    	    }
    	}


    	@EnableWebMvc class SimpleCORSFilter implements Filter {

    		public void doFilter(ServletRequest req, ServletResponse res,
    				FilterChain chain) throws IOException, ServletException {
    			HttpServletResponse response = (HttpServletResponse) res;
    			response.setHeader("Access-Control-Allow-Origin", "*");
    			response.setHeader("Access-Control-Allow-Methods",
    					"POST, GET, OPTIONS, DELETE, PUT");
    			response.setHeader("Access-Control-Max-Age", "3600");
    			response.setHeader("Access-Control-Allow-Headers", "x-requested-with, content-type");
    			chain.doFilter(req, res);
    		}

    		public void init(FilterConfig filterConfig) {
    		}

    		public void destroy() {
    		}

    	}



        http.authorizeRequests().antMatchers("/resources/**").permitAll();

    	// Public pages
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/logIn").permitAll();
        http.authorizeRequests().antMatchers("/loginerror").permitAll();
        http.authorizeRequests().antMatchers("/register").permitAll();
        http.authorizeRequests().antMatchers("/register/new").permitAll();
        http.authorizeRequests().antMatchers("/tournaments").permitAll();

        // Private pages (all other pages)
       // http.authorizeRequests().antMatchers("/newbook").hasAnyRole("USER"); //a la espera de una pagina decente


        // Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("email");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/");
        http.formLogin().failureUrl("/loginerror");
    
		http.authorizeRequests().antMatchers("/tournaments").hasRole("UserLoad");
		http.authorizeRequests().antMatchers("/profile").hasRole("User");

        http.logout().logoutUrl("/logout");
        http.logout().logoutSuccessUrl("/");

    }



    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        // Database authentication provider
        auth.authenticationProvider(userRepoAuthProvider);

    }
}
