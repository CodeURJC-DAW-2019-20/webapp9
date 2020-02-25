package com.practica.demo.Imgs;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Service
@Configuration
public class ImageService implements WebMvcConfigurer {

	 private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "\\src\\main\\resources\\static\\imgs");
	 private Path createFilePath(long id, Path folder) {
	 return folder.resolve("image-" + id + ".jpg");
	 }
	 public void saveImage(String folderName, long id, MultipartFile image) throws IOException {
	 Path folder = FILES_FOLDER.resolve(folderName);
	 if (!Files.exists(folder)) { Files.createDirectories(folder); }
	 Path newFile = createFilePath(id, folder);
	 image.transferTo(newFile);
	 }
	 
	 @Override
	 public void addResourceHandlers(ResourceHandlerRegistry registry) {
	 registry.addResourceHandler("/images/**")
	.addResourceLocations("file:" + FILES_FOLDER.toAbsolutePath().toString() + "/");
	 registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
	 }
}