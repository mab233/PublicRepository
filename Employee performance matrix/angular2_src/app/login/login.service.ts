import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Login } from './login';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
  _http: any;
  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" });
  private baseUrl = 'http://localhost:8086/';

  constructor(private http: Http) { }

  getRecords(): Promise<Login[]> {
    return this.http.get(this.baseUrl + "record/get", { headers: this.headers }).toPromise().then(response => response.json() as Login[]);
  }

  validateRecord(login: Login): Promise<Response> {
    return this.http.post(this.baseUrl + "record/validate", login, { headers: this.headers }).map((response: Response) => {

      let user = response.json();
      if (user && user == 1) {
        localStorage.setItem("currentUser", JSON.stringify({ username: login.username }));
      }
      return response;
    }).toPromise();

  }


  checkCEO(): Promise<number> {
    return this.http.post(this.baseUrl + "record/checkCEO", { username: this.getUsername() }, { headers: this.headers })
      .toPromise().then(r => r.json()).catch(this.handleError);
  }


  checkMGR():  Promise<number> {
    return  this.http.post(this.baseUrl + "record/checkMGR", { username: this.getUsername() }, { headers: this.headers })
      .toPromise().then(r1 => {
        console.log(r1);
        // debugger
        let v1 = r1.json();
        // if (v1) {
        localStorage.setItem("role", JSON.stringify({ role: v1 }));
        console.log(v1);
        console.log("mgrokay");
        // }
        return v1;
      }).catch(this.handleError);
  }

  getUsername(): String {
    return JSON.parse(localStorage.getItem("currentUser")).username || "";
  }


  getRole():  String  {
    console.log(localStorage.getItem("role"));
    return  JSON.parse(localStorage.getItem("role")).role  ||  "";
  }

  handleError(e) {
    console.log(e);
  }

}
