package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {
	// extends SpringBootServletInitializer : witout this declaration it can work with spring boot but cannot be deployd in tomcat

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}