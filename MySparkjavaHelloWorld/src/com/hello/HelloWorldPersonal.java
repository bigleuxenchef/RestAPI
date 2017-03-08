package com.hello;

import static spark.Spark.*;
import spark.servlet.SparkApplication;

public class HelloWorldPersonal implements SparkApplication{
	
	@Override
	    public void init() {
		
		 get("/hellobuddy/", (request, response) -> {
			 return "None ";
		 });
		
		 get("/hellobuddy/:name", (request, response) -> {
			 return "Hellobuddy: " + request.params(":name");
		 });
	 }
	 
}
