import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-employee-list',
  // template: '<h1> Employee List </h1> <ul *ngFor="let employee of employees"> <li> {{employee.name}} </li><li> <img src={{employee.img}} > </li> </ul>  ' ,
  template:'<carousel  [itemsPerSlide]="itemsPerSlide" [noPause]="false" [singleSlideOffset]="singleSlideOffset" [startFromIndex]="5" [interval]="2000"><slide *ngFor="let slide of slides; let index=index"><img [src]="slide.image" alt="image slide" style="display: block; width: 100%;"></slide></carousel><ul *ngFor="let employee of employees"> <li>{{employee.name}} </li> </ul>',
  styleUrls: []
})



export class EmployeeListComponent implements OnInit {
  //    public employees =[
  //    {"id":1,"name":"Aadhil", "age":30,"img":"assets/images/9.jpg"},
  //    {"id":2,"name":"lida", "age":20,"img":"assets/images/4.jpg"},
  //    {"id":3,"name":"baas", "age":33,"img":"assets/images/5.jpg"},
  //    {"id":4,"name":"laadi", "age":31,"img":"assets/images/7.jpg"}
  

  //  ];
  public employees=[];
  
  constructor(private _employeeService: AppComponent ) { }

  ngOnInit() {
    // this._employeeService.getInfo()
    // .subscribe(data => this.employees=data);

  }

}
