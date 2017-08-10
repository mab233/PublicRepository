package com.example.demo;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import net.minidev.json.JSONObject;

public class SurveyHelper {
	
	DatabaseUtility db = null;
	ResultSet rs = null;
	Statement stmt = null;

	private void closeConnectors() {
		try {
			rs.close();
			stmt.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public ArrayList<Survey> getQuestions() {
		ArrayList<Survey> aList = new ArrayList<>();
		try {
			db = new DatabaseUtility();
			stmt = db.getStatementObject();
			rs = stmt.executeQuery("Select * from QUESTION");
			
			Survey s = null;
			while (rs.next()) {
				s = new Survey();
				s.q_id =rs.getString("Q_ID");
				s.question = rs.getString("QUESTION");
				aList.add(s);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			//closeConnectors();
		}
		return aList;
	}
	
	
	
	
	
	
	
	public static int giveValue(String str){
		int num=0;
		/*String z=str.replace("\"", "");
		switch(str){
		  case "extremely satisfied":
			  num = 5;
			  break;
		  case "very satisfied":
			  num = 4;
			  break;
		  case "moderately satisfied":
			  num = 3;
			  break;
		  case "slightly satisfied":
			  num = 2;
			  break;
		  case "not at all satisfied":
			  num = 1;
			  break;
		  default:
			  num = 0;
		
		}*/
		if (str.contains("extremely satisfied")){
			
			num = 5;	
		}
		else if (str.contains("very satisfied")){
			
			num = 4;
		}
		else if (str.contains("moderately satisfied")){
			
			num = 3;
		}
		else if (str.contains("slightly satisfied")){
	
			num = 2;
		}
		else if (str.contains("not at all satisfied")){
	
			num = 1;
		}
		
		return num;
		
	}
	
	//public int insertValue(String survey) {
	public int insertValue(String survey) {
		int returnResult = 0;
		//String returnResult = "";
		String input = survey;
		
		
		String[] details = input.split(",");
	
		/*String []first=details[0].split(":");
		String firstValue=first[1];
		String []second=details[1].split(":");
		String secondValue=second[1];
		*/
		String ans[]=new String[details.length];
		int ansInt[]=new int[details.length];
		for(int i=0;i<details.length;i++){
			String[] temp=details[i].split(":");
			ans[i]=temp[1];
			ansInt[i]=giveValue(ans[i]);
		}
		
        //returnResult="Values"+(ansInt[1]);
        //return returnResult;
		
		/*
        
		try {
			db = new DatabaseUtility();			
			
			PreparedStatement pstmt = db.getPreparedStatementObject("INSERT INTO "
					+ "Perform(ID,RESP1, RESP2, RESP3, RESP4,RESP5,RESP6,RESP7,RESP8,COMMENTS)" + "VALUES(?,?,?,?,?,?,?,?,?,?)");
			pstmt.setInt(1, ansInt[0]);
			pstmt.setInt(2, ansInt[1]);
			pstmt.setInt(3, ansInt[2]);
			pstmt.setInt(4, 4);
			pstmt.setInt(5, 5);
			pstmt.setInt(6, 6);
			pstmt.setInt(7, 7);
			pstmt.setInt(8, 8);
			pstmt.setInt(9, 9);
			pstmt.setString(10, "testing_radio_new1");
			returnResult = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			//closeConnectors();
		}*/
		
		return returnResult;
		//return input;
		//return parts[0];
	     
	}


}
