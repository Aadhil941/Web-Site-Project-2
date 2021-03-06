import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-courses',
  template:'<div class="upcoming-courses">  <B> UPCOMING COURSES IN ABROAD </B> </div> <carousel class="container" [itemsPerSlide]="4" [singleSlideOffset]="true"  [startFromIndex]="0"  [interval]="3000"> <slide *ngFor="let course of courses; let index=index"><img src="assets/courses/{{course.imgUrl}}" style="display: block; width: 100%;"> <div class="carousel-caption"> <h3> <a href="" >{{course.name}} </a></h3> </div> </slide></carousel>',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
 
  ;

  public courses=[];
  
  constructor(private _courseService: AppComponent ) { }

  ngOnInit() {
    this._courseService.getInfo()
    .subscribe(data => this.courses=data);

  }
}










  // itemsPerSlide = 4;
  // singleSlideOffset = true;
 
  // slides = [
   
  //   {image: 'assets/images/nature/2.jpg'},
  //   {image: 'assets/images/nature/3.jpg'},
  //   {image: 'assets/images/nature/4.jpg'},
  //   {image: 'assets/images/nature/5.jpg'},
  //   {image: 'assets/images/nature/6.jpg'},
  //   {image: 'assets/images/nature/44.jpg'},
  //   {image: 'assets/images/nature/44.jpEg'}
    
  // ];
  

 
