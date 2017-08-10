import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionService} from './dynamic-form/question.service';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { vdlChartingPalette } from './charting-palette';
import { ChartComponent } from './chart/chart.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


declare var require: any;

export function highchartsFactory() {
const hc = require('highcharts');
const hcMore = require('highcharts/highcharts-more');
hc.setOptions(vdlChartingPalette);
hcMore(hc);
return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    QuestionsListComponent,
    ChartComponent,
    ThankyouComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'',component: LoginComponent },
      { path:'dynamicform',component: QuestionsListComponent },
      { path:'thankyou', component: ThankyouComponent },
      { path:'chart',component:ChartComponent },

    ])
  ],
  providers: [QuestionService,
  {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
