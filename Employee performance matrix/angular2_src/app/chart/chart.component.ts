import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service'
import { Router, RouterLink } from '@angular/router';
import { Answer } from './Answer';
import { CategoryAnswer } from './CategoryAnswer';
import{Series} from './Series'
import { LocationAnswer } from './LocationAnswer';
import { RoleAnswer } from './RoleAnswer'; 
import { Performance } from './Performance'; 


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  providers: [ChartService],
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {

options: Object;
pieChartOptions: Object;
pieChartOptions2:Object;
columnChartOptions: Object;
performChartOptions: Object;
stalked_loc: Object;
stalked_role: Object;
ver_sat:number;
sat:number;
neut:number;
dissat:number;
ver_dissat:number;
sum_sat:number;
sum_dissat:number;
ans: Array<Answer>;
perf_ans: Array<Performance>;
p_ver_sat:number;
p_sat:number;
p_neut:number;
p_dissat:number;
p_ver_dissat:number;
role_ans: Array<RoleAnswer>;
locn_ans: Array<LocationAnswer>
cat_ans: Array<CategoryAnswer>;
data1:Array<number>;
data2:Array<number>;
data3:Array<number>;
data4:Array<number>;
data5:Array<number>;
r_data1:Array<number>;
r_data2:Array<number>;
r_data3:Array<number>;
r_data4:Array<number>;
r_data5:Array<number>;
l_data1:Array<number>;
l_data2:Array<number>;
l_data3:Array<number>;
l_data4:Array<number>;
l_data5:Array<number>;
cat_array:Array<String>;
role_array:Array<String>;
locn_array:Array<String>;
   //label_array:Array<Number>;
   answer = new Answer();
  constructor(private chartservice: ChartService) {
  this.cat_array=['Communication', 'Environment','Food','Infrastructure',
  'Pay and Benefits','Project and Project Team','Recognition'];
   this.role_array=['DBA', 'Developer', 'Tester','Operations','Manager'];
   this.locn_array=['Roseland','Parsippany','Alpharatte']
   this.data1=[];
   this.data2=[];
   this.data3=[];
   this.data4=[];
   this.data5=[];
   this.r_data1=[];
   this.r_data2=[];
   this.r_data3=[];
   this.r_data4=[];
   this.r_data5=[];
   this.l_data1=[];
   this.l_data2=[];
   this.l_data3=[];
   this.l_data4=[];
   this.l_data5=[];
}

retrieveResponses() {
     this.chartservice.getResponse().then(x => {
      this.ans=x;
      this.overall_response();
     }); 
}//return this.ans;
categoryResponses() {
      this.chartservice.getCategoryResponse().then(x => {
      this.cat_ans=x;
      this.overall_categoryResponses();
     });
/*    this.chartservice.getLocationResponse().then(x => {
     this.locn_ans=x;
     this.overall_categoryResponses();
    }); */
}
roleResponses()
{
     this.chartservice.getRoleResponse().then(x => {
      this.role_ans=x;
     this.overall_roleResponses();
     });
   // this.chartservice.getCategoryResponse().then(x => console.log(x));
  //  console.log(typeof this.series)
  //  console.log(typeof this.ans)
  //  console.log(this.category_ans.length);
}

locationResponses() {
     this.chartservice.getLocationResponse().then(x => {
      this.locn_ans=x;
      this.overall_locationResponses();
     }); 
}//return this.ans;

performResponses()
{
   this.chartservice.getPerformance().then(x => {
      this.perf_ans=x;
      this.overall_PerformResponses();
     }); 

}

/*logout()
{
   this.router.navigate(['/'])
}*/





/* xyz(){
for(var i =0; i < this.series.length ; i++ ){
    this.series[i].name = null;
    this.series[i].data = null;
}
   
  // this.series = [1,2,3,4,5];
   console.log(this.cat_ans.length)
     for(var i =0 ; i < this.cat_ans.length;i++){
    if(this.cat_ans[i].catg_response == 1){
        this.series[0].name = 1;
        this.series[0].data.push (this.cat_ans[i].catg_freq);
    }
     else if(this.cat_ans[i].catg_response == 2){
        this.series[1].name = 2;
        this.series[1].data.push (this.cat_ans[i].catg_freq);
    }
    else if(this.cat_ans[i].catg_response == 3){
        this.series[2].name = 3;
        this.series[2].data.push (this.cat_ans[i].catg_freq);
    }
    else if(this.cat_ans[i].catg_response == 4){
        this.series[3].name = 4;
        this.series[3].data.push (this.cat_ans[i].catg_freq);
    }
   else if(this.cat_ans[i].catg_response == 5){
        this.series[4].name = 5;
        this.series[4].data.push (this.cat_ans[i].catg_freq);
    }
  }
}*/
overall_response() { 
     //console.log(this.label_array.length);
     for (var i =0; i<this.ans.length; i++)
     {
          if (this.ans[i].response==5)
          {
          this.ver_sat=this.ans[i].percent_response; 
          } else if (this.ans[i].response==4)
          {
          this.sat=this.ans[i].percent_response;  
          } else if (this.ans[i].response==3)
          {
          this.neut=this.ans[i].percent_response;  
          } else if (this.ans[i].response==2)
          {
          this.dissat=this.ans[i].percent_response;  
          } else if (this.ans[i].response==1)
          {
          this.ver_dissat=this.ans[i].percent_response;  
          }
     }
     this.sum_sat=this.ver_sat + this.sat;
     this.sum_dissat=this.ver_dissat + this.dissat;

    this.pieChartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
            text: 'OVERALL RESPONSE FROM AN EMPLOYEE'
        },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        borderWidth: 2,
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
     data: 
        [ ['Strongly Agree', this.ver_sat],
        ['Agree', this.sat],
        ['Neither Agree nor Disagree', this.neut],
        ['Disagree', this.dissat],
        ['Strongly Disagree', this.ver_dissat],
      ],
      dataLabels: {
        enabled: true,
        style: {
          font: 'ProximaNova, sans-serif',
          fontSize: '14px',
          fontWeight: '300'
        }
      }
    }]
  };

  this.pieChartOptions2 = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
            text: 'After Bucketizing'
        },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        borderWidth: 2,
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
     data: 
        [ ['Agree', this.sum_sat],
        ['Neither Agree nor Disagree', this.neut],
        ['Disagree', this.sum_dissat],
      ],
      dataLabels: {
        enabled: true,
        style: {
          font: 'ProximaNova, sans-serif',
          fontSize: '14px',
          fontWeight: '300'
        }
      }
    }]
  };
  

} // End of overall_Responses Method

