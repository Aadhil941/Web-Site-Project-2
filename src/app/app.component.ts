import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icourse } from './employee';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title='WebProject';
  imgUrl='../../assets/images/33.png';

  private _url: string ="assets/data/courseInfo.json";
  
  constructor(private http: HttpClient) { }
  
  getInfo():Observable<Icourse[]> {
    return this.http.get<Icourse[]>(this._url);

  }
}
