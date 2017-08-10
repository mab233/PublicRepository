import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Headers, Http } from '@angular/http';
import { QuestionBase } from './question-base';
import { Survey } from './Survey';
import { RData } from './Survey';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionControlService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" });
  private baseUrl = 'http://localhost:8086/';

  constructor(private http: Http) { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};
    let count: number = 0;
    questions.forEach(question => {
      

      group[question.quesId] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
      group[count++] = new FormControl({ question: question.key, option : "" });
    });

    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      currentUser = localStorage.setItem("currentUser", JSON.stringify({ username: "admin" }));
    }
    var uname = currentUser && currentUser.username;
    let username: string = uname || "";

    group["username"] = new FormControl(username || "");

    return new FormGroup(group);
  }

   insertValue(rdata : RData) {


    return this.http.post(this.baseUrl + "record/insertValue", rdata).toPromise().catch(function (r) {

    });


  }
}
