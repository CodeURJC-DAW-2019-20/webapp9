import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
public class Application {
	
	@Configuration
    public class CustomWebMvcConfigurerAdapter extends WebMvcConfigurerAdapter {

        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addViewController("/new").setViewName("redirect:/new/index.html");
            registry.addViewController("/new/").setViewName("forward:/new/index.html");
        super.addViewControllers(registry);
        }
    }
	public static void main(String[] args) {

		SpringApplication.run(Application.class, args);

	}

}
