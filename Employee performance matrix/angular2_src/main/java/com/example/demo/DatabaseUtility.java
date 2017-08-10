package com.example.demo;

import java.sql.*;

//import com.example.login.Login;
//import com.example.account.Account;

public class DatabaseUtility {
	static final String JDBC_DRIVER = "oracle.jdbc.driver.OracleDriver";
	static final String DB_URL = "jdbc:oracle:thin:trn07b/Chgmeasap@//cdldftef2-scan.es.ad.adp.com:1521/sbx02d_svc1";

	// Database credentials
	static final String USER = "trn07b";
	static final String PASS = "Teradata@123";

	Connection conn = null;
	Statement stmt = null;

	public DatabaseUtility() throws SQLException {
		conn = DriverManager.getConnection(DB_URL, USER, PASS);
	}

	public Statement getStatementObject() throws SQLException {
		return conn.createStatement();
	}

	public PreparedStatement getPreparedStatementObject(String query) throws SQLException {
		return conn.prepareStatement(query);
	}
}