overall_categoryResponses(){
//Category Iteration
var j:number
for(var m =1 ; m <=5;m++)
{
  j=0;
for(var k =0 ; k < this.cat_array.length;k++)
{   
for(var i =0 ; i < this.cat_ans.length;i++)
  { 
    if(this.cat_ans[i].catg_response == m)
    {   
      if (m==1)
      {
        console.log(this.cat_ans[i].catg_response);
        this.data1[j]=this.cat_ans[i].catg_freq;
          j=j+1
      }
      else if (m==2)
      {
        this.data2[j]=this.cat_ans[i].catg_freq;
          j=j+1
      }
      else if (m==3)
      {
        this.data3[j]=this.cat_ans[i].catg_freq;
          j=j+1
      }
      else if (m==4)
      {
        this.data4[j]=this.cat_ans[i].catg_freq;
          j=j+1
      }
      else
      {
          this.data5[j]=this.cat_ans[i].catg_freq;
          j=j+1
      }
    }
    } 
    break;
  }
}

  this.columnChartOptions = {
    chart: {
      type: 'column',
      style: {
        fontFamily: 'inherit'
      }
    },
    xAxis: {
                categories: this.cat_array
            },
    tooltip: {
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
    name: 'Strongly Disagree',
    data: this.data1//[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

     }, {
     name: 'Disagree',
     data: this.data2//[83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

    }, {
       name: 'Neither Agree nor Disagree',
      data: this.data3// [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

    },
    {
      name: 'Agree',
      data: this.data4// [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

     }, {
      name: 'Strongly Agree',
      data:this.data5// [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4]
    }],
    title: {
      text: 'INDIVIDUAL CATEGORY RATING',
      align: 'left',
      x: 20
    }
  };

}
overall_roleResponses() 
{
  console.log("roel")
// Role Iteration
var r:number;
for(var m =1 ; m <=5;m++)
{
  r=0;
for(var k =0 ; k < this.role_array.length;k++)
{   
for(var i =0 ; i < this.role_ans.length;i++)
  { 
    if(this.role_ans[i].ro_response == m)
    {   
      if (m==1)
      {
        this.r_data1[r]=this.role_ans[i].ro_count;
          r=r+1
      }
      else if (m==2)
      {
        this.r_data2[r]=this.role_ans[i].ro_count;
          r=r+1
      }
      else if (m==3)
      {
        this.r_data3[r]=this.role_ans[i].ro_count;
          r=r+1
      }
      else if (m==4)
      {
        this.r_data4[r]=this.role_ans[i].ro_count;
          r=r+1
      }
      else
      {
          this.r_data5[r]=this.role_ans[i].ro_count;
          r=r+1
      }
    }
    } 
    break;
  }
//console.log(r)
}

this.stalked_role= {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Role Based Analysis'
    },
    xAxis: {
        categories: this.role_array
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
   },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Strongly Disagree',
        data: this.r_data1 //[50, 3, 4]
    }, {
        name: 'Disagree',
        data: this.r_data2//[20, 2, 3]
    }, {
        name: 'Neither Agree nor Disagree',
        data: this.r_data3//[20, 2, 3]
    },{
        name: 'Agree',
        data: this.r_data4//[20, 2, 3]
    },{
        name: 'Strongly Agree',
        data: this.r_data5//[30, 4, 4]
    }]
};

}

