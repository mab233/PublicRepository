import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import { Survey } from './Survey';
import { RData } from './Survey';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  // @Input() needButton: Boolean = true;
  form: FormGroup;

  survey = new Survey();
  rdata = new RData();
  constructor(private qcs: QuestionControlService, private router1: Router) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  surveySubmit() {
    /*switch(this.form.value){
      case "Extremely Satisfied":
            this.payLoad = 5;
      case "Very Satisfied":
            this.payLoad = 4;
      case "Moderately Satisfied" :
            this.payLoad = 3;
      case "Slightly Satisfied" :
           this.payLoad = 2;
      case "Not at all Satisfied" :
           this.payLoad = 1;
     } */


    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var uname = currentUser && currentUser.username;

    this.survey.username = uname;

    this.rdata.username = uname;

    let a: any[] = this.form.value as any[];


    console.log("Rdata username" + this.rdata.username);
    for (var label in a) {

      if (a[label].catId) {

        this.rdata.catId = a[label].catId;
        this.rdata.quesId = a[label].quesId;
        this.rdata.opt = a[label].opt;
       /* console.log("Rdata");
        console.log("catId" + this.rdata.catId);
        console.log("quesId" + this.rdata.quesId);
        console.log("opt" + this.rdata.opt);*/

        console.log("Printing the object to send");
        console.log(this.rdata);
        this.qcs.insertValue(this.rdata).then(x => console.log(x));
        this.router1.navigate(['/thankyou'])


      }
    }


  }
}
