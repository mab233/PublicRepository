package com.example.demo;

import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.*;
//import com.example.account.*;


@RestController
public class MainController {

	@RequestMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/record/get")
	public ArrayList<Login> getRecord() {
		return new LoginHelper().getRecords();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/record/validate")
	public int validateRecord(@RequestBody Login log) {
		return new LoginHelper().validateRecord(log);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/record/getResponse")
    public ArrayList<Response> getResponses() {
                   return new LoginHelper().getResponse();
    }

	
	//New addition
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/record/insertValue")
	//public int insertValue(@RequestBody String survey) {
	public int insertValue(@RequestBody String survey) {
		return new SurveyHelper().insertValue(survey);
	}

	
}