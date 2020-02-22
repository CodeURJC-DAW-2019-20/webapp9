package com.practica.demo.security;

import org.apache.catalina.startup.ClassLoaderFactory.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import com.practica.demo.RepositorioGames;
import com.practica.demo.data.user.RespositoryUser;

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
    	    /*
    	    @Bean
    	    public ClassLoaderTemplateResolver templateResolver() {

                ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();

                templateResolver.setPrefix("templates/");
                templateResolver.setCacheable(false);
                templateResolver.setSuffix(".php");
                templateResolver.setTemplateMode("PHP");
                templateResolver.setCharacterEncoding("UTF-8");
                
                return templateResolver;
            }
    	    
    	    @Bean
    	    @Description("Thymeleaf template engine with Spring integration")
    	    public SpringTemplateEngine templateEngine() {

    	    	SpringTemplateEngine templateEngine = new SpringTemplateEngine();
    	        templateEngine.setTemplateResolver(templateResolver());

    	        return templateEngine;
    	    }

    	    @Bean
    	    @Description("Thymeleaf view resolver")
    	    public ViewResolver viewResolver() {

    	    	ViewResolver viewResolver = new ThymeleafViewResolver();

    	        ((ThymeleafViewResolver) viewResolver).setTemplateEngine(templateEngine());
    	        ((ThymeleafViewResolver) viewResolver).setCharacterEncoding("UTF-8");

    	        return viewResolver;
    	    }
    	    
    	    @Override
    	    public void addViewControllers(ViewControllerRegistry registry) {
    	        registry.addViewController("/").setViewName("leaderBoard");
    	    }
    	    */
    	}
    	
        
    	
    	// Public pages
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/logIn").permitAll();
        http.authorizeRequests().antMatchers("/loginerror").permitAll();
        http.authorizeRequests().antMatchers("/register").permitAll();
        http.authorizeRequests().antMatchers("/register/new").permitAll();

        // Private pages (all other pages)
       // http.authorizeRequests().antMatchers("/newbook").hasAnyRole("USER"); //a la espera de una pagina decente
       

        // Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("email");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/");
        http.formLogin().failureUrl("/loginerror");
        
		http.authorizeRequests().antMatchers("/tournaments").hasRole("UserLoad");
        
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
