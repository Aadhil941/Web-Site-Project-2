import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icourse } from './employee';


import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // getInfo() {
  //   throw new Error("Method not implemented.");
  // }
  
  
  imgUrl='../../assets/images/33.png';


  // title='WebProject';
  // topics = ['Angular', 'React', 'Vue'];
  // userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  // topicHasError = true;
  // submitted = false;
  // errorMsg = '';

  // constructor(private _enrollmentService: EnrollmentService) {}

  // validateTopic(value) {
  //   if (value === 'default') {
  //     this.topicHasError = true;
  //   } else {
  //     this.topicHasError = false;
  //   }
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this._enrollmentService.enroll(this.userModel)
  //     .subscribe(
  //       response => console.log('Success!', response),
  //       error => this.errorMsg = error.statusText
  //     )
  // }


  private _url: string ="assets/data/courseInfo.json";
  
  constructor(private http: HttpClient) { }
  
  getInfo():Observable<Icourse[]> {
    return this.http.get<Icourse[]>(this._url);

  }

}
