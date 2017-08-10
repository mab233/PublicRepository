package com.example.demo;

//import java.security.interfaces.RSAKey;

import java.sql.*;
import java.util.*;

import com.example.demo.DatabaseUtility;

public class LoginHelper {

               DatabaseUtility db = null;
               ResultSet rs = null;
               Statement stmt = null;
               ResultSet ifCeo = null;
               int numCeo,numMgr = 0;
       

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
               
               public int checkCEO(String username) {
           		try {
           			db = new DatabaseUtility();
           			stmt = db.getStatementObject();
           			PreparedStatement pstmt = db.getPreparedStatementObject("select check_ceo(?) AS FLAG from dual");
           			// ifCeo = stmt.executeQuery("select check_ceo(username) from
           			// dual");
           			pstmt.setString(1, username);
           			ResultSet rs = pstmt.executeQuery();
           			while (rs.next()) {
           				numCeo = rs.getInt("FLAG");
           			}
           		} catch (Exception e) {
           			System.out.println(e.getMessage());
           		} finally {
           			// closeConnectors();
           		}
           		if (numCeo == 1) {
           			return 1;
           		} else {
           			return 0;
           		}
           	}
               
               public int checkMGR(String username) {
             		try {
             			db = new DatabaseUtility();
             			stmt = db.getStatementObject();
             			PreparedStatement pstmt = db.getPreparedStatementObject("select check_mgr(?) AS Mgr_Flag from dual");
             			
             			pstmt.setString(1, username);
             			ResultSet rs = pstmt.executeQuery();
             			while (rs.next()) {
             				numMgr = rs.getInt("Mgr_Flag");
             			}
             		} catch (Exception e) {
             			System.out.println(e.getMessage());
             		} finally {
             			// closeConnectors();
             		}
             		if (numMgr == 1) {
             			return 1;
             		} else {
             			return 0;
             		}
             	} 

               // Code for retrieving data from the DB and computing satisfaction matrix

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
               
               
              
            	// Code for retrieving data from the DB according to category

            	public ArrayList<CategoryResponse> getCategoryResponse() {
            	               ArrayList<CategoryResponse> cList = new ArrayList<>();
            	               try {
            	                              db = new DatabaseUtility();
            	                              stmt = db.getStatementObject();
            	                              rs = stmt.executeQuery(
            	                                                            "Select c.catg_name,r.answer as Resp,count(r.answer) as Freq from response r inner join question q on r.q_id=q.q_id inner join category c on r.q_id=q.q_id and q.c_id=c.c_id group by c.catg_name,r.answer order by c.catg_name,r.answer");
            	                              // stmt.executeUpdate(sql) for insert/update/delete
            	                              CategoryResponse cr = null;
            	                              while (rs.next()) {
            	                                             cr = new CategoryResponse();
            	                                             cr.catg_name = rs.getString("CATG_NAME");
            	                                             cr.catg_response = rs.getInt("RESP");
            	                                             cr.catg_freq = rs.getInt("FREQ");
            	                                             cList.add(cr);
            	                              }
            	                } catch (Exception e) {
            	                              System.out.println(e.getMessage());
            	                } finally {
            	                               // closeConnectors();
            	                }
            	                return cList;
            	 } 
            	
            	// Code for retrieving data from the DB according to location

            	public ArrayList<LocationResponse> getLocationResponse() {
            	               ArrayList<LocationResponse> lList = new ArrayList<>();
            	               try {
            	                              db = new DatabaseUtility();
            	                              stmt = db.getStatementObject();
            	                              rs = stmt.executeQuery(
            	                                                            "select count(*) as COUNT ,answer,location_id from response group by location_id,answer order by location_id,answer");
            	                              
            	                              LocationResponse lr = null;
            	                              while (rs.next()) {
            	                                             lr = new LocationResponse();
            	                                             lr.loc_count = rs.getInt("COUNT");
            	                                             lr.loc_response = rs.getInt("ANSWER");
            	                                             lr.loc_id = rs.getInt("LOCATION_ID");
            	                                             lList.add(lr);
            	                              }
            	                } catch (Exception e) {
            	                              System.out.println(e.getMessage());
            	                } finally {
            	                               // closeConnectors();
            	                }
            	                return lList;
            	 } 
            	
            	// Code for retrieving data from the DB according to role

            	public ArrayList<RoleResponse> getRoleResponse() {
            	               ArrayList<RoleResponse> rList = new ArrayList<>();
            	               try {
            	                              db = new DatabaseUtility();
            	                              stmt = db.getStatementObject();
            	                              rs = stmt.executeQuery(
            	                                                            "select count(*) as COUNT ,answer,role_id from response group by role_id,answer order by role_id,answer");
            	                              
            	                              RoleResponse rr = null;
            	                              while (rs.next()) {
            	                                             rr = new RoleResponse();
            	                                             rr.ro_count = rs.getInt("COUNT");
            	                                             rr.ro_response = rs.getInt("ANSWER");
            	                                             rr.ro_id = rs.getInt("ROLE_ID");
            	                                             rList.add(rr);
            	                              }
            	                } catch (Exception e) {
            	                              System.out.println(e.getMessage());
            	                } finally {
            	                               // closeConnectors();
            	                }
            	                return rList;
            	 } 
            	
            	// Code for retrieving questions from the DB to display in the form 

            	public ArrayList<Questions> getQuestions() {
            	               ArrayList<Questions> qList = new ArrayList<>();
            	               try {
            	                              db = new DatabaseUtility();
            	                              stmt = db.getStatementObject();
            	                              rs = stmt.executeQuery(
            	                                                            "Select Q_ID, QUESTION from QUESTION");
            	                              // stmt.executeUpdate(sql) for insert/update/delete
            	                              Questions qs = null;
            	                              while (rs.next()) {
            	                                             qs = new Questions();
            	                                             qs.ques_Id = rs.getInt("Q_ID");
            	                                             qs.question = rs.getString("QUESTION");
            	                                             qList.add(qs);
            	                              }
            	                } catch (Exception e) {
            	                              System.out.println(e.getMessage());
            	                } finally {
            	                               // closeConnectors();
            	                }
            	                return qList;
            	 }
            	
            	// Code for retrieving data from the DB and computing performance

                public ArrayList<Performance> getPerformance() {
                               ArrayList<Performance> pList = new ArrayList<>();
                               try {
                                              db = new DatabaseUtility();
                                              stmt = db.getStatementObject();
                                              rs = stmt.executeQuery(
                                                                            "Select (count(answer)/derived_table.total)*100 as Percent, answer as Resp from response, (select count(answer) as total from response) derived_table group by answer, derived_table.total order by Percent desc");
                                              // stmt.executeUpdate(sql) for insert/update/delete
                                              Performance p = null;
                                              while (rs.next()) {
                                                             p = new Performance();
                                                             p.percent = rs.getDouble("PERCENT");
                                                             p.response = rs.getInt("RESP");
                                                             pList.add(p);
                                              }
                               } catch (Exception e) {
                                              System.out.println(e.getMessage());
                               } finally {
                                              // closeConnectors();
                               }
                               return pList;
                }
            	

}              
