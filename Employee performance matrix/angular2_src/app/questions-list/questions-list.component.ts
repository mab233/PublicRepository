import  {  Component,  OnInit  }  from  '@angular/core';
import  {  QuestionService  }  from  '../dynamic-form/question.service';
import  {  Survey  }  from  './question-list';
//import { Login } from '../login/login';
import  {  LoginService  }  from  '../login/login.service';
import  {  Router,  RouterLink  }  from  '@angular/router';
import  {  FormGroup  }  from  '@angular/forms';

@Component({
  selector:  'app-questions-list',
  templateUrl:  './questions-list.component.html',
  providers:  [QuestionService, LoginService],
  styleUrls:  ['./questions-list.component.css']
})
export  class  QuestionsListComponent  implements  OnInit  {
  questions:  any[];
  perfQuestions:  any[];
  //constructor(private service: QuestionService, private logservice: LoginService, private router: Router) {
  constructor(private  service:  QuestionService, private  logservice:  LoginService) { }
  isMgr:  Boolean;
  ngOnInit():  void  {
    this.questions  =  this.service.getQuestions();
    this.isMgr  =  this.logservice.getRole() == "1" ? true : false;
    console.log(this.isMgr);
    console.log(this.logservice.getRole());
    if  (this.isMgr) {
      
      this.perfQuestions  =  this.service.getPerfQuestions();
      this.perfQuestions.forEach(element => {
        this.questions.push(element);
      });
    }
  }
}