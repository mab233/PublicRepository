import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Login } from './login';
import { Router, RouterLink } from '@angular/router';
//import { Response } from './response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  data: Array<Login>;
  login = new Login();
  ngOnInit() {
    this.loginService.getRecords().then(x => this.data = x);
  }
  loginSubmit() {
    this.loginService.validateRecord(this.login).then((x) => {
      // let y = ;
      if (x.json() == 1) {

        this.loginService.checkMGR().then(z  =>  { //check if manager
        if  (z == 1) {
            //alert("Please fill out the survey on an additional section for the employees that report to you. :)");
            this.router.navigate(['/dynamicform'])

          }
        })

        this.loginService.checkCEO().then(y => {
          if (y == 1) {
            this.router.navigate(['/chart'])
          }
          else {
            this.router.navigate(['/dynamicform'])
            
          }
        });
      }

      else {
        this.router.navigate([''])
        alert("Incorrect username or password");
      }
    })
  }


  /*
  responseData: Array<Response>;
  response = new Response();
  retrieveResponses() {
    console.log(JSON.stringify(localStorage.getItem("currentUser")));
    console.log(JSON.stringify(this.response));
    this.loginService.getResponse().then(x => console.log(x));
    this.loginService.getCategoryResponse().then(x => console.log(x));

  }
  */
}
