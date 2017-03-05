package com.hello;

import static spark.Spark.*;
import spark.servlet.SparkApplication;

public class HelloWorld implements SparkApplication {
    
	 @Override
	    public void init() {
	        get("/", (request, response) -> "Hello World");

	        get("/hello/:name", (request, response) -> {
	            return "Hello: " + request.params(":name");
	        });
	 }
	//public static void main(String[] args) {
      //  get("/hello", (req, res) -> "Hello World");
    //}
	        
}