//Location Iteration
overall_locationResponses()
{
var r:number;
for(var m =1 ; m <=5;m++)
{
  r=0;
for(var k =0 ; k < this.locn_array.length;k++)
{  
for(var i =0 ; i < this.locn_ans.length;i++)
  { 
    if(this.locn_ans[i].loc_response==m)
    {   
      if (m==1)
      {
          this.l_data1[r]=this.locn_ans[i].loc_count;
          r=r+1
      }
      else if (m==2)
      {
        this.l_data2[r]=this.locn_ans[i].loc_count;
          r=r+1
      }
      else if (m==3)
      {
        this.l_data3[r]=this.locn_ans[i].loc_count;
          r=r+1
      }
      else if (m==4)
      {
        this.l_data4[r]=this.locn_ans[i].loc_count;
          r=r+1
      }
      else
      {
          this.l_data5[r]=this.locn_ans[i].loc_count;
          r=r+1
      }
    }
    } 
    break;
  }
//console.log(r)
}
//console.log(this.l_data1)

   this.stalked_loc= {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Location Based Analysis'
    },
    xAxis: {
        categories: this.locn_array
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Strongly Disagree',
        data: this.l_data1//[50, 3, 4]
    }, {
        name: 'Disagree',
        data: this.l_data2//[20, 2, 3]
    }, {
        name: 'Neither Agree nor Disagree',
        data: this.l_data3//[20, 2, 3]
    },{
        name: 'Agree',
        data: this.l_data4//[20, 2, 3]
    },{
        name: 'Strongly Agree',
        data: this.l_data5//[30, 4, 4]
    }]
};
}

overall_PerformResponses()
{
console.log("hello")
for (var i =0; i<this.perf_ans.length; i++)
     {
          if (this.perf_ans[i].response==5)
          {
          this.p_ver_sat=this.perf_ans[i].percent; 
          } else if (this.perf_ans[i].response==4)
          {
          this.p_sat=this.perf_ans[i].percent;  
          } else if (this.perf_ans[i].response==3)
          {
          this.p_neut=this.perf_ans[i].percent;  
          } else if (this.perf_ans[i].response==2)
          {
          this.p_dissat=this.perf_ans[i].percent;  
          } else if (this.perf_ans[i].response==1)
          {
          this.p_ver_dissat=this.perf_ans[i].percent;  
          }
     }  
     //this.sum_sat=this.ver_sat + this.sat;
     //this.sum_dissat=this.ver_dissat + this.dissat;

    this.performChartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
            text: 'Performance based Analysis'
        },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        borderWidth: 2,
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
     data: 
        [ ['Strongly Agree', this.p_ver_sat],
        ['Agree', this.p_sat],
        ['Neither Agree nor Disagree', this.p_neut],
        ['Disagree', this.p_dissat],
        ['Strongly Disagree', this.p_ver_dissat],
      ],
      dataLabels: {
        enabled: true,
        style: {
          font: 'ProximaNova, sans-serif',
          fontSize: '14px',
          fontWeight: '300'
        }
      }
    }]
  };
}


} // End of Classes
