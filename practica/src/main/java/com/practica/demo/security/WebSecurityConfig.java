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
		/*
		 * @EnableWebMvc class WebConfig extends WebMvcConfigurerAdapter {
		 * 
		 * @Override public void addResourceHandlers(ResourceHandlerRegistry registry) {
		 * registry.addResourceHandler( "/core/**", "/imgs/**", "/css/**", "/js/**")
		 * .addResourceLocations( "classpath:/static/imgs/", "classpath:/static/css/",
		 * "classpath:/static/core/", "classpath:/static/js/"); } }
		 */
		/**
		 * 
		 * @EnableWebMvc class SimpleCORSFilter implements Filter {
		 * 
		 *               public void doFilter(ServletRequest req, ServletResponse res,
		 *               FilterChain chain) throws IOException, ServletException {
		 *               HttpServletResponse response = (HttpServletResponse) res;
		 *               response.setHeader("Access-Control-Allow-Origin", "*");
		 *               response.setHeader("Access-Control-Allow-Methods", "POST, GET,
		 *               OPTIONS, DELETE, PUT");
		 *               response.setHeader("Access-Control-Max-Age", "3600");
		 *               response.setHeader("Access-Control-Allow-Headers",
		 *               "x-requested-with, content-type"); chain.doFilter(req, res); }
		 * 
		 *               public void init(FilterConfig filterConfig) { }
		 * 
		 *               public void destroy() { }
		 * 
		 *               }
		 * 
		 **/

		http.authorizeRequests().antMatchers("/core/**").permitAll();
		http.authorizeRequests().antMatchers("/imgs/**").permitAll();
		http.authorizeRequests().antMatchers("/css/**").permitAll();
		http.authorizeRequests().antMatchers("/js/**").permitAll();

		// Public pages

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
