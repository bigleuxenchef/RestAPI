Disclaimer

I am interested in testing technologies and the best way is to do it yourself and experiment. Just do what others did already is a way to learn. This is why I posting what I have done by myself without any pretending to invent or teach anything to anyone.

Happy to share with anyone, happy anyone takes a copy, but I would recommend not to use any of this material as it is more for personal experiment than to achieve anything special other than learning.


#MyRestSTS (Spring Tool Suite)

### IDE Eclipse

This sample uses Spring STS from Eclipse (installed from MyMarketplace). Spring can be shipped with a full eclipse IDE that has been re-looked for spring. Here everything has been done using Eclipse Neon 2 from scratch


### Running the application within Spring Boot framework

Application has been tested in spring boot (with tomcat embeded) as well as in a full tomcat deployed model.

Test springboot

```
http://localhost:8080/greeting/
http://localhost:8080/greeting?name=Jean
http://localhost:8080/greeting?surname=Bigleux
http://localhost:8080/greeting?name=Jean&surname=Bigleux
```

Test Tomcat

```
http://localhost:8080/MyRestSTS/greeting/
http://localhost:8080/MyRestSTS/greeting?name=Jean
http://localhost:8080/MyRestSTS/greeting?surname=Bigleux
http://localhost:8080/MyRestSTS/greeting?name=Jean&surname=Bigleux
http://localhost:8080/MyRestSTS/greeting?surname=Bigleux&name=Jean
```

Remark :

spring boot works with the following :

```
package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class Application  {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

However tomcat needs Application to extended with `extends SpringBootServletInitializer`

```
package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {
	// extends SpringBootServletInitializer : without this declaration it can work with spring boot but cannot be deployed in tomcat

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```
