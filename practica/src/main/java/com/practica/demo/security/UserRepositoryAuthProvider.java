package com.practica.demo.security;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import com.practica.demo.data.user.RespositoryUser;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

/**
 * This class is used to check http credentials against database data. Also it
 * is responsible to set database user info into userComponent, a session scoped
 * bean that holds session user information.
 * 
 * NOTE: This class is not intended to be modified by app developer.
 */
@Component
public class UserRepositoryAuthProvider implements AuthenticationProvider {

	@Autowired
	private RespositoryUser userRepository;

	@Autowired
	private UserComponent userComponent;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

		String email = authentication.getName();
		String password = (String) authentication.getCredentials();
		
		final Logger log = LoggerFactory.getLogger(UserRepositoryAuthProvider.class);

		User user = userRepository.findByemail(email);

		if (user == null) {
			log.info("User not found");
			throw new BadCredentialsException("User not found");
		}

//		if (!new BCryptPasswordEncoder().matches(password, user.getPassword())) {
		if (!password.equals(user.getPassword())) {
			log.info("Wrong password");
			throw new BadCredentialsException("Wrong password");
		} else {
			
			userComponent.setLoggedUser(user);
			
			log.info("User logged");
			
			List<GrantedAuthority> roles = new ArrayList<>();
			// hace falta ROLE_ porque sino no lo machea
			roles.add(new SimpleGrantedAuthority("ROLE_" + user.getRol().getRolDes()));

			return new UsernamePasswordAuthenticationToken(email, password, roles);
		}
	}

	@Override
	public boolean supports(Class<?> authenticationObject) {
		return true;
	}
}
