import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Answer } from './Answer';
import { CategoryAnswer } from './CategoryAnswer';
import { LocationAnswer } from './LocationAnswer';
import { RoleAnswer } from './RoleAnswer';
import { Performance } from './Performance';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ChartService {
            private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" });
            private baseUrl = 'http://localhost:8086/';

            constructor(private http: Http) { }

            getResponse(): Promise<Answer[]> {
                    return this.http.get(this.baseUrl + "record/getResponse", 
                    { headers: this.headers }).toPromise().then(response => response.json() as Answer[]);
                     //var r = new JSONObject(m);
                     //var pr = r.getJSONArray("percent_response");
            }

            getCategoryResponse(): Promise<CategoryAnswer[]> {
                    return this.http.get(this.baseUrl + "record/getCategoryResponse", 
                    { headers: this.headers }).toPromise().then(response => response.json() as CategoryAnswer[]);
            }

            getLocationResponse(): Promise<LocationAnswer[]> {
                    return this.http.get(this.baseUrl + "record/getLocationResponse", 
                    { headers: this.headers }).toPromise().then(response => response.json() as LocationAnswer[]);
            }

            getRoleResponse(): Promise<RoleAnswer[]> {
                    return this.http.get(this.baseUrl + "record/getRoleResponse", 
                    { headers: this.headers }).toPromise().then(response => response.json() as RoleAnswer[]);
            }

            getPerformance(): Promise<Performance[]> {
                    return this.http.get(this.baseUrl + "record/getPerformance", 
                    { headers: this.headers }).toPromise().then(response => response.json() as Performance[]);
                     //var r = new JSONObject(m);
                     //var pr = r.getJSONArray("percent_response");
            }




} 