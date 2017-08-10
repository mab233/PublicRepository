package com.example.demo;

import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.*;


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
	
	@CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/record/getCategoryResponse")
    public ArrayList<CategoryResponse> getCategoryResponses() {
                   return new LoginHelper().getCategoryResponse();
    } 
	
	@CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/record/getLocationResponse")
    public ArrayList<LocationResponse> getLocationResponses() {
                   return new LoginHelper().getLocationResponse();
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/record/getRoleResponse")
    public ArrayList<RoleResponse> getRoleResponses() {
                   return new LoginHelper().getRoleResponse();
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/record/getPerformance")
    public ArrayList<Performance> getPerformance() {
                   return new LoginHelper().getPerformance();
    }

	//Added for fetching questions from the database
	@CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/record/getQuestions")
    public ArrayList<Questions> getQuestions() {
                   return new LoginHelper().getQuestions();
    } 
	
	
	//New addition
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/record/insertValue")
	//public String insertValue(@RequestBody String survey) {
	public int insertValue(@RequestBody Survey survey) {
		return new SurveyHelper().insertValue(survey);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping("/record/checkCEO")
	public int checkCEO(@RequestBody Login user) {
		System.out.println(user.username);
		return new LoginHelper().checkCEO(user.username);
	}

	@CrossOrigin(origins = "*")
	@RequestMapping("/record/checkMGR")
	public int checkMGR(@RequestBody Login user) {
		System.out.println(user.username);
		return new LoginHelper().checkMGR(user.username);
	} 
	
	
}