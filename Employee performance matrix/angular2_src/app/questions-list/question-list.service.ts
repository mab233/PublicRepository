import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Survey } from './question-list';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionListService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" });
  private baseUrl = 'http://localhost:8086/';

  constructor(private http: Http) { }

  /*getQuestions(): Promise<Survey[]> {
    let getData =  this.http.get(this.baseUrl + "record/get", { headers: this.headers }).toPromise().then(response => response.json() as Survey[]);
    console.log(getData)
    return getData  
}*/

}
