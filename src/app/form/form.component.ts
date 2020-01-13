import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  getInfo() {
    throw new Error("Method not implemented.");
  }

title = 'WebPro';
userModel = new User('John', '',7771234569, 'I have an issue on...');
topicHasError = true;
submitted = false;
errorMsg = '';


constructor(private _enrollmentService: EnrollmentService) {}

// validateTopic(email) {
//   if (email === 'john@gamil.com') {
//     this.topicHasError =false;
//   } else {
//     this.topicHasError = true;
//   }
// }

onSubmit() {
    
   this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }
}
