package com.crunchify.restjersey;
 
import java.io.FileNotFoundException;
import java.io.IOException;
 
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
 
/**
 * @author Crunchify
 * 
 */
 
@Path("/index")
public class CrunchifyJMeterTest {
	@GET
	@Produces("text/html")
	public String checkECV() throws InterruptedException, FileNotFoundException, IOException {
		String result = "<br><div align='center'><h2>Hey This is Crunchify's JMeter Test...</h2></div>";
 
		System.out.println(result);
		Thread.sleep(1000);
		return result;
	}
}