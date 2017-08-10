package com.example.demo;

//import java.security.interfaces.RSAKey;

import java.sql.*;
import java.util.*;

import com.example.demo.DatabaseUtility;

public class LoginHelper {

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

               public ArrayList<Login> getRecords() {
                              ArrayList<Login> aList = new ArrayList<>();
                              try {
                                             db = new DatabaseUtility();
                                             stmt = db.getStatementObject();
                                             rs = stmt.executeQuery("Select * from Authenticate");
                                             // stmt.executeUpdate(sql) for insert/update/delete
                                             Login l = null;
                                             while (rs.next()) {
                                                            l = new Login();
                                                            l.username = rs.getString("ID");
                                                            l.password = rs.getString("password");
                                                            aList.add(l);
                                             }
                              } catch (Exception e) {
                                             System.out.println(e.getMessage());
                              } finally {
                                             // closeConnectors();
                              }
                              return aList;
               }

               public int validateRecord(Login log) {
                              ArrayList<Login> aList = getRecords();

                              for (Login login : aList) {
                                             if (login.username.equalsIgnoreCase(log.username) && login.password.equals(log.password)) {
                                                            return 1;
                                             }
                              }

                              return 0;
               }

               // Code for retrieving data from the DB and computing performance matrix

               public ArrayList<Response> getResponse() {
                              ArrayList<Response> rList = new ArrayList<>();
                              try {
                                             db = new DatabaseUtility();
                                             stmt = db.getStatementObject();
                                             rs = stmt.executeQuery(
                                                                           "Select (count(answer)/derived_table.total)*100 as Percent, answer as Resp from response, (select count(answer) as total from response) derived_table group by answer, derived_table.total order by Percent desc");
                                             // stmt.executeUpdate(sql) for insert/update/delete
                                             Response r = null;
                                             while (rs.next()) {
                                                            r = new Response();
                                                            r.response = rs.getInt("RESP");
                                                            r.percent_response = rs.getDouble("PERCENT");
                                                            rList.add(r);
                                             }
                              } catch (Exception e) {
                                             System.out.println(e.getMessage());
                              } finally {
                                             // closeConnectors();
                              }
                              return rList;
               }

//            public int computePerformance(Response res) throws SQLException {
//                           ArrayList<Response> rList = getResponse();
//
//                           for (Response resp : rList) {
//                                          // get the frequency of each response and total count
//
//                                          ResultSetMetaData rsmd = rs.getMetaData();
//                                          int columnsNumber = rsmd.getColumnCount();
//                                          System.out.println("The total count = " + columnsNumber);
//                           }
//                           return 111;
//            }
}              
