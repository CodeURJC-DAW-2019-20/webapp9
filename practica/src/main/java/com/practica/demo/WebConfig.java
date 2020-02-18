package com.practica.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {

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
