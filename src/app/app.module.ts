import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';




import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CoursesComponent } from './courses/courses.component'
import { from } from 'rxjs';
import { CalenderComponent } from './calender/calender.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
// import { EnrollmentComponent } from '../app/enrollment/enrollment.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    EmployeeListComponent,
    CoursesComponent,
    CalenderComponent,
    FormComponent,
    FooterComponent,
    
  
  ],
  imports: [
    BrowserModule,
    NgbModalModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    CarouselModule.forRoot(),
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
    
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
