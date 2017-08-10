package com.example.demo;

import java.sql.*;
import java.util.ArrayList;


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

	public static int giveValue(String str) {
		int num = 0;

		if (str.equalsIgnoreCase("strongly disagree")) {

			num = 1;
		} else if (str.equalsIgnoreCase("disagree")) {

			num = 2;
		} else if (str.equalsIgnoreCase("neither disagree or agree")) {

			num = 3;
		} else if (str.equalsIgnoreCase("agree")) {

			num = 4;
		} else

			num = 5;
		

		return num;

	}

	public int insertValue(Survey survey) {

		int returnResult = 0;

		String username = survey.username;

		ArrayList<Survey> sList = new ArrayList<Survey>();
		sList.add(survey);
		
		for (Survey s : sList) {

			//int qId = s.quesId;
			String options = s.opt;
			int numericOption = giveValue(options);

			try {
				db = new DatabaseUtility();
				// stmt = db.getStatementObject();
				// rs = stmt.executeQuery("Select mgr_emp("+username+") as
				// manager from dual");
				

				PreparedStatement pstmt1 = db.getPreparedStatementObject("Select MGR_ID,ROLE_ID,LOCATION_ID from EMPLOYEE where ID=?");
				pstmt1.setString(1, username);
				ResultSet resultSet1;
				resultSet1 = pstmt1.executeQuery();
				
				
				Survey sur = new Survey();
				while (resultSet1.next()) {
					sur.username = resultSet1.getString("MGR_ID");
					sur.roleId = resultSet1.getString("ROLE_ID");
					sur.locId = resultSet1.getString("LOCATION_ID");
				}

				PreparedStatement pstmt = db.getPreparedStatementObject(
						"INSERT INTO " + "RESPONSE(Q_ID,ANSWER, MGR_ID, INS_DATE, ROLE_ID,LOCATION_ID)" + "VALUES(?,?,?,sysdate,?,?)");
				pstmt.setInt(1, s.quesId);
				pstmt.setInt(2, numericOption);
				pstmt.setString(3, sur.username);
				pstmt.setString(4,sur.roleId );
				pstmt.setString(5, sur.locId);
				returnResult = pstmt.executeUpdate();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} finally {
				// closeConnectors();
			}

		}

		return returnResult;

			}


}
